# Instructions for Claude

## Git commits
Keep commit messages short. A single concise summary line is enough, no long body unless truly needed.

If the user's message is just "esteban" (or otherwise contains that word as the instruction), treat it as a standing shorthand for: stage all changes, commit with a meaningful message, and push to origin main. Do this without asking for confirmation first — this word is pre-authorization for that specific action.

## Frontend copy
Text shown in the UI (JSX content, `src/lib/translations.ts` strings, etc.) should read as human-written, not AI-generated. Do not use dashes ("-" or em dashes) in visible text.

## Translations
This site is bilingual (`it` and `en` in `src/lib/translations.ts`). Whenever you write or edit copy in one language, always add or update the matching translation in the other language in the same pass, don't leave it for a follow-up request. Match tone and meaning, not a literal word-for-word translation.

## Verifying changes — never run `next build` or `next start` here
The user keeps `npm run dev` (Turbopack) running against this same working directory. `next build` / `next start` write production (webpack) artifacts into the same `.next` folder that `next dev`'s Turbopack cache uses, and the two formats are incompatible — running a build corrupts the dev cache and the user's browser shows "Internal Server Error" until they restart `npm run dev`. This happened for real and is disruptive; do not do it again.

To verify a change:
- Use `npx tsc --noEmit` and `next lint` (or `npm run lint`, which runs both) for correctness. Neither touches `.next`.
- For a visual/browser check, ask the user to look at their already-running `localhost:3000` rather than starting a competing server.
- Never run `npm run build` or `npm run start` in this directory. If a production-build check is ever truly necessary, do it in an isolated copy/worktree, never here.
- If `.next` ever does get corrupted (this exact "Internal Server Error" / "Cannot find module ... turbopack ... runtime.js" symptom), the fix is `rm -rf .next` and a restart of `npm run dev` — it's a gitignored, fully regenerable cache, safe to delete.
