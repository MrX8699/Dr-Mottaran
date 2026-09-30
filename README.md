
# Dr. Luca Mottaran

Sito web di Dr. Luca Mottaran, Fisioterapista e Chinesiologo.

> Mani che ascoltano, corpo che risponde,
> ogni passo un ritorno al movimento.
> Non forza, ma cura; non fretta, ma metodo,
> la strada verso te stesso, un gesto alla volta.

Bilingual (Italian and English) website built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS and shadcn style UI components.

| Environment | Where | Updated when |
|---|---|---|
| Staging | Vercel (`*.vercel.app`) | Automatically on every push to `main` |
| Production | GitHub Pages, `https://whodriving.com` | Only when a version tag (`v1.2.0`) is pushed |

## Getting started

Requires Node.js 22 (the version CI uses) and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the Italian site and [http://localhost:3000/en](http://localhost:3000/en) for the English one.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server (Turbopack) |
| `npm run lint` | TypeScript check (`tsc --noEmit`) and ESLint. Run this before pushing; the release workflow runs it too |
| `npm run build` | Production build. With `GITHUB_PAGES=true` it is the static export used for GitHub Pages (output in `out/`) |
| `npm run start` | Serve a production build (server mode) |
| `npm run format` | Format with Biome (`bunx biome format --write`, needs Bun) |

**Do not run `npm run build` or `npm run start` in the same folder while `npm run dev` is running.** They write to the same `.next` folder and corrupt the dev server's cache (the browser shows "Internal Server Error"). If that happens: stop the dev server, delete `.next`, restart `npm run dev`. For a local production check, build in a separate worktree:

```bash
git worktree add ../dr-mottaran-build main
cd ../dr-mottaran-build
npm ci
GITHUB_PAGES=true npm run build      # static site in ./out
cd ..
git worktree remove dr-mottaran-build
```

## Project structure

```
src/
  app/
    (it)/            Italian pages at /, /about, /services, /approach (route group, not in the URL)
    en/              English pages at /en, /en/about, /en/services, /en/approach
    global-not-found.tsx   Bilingual 404 page (404.html in the static export)
    robots.ts, sitemap.ts  Generated robots.txt and sitemap.xml
    icon.png, apple-icon.png, favicon.ico, fonts/
  components/
    pages/           Page content shared by both languages (HomeContent, AboutContent, ...)
    RootDocument.tsx <html> shell used by both root layouts (font, JSON-LD, language)
    Nav.tsx, Footer.tsx, LanguageSwitcher.tsx, JsonLd.tsx, ui/
  lib/
    site.ts          Name, phone, email, addresses, hours, social links, site URL (single source of truth)
    seo.ts           Page titles, descriptions, canonical and hreflang URLs, Open Graph
    structuredData.ts  schema.org JSON-LD (WebSite, Person, Physiotherapy, ProfilePage)
    translations.ts  All visible text, in "it" and "en"
    i18n.ts          Language helpers (localizedHref, alternateLanguagePath)
public/
  images/, og.jpg, og-en.jpg, CNAME
```

Conventions:

- **Text:** every visible string lives in `src/lib/translations.ts`, always in both `it` and `en`. No dashes in visible text.
- **Contact details:** change phone, addresses or hours only in `src/lib/site.ts`; the page, footer, WhatsApp links and structured data read from it.
- **Languages:** the language comes from the URL (`/` Italian, `/en` English). Internal links use `localizedHref(language, path)`.

## Deployment

### Staging: Vercel (automatic)

The repository is connected to Vercel through the Vercel GitHub app. Every push to `main` builds and deploys the site on Vercel in server mode (`GITHUB_PAGES` is not set there). Use it to check changes before releasing them. There is no Vercel configuration file in this repository; the setup lives in the Vercel dashboard.

### Production: GitHub Pages (manual, by version tag)

`.github/workflows/deploy-pages.yml` deploys to GitHub Pages **only when a version tag matching `vMAJOR.MINOR.PATCH` is pushed** (for example `v1.0.0`, `v1.1.0`). Pushes to `main` never deploy to GitHub Pages. The workflow:

1. checks that the tagged commit is already on `main`
2. installs dependencies (`npm ci`) on Node.js 22
3. runs `npm run lint`
4. builds the static export with `GITHUB_PAGES=true` (`next.config.js` switches to `output: "export"` with trailing slashes), which writes the site to `out/`
5. uploads `out/` and deploys it to GitHub Pages

If any step fails, nothing is deployed and the live site stays as it was.

### Releasing a new version

1. Make sure the change is on `main` and looks right on the Vercel staging deployment.
2. Pick the next version number ([semantic versioning](https://semver.org)):
   - `v1.0.1` for small fixes (typo, image swap)
   - `v1.1.0` for new content or features
   - `v2.0.0` for a redesign or other big change
3. Tag the commit and push the tag:

   ```bash
   git switch main
   git pull
   npm run lint
   git tag -a v1.1.0 -m "Short description of the release"
   git push origin v1.1.0
   ```

4. Follow the run under **Actions → Deploy to GitHub Pages**. If the `github-pages` environment has a required reviewer, approve the deployment there.
5. When it finishes, check `https://whodriving.com`.
6. Optional: on GitHub, **Releases → Draft a new release**, choose the tag, click **Generate release notes** and publish, so the release has a readable changelog. (The deploy is triggered by the tag, not by this step.)

To see which versions exist: `git tag --list "v*"`. The newest tag is what is live.

**With Claude Code:** say **"codia"** to run steps 3 to 5 for you. It releases the current `main` with the next patch version ("codia minor" or "codia major" for bigger bumps), after checking that everything is pushed and `npm run lint` passes, then follows the deploy and checks the live site. "esteban" commits and pushes to `main` (Vercel staging only). Both shortcuts are defined in `CLAUDE.md`.

### Rolling back

- **Fastest:** in **Actions**, open the "Deploy to GitHub Pages" run of the previous good tag and click **Re-run all jobs**. It rebuilds and redeploys that version.
- **Or** fix or revert the problem on `main` (`git revert <commit>`, push, check on Vercel) and release a new patch version, for example `v1.1.1`.

### One-time GitHub settings

These live in the GitHub repository settings, not in the code:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.** With "Deploy from a branch", GitHub runs its own "pages build and deployment" job, which does not build this Next.js site.
2. **Settings → Pages → Custom domain:** `whodriving.com`, with **Enforce HTTPS** on. The static export also ships `public/CNAME` with the same domain.
3. **Settings → Environments → github-pages → Deployment branches and tags:** add a **tag** rule `v*`. By default only `main` may deploy to `github-pages`, so without this rule every tag deploy is rejected.
4. Optional, same page: **Required reviewers** → yourself, so every production deploy waits for your approval.

### Changing the domain

`whodriving.com` is a test domain. To move to the final domain:

1. Point the new domain's DNS at GitHub Pages and set it in **Settings → Pages → Custom domain**.
2. Replace the domain in `public/CNAME`.
3. Update the site URL used for canonical URLs, hreflang, the sitemap, Open Graph and structured data: the default in `src/lib/site.ts` (or set `NEXT_PUBLIC_SITE_URL` in the workflow's build step).
4. Release a new version.

GitHub Pages serves static files only: the security headers in `next.config.js` apply on Vercel but not on GitHub Pages.
