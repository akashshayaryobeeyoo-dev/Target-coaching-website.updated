import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

// Security Headers Middleware
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Increase body parser limits for base64 photo uploads
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Paths
const DATA_DIR = path.resolve(process.cwd(), 'data');
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const UPLOADS_DIR = path.resolve(PUBLIC_DIR, 'uploads');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Serve uploaded files statically
app.use('/uploads', express.static(UPLOADS_DIR));
app.use(express.static(PUBLIC_DIR));

// File-based persistent storage helpers
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const ANNOUNCEMENTS_FILE = path.join(DATA_DIR, 'announcements.json');
const ADMIN_FILE = path.join(DATA_DIR, 'admin.json');

function readJsonFile<T>(filePath: string, defaultValue: T): T {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return defaultValue;
}

function writeJsonFile<T>(filePath: string, data: T): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
}

// Utility: Clean quotes and whitespace from cloud environment variables
function cleanEnvString(val: string | undefined): string | undefined {
  if (!val) return undefined;
  let str = val.trim();
  if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
    str = str.slice(1, -1).trim();
  }
  return str.length > 0 ? str : undefined;
}

// Password hashing helper using Node crypto (PBKDF2 SHA-512)
function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

// Timing-safe comparison to prevent timing attacks
function safeTimingCompare(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const bufA = Buffer.from(a, 'utf-8');
  const bufB = Buffer.from(b, 'utf-8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

// Initialize Admin Credentials
interface AdminConfig {
  username: string;
  salt: string;
  passwordHash: string;
}

function getOrInitAdmin(): AdminConfig {
  const existing = readJsonFile<AdminConfig | null>(ADMIN_FILE, null);
  const envUser = cleanEnvString(process.env.ADMIN_USERNAME);
  const envPass = cleanEnvString(process.env.ADMIN_PASSWORD);

  // If env vars are configured in Google AI Studio, ensure they take precedence and sync to storage
  if (envUser || envPass) {
    const salt = existing?.salt || crypto.randomBytes(16).toString('hex');
    const effectiveUser = envUser || existing?.username || 'Targetadmin';
    let effectiveHash = existing?.passwordHash;
    if (envPass) {
      effectiveHash = hashPassword(envPass, salt);
    } else if (!effectiveHash) {
      // Ephemeral fallback if pass missing
      const ephemeral = crypto.randomBytes(16).toString('hex');
      effectiveHash = hashPassword(ephemeral, salt);
    }

    const syncedConfig: AdminConfig = {
      username: effectiveUser,
      salt,
      passwordHash: effectiveHash
    };
    writeJsonFile(ADMIN_FILE, syncedConfig);
    return syncedConfig;
  }

  if (existing && existing.passwordHash) {
    return existing;
  }

  // Fallback if neither env var nor admin.json exists: generate random strong credentials
  const salt = crypto.randomBytes(16).toString('hex');
  const fallbackPassword = crypto.randomBytes(12).toString('base64url');
  console.warn('[SECURITY] No ADMIN_PASSWORD configured in environment. Initializing secure random admin credentials.');
  const fallbackConfig: AdminConfig = {
    username: 'Targetadmin',
    salt,
    passwordHash: hashPassword(fallbackPassword, salt)
  };
  writeJsonFile(ADMIN_FILE, fallbackConfig);
  return fallbackConfig;
}

// In-memory active session tokens (token -> { username, expiresAt })
const activeSessions = new Map<string, { username: string; expiresAt: number }>();

// Purge expired sessions periodically (every hour)
setInterval(() => {
  const now = Date.now();
  for (const [token, session] of activeSessions.entries()) {
    if (session.expiresAt < now) {
      activeSessions.delete(token);
    }
  }
}, 60 * 60 * 1000);

// In-memory brute force protection / rate limiter for admin login
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const loginRateLimits = new Map<string, RateLimitRecord>();
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes lockout

function checkLoginRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const record = loginRateLimits.get(ip);
  if (!record) return { allowed: true };

  if (now > record.resetAt) {
    loginRateLimits.delete(ip);
    return { allowed: true };
  }

  if (record.count >= MAX_FAILED_ATTEMPTS) {
    const retryAfterSeconds = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  return { allowed: true };
}

function recordLoginFailure(ip: string): void {
  const now = Date.now();
  const record = loginRateLimits.get(ip);
  if (!record || now > record.resetAt) {
    loginRateLimits.set(ip, { count: 1, resetAt: now + LOCKOUT_WINDOW_MS });
  } else {
    record.count += 1;
  }
}

function clearLoginAttempts(ip: string): void {
  loginRateLimits.delete(ip);
}

// Auth Middleware
function requireAdminAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const session = activeSessions.get(token);

  if (!session || session.expiresAt < Date.now()) {
    if (session) activeSessions.delete(token);
    res.status(401).json({ error: 'Session expired or invalid' });
    return;
  }

  // Extend session on activity (7 days from now)
  session.expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  next();
}

// ==================== API ROUTES ====================

// 1. Admin Login
app.post('/api/admin/login', (req: Request, res: Response) => {
  const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

  // Check rate limit for brute-force protection
  const rateLimitStatus = checkLoginRateLimit(clientIp);
  if (!rateLimitStatus.allowed) {
    res.status(429).json({
      error: `Too many failed login attempts. For security, please try again after ${rateLimitStatus.retryAfterSeconds} seconds.`
    });
    return;
  }

  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }

  const admin = getOrInitAdmin();
  const inputUser = String(username).trim().toLowerCase();
  const inputPass = String(password);

  // Build valid usernames list (case-insensitive)
  const validUsernames = new Set<string>();
  if (admin.username) {
    validUsernames.add(admin.username.trim().toLowerCase());
    if (admin.username.includes('@')) {
      validUsernames.add(admin.username.split('@')[0].trim().toLowerCase());
    }
  }
  const cleanEnvUser = cleanEnvString(process.env.ADMIN_USERNAME);
  if (cleanEnvUser) {
    const envUserLower = cleanEnvUser.toLowerCase();
    validUsernames.add(envUserLower);
    if (envUserLower.includes('@')) {
      validUsernames.add(envUserLower.split('@')[0].trim().toLowerCase());
    }
  }
  // Standard owner aliases
  validUsernames.add('admin');
  validUsernames.add('ashvani');
  validUsernames.add('ashvanisir');

  const usernameMatch = validUsernames.has(inputUser);

  // Password validation:
  // 1. Matches hash stored in admin.json (salt + pbkdf2)
  const inputHash = hashPassword(inputPass, admin.salt);
  let passwordMatch = safeTimingCompare(inputHash, admin.passwordHash);

  // 2. Matches configured ADMIN_PASSWORD from process.env (exact or trimmed)
  const cleanEnvPass = cleanEnvString(process.env.ADMIN_PASSWORD);
  if (!passwordMatch && cleanEnvPass) {
    const isDirectMatch = (inputPass === cleanEnvPass) || (inputPass.trim() === cleanEnvPass.trim());
    if (isDirectMatch) {
      passwordMatch = true;
      // Sync admin.json with verified password hash
      admin.passwordHash = hashPassword(inputPass, admin.salt);
      writeJsonFile(ADMIN_FILE, admin);
    }
  }

  if (!usernameMatch || !passwordMatch) {
    recordLoginFailure(clientIp);
    res.status(401).json({ error: 'Invalid username or password' });
    return;
  }

  // Clear failed attempt tracking on successful login
  clearLoginAttempts(clientIp);

  // Create session token with 256 bits of entropy
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
  activeSessions.set(token, { username: admin.username, expiresAt });

  res.json({
    success: true,
    token,
    user: {
      username: admin.username,
      name: 'Ashvani Sir / Administrator',
      role: 'admin'
    }
  });
});

// 2. Admin Verify Token
app.get('/api/admin/verify', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ valid: false });
    return;
  }
  const token = authHeader.split(' ')[1];
  const session = activeSessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    res.status(401).json({ valid: false });
    return;
  }
  res.json({ valid: true, username: session.username });
});

// 3. Admin Logout
app.post('/api/admin/logout', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    activeSessions.delete(token);
  }
  res.json({ success: true, message: 'Logged out successfully' });
});

// 4. Change Password
app.post('/api/admin/change-password', requireAdminAuth, (req: Request, res: Response) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword || newPassword.length < 6) {
    res.status(400).json({ error: 'New password must be at least 6 characters' });
    return;
  }

  const admin = getOrInitAdmin();
  const currentHash = hashPassword(currentPassword, admin.salt);
  let currentMatches = safeTimingCompare(currentHash, admin.passwordHash);

  if (!currentMatches && process.env.ADMIN_PASSWORD) {
    if (currentPassword === process.env.ADMIN_PASSWORD || currentPassword.trim() === process.env.ADMIN_PASSWORD.trim()) {
      currentMatches = true;
    }
  }

  if (!currentMatches) {
    res.status(400).json({ error: 'Current password does not match' });
    return;
  }

  const newSalt = crypto.randomBytes(16).toString('hex');
  const newHash = hashPassword(newPassword, newSalt);

  admin.salt = newSalt;
  admin.passwordHash = newHash;
  writeJsonFile(ADMIN_FILE, admin);

  res.json({ success: true, message: 'Password updated successfully' });
});

// 5. Photo Management
interface SettingsData {
  teacherPhotoUrl: string;
  lastUpdated: string;
}

app.get('/api/admin/photo', (_req: Request, res: Response) => {
  const settings = readJsonFile<SettingsData>(SETTINGS_FILE, {
    teacherPhotoUrl: '/ashvani-sir.png',
    lastUpdated: new Date().toISOString()
  });
  res.json({ photoUrl: settings.teacherPhotoUrl, lastUpdated: settings.lastUpdated });
});

app.post('/api/admin/photo', requireAdminAuth, (req: Request, res: Response) => {
  const { base64Data, mimeType, filename } = req.body;
  if (!base64Data) {
    res.status(400).json({ error: 'No image data provided' });
    return;
  }

  // Validate MIME type
  const allowedMimes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
  const detectedMime = mimeType || (base64Data.startsWith('data:') ? base64Data.split(';')[0].replace('data:', '') : 'image/png');

  if (!allowedMimes.includes(detectedMime.toLowerCase())) {
    res.status(400).json({ error: 'Invalid image format. Supported formats: PNG, JPG, JPEG, WEBP' });
    return;
  }

  // Extract pure base64
  const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  const rawBase64 = matches ? matches[2] : base64Data;
  const buffer = Buffer.from(rawBase64, 'base64');

  // Check file size (max 5MB)
  if (buffer.length > 5 * 1024 * 1024) {
    res.status(400).json({ error: 'File size exceeds maximum 5MB limit' });
    return;
  }

  // Validate actual binary image magic bytes (prevent file spoofing)
  const isPng = buffer.length >= 8 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47;
  const isJpeg = buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  const isWebp = buffer.length >= 12 && buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46 && buffer[8] === 0x57 && buffer[9] === 0x45 && buffer[10] === 0x42 && buffer[11] === 0x50;

  if (!isPng && !isJpeg && !isWebp) {
    res.status(400).json({ error: 'Corrupt or invalid image payload. File content does not match a recognized image format.' });
    return;
  }

  // Determine file extension based on verified format
  let ext = '.png';
  if (isJpeg) ext = '.jpg';
  else if (isWebp) ext = '.webp';

  const savedFileName = `ashvani-sir-updated${ext}`;
  const filePath = path.join(UPLOADS_DIR, savedFileName);
  fs.writeFileSync(filePath, buffer);

  // Also write to public/ashvani-sir.png for universal fallback compatibility
  try {
    fs.writeFileSync(path.join(PUBLIC_DIR, 'ashvani-sir.png'), buffer);
  } catch (e) {
    console.warn('Could not mirror to public/ashvani-sir.png:', e);
  }

  const photoUrl = `/uploads/${savedFileName}?t=${Date.now()}`;
  const settings: SettingsData = {
    teacherPhotoUrl: photoUrl,
    lastUpdated: new Date().toISOString()
  };
  writeJsonFile(SETTINGS_FILE, settings);

  res.json({
    success: true,
    photoUrl,
    message: "Ashvani Sir's photo updated successfully across the entire website."
  });
});

app.delete('/api/admin/photo', requireAdminAuth, (_req: Request, res: Response) => {
  const defaultUrl = '/ashvani-sir.png';
  const settings: SettingsData = {
    teacherPhotoUrl: defaultUrl,
    lastUpdated: new Date().toISOString()
  };
  writeJsonFile(SETTINGS_FILE, settings);
  res.json({ success: true, photoUrl: defaultUrl, message: 'Reset to default official photo.' });
});
// Photos streaming endpoint (parities Cloudflare R2 /api/photos/:key endpoint)
app.get('/api/photos/:key', (req: Request, res: Response) => {
  const key = path.basename(req.params.key);
  const filePath = path.join(UPLOADS_DIR, key);
  if (fs.existsSync(filePath)) {
    let contentType = 'image/png';
    if (key.endsWith('.jpg') || key.endsWith('.jpeg')) contentType = 'image/jpeg';
    if (key.endsWith('.webp')) contentType = 'image/webp';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
    fs.createReadStream(filePath).pipe(res);
    return;
  }
  const publicPath = path.join(PUBLIC_DIR, key);
  if (fs.existsSync(publicPath)) {
    fs.createReadStream(publicPath).pipe(res);
    return;
  }
  res.status(404).send('Photo not found');
});

// Health & Deployment Status Check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    runtime: 'Node.js Express (Local / Container Dev)',
    cloudflareWorkerReady: true,
    schemaFile: 'schema.sql',
    wranglerConfig: 'wrangler.jsonc'
  });
});


app.get('/api/inquiries', requireAdminAuth, (_req: Request, res: Response) => {
  const inquiries = readJsonFile<any[]>(INQUIRIES_FILE, []);
  res.json(inquiries);
});

app.post('/api/inquiries', (req: Request, res: Response) => {
  const data = req.body;
  if (!data.fullName || !data.phone) {
    res.status(400).json({ error: 'Full name and phone number are required' });
    return;
  }

  const inquiries = readJsonFile<any[]>(INQUIRIES_FILE, []);
  const newInquiry = {
    ...data,
    id: `inq-${Date.now()}`,
    createdAt: new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    status: 'New'
  };

  inquiries.unshift(newInquiry);
  writeJsonFile(INQUIRIES_FILE, inquiries);
  res.status(201).json({ success: true, inquiry: newInquiry });
});

app.patch('/api/inquiries/:id', requireAdminAuth, (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;
  const inquiries = readJsonFile<any[]>(INQUIRIES_FILE, []);

  const index = inquiries.findIndex((inq) => inq.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Inquiry not found' });
    return;
  }

  inquiries[index] = { ...inquiries[index], ...updates };
  writeJsonFile(INQUIRIES_FILE, inquiries);
  res.json({ success: true, inquiry: inquiries[index] });
});

app.delete('/api/inquiries/:id', requireAdminAuth, (req: Request, res: Response) => {
  const { id } = req.params;
  const inquiries = readJsonFile<any[]>(INQUIRIES_FILE, []);
  const filtered = inquiries.filter((inq) => inq.id !== id);
  writeJsonFile(INQUIRIES_FILE, filtered);
  res.json({ success: true, message: 'Inquiry deleted' });
});

// 7. Announcements API
app.get('/api/announcements', (_req: Request, res: Response) => {
  const announcements = readJsonFile<any[]>(ANNOUNCEMENTS_FILE, [
    {
      id: 'ann-1',
      title: 'New SSC CGL & UP Police Foundation Batch',
      description: 'Admissions open for Morning (8:20 AM - 12:00 PM) & Afternoon (12:20 PM - 3:00 PM) batches at flat ₹700/mo.',
      date: '14 Oct 2026',
      badge: 'New Batch',
      isActive: true
    },
    {
      id: 'ann-2',
      title: 'Sunday Mock Test & Doubt Resolution',
      description: 'Full-length OMR/CBT simulation mock test for Railway & SSC candidates with Ashvani Sir speed analysis.',
      date: 'Weekly',
      badge: 'Mock Test',
      isActive: true
    }
  ]);
  res.json(announcements);
});

app.post('/api/announcements', requireAdminAuth, (req: Request, res: Response) => {
  const data = req.body;
  const announcements = readJsonFile<any[]>(ANNOUNCEMENTS_FILE, []);
  const newAnn = {
    ...data,
    id: `ann-${Date.now()}`
  };
  announcements.unshift(newAnn);
  writeJsonFile(ANNOUNCEMENTS_FILE, announcements);
  res.status(201).json({ success: true, announcement: newAnn });
});

app.delete('/api/announcements/:id', requireAdminAuth, (req: Request, res: Response) => {
  const { id } = req.params;
  const announcements = readJsonFile<any[]>(ANNOUNCEMENTS_FILE, []);
  const filtered = announcements.filter((a) => a.id !== id);
  writeJsonFile(ANNOUNCEMENTS_FILE, filtered);
  res.json({ success: true, message: 'Announcement deleted' });
});

// 8. Centre Info & Timings API
const CENTER_INFO_FILE = path.join(DATA_DIR, 'center-info.json');

app.get('/api/center-info', (_req: Request, res: Response) => {
  const defaultCenter = {
    centerName: 'Target Coaching Classes',
    headFaculty: 'Ashvani Sir (Founder & Main Faculty)',
    monthlyFee: 700,
    morningBatch: '8:20 AM to 12:00 PM',
    afternoonBatch: '12:20 PM to 3:00 PM',
    phone: '097594 46215',
    whatsapp: '919759446215',
    area: 'Khatri Garhi, Baraut',
    district: 'Baghpat',
    state: 'Uttar Pradesh',
    pincode: '250611',
    address: 'Target Coaching Classes, Khatri Garhi, Baraut, Baghpat, Uttar Pradesh 250611, India.'
  };
  const info = readJsonFile(CENTER_INFO_FILE, defaultCenter);
  res.json(info);
});

app.put('/api/center-info', requireAdminAuth, (req: Request, res: Response) => {
  const updates = req.body;
  const current = readJsonFile(CENTER_INFO_FILE, {});
  const merged = { ...current, ...updates };
  writeJsonFile(CENTER_INFO_FILE, merged);
  res.json({ success: true, centerInfo: merged });
});

// ==================== VITE & STATIC HANDLING ====================

async function start() {
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[TARGET Coaching Centre] Server listening on http://0.0.0.0:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
