import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { Plugin } from 'vite';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { defineConfig, loadEnv } from 'vite';
import apiHandler from './api/[...path]';
import type { VercelResponse } from './api/vercel-types';

function readBody(req: IncomingMessage): Promise<string | undefined> {
  return new Promise((resolve) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => chunks.push(chunk));
    req.on('end', () => resolve(chunks.length ? Buffer.concat(chunks).toString('utf8') : undefined));
    req.on('error', () => resolve(undefined));
  });
}

function apiDevMiddleware(): Plugin {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url || '').split('?')[0];
        if (!url.startsWith('/api/')) return next();

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

        await apiHandler(
          { ...(req as any), body, query: {}, headers: req.headers },
          vercelRes,
        );
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Assign loaded env variables to process.env so Node.js API handlers can use them
  Object.assign(process.env, env);

  return {
    plugins: [react(), tailwindcss(), apiDevMiddleware()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000,
      host: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            motion: ['motion'],
            ui: ['lucide-react', 'clsx', 'tailwind-merge'],
          },
        },
      },
    },
  };
});