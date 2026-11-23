
# Dr. Luca Mottaran

Sito web di Dr. Luca Mottaran, Fisioterapista e Chinesiologo.

> Mani che ascoltano, corpo che risponde,
> ogni passo un ritorno al movimento.
> Non forza, ma cura; non fretta, ma metodo,
> la strada verso te stesso, un gesto alla volta.

Bilingual (Italian and English) website built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS and shadcn style UI components.

| What | Where | When |
|---|---|---|
| Preview | `npm run dev` on your computer (`localhost:3000`) | While you work |
| Check | GitHub Actions, "CI" (lint and the live site's build, nothing deployed) | Every push to `main` and every pull request |
| Live site | GitHub Pages, `https://drlucamottaran.it` | Only when a version tag (`v1.2.0`) is pushed |

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
| `npm run lint` | TypeScript check (`tsc --noEmit`) and ESLint. Run this before pushing; the CI check and the release workflow run it too |
| `npm run build` | Production build. With `GITHUB_PAGES=true` it is the static export used for GitHub Pages (output in `out/`) |
| `npm run start` | Serve a production build (server mode) |
| `npm run format` | Format `src/` with Biome (`biome format --write .`) |
| `npm run health` | Site health check (`scripts/site-health.mjs`): live pages, redirects, certificate, domain, DNS, releases, CI, Dependabot, `npm audit`. Writes `monitoring/site-health.json` for the Site Health dashboard. Safe while `npm run dev` runs |

**Do not run `npm run build` or `npm run start` in the same folder while `npm run dev` is running.** They write to the same `.next` folder and corrupt the dev server's cache (the browser shows "Internal Server Error"). If that happens: stop the dev server, delete `.next`, restart `npm run dev`. For a local production check, build in a separate worktree:

```bash
git worktree add ../dr-mottaran-build main
cd ../dr-mottaran-build
npm ci
GITHUB_PAGES=true npm run build      # static site in ./out
cd ..
git worktree remove dr-mottaran-build
```

### Dependencies

- **npm only.** `package-lock.json` is the only lockfile, and the CI check and the release workflow both install from it with `npm ci`. Don't commit a `bun.lock`, `yarn.lock` or `pnpm-lock.yaml`: a second lockfile can make a tool install different versions.
- **Updates:** `.github/dependabot.yml` opens a pull request once a month with the minor and patch updates for npm, and one with the GitHub Actions updates. The CI check builds each one; merge it only when it is green. Merging changes `main` only, not the live site. npm major versions (for example Next 16, which drops `next lint`) are not proposed and need a planned upgrade. A GitHub Actions update that touches `upload-pages-artifact` or `deploy-pages` is only really tested by the next release, so check that release's run.
- **PostCSS override:** `overrides` in `package.json` makes Next.js use the same, patched PostCSS as the rest of the project instead of its own older copy. Remove it once a Next.js release ships a fixed PostCSS.
- Check with `npm audit`. Install or update packages in a separate worktree when `npm run dev` is running (see above), then copy `package.json` and `package-lock.json` back and run `npm ci` after stopping the dev server.

## Project structure

```
src/
  app/
    (it)/            Italian pages at /, /about, /services, /approach, /privacy, /imola, /portomaggiore,
                     /argenta, /ferrara and /services/<slug> (route group, not in the URL)
    en/              The same pages in English under /en
    global-not-found.tsx   Bilingual 404 page (404.html in the static export)
    robots.ts, sitemap.ts  Generated robots.txt and sitemap.xml
    icon.png, apple-icon.png, favicon.ico, fonts/
  components/
    pages/           Page content shared by both languages (HomeContent, AboutContent, ...);
                     LandingContent is the template for the location, area and service pages,
                     PrivacyContent is the privacy policy
    RootDocument.tsx <html> shell used by both root layouts (font, JSON-LD, language)
    Analytics.tsx    Umami visit counter script (only when site.analytics.websiteId is set)
    Nav.tsx, Footer.tsx, LanguageSwitcher.tsx, JsonLd.tsx, MoreLink.tsx, ui/
  lib/
    site.ts          Name, phone, email, addresses, Google Maps listings, hours, social links, site URL, analytics ID (single source of truth)
    routes.ts        Every page and its URL (pagePath, hreflang alternates, service page slugs)
    seo.ts           Page titles, descriptions, canonical URLs, Open Graph
    landingPages.ts  Sections, photos, FAQ count and related links of the location, area and service pages
    structuredData.ts  schema.org JSON-LD (WebSite, Person, Physiotherapy, ProfilePage, BreadcrumbList)
    translations.ts  All visible text, in "it" and "en"
    i18n.ts          Language helpers (localizedHref, alternateLanguagePath)
public/
  images/, og.jpg, og-en.jpg, CNAME
scripts/
  site-health.mjs    Site health check for the monitoring dashboard ("npm run health")
monitoring/          Output of the health check and its daily history (gitignored, local only)
```

Conventions:

- **Text:** every visible string lives in `src/lib/translations.ts`, always in both `it` and `en`. No dashes in visible text.
- **Contact details:** change phone, addresses or hours only in `src/lib/site.ts`; the page, footer, WhatsApp links and structured data read from it. Keep them identical to the studios' Google Business Profiles. A studio with a profile has its listing link in `googleMaps.url`, which the directions links and structured data use; without one they fall back to an address search.
- **Languages:** the language comes from the URL (`/` Italian, `/en` English). Internal links use `localizedHref(language, path)`, or `pagePath(language, page)` from `src/lib/routes.ts`.
- **Area pages:** `/argenta/` and `/ferrara/` are for people searching from nearby towns. There is no studio in those places: each page says so and points to the closest studio (Gambulaga). Never write that the practice is located in a town where it has no studio, and keep the facts on them (towns, addresses) in line with `areaServed` in `src/lib/site.ts`, which feeds the structured data.
- **Location, area and service pages:** `/imola/`, `/portomaggiore/`, `/argenta/`, `/ferrara/` and `/services/<slug>/` (sports physiotherapy, rehab after surgery, manual therapy and TMJ, shockwave/Tecar/laser) share one template. To add one: a key and URL in `src/lib/routes.ts`, title and description in `src/lib/seo.ts`, sections in `src/lib/landingPages.ts`, text under `landing.<key>.` in `src/lib/translations.ts` (both languages). The sitemap picks it up automatically.
- **Visit statistics:** Umami Cloud (Hobby plan, EU data region), dashboard at `https://cloud.umami.is`. The script is added by `src/components/Analytics.tsx` only when `analytics.websiteId` in `src/lib/site.ts` is set, and only counts visits on `drlucamottaran.it`, so local previews are never counted. To switch it off, empty `websiteId` and update the privacy policy.
- **Privacy:** the privacy policy (`/privacy/`, structure in `src/components/pages/PrivacyContent.tsx`, text under `privacy.` in `src/lib/translations.ts`) describes what the site does today: no cookies, no browser storage, cookieless visit statistics with Umami Cloud (the only script loaded from another domain), and a contact form that only opens WhatsApp. Anything that changes this (another analytics tool, an embedded map or video, Google Fonts, a form backend, a booking widget, a new host) must update the policy and its "last updated" date in the same change, and may need a consent banner first. The footer links to the policy on every page, and a short notice under the contact form links to it.

## Monitoring

The **Site Health dashboard** (a private Claude artifact, link in `CLAUDE.md`) shows whether the site is healthy, what to do about anything that isn't, visits from Umami and search numbers from Google and Bing.

- Every morning a scheduled Claude task (`mottaran-site-health`, in the Claude desktop app) reads Umami, Search Console and Bing in the app's browser, runs `npm run health`, and uploads the result to the dashboard. It runs only while the computer is on and the Claude app is open, and catches up on the next run.
- To refresh it any time, ask Claude in this project to "refresh the dashboard", or press Run now on the task in the app.
- `monitoring/history.json` keeps one row per day. It exists only on this computer and is the only copy of the trend, so keep it.
- Instant alerts come from elsewhere: GitHub emails failed CI and deploy runs, Search Console emails indexing problems. For an email within minutes of the site going down, add a free uptime monitor (for example UptimeRobot) for `https://drlucamottaran.it`.

## Deployment

### Check: GitHub Actions CI (automatic)

`.github/workflows/ci.yml` runs on every push to `main` and on every pull request, Dependabot's included. It installs with `npm ci` on Node.js 22, runs `npm run lint` and builds the static export exactly like the release does, but deploys nothing. The result shows as a green tick or red cross next to the commit on GitHub and under **Actions → CI**. A red cross means the next release would fail too: fix it before releasing.

There is no staging copy online. Preview changes locally with `npm run dev`, or build the static site in a separate worktree (see "Scripts" above).

### Production: GitHub Pages (manual, by version tag)

`.github/workflows/deploy-pages.yml` deploys to GitHub Pages **only when a version tag matching `vMAJOR.MINOR.PATCH` is pushed** (for example `v1.0.0`, `v1.1.0`). Pushes to `main` never deploy to GitHub Pages. The workflow:

1. checks that the tagged commit is already on `main`
2. installs dependencies (`npm ci`) on Node.js 22
3. runs `npm run lint`
4. builds the static export with `GITHUB_PAGES=true` (`next.config.js` switches to `output: "export"` with trailing slashes), which writes the site to `out/`
5. uploads `out/` and deploys it to GitHub Pages

If any step fails, nothing is deployed and the live site stays as it was.

### Releasing a new version

1. Make sure the change is on `main`, looked right locally (`npm run dev`), and the **CI** check for the latest commit on `main` is green.
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
5. When it finishes, check `https://drlucamottaran.it`.
6. Optional: on GitHub, **Releases → Draft a new release**, choose the tag, click **Generate release notes** and publish, so the release has a readable changelog. (The deploy is triggered by the tag, not by this step.)

To see which versions exist: `git tag --list "v*"`. The newest tag is what is live.

**With Claude Code:** say **"codia"** to run steps 3 to 5 for you. It releases the current `main` with the next patch version ("codia minor" or "codia major" for bigger bumps), after checking that everything is pushed, `npm run lint` passes and the CI check is green, then follows the deploy and checks the live site. "esteban" commits and pushes to `main` and reports the CI check; it never changes the live site. Before any push to `main`, Claude also checks that the traffic playbook (a Claude artifact with the plan for getting visitors to the site) still matches the site, and updates it if needed. Both shortcuts and the playbook link are in `CLAUDE.md`.

### Rolling back

- **Fastest:** in **Actions**, open the "Deploy to GitHub Pages" run of the previous good tag and click **Re-run all jobs**. It rebuilds and redeploys that version.
- **Or** fix or revert the problem on `main` (`git revert <commit>`, push, wait for the CI check) and release a new patch version, for example `v1.1.1`.

### One-time GitHub settings

These live in the GitHub repository settings, not in the code:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.** With "Deploy from a branch", GitHub runs its own "pages build and deployment" job, which does not build this Next.js site.
2. **Settings → Pages → Custom domain:** `drlucamottaran.it`, with **Enforce HTTPS** on. The static export also ships `public/CNAME` with the same domain.
3. **Settings → Environments → github-pages → Deployment branches and tags:** add a **tag** rule `v*`. By default only `main` may deploy to `github-pages`, so without this rule every tag deploy is rejected.
4. Optional, same page: **Required reviewers** → yourself, so every production deploy waits for your approval.

### Changing the domain

The live domain is `drlucamottaran.it`. To move the site to a different domain:

1. Point the new domain's DNS at GitHub Pages and set it in **Settings → Pages → Custom domain**.
2. Replace the domain in `public/CNAME`.
3. Update the site URL used for canonical URLs, hreflang, the sitemap, Open Graph and structured data: the default in `src/lib/site.ts` (or set `NEXT_PUBLIC_SITE_URL` in the workflow's build step).
4. Release a new version.

GitHub Pages serves static files only and can't send custom HTTP headers (Content Security Policy and similar), so `next.config.js` has none. HTTPS and the `www` to `drlucamottaran.it` redirect are handled by GitHub Pages.
