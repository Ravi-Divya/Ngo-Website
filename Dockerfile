# ── Stage 1: install dependencies and build the site ──
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

# ── Stage 2: runtime with dependencies + built output, served by tsx ──
FROM node:20-alpine AS runtime

ENV NODE_ENV=production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY --from=build /app/dist ./dist
COPY server.ts ./
COPY api ./api

EXPOSE 3000
ENV PORT=3000

CMD ["npx", "tsx", "server.ts"]