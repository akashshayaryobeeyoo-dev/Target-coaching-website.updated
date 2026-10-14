// Web-standard cryptographic helpers for Cloudflare Workers

const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Standard base64url helpers for edge runtimes
export function base64UrlEncode(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function base64UrlDecode(str: string): Uint8Array {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// Convert hex string to Uint8Array
export function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

// Convert Uint8Array to hex string
export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Timing-safe string comparison to prevent timing attacks
export function safeTimingCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

// PBKDF2 Password Hashing using W3C Web Crypto (Cloudflare Workers compatible)
export async function hashPassword(password: string, salt: string): Promise<string> {
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: encoder.encode(salt),
      iterations: 10000,
      hash: 'SHA-512'
    },
    keyMaterial,
    512
  );

  return bytesToHex(new Uint8Array(derivedBits));
}

// Generate random salt for passwords
export function generateSalt(length = 16): string {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
}

// HMAC-SHA256 Session Token Generation (Stateless across global Cloudflare edge nodes)
export async function createSessionToken(username: string, secretKey: string, ttlMs = 86400000 * 7): Promise<string> {
  const hmacKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secretKey),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const now = Date.now();
  const payload = JSON.stringify({
    username,
    exp: now + ttlMs,
    iat: now
  });

  const payloadBytes = encoder.encode(payload);
  const payloadB64 = base64UrlEncode(payloadBytes);

  const signature = await crypto.subtle.sign('HMAC', hmacKey, encoder.encode(payloadB64));
  const sigB64 = base64UrlEncode(new Uint8Array(signature));

  return `${payloadB64}.${sigB64}`;
}

// Verify HMAC-SHA256 Session Token
export async function verifySessionToken(
  token: string,
  secretKey: string
): Promise<{ valid: boolean; username?: string; error?: string }> {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) {
      return { valid: false, error: 'Malformed token format' };
    }

    const [payloadB64, sigB64] = parts;
    const hmacKey = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secretKey),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const sigBytes = base64UrlDecode(sigB64);
    const isValidSignature = await crypto.subtle.verify(
      'HMAC',
      hmacKey,
      sigBytes as unknown as ArrayBuffer,
      encoder.encode(payloadB64)
    );

    if (!isValidSignature) {
      return { valid: false, error: 'Invalid token signature' };
    }

    const payloadRaw = decoder.decode(base64UrlDecode(payloadB64));
    const payload = JSON.parse(payloadRaw);

    if (!payload.exp || Date.now() > payload.exp) {
      return { valid: false, error: 'Session expired' };
    }

    return { valid: true, username: payload.username };
  } catch (err) {
    return { valid: false, error: 'Token verification failed' };
  }
}

// Validate binary image magic bytes (PNG, JPEG, WebP)
export function validateImageMagicBytes(bytes: Uint8Array): { valid: boolean; format?: 'png' | 'jpeg' | 'webp'; mime?: string } {
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  const isPng =
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47;

  if (isPng) {
    return { valid: true, format: 'png', mime: 'image/png' };
  }

  // JPEG: FF D8 FF
  const isJpeg =
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff;

  if (isJpeg) {
    return { valid: true, format: 'jpeg', mime: 'image/jpeg' };
  }

  // WebP: 52 49 46 46 (RIFF) ... 57 45 42 50 (WEBP)
  const isWebp =
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50;

  if (isWebp) {
    return { valid: true, format: 'webp', mime: 'image/webp' };
  }

  return { valid: false };
}
