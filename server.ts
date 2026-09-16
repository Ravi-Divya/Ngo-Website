import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import apiHandler from './api/[...path].ts';
import type { VercelResponse } from './api/vercel-types';

const DIST_DIR = fileURLToPath(new URL('dist/', import.meta.url));
const INDEX_HTML = path.join(DIST_DIR, 'index.html');

const PORT = Number(process.env.PORT) || 3000;

const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'X-Permitted-Cross-Domain-Policies': 'none',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com; frame-src https://maps.google.com https://www.google.com; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests",
};

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.map': 'application/json',
};

function readBody(req: IncomingMessage): Promise<string | undefined> {
  return new Promise((resolve) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => resolve(chunks.length ? Buffer.concat(chunks).toString('utf8') : undefined));
    req.on('error', () => resolve(undefined));
  });
}

function applySecurityHeaders(res: ServerResponse) {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    res.setHeader(key, value);
  }
}

function cachePolicy(urlPath: string): string {
  if (urlPath.startsWith('/assets/')) {
    return 'public, max-age=31536000, immutable';
  }
  if (urlPath.startsWith('/images/') || urlPath.startsWith('/reports/')) {
    return 'public, max-age=86400, stale-while-revalidate=604800';
  }
  return 'no-cache, no-store, must-revalidate';
}

function asVercelResponse(res: ServerResponse): VercelResponse {
  const vercelRes = res as unknown as VercelResponse;
  (vercelRes as any).json = (payload: unknown) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(payload));
    return res;
  };
  (vercelRes as any).status = (code: number) => {
    res.statusCode = code;
    return vercelRes;
  };
  return vercelRes;
}

async function resolveStaticFile(urlPath: string): Promise<string | null> {
  const clean = decodeURIComponent(urlPath).replace(/^\/+/, '');
  const filePath = path.resolve(DIST_DIR, clean);
  if (filePath !== DIST_DIR && !filePath.startsWith(DIST_DIR + path.sep)) return null;
  try {
    const info = await stat(filePath);
    return info.isFile() ? filePath : null;
  } catch {
    return null;
  }
}

function serveStatic(res: ServerResponse, filePath: string, urlPath: string) {
  const ext = path.extname(filePath).toLowerCase();
  applySecurityHeaders(res);
  res.setHeader('Cache-Control', cachePolicy(urlPath));
  readFile(filePath)
    .then((data) => {
      res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
      res.statusCode = 200;
      res.end(data);
    })
    .catch(() => {
      res.statusCode = 404;
      res.end('Not Found');
    });
}

async function serveIndex(res: ServerResponse) {
  applySecurityHeaders(res);
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const data = await readFile(INDEX_HTML);
  res.statusCode = 200;
  res.end(data);
}

async function handleApi(req: IncomingMessage, res: ServerResponse) {
  let body: unknown = undefined;
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
    const raw = await readBody(req);
    if (raw) {
      try {
        body = JSON.parse(raw);
      } catch {
        body = undefined;
      }
    }
  }

  await apiHandler(
    { ...(req as any), body, query: {}, headers: req.headers },
    asVercelResponse(res),
  );
}

const server = createServer(async (req, res) => {
  const urlPath = (req.url || '/').split('?')[0];

  if (urlPath.startsWith('/api')) {
    try {
      await handleApi(req, res);
    } catch (err) {
      console.error('API Error:', err instanceof Error ? err.message : err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
    return;
  }

  const filePath = await resolveStaticFile(urlPath);

  if (filePath) {
    serveStatic(res, filePath, urlPath);
    return;
  }

  if (urlPath.startsWith('/assets/')) {
    res.statusCode = 404;
    res.end('Not Found');
    return;
  }

  try {
    await serveIndex(res);
  } catch {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[server] CARD website running at http://localhost:${PORT}`);
});