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

// Prototype-aware property key extractor for Cloudflare V8 host objects
function getAllEnvKeys(obj: any): string[] {
  if (!obj || typeof obj !== 'object') return [];
  const keys = new Set<string>();
  let curr = obj;
  while (curr && curr !== Object.prototype) {
    try {
      for (const k of Object.getOwnPropertyNames(curr)) {
        keys.add(k);
      }
    } catch {}
    try {
      curr = Object.getPrototypeOf(curr);
    } catch {
      break;
    }
  }
  return Array.from(keys);
}

// Clean surrounding whitespace and matching enclosing quotation marks (without destroying internal quotes or punctuation)
function cleanSecretString(val: string): string {
  if (typeof val !== 'string') return '';
  let str = val.trim();
  if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
    str = str.slice(1, -1).trim();
  }
  return str;
}

// Robust async secret/env extractor supporting direct env, prototype getters, SecretsStoreSecret (.get()), cloudflare:workers, case variations, aliases, and nodejs_compat process.env
async function resolveSecretValue(val: any): Promise<string | null> {
  if (val === undefined || val === null) return null;
  if (typeof val === 'string') {
    const cleaned = cleanSecretString(val);
    return cleaned.length > 0 ? cleaned : null;
  }
  if (typeof val === 'number' || typeof val === 'boolean') {
    return String(val).trim();
  }
  // Cloudflare Secrets Store or binding with .get(): Promise<string>
  if (typeof val === 'object' && typeof val.get === 'function') {
    try {
      const res = await val.get();
      if (typeof res === 'string' || typeof res === 'number') {
        const cleaned = cleanSecretString(String(res));
        return cleaned.length > 0 ? cleaned : null;
      }
    } catch (err) {
      console.warn('Error reading secret via .get():', err);
    }
  }
  // Callable function: () => string | Promise<string>
  if (typeof val === 'function') {
    try {
      const res = await val();
      if (typeof res === 'string' || typeof res === 'number') {
        const cleaned = cleanSecretString(String(res));
        return cleaned.length > 0 ? cleaned : null;
      }
    } catch {}
  }
  // Object with value property
  if (typeof val === 'object' && typeof val.value !== 'undefined') {
    const cleaned = cleanSecretString(String(val.value));
    return cleaned.length > 0 ? cleaned : null;
  }
  return null;
}

// Compare passwords timing-safely across exact, trimmed, and enclosing-unquoted representations
function checkPasswordMatch(input: string, expected: string): boolean {
  if (typeof input !== 'string' || typeof expected !== 'string') return false;
  if (!input || !expected) return false;

  // 1. Direct exact match
  if (safeTimingCompare(input, expected)) return true;

  // 2. Trimmed comparison (removes any accidental trailing newlines, carriage returns, or spaces)
  const inTrim = input.trim();
  const expTrim = expected.trim();
  if (safeTimingCompare(inTrim, expTrim)) return true;

  // 3. Enclosing quotes stripped (e.g. "password" vs password from dashboard secrets or shell wrappers)
  const inClean = cleanSecretString(input);
  const expClean = cleanSecretString(expected);
  if (safeTimingCompare(inClean, expClean)) return true;
  if (safeTimingCompare(inTrim, expClean)) return true;
  if (safeTimingCompare(inClean, expTrim)) return true;
  if (safeTimingCompare(input, expClean)) return true;
  if (safeTimingCompare(inClean, expected)) return true;

  return false;
}

async function getEnvSecret(env: any, primaryKey: string, aliases: string[] = []): Promise<string | null> {
  const allKeys = [primaryKey, ...aliases];

  // 1. Check direct properties and Reflect.get on passed env binding
  if (env && typeof env === 'object') {
    for (const key of allKeys) {
      try {
        if (key in env || env[key] !== undefined) {
          const res = await resolveSecretValue(env[key]);
          if (res) return res;
        }
      } catch {}
      try {
        const val = Reflect.get(env, key);
        if (val !== undefined && val !== null) {
          const res = await resolveSecretValue(val);
          if (res) return res;
        }
      } catch {}
    }

    // Deep prototype inspection for case-insensitive matching
    try {
      const lowerKeySet = new Set(allKeys.map(k => k.toLowerCase()));
      const allEnvKeys = getAllEnvKeys(env);
      for (const k of allEnvKeys) {
        if (lowerKeySet.has(k.toLowerCase())) {
          try {
            const rawVal = env[k] !== undefined ? env[k] : Reflect.get(env, k);
            const res = await resolveSecretValue(rawVal);
            if (res) return res;
          } catch {}
        }
      }
    } catch {}
  }

  // 2. Check Node.js compatibility process.env (when nodejs_compat is enabled)
  if (typeof process !== 'undefined' && process && process.env) {
    for (const key of allKeys) {
      try {
        if (key in process.env || process.env[key] !== undefined) {
          const res = await resolveSecretValue(process.env[key]);
          if (res) return res;
        }
      } catch {}
      try {
        const val = Reflect.get(process.env, key);
        if (val !== undefined && val !== null) {
          const res = await resolveSecretValue(val);
          if (res) return res;
        }
      } catch {}
    }
    try {
      const lowerKeySet = new Set(allKeys.map(k => k.toLowerCase()));
      for (const [k, v] of Object.entries(process.env)) {
        if (lowerKeySet.has(k.toLowerCase())) {
          const res = await resolveSecretValue(v);
          if (res) return res;
        }
      }
    } catch {}
  }

  // 3. Check cloudflare:workers global env (if available)
  try {
    const cfModule = await import('cloudflare:workers');
    if (cfModule && cfModule.env) {
      for (const key of allKeys) {
        try {
          const rawVal = (cfModule.env as any)[key] !== undefined ? (cfModule.env as any)[key] : Reflect.get(cfModule.env, key);
          const res = await resolveSecretValue(rawVal);
          if (res) return res;
        } catch {}
      }
      try {
        const lowerKeySet = new Set(allKeys.map(k => k.toLowerCase()));
        const allCfKeys = getAllEnvKeys(cfModule.env);
        for (const k of allCfKeys) {
          if (lowerKeySet.has(k.toLowerCase())) {
            const rawVal = (cfModule.env as any)[k] !== undefined ? (cfModule.env as any)[k] : Reflect.get(cfModule.env, k);
            const res = await resolveSecretValue(rawVal);
            if (res) return res;
          }
        }
      } catch {}
    }
  } catch {}

  // 4. globalThis fallback
  if (typeof globalThis !== 'undefined' && globalThis) {
    for (const key of allKeys) {
      try {
        const rawVal = (globalThis as any)[key] !== undefined ? (globalThis as any)[key] : Reflect.get(globalThis, key);
        const res = await resolveSecretValue(rawVal);
        if (res) return res;
      } catch {}
    }
  }

  return null;
}

async function getSecretKey(env: Env): Promise<string> {
  const sessionSecret = await getEnvSecret(env, 'ADMIN_SESSION_SECRET', ['admin_session_secret', 'SESSION_SECRET']);
  if (sessionSecret) return sessionSecret;
  const adminPass = await getEnvSecret(env, 'ADMIN_PASSWORD', ['admin_password', 'ADMIN_PASS', 'ADMINPASSWORD', 'ADMIN_SECRET']);
  if (adminPass) return adminPass;
  return 'target-coaching-cloudflare-salt-secret-key-2026';
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

  const secretKey = await getSecretKey(env);
  const result = await verifySessionToken(token, secretKey);
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

      let body: any = {};
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: 'Invalid JSON request payload' }, 400);
      }

      const rawUser = body.username ?? body.user ?? body.email ?? body.adminUser ?? body.login;
      const rawPass = body.password ?? body.pass ?? body.adminPassword;
      if (!rawUser || !rawPass) {
        return jsonResponse({ error: 'Username and password are required' }, 400);
      }

      const inputUser = cleanSecretString(String(rawUser)).toLowerCase();
      const inputPass = String(rawPass);

      // Build set of permitted usernames
      const validUsers = new Set<string>();

      // Standard administrative aliases
      validUsers.add('targetadmin');
      validUsers.add('admin');
      validUsers.add('ashvani');
      validUsers.add('ashvanisir');

      // Environment variable configured username
      const configuredEnvUser = await getEnvSecret(env, 'ADMIN_USERNAME', [
        'admin_username',
        'ADMIN_USER',
        'ADMINUSERNAME'
      ]);
      if (configuredEnvUser) {
        const cleanEnvUser = cleanSecretString(configuredEnvUser).toLowerCase();
        validUsers.add(cleanEnvUser);
        if (cleanEnvUser.includes('@')) {
          validUsers.add(cleanEnvUser.split('@')[0]);
        }
      }

      // Check D1 database for any registered administrator usernames
      if (env.DB) {
        try {
          const d1Admins = await env.DB.prepare('SELECT username FROM admin').all<{ username: string }>();
          if (d1Admins && d1Admins.results) {
            for (const row of d1Admins.results) {
              if (row.username) {
                const u = cleanSecretString(row.username).toLowerCase();
                validUsers.add(u);
                if (u.includes('@')) {
                  validUsers.add(u.split('@')[0]);
                }
              }
            }
          }
        } catch (dbErr) {
          console.warn('D1 admin list lookup error:', dbErr);
        }
      }

      const userMatches = validUsers.has(inputUser) || (configuredEnvUser ? inputUser === cleanSecretString(configuredEnvUser).toLowerCase() : false);

      // Validate password
      let passwordMatches = false;
      const configuredEnvPass = await getEnvSecret(env, 'ADMIN_PASSWORD', [
        'admin_password',
        'ADMIN_PASS',
        'ADMINPASSWORD',
        'ADMIN_SECRET'
      ]);

      // 1. Check against D1 admin table if configured
      if (env.DB) {
        try {
          const row = await env.DB.prepare(
            'SELECT password_hash, salt FROM admin WHERE LOWER(username) = LOWER(?) OR username = ?'
          ).bind(inputUser, inputUser).first<{ password_hash: string; salt: string }>();

          if (row && row.password_hash && row.salt) {
            for (const candidate of [inputPass, inputPass.trim(), cleanSecretString(inputPass)]) {
              const computedHash = await hashPassword(candidate, row.salt);
              if (safeTimingCompare(computedHash, row.password_hash)) {
                passwordMatches = true;
                break;
              }
            }
          }
        } catch (dbErr) {
          console.warn('D1 admin lookup error:', dbErr);
        }
      }

      // 2. Check against environment secret
      if (!passwordMatches && configuredEnvPass) {
        if (checkPasswordMatch(inputPass, configuredEnvPass)) {
          passwordMatches = true;

          // Sync verified credentials to D1 so subsequent logins can also use D1
          if (env.DB) {
            try {
              const salt = generateSalt();
              const newHash = await hashPassword(cleanSecretString(inputPass), salt);
              await env.DB.prepare(
                'INSERT OR REPLACE INTO admin (id, username, password_hash, salt, updated_at) VALUES (?, ?, ?, ?, datetime("now"))'
              ).bind('primary_admin', inputUser, newHash, salt).run();
            } catch (syncErr) {
              console.warn('D1 admin credentials sync error:', syncErr);
            }
          }
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
      const sessionKey = await getSecretKey(env);
      const token = await createSessionToken(inputUser, sessionKey);
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
        storageBackend: env.PHOTOS_BUCKET ? 'cloudflare-r2' : 'static-asset',
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
            error: 'Free-Tier Mode: Dynamic edge photo storage via Cloudflare R2 is not active.',
            message: "Ashvani Sir's official photograph is served as a high-speed static asset (/ashvani-sir.png) at zero cost without requiring a credit card or payment method on Cloudflare.",
            resolution: 'To change the photo on the free tier, commit your updated image to "public/ashvani-sir.png" in your repository. To enable live web uploads, configure an R2 bucket in Cloudflare.'
          },
          400
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
      const hasAdminPass = !!(await getEnvSecret(env, 'ADMIN_PASSWORD', ['admin_password', 'ADMIN_PASS', 'ADMINPASSWORD', 'ADMIN_SECRET']));
      const hasAdminUser = !!(await getEnvSecret(env, 'ADMIN_USERNAME', ['admin_username', 'ADMIN_USER', 'ADMINUSERNAME']));
      const hasSessionSecret = !!(await getEnvSecret(env, 'ADMIN_SESSION_SECRET', ['admin_session_secret', 'SESSION_SECRET']));
      
      // Get sanitized list of keys present on env (names only, values never exposed)
      const detectedEnvKeys = env && typeof env === 'object' ? Object.keys(env) : [];

      return jsonResponse({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        runtime: 'Cloudflare Workers (V8 Isolates)',
        bindings: {
          r2StorageConfigured: !!env.PHOTOS_BUCKET,
          d1DatabaseConfigured: !!env.DB,
          adminSecretConfigured: hasAdminPass || hasSessionSecret
        },
        diagnostics: {
          hasAdminPassword: hasAdminPass,
          hasAdminUsername: hasAdminUser,
          hasSessionSecret: hasSessionSecret,
          boundKeys: detectedEnvKeys
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
