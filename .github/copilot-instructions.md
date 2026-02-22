## Quick orientation for AI coding agents

This is a Next.js (App Router) site with Tailwind + shadcn-style UI components and a small, client-side i18n system. Use the notes below to be productive immediately.

### Big picture
- Framework: Next.js (app router). Root layout is `src/app/layout.tsx` (server component) which wraps the app in a `LanguageProvider` from `src/contexts/LanguageContext.tsx`.
- UI: Reusable UI primitives live under `src/components/ui/` (e.g. `button.tsx`, `card.tsx`, `input.tsx`). Prefer importing these components instead of re-creating base HTML with classes.
- Translations: All strings live in `src/lib/translations.ts`. Pages call `getTranslation(language, key)` (see `src/app/page.tsx`) — do not invent a different translation store.
- Styling: Tailwind + CSS variables configured in `src/app/globals.css`. Theme toggling uses the `.dark` class and CSS variables in `globals.css`.

### Typical data flows & boundaries
- Pages are in `src/app/*/page.tsx`. Many are client components (look for `'use client'`). Server components must not access browser-only APIs like `localStorage`.
- Language selection is stored in `localStorage` by `LanguageProvider` (client component). The pattern used in pages is:

  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  Use `t('nav.about')` or `getTranslation(language, 'nav.about')` as seen in `src/app/page.tsx`.

### Project-specific conventions (do this exactly)
- i18n: Add keys only in `src/lib/translations.ts` (object `translations`). Add both `it` and `en` entries. Expose strings via `getTranslation(lang, key)`.
- Client vs server: If a component uses browser APIs or React state/hooks, it must include `'use client'` as the file's first line. If you move a client-only module into a server component, it will break SSR.
- UI primitives: Use `@/components/ui/*` primitives. They follow the shadcn pattern (CVA + `cn` util + `asChild` via Radix Slot). See `button.tsx` for exact usage.
- Imports: Code uses the `@/` alias. Keep imports like `import { Button } from '@/components/ui/button'`.
- Assets: Background and images referenced as `/dr-mottaran.jpg` — use `public/` for static assets.

### Developer workflows (commands)
- Dev: `npm run dev` (package.json uses `next dev -H 0.0.0.0 --turbopack`).
- Build: `npm run build` then `npm run start` for production.
- Lint / type-check: `npm run lint` (runs `bunx tsc --noEmit && next lint`). Note: scripts use `bunx` in package.json but `npm` works if Node/npm is used.
- Format: `npm run format` (runs `bunx biome format --write`).

If a change requires fast verification, run `npm run dev` and open http://localhost:3000.

### External deps & integrations to watch
- No backend/API routes in repo — contact forms are local UI-only placeholders (see `src/app/page.tsx`).
- Key deps: `next`, `react`, `tailwindcss`, `class-variance-authority`, `@radix-ui/react-slot`, `lucide-react`.

### Common pitfalls for automated edits
- Do not access `localStorage` or other browser globals from server components. If you add state/hooks or `localStorage` usage, mark the file `'use client'`.
- When adding translations, update both `it` and `en` sections in `src/lib/translations.ts` and keep the key names consistent (dot-separated keys like `nav.about`).
- Respect `asChild` and `Slot` usage in UI primitives (see `button.tsx`) — preserve props passthrough and variant APIs.
- Tailwind classes and CSS variables are relied upon heavily — prefer reusing existing utility classes and CSS variables defined in `src/app/globals.css` (colors under `:root` and `.dark`).

### Small examples (copyable patterns)
- Translate in a client page/component:

  import { useLanguage } from '@/contexts/LanguageContext'
  import { getTranslation } from '@/lib/translations'

  const { language } = useLanguage()
  const t = (k: string) => getTranslation(language, k)

  return <h1>{t('hero.title')}</h1>

- Use the shared Button component:

  import { Button } from '@/components/ui/button'
  <Button variant="outline">Click</Button>

### Files to inspect when making non-trivial changes
- `src/app/layout.tsx` — root layout, fonts, and `LanguageProvider` wiring
- `src/contexts/LanguageContext.tsx` — client language state and `localStorage` handling
- `src/lib/translations.ts` — canonical translation data and `getTranslation`
- `src/components/ui/*` — shared primitives (Button, Card, Input, Textarea)
- `src/app/globals.css` and `tailwind.config.ts` — design tokens and Tailwind setup

If anything is unclear or you want me to expand a section (e.g., add examples for adding routes, tests, or CI), tell me which area and I'll iterate.
