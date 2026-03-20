# Deploying Buyesi (Next.js + Prisma)

This app needs a **PostgreSQL** database and two environment variables everywhere it runs (including Vercel):

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Prisma connection string to PostgreSQL |
| `JWT_SECRET` | Signs admin session cookies; use a long random value (e.g. `openssl rand -base64 32`) |

## 1. Create a PostgreSQL database

Use any managed Postgres (e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), [Vercel Postgres](https://vercel.com/storage/postgres), Railway, etc.). Copy the connection string; it should look like `postgresql://...`.

For Neon-style hosts, use the **pooled** URL for the app. If migrations fail with pooling, use the **direct** URL only for the build step (see Neon docs for `?pgbouncer=true` / direct connection).

## 2. Deploy on Vercel

1. Push the project to GitHub/GitLab/Bitbucket (or use the Vercel CLI).
2. In [Vercel](https://vercel.com/new), import the repo and set the **root directory** to `buyesi-version2` if the repo contains other folders.
3. Under **Environment Variables**, add `DATABASE_URL` and `JWT_SECRET` for **Production** (and Preview if you use a DB for previews).
4. Set **Build Command** to:

   ```bash
   npm run build:vercel
   ```

   This runs `prisma migrate deploy` so the database schema is applied on each production build.

5. Deploy. The default **Install Command** `npm install` is fine.

## 3. After the first deploy

1. **Seed data (optional):** Open `https://YOUR_DOMAIN/api/seed` once. This creates the default admin user and sample blog content if the database is empty.  
   - Default login (after seed): username `admin`, password `admin` — **change the password in production** via your admin flow or by updating the user in the database.

2. **Security:** Restrict or remove public access to `/api/seed` in production if you do not want it callable on the open internet (e.g. protect with a secret header or remove the route after seeding).

## Local production build (with migrations)

Requires a reachable `DATABASE_URL`:

```bash
cp .env.example .env.local
# Edit .env.local with real DATABASE_URL and JWT_SECRET

npm run build:vercel
npm run start
```

For a quick compile check **without** applying migrations:

```bash
npm run build
```

## CLI deploy (optional)

With [Vercel CLI](https://vercel.com/docs/cli) installed and logged in:

```bash
cd buyesi-version2
vercel --prod
```

Configure the same env vars and build command in the Vercel dashboard or via `vercel env pull` / project settings.
