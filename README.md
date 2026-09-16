<div align="center">
<img width="120" alt="CARD Logo" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
<h1>CARD — Community Alternative Research and Development</h1>
<p>A professional NGO website for a grassroots organization working among marginalized communities in Andhra Pradesh, India.</p>
</div>

---

## About

CARD (Community Alternative Research and Development) is a grassroots service organization founded in **1995** by **S. Ravi** in Chittoor, Andhra Pradesh. This repository contains the organization's public website — a React single-page application with program pages, impact stories, photo gallery, donation and contact sections.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** build tooling
- **Tailwind CSS v4**
- **Motion** (animations) + **Lenis** (smooth scrolling)
- **React Router v7**
- **Vercel Serverless Functions** for the API

## Features

- Crossorg.in-style professional layout: Home, About, Our Work, Programs, Impact, Gallery, Case Study, Donate, Contact
- Responsive design with smooth scroll animations
- Contact, volunteer, donation, and newsletter forms (validated on both client and server)
- Photo gallery with lightbox and keyboard navigation
- Downloadable transparency documents (12AB, 80G, FCRA, Annual Report, Profile)
- Cookie-consent banner
- Hardened security: strict CSP, security headers, rate-limited & validated API, no secrets in client code

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Run the development server (http://localhost:3000)
npm run dev
```

The `/api/*` endpoints are served locally by a Vite dev middleware, so forms work out of the box during development.

## Docker

A multi-stage `Dockerfile` produces a production image that serves the built site **and** the `/api/*` endpoints via a small Node server (`server.ts`).

**Prerequisites:** [Docker Desktop](https://www.docker.com/products/docker-desktop/)

```bash
# 1. Create the environment file (SMTP credentials for contact/forms)
cp .env.example .env

# 2. Build and run on http://localhost:3000
docker compose up --build
```

Or build/run directly:

```bash
docker build -t card-ngo-website .
docker run --env-file .env -p 3000:3000 card-ngo-website
```

Notes:

- Port is exposed on `3000` (matches `npm run dev`).
- Set `PORT` if you want a different container port.
- The image only ships production dependencies; secrets from `.env` are injected at runtime, never baked into the image.

## Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm run dev`    | Start the Vite dev server      |
| `npm run build`  | Build the production bundle    |
| `npm run preview`| Preview the production build   |
| `npm run lint`   | Run TypeScript type-checking   |

## Deployment

Deployed to **Vercel** (`vercel.json`). The `api/[...path].ts` file powers the serverless API endpoints and the SPA rewrite serves `index.html` for all non-API routes.

## Security

- Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy headers configured in `vercel.json`.
- API endpoints validate inputs, enforce email/phone formats, apply per-IP rate limiting, and generate cryptographically secure transaction references.
- No API keys or secrets are committed to the repository (see `.env.example` for required environment variables).

## License

Apache-2.0