# myCHEF — mychef.id

Marketing site and quote-request app for **myCHEF Indonesia**, a private chef service in Bali. Originally built on Replit, now deployable to Vercel.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Vite 5, Tailwind CSS, Radix UI, wouter, TanStack Query, react-i18next, framer-motion |
| Backend | Express 4 (wrapped in a Vercel serverless function) |
| Storage | In-memory (`MemStorage`) — see **Persistence** below |
| Schema / validation | Zod, drizzle-orm + drizzle-zod (schema only; no DB wired yet) |
| Build | Vite (client) + native Vercel function build (server) |

```
.
├── api/[...path].ts        Vercel serverless entry — wraps the Express app
├── client/                 Vite React app (root for Vite build)
│   ├── public/             Static assets served as-is (sitemap, robots, favicon, og-image)
│   └── src/
├── server/                 Express app (used for local dev + reused by api/[...path].ts)
│   ├── index.ts            Local-dev entry: starts Express on PORT
│   ├── routes.ts           All HTTP routes (sitemap, robots, /api/quotes/*)
│   ├── storage.ts          MemStorage implementation
│   └── vite.ts             Local Vite dev-server middleware
├── shared/                 Shared schema, i18n strings, location data
├── attached_assets/        Hero images and other large media
├── vercel.json             Vercel build + function config
├── vite.config.ts          Vite config (client root, dist/public output)
└── drizzle.config.ts       Drizzle config (no migrations applied yet)
```

---

## Local development

```bash
npm install
cp .env.example .env
npm run dev          # starts Express + Vite middleware on PORT (default 5000)
```

`npm run dev` starts Express which serves both the API and the Vite dev server in the same process — same as the original Replit setup.

---

## Build & run locally (production-style)

```bash
npm run build        # vite build → dist/public, esbuild server → dist/index.js
npm run start        # node dist/index.js
```

The `start` script is for non-Vercel hosts (e.g. a self-hosted Node box). On Vercel, the serverless function handles all `/api/*` traffic and the static Vite output is served from `dist/public` automatically.

---

## Vercel deployment

This repo is **Vercel-ready out of the box**. Vercel will:

1. Read `vercel.json` (framework=`vite`, build=`vite build`, output=`dist/public`)
2. Auto-detect `api/[...path].ts` and deploy it as a serverless Node.js function
3. Route `/api/*` to the function; serve everything else from `dist/public`

### One-time Vercel setup

1. In the Vercel dashboard: **Add New → Project → Import** from GitHub `ddandanell/mychef.id`
2. Framework preset: **Vite** (auto-detected)
3. Build command, output dir, install command: leave defaults — `vercel.json` overrides
4. Environment variables: none required for the in-memory storage path. Add `DATABASE_URL` once you wire Drizzle/Neon.
5. Custom domain: `mychef.id` → point in Vercel → Domains

After that, every push to `main` triggers a production deploy and every PR gets a preview URL.

---

## Persistence (important)

The current `storage.ts` uses an in-memory `Map`. On Vercel this means **quote submissions are lost whenever the serverless function cold-starts** (typically after a few minutes of inactivity, or on each deploy). Deps for a real database are already installed (`drizzle-orm`, `@neondatabase/serverless`, `drizzle-kit`), so the migration is small:

1. Provision a Neon Postgres database
2. Add `DATABASE_URL` to Vercel env vars
3. Implement `DrizzleStorage` against the schema in `shared/schema.ts`
4. Replace the `MemStorage` instance export in `server/storage.ts`
5. Run `npm run db:push` to apply the schema

---

## SEO assets

- `client/public/sitemap.xml` — static, served by Vercel directly
- `client/public/robots.txt` — static, served by Vercel directly
- `client/public/og-image.jpg` — Open Graph preview
- The Express routes in `server/routes.ts` for `/sitemap.xml` and `/robots.txt` are duplicates left over from Replit and never get hit on Vercel (static files take precedence).

---

## Replit notes

The repo retains `.replit`, `replit.md`, and the three `@replit/vite-plugin-*` packages so the project still runs on Replit if you want to. They are guarded by `process.env.REPL_ID` in `vite.config.ts`, so they are no-ops outside Replit and do not affect Vercel builds.
