
# Dr. Luca Mottaran

Sito web di Dr. Luca Mottaran, Fisioterapista e Chinesiologo.

> Mani che ascoltano, corpo che risponde,
> ogni passo un ritorno al movimento.
> Non forza, ma cura; non fretta, ma metodo,
> la strada verso te stesso, un gesto alla volta.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on GitHub Pages

GitHub Pages only serves static files, so the site is built with `next build` in static-export mode instead of the normal Next.js server build.

**One-time setup (in the GitHub repo, on github.com):**

1. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. If you have a custom domain, add it under **Settings → Pages → Custom domain** and set your DNS records to point at GitHub Pages.
   - Note: unlike the "Deploy from a branch" source, the **GitHub Actions** source does **not** auto-create a `CNAME` file for you — the file has to be part of the build artifact itself. That's why one lives at `public/CNAME` in this repo (Next copies everything in `public/` into the exported `out/` folder, which is what the workflow publishes). If the domain ever changes, edit `public/CNAME` — don't rely on the Settings UI alone.

**How the build works:**

- `.github/workflows/deploy-gh-pages.yml` builds and publishes the site automatically on every push to `main`.
- The workflow sets `GITHUB_PAGES=true`, which makes `next.config.js` switch to `output: "export"`.
- The site is currently served from the custom domain root (`https://whodriving.com/`), so `next.config.js` has `repoName = ""` and adds no `basePath`/`assetPrefix`. That prefix is only needed for the default `https://<user>.github.io/<repo>/` project-page URL — if the custom domain is ever removed, set `repoName` back to the repo name (e.g. `"Dr-Mottaran"`) and delete `public/CNAME`.
- The security headers (`Content-Security-Policy`, `Strict-Transport-Security`, etc.) in `next.config.js` only apply on server-based hosts like Netlify/Vercel — GitHub Pages cannot send custom HTTP headers, so they're skipped in the static export build.

**Manual deploy (no GitHub Actions):**

```bash
GITHUB_PAGES=true npm run build   # outputs static files to ./out
```

Do **not** run this in a local copy where `npm run dev` is already running — a static export build (`out/`) is a different artifact from the dev server's `.next` cache, but running builds and dev servers against the same directory back-to-back can still leave `.next` inconsistent. Build in a separate clone/worktree if `next dev` is active.
