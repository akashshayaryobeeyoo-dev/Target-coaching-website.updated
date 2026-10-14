/// <reference types="@cloudflare/workers-types" />

export interface Env {
  // Cloudflare R2 Bucket for persistent photo storage
  PHOTOS_BUCKET?: R2Bucket;

  // Cloudflare D1 Relational Database for persistent settings and content
  DB?: D1Database;

  // Static Assets fetcher when deployed with Cloudflare Workers Assets
  ASSETS?: Fetcher;

  // Authentication secrets configured via `wrangler secret put`, Cloudflare Dashboard, or Secrets Store
  ADMIN_USERNAME?: string | SecretsStoreSecret | any;
  ADMIN_PASSWORD?: string | SecretsStoreSecret | any;
  ADMIN_SESSION_SECRET?: string | SecretsStoreSecret | any;
}

export interface AdminSession {
  username: string;
  exp: number;
  iat: number;
}
