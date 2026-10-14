/// <reference types="@cloudflare/workers-types" />

export interface Env {
  // Cloudflare R2 Bucket for persistent photo storage
  PHOTOS_BUCKET?: R2Bucket;

  // Cloudflare D1 Relational Database for persistent settings and content
  DB?: D1Database;

  // Static Assets fetcher when deployed with Cloudflare Workers Assets
  ASSETS?: Fetcher;

  // Authentication secrets configured via `wrangler secret put` or Cloudflare Dashboard
  ADMIN_USERNAME?: string;
  ADMIN_PASSWORD?: string;
  ADMIN_SESSION_SECRET?: string;
}

export interface AdminSession {
  username: string;
  exp: number;
  iat: number;
}
