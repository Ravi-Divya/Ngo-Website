/**
 * Minimal local stand-ins for Vercel's serverless function types.
 * The deployed function is bundled by Vercel's own runtime, so the
 * `@vercel/node` package is not required at build time.
 */

import type { IncomingHttpHeaders } from 'node:http';

export interface VercelRequest {
  method?: string;
  url?: string;
  body?: unknown;
  query?: Record<string, unknown>;
  headers: IncomingHttpHeaders;
  socket?: { remoteAddress?: string };
}

export interface VercelResponse {
  statusCode: number;
  setHeader(name: string, value: string | number | string[]): VercelResponse;
  status(code: number): VercelResponse;
  json(payload: unknown): VercelResponse;
  end(payload?: unknown): void;
}