import type { Env } from './types';
import {
  base64UrlDecode,
  createSessionToken,
  verifySessionToken,
  validateImageMagicBytes,
  hashPassword,
  generateSalt,
  safeTimingCompare
} from './crypto';

// In-memory rate limiting map for edge isolates
const loginAttempts = new Map<string, { count: number; lockedUntil: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const record = loginAttempts.get(ip);
  if (!record) return { allowed: true, retryAfter: 0 };
  if (record.lockedUntil > now) {
    return { allowed: false, retryAfter: Math.ceil((record.lockedUntil - now) / 1000) };
  }
  return { allowed: true, retryAfter: 0 };
}

function recordFailure(ip: string) {
  const now = Date.now();
  const record = loginAttempts.get(ip) || { count: 0, lockedUntil: 0 };
  record.count += 1;
  if (record.count >= 5) {
    record.lockedUntil = now + 15 * 60 * 1000; // 15 min lock
    record.count = 0;
  }
  loginAttempts.set(ip, record);
}

function clearRateLimit(ip: string) {
  loginAttempts.delete(ip);
}

// Security headers added to all Cloudflare Worker responses
function withSecurityHeaders(response: Response, extraHeaders?: Headers): Response {
  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  if (extraHeaders) {
    extraHeaders.forEach((val, key) => {
      headers.set(key, val);
    });
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

function jsonResponse(data: unknown, status = 200, extraHeaders: Record<string, string> = {}): Response {
  const headers = new Headers({
    'Content-Type': 'application/json',
    ...extraHeaders
  });
  return withSecurityHeaders(new Response(JSON.stringify(data), { status, headers }));
}

function getSecretKey(env: Env): string {
  return env.ADMIN_SESSION_SECRET || env.ADMIN_PASSWORD || 'target-coaching-cloudflare-salt-secret-key-2026';
}

// Helper: authenticate bearer token or session cookie
async function authenticateRequest(request: Request, env: Env): Promise<{ authorized: boolean; username?: string }> {
  let token: string | null = null;
  const authHeader = request.headers.get('Authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7).trim();
  } else {
    const cookieHeader = request.headers.get('Cookie');
    if (cookieHeader) {
      const match = cookieHeader.match(/target_admin_session=([^;]+)/);
      if (match) {
        token = decodeURIComponent(match[1]);
      }
    }
  }

  if (!token) {
    return { authorized: false };
  }

  const result = await verifySessionToken(token, getSecretKey(env));
  if (!result.valid || !result.username) {
    return { authorized: false };
  }
  return { authorized: true, username: result.username };
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const clientIp = request.headers.get('cf-connecting-ip') || 'unknown';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      });
    }

    // ==========================================
    // 1. CLOUDFLARE R2 PHOTO STREAMING ENDPOINT
    // ==========================================
    // Public image retrieval directly from Cloudflare R2 bucket binding
    if (request.method === 'GET' && path.startsWith('/api/photos/')) {
      const key = decodeURIComponent(path.replace('/api/photos/', ''));
      if (!env.PHOTOS_BUCKET) {
        return jsonResponse(
          {
            error: 'Cloudflare R2 bucket "PHOTOS_BUCKET" is not bound.',
            resolution: 'Please bind an R2 bucket named PHOTOS_BUCKET in your wrangler.jsonc or Cloudflare Pages dashboard.'
          },
          503
        );
      }

      const object = await env.PHOTOS_BUCKET.get(key);
      if (!object) {
        return withSecurityHeaders(new Response('Photo not found in R2 storage', { status: 404 }));
      }

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('etag', object.httpEtag);
      headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
      return withSecurityHeaders(new Response(object.body, { headers }));
    }

    // ==========================================
    // 2. ADMIN AUTHENTICATION ROUTES
    // ==========================================

    // POST /api/admin/login
    if (request.method === 'POST' && path === '/api/admin/login') {
      const rateLimit = checkRateLimit(clientIp);
      if (!rateLimit.allowed) {
        return jsonResponse(
          { error: `Too many failed login attempts. Please try again in ${rateLimit.retryAfter} seconds.` },
          429
        );
      }

      let body: { username?: string; password?: string } = {};
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: 'Invalid JSON request payload' }, 400);
      }

      const { username, password } = body;
      if (!username || !password) {
        return jsonResponse({ error: 'Username and password are required' }, 400);
      }

      const inputUser = String(username).trim().toLowerCase();
      const inputPass = String(password);

      // Permitted usernames
      const validUsers = new Set<string>();
      validUsers.add('targetadmin');
      validUsers.add('admin');
      validUsers.add('ashvani');
      validUsers.add('ashvanisir');

      const configuredEnvUser = env.ADMIN_USERNAME ? env.ADMIN_USERNAME.replace(/['"]/g, '').trim().toLowerCase() : null;
      if (configuredEnvUser) {
        validUsers.add(configuredEnvUser);
        if (configuredEnvUser.includes('@')) {
          validUsers.add(configuredEnvUser.split('@')[0]);
        }
      }

      const userMatches = validUsers.has(inputUser);

      // Validate password
      let passwordMatches = false;
      const configuredEnvPass = env.ADMIN_PASSWORD ? env.ADMIN_PASSWORD.replace(/['"]/g, '').trim() : null;

      // Check against D1 admin table if configured
      if (env.DB) {
        try {
          const row = await env.DB.prepare(
            'SELECT password_hash, salt FROM admin WHERE username = ?'
          ).bind(inputUser).first<{ password_hash: string; salt: string }>();

          if (row && row.password_hash && row.salt) {
            const computedHash = await hashPassword(inputPass, row.salt);
            if (safeTimingCompare(computedHash, row.password_hash)) {
              passwordMatches = true;
            }
          }
        } catch (dbErr) {
          console.warn('D1 admin lookup error:', dbErr);
        }
      }

      // Check against environment secret
      if (!passwordMatches && configuredEnvPass) {
        if (safeTimingCompare(inputPass, configuredEnvPass)) {
          passwordMatches = true;
        }
      }

      // Fallback only if no environment variable or DB credentials exist at all
      if (!passwordMatches && !configuredEnvPass && !env.DB) {
        return jsonResponse({
          error: 'Admin credentials not configured. Please set ADMIN_PASSWORD in Cloudflare environment secrets.'
        }, 500);
      }

      if (!userMatches || !passwordMatches) {
        recordFailure(clientIp);
        return jsonResponse({ error: 'Invalid username or password' }, 401);
      }

      clearRateLimit(clientIp);

      // Generate stateless HMAC-SHA256 session token
      const token = await createSessionToken(inputUser, getSecretKey(env));
      const cookieHeader = `target_admin_session=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`;

      return jsonResponse(
        {
          success: true,
          token,
          user: {
            username: inputUser,
            name: 'Ashvani Sir / Administrator',
            role: 'admin'
          }
        },
        200,
        { 'Set-Cookie': cookieHeader }
      );
    }

    // GET /api/admin/verify
    if (request.method === 'GET' && path === '/api/admin/verify') {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ valid: false }, 401);
      }
      return jsonResponse({ valid: true, username: auth.username });
    }

    // POST /api/admin/logout
    if (request.method === 'POST' && path === '/api/admin/logout') {
      const clearCookie = `target_admin_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
      return jsonResponse({ success: true, message: 'Logged out successfully' }, 200, { 'Set-Cookie': clearCookie });
    }

    // POST /api/admin/change-password
    if (request.method === 'POST' && path === '/api/admin/change-password') {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
      }

      let body: { currentPassword?: string; newPassword?: string } = {};
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: 'Invalid JSON request payload' }, 400);
      }

      const { currentPassword, newPassword } = body;
      if (!currentPassword || !newPassword || newPassword.length < 6) {
        return jsonResponse({ error: 'New password must be at least 6 characters' }, 400);
      }

      if (!env.DB) {
        return jsonResponse({
          error: 'Cloudflare D1 Database binding "DB" is required to persist changed passwords.',
          resolution: 'Please bind your D1 database in wrangler.jsonc or run `wrangler secret put ADMIN_PASSWORD`.'
        }, 503);
      }

      const salt = generateSalt();
      const passwordHash = await hashPassword(newPassword, salt);
      await env.DB.prepare(
        'INSERT OR REPLACE INTO admin (id, username, password_hash, salt, updated_at) VALUES (?, ?, ?, ?, datetime("now"))'
      ).bind('primary_admin', auth.username || 'targetadmin', passwordHash, salt).run();

      return jsonResponse({ success: true, message: 'Password updated and saved to Cloudflare D1.' });
    }

    // ==========================================
    // 3. PHOTO MANAGEMENT (R2 & D1)
    // ==========================================

    // GET /api/admin/photo (Publicly accessible to display current photo URL)
    if (request.method === 'GET' && path === '/api/admin/photo') {
      let photoUrl = '/ashvani-sir.png';
      let lastUpdated = new Date().toISOString();

      if (env.DB) {
        try {
          const row = await env.DB.prepare(
            'SELECT value, updated_at FROM settings WHERE key = ?'
          ).bind('teacherPhotoUrl').first<{ value: string; updated_at: string }>();

          if (row && row.value) {
            photoUrl = row.value;
            lastUpdated = row.updated_at;
          }
        } catch (dbErr) {
          console.warn('Could not query D1 for teacherPhotoUrl:', dbErr);
        }
      }

      return jsonResponse({
        photoUrl,
        lastUpdated,
        storageBackend: env.PHOTOS_BUCKET ? 'cloudflare-r2' : 'default-static',
        databaseBackend: env.DB ? 'cloudflare-d1' : 'default-memory'
      });
    }

    // POST /api/admin/photo (Protected: Admin authentication + R2 persistent storage)
    if (request.method === 'POST' && path === '/api/admin/photo') {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required to upload photos' }, 401);
      }

      // Check R2 binding
      if (!env.PHOTOS_BUCKET) {
        return jsonResponse(
          {
            error: 'Cloudflare R2 persistent storage is not configured.',
            resolution: 'Create an R2 bucket and add "binding = PHOTOS_BUCKET" to your wrangler.jsonc configuration.'
          },
          503
        );
      }

      let body: { base64Data?: string; mimeType?: string } = {};
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: 'Invalid JSON request payload' }, 400);
      }

      const { base64Data, mimeType } = body;
      if (!base64Data) {
        return jsonResponse({ error: 'No image data provided' }, 400);
      }

      // Extract raw base64
      const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      const rawBase64 = matches ? matches[2] : base64Data;
      const declaredMime = matches ? matches[1] : (mimeType || 'image/png');

      // Decode base64 to binary Uint8Array
      let bytes: Uint8Array;
      try {
        bytes = base64UrlDecode(rawBase64);
      } catch {
        return jsonResponse({ error: 'Failed to decode base64 image data' }, 400);
      }

      // 5MB file size limit
      if (bytes.length > 5 * 1024 * 1024) {
        return jsonResponse({ error: 'File size exceeds maximum 5MB limit' }, 400);
      }

      // Binary magic bytes validation
      const validation = validateImageMagicBytes(bytes);
      if (!validation.valid || !validation.format) {
        return jsonResponse({
          error: 'Corrupt or invalid image file. Binary signature does not match PNG, JPEG, or WebP.'
        }, 400);
      }

      const ext = validation.format === 'jpeg' ? 'jpg' : validation.format;
      const objectKey = `ashvani-sir-updated.${ext}`;

      // Upload to Cloudflare R2
      await env.PHOTOS_BUCKET.put(objectKey, bytes, {
        httpMetadata: {
          contentType: validation.mime || declaredMime || 'image/png',
          cacheControl: 'public, max-age=86400, stale-while-revalidate=604800'
        }
      });

      const photoUrl = `/api/photos/${objectKey}?v=${Date.now()}`;

      // Persist photo URL in Cloudflare D1
      if (env.DB) {
        try {
          await env.DB.prepare(
            'INSERT OR REPLACE INTO settings (key, value, updated_at) VALUES (?, ?, datetime("now"))'
          ).bind('teacherPhotoUrl', photoUrl).run();
        } catch (dbErr) {
          console.warn('Could not save photoUrl to D1 settings:', dbErr);
        }
      }

      return jsonResponse({
        success: true,
        photoUrl,
        storage: 'cloudflare-r2',
        message: "Ashvani Sir's photo updated and permanently stored in Cloudflare R2."
      });
    }

    // DELETE /api/admin/photo (Reset to official default photo)
    if (request.method === 'DELETE' && path === '/api/admin/photo') {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
      }

      const defaultUrl = '/ashvani-sir.png';
      if (env.DB) {
        try {
          await env.DB.prepare(
            'INSERT OR REPLACE INTO settings (key, value, updated_at) VALUES (?, ?, datetime("now"))'
          ).bind('teacherPhotoUrl', defaultUrl).run();
        } catch (dbErr) {
          console.warn('Could not reset photoUrl in D1:', dbErr);
        }
      }

      return jsonResponse({
        success: true,
        photoUrl: defaultUrl,
        message: 'Reset to default official photo.'
      });
    }

    // ==========================================
    // 4. INSTITUTE INFO & ANNOUNCEMENTS (D1)
    // ==========================================

    // GET /api/center-info
    if (request.method === 'GET' && path === '/api/center-info') {
      const defaultInfo = {
        centerName: 'Target Coaching Classes',
        headFaculty: 'Ashvani Sir (Founder & Main Faculty)',
        monthlyFee: 700,
        phone1: '097594 46215',
        phone2: '097594 46215',
        phoneRaw: '09759446215',
        whatsapp: '919759446215',
        email: 'targetcoaching.ashvanisir@gmail.com',
        area: 'Khatri Garhi, Baraut',
        district: 'Baghpat',
        state: 'Uttar Pradesh',
        pincode: '250611',
        addressLine1: 'Target Coaching Classes, Khatri Garhi',
        addressLine2: 'Baraut, Baghpat',
        landmark: 'Uttar Pradesh 250611, India',
        fullAddress: 'Target Coaching Classes, Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611, India.',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Target%20Coaching%20Classes%2C%20Khatri%20Garhi%2C%20Baraut%2C%20Baghpat%2C%20Uttar%20Pradesh%20250611',
        whatsappUrl: 'https://wa.me/919759446215',
        timings: 'Morning Batch: 8:20 AM – 12:00 PM | Afternoon Batch: 12:20 PM – 3:00 PM',
        morningBatch: '8:20 AM to 12:00 PM',
        afternoonBatch: '12:20 PM to 3:00 PM',
        upiId: 'targetashvani@upi',
        bankAccount: 'TARGET COACHING CLASSES',
        ifscCode: 'BARB0BARAUT'
      };

      if (env.DB) {
        try {
          const row = await env.DB.prepare(
            'SELECT value FROM settings WHERE key = ?'
          ).bind('centerInfo').first<{ value: string }>();

          if (row && row.value) {
            return jsonResponse(JSON.parse(row.value));
          }
        } catch (dbErr) {
          console.warn('D1 centerInfo query error:', dbErr);
        }
      }

      return jsonResponse(defaultInfo);
    }

    // PUT /api/center-info (Protected)
    if (request.method === 'PUT' && path === '/api/center-info') {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
      }

      const body = await request.json();
      if (env.DB) {
        await env.DB.prepare(
          'INSERT OR REPLACE INTO settings (key, value, updated_at) VALUES (?, ?, datetime("now"))'
        ).bind('centerInfo', JSON.stringify(body)).run();
      }

      return jsonResponse({ success: true, centerInfo: body });
    }

    // GET /api/announcements (Public)
    if (request.method === 'GET' && path === '/api/announcements') {
      if (env.DB) {
        try {
          const result = await env.DB.prepare(
            'SELECT * FROM announcements ORDER BY date DESC'
          ).all();
          return jsonResponse(result.results || []);
        } catch (dbErr) {
          console.warn('D1 announcements query error:', dbErr);
        }
      }
      return jsonResponse([]);
    }

    // POST /api/announcements (Protected)
    if (request.method === 'POST' && path === '/api/announcements') {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
      }

      const body = (await request.json()) as { title?: string; content?: string; date?: string; isImportant?: boolean; badge?: string };
      const id = 'ann-' + Date.now();
      const date = body.date || new Date().toISOString();

      if (env.DB) {
        await env.DB.prepare(
          'INSERT INTO announcements (id, title, content, date, badge, isImportant, active) VALUES (?, ?, ?, ?, ?, ?, 1)'
        ).bind(id, body.title || 'Notice', body.content || '', date, body.badge || 'New Batch', body.isImportant ? 1 : 0).run();
      }

      return jsonResponse({ success: true, announcement: { id, ...body, date } });
    }

    // DELETE /api/announcements/:id (Protected)
    if (request.method === 'DELETE' && path.startsWith('/api/announcements/')) {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
      }

      const id = path.replace('/api/announcements/', '');
      if (env.DB) {
        await env.DB.prepare('DELETE FROM announcements WHERE id = ?').bind(id).run();
      }

      return jsonResponse({ success: true, message: 'Announcement deleted' });
    }

    // ==========================================
    // 5. STUDENT INQUIRIES
    // ==========================================

    // POST /api/inquiries (Public contact form)
    if (request.method === 'POST' && path === '/api/inquiries') {
      const body = (await request.json()) as {
        fullName?: string;
        phone?: string;
        whatsapp?: string;
        email?: string;
        targetExam?: string;
        qualification?: string;
        batchPreference?: string;
        addressOrCity?: string;
        message?: string;
        status?: string;
      };

      if (!body.fullName || !body.phone) {
        return jsonResponse({ error: 'Full name and phone number are required' }, 400);
      }

      const id = 'inq-' + Date.now();
      const createdAt = new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      if (env.DB) {
        await env.DB.prepare(
          'INSERT INTO inquiries (id, fullName, phone, whatsapp, email, targetExam, qualification, batchPreference, addressOrCity, message, status, notes, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(
          id,
          body.fullName,
          body.phone,
          body.whatsapp || body.phone,
          body.email || '',
          body.targetExam || 'General Inquiry',
          body.qualification || '',
          body.batchPreference || 'Morning Batch',
          body.addressOrCity || '',
          body.message || '',
          body.status || 'New',
          '',
          createdAt
        ).run();
      }

      return jsonResponse({
        success: true,
        id,
        inquiry: { id, ...body, createdAt, status: 'New' },
        message: 'Inquiry submitted successfully. Ashvani Sir will contact you shortly.'
      });
    }

    // GET /api/inquiries (Protected: Admin only)
    if (request.method === 'GET' && path === '/api/inquiries') {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
      }

      if (env.DB) {
        try {
          const result = await env.DB.prepare(
            'SELECT * FROM inquiries ORDER BY createdAt DESC'
          ).all();
          return jsonResponse(result.results || []);
        } catch (dbErr) {
          console.warn('D1 inquiries query error:', dbErr);
        }
      }

      return jsonResponse([]);
    }

    // PATCH /api/inquiries/:id (Protected: Admin only)
    if (request.method === 'PATCH' && path.startsWith('/api/inquiries/')) {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
      }

      const id = path.replace('/api/inquiries/', '');
      const body = (await request.json()) as { status?: string; notes?: string };

      if (env.DB) {
        if (body.status !== undefined && body.notes !== undefined) {
          await env.DB.prepare('UPDATE inquiries SET status = ?, notes = ? WHERE id = ?').bind(body.status, body.notes, id).run();
        } else if (body.status !== undefined) {
          await env.DB.prepare('UPDATE inquiries SET status = ? WHERE id = ?').bind(body.status, id).run();
        } else if (body.notes !== undefined) {
          await env.DB.prepare('UPDATE inquiries SET notes = ? WHERE id = ?').bind(body.notes, id).run();
        }
      }

      return jsonResponse({ success: true, message: 'Inquiry updated' });
    }

    // DELETE /api/inquiries/:id (Protected: Admin only)
    if (request.method === 'DELETE' && path.startsWith('/api/inquiries/')) {
      const auth = await authenticateRequest(request, env);
      if (!auth.authorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
      }

      const id = path.replace('/api/inquiries/', '');
      if (env.DB) {
        await env.DB.prepare('DELETE FROM inquiries WHERE id = ?').bind(id).run();
      }

      return jsonResponse({ success: true, message: 'Inquiry removed' });
    }

    // ==========================================
    // 6. HEALTH & CLOUDFLARE STATUS CHECK
    // ==========================================
    if (request.method === 'GET' && path === '/api/health') {
      return jsonResponse({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        runtime: 'Cloudflare Workers (V8 Isolates)',
        bindings: {
          r2StorageConfigured: !!env.PHOTOS_BUCKET,
          d1DatabaseConfigured: !!env.DB,
          adminSecretConfigured: !!(env.ADMIN_PASSWORD || env.ADMIN_SESSION_SECRET)
        }
      });
    }

    // ==========================================
    // 7. STATIC ASSET SERVING & SPA FALLBACK
    // ==========================================
    // Handled by Cloudflare Workers Assets or Pages
    if (env.ASSETS) {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return withSecurityHeaders(assetResponse);
      }
      // For Single Page App (client routing like /admin, /about, /syllabus)
      const indexRequest = new Request(new URL('/', request.url), request);
      return withSecurityHeaders(await env.ASSETS.fetch(indexRequest));
    }

    return withSecurityHeaders(new Response('TARGET Coaching Centre Worker Active', { status: 200 }));
  }
};
