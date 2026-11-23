# Instructions for Claude

## Git commits
Keep commit messages short. A single concise summary line is enough, no long body unless truly needed.

If the user's message is just "esteban" (or otherwise contains that word as the instruction), treat it as a standing shorthand for: stage all changes, commit with a meaningful message, and push to origin main. Do this without asking for confirmation first — this word is pre-authorization for that specific action. A push to `main` only triggers the CI check (`.github/workflows/ci.yml`: lint and the static build, nothing deployed); it does not change the live site (see below). After pushing, follow the CI run for that commit until it finishes and report the result; if it fails, report the failing step.

Before any push to `main` ("esteban" included), check the traffic playbook first (see "Traffic playbook" below).

## Traffic playbook
The plan for bringing visitors to the site is the Claude artifact "Mottaran Traffic Playbook": https://claude.ai/artifact/J4ZWWL1nkwBwbcjGqYCsSd. Before every push to `main`, verify it is up to date with what is being pushed and with the current state of the work, and update it in the same pass if it is not. Things that make it stale:
- pages added, removed or renamed (its URLs, the sitemap count, the pages listed for indexing)
- a playbook step done by the change (an article, photos, the motorsport page, WhatsApp or social links, analytics), so its status, tick and "Status" tag change
- changes to contact details, studios, services or the privacy policy that its examples quote
- Search Console, Bing or other setup done in the session, or new numbers worth recording

To update it: read it with the Artifact tool (`action: "read"`, that URL), edit the saved file, and publish with the same `url` so the link stays the same. Never create a new playbook artifact. If nothing needs changing, say in the push report that the playbook was checked and is current. If the artifact cannot be read or published, say so in the report and push anyway; don't block the push on it.

## Deployment and releases
Documented in `README.md` ("Deployment" and "Releasing a new version"); follow it, don't improvise.
- Every push to `main` and every pull request runs the **CI** check (`.github/workflows/ci.yml`), which builds the site exactly like the release but deploys nothing. There is no online staging copy and no Vercel anymore; previews are local (`npm run dev`).
- **GitHub Pages** (`https://drlucamottaran.it`, the live site) deploys only from `.github/workflows/deploy-pages.yml`, which runs only when a version tag `vMAJOR.MINOR.PATCH` is pushed. It must never run on normal pushes.
- Never create or push a version tag unless the user explicitly asks for a release or says "codia" (below). "esteban" is not a release request.

### "codia" = release to the live site
If the user's message is just "codia" (or otherwise contains that word as the instruction), treat it as a standing shorthand for releasing the current `main` to GitHub Pages, so the update becomes visible to the public. Do it without asking for confirmation first; the word is pre-authorization for this specific action. Steps:
1. `git fetch origin --tags`. The release is what is on `origin/main`. If the working tree has uncommitted changes or local `main` differs from `origin/main`, stop and tell the user (suggest "esteban" first, so the change is also checked by CI); don't release a mix.
2. Run `npm run lint`, and check that the CI run for the `origin/main` commit succeeded (`gh run list --workflow ci.yml --commit <sha>`; wait for it if it is still running). If either fails, stop and report; don't tag.
3. Find the latest tag matching `vMAJOR.MINOR.PATCH` (`git tag --list "v*" --sort=-v:refname`). If it already points at `origin/main`, there is nothing new to release: say so and stop. If there is no tag yet, the version is `v1.0.0`.
4. Next version: bump PATCH by default. If the user says "codia minor" or "codia major", bump that part instead (resetting the lower parts to 0).
5. Tag `origin/main` with an annotated tag whose message is a short summary of the commits since the previous tag (`git tag -a vX.Y.Z origin/main -m "..."`), then `git push origin vX.Y.Z`. Never move, delete or re-push an existing tag.
6. Follow the "Deploy to GitHub Pages" run for that tag (for example via the public GitHub API: `https://api.github.com/repos/MrX8699/Dr-Mottaran/actions/runs?event=push`) until it finishes. If it is waiting for a required reviewer, tell the user to approve it in Actions. When it succeeds, check that `https://drlucamottaran.it` responds, then report the version, what it contains, and the result. If it fails, report the failing step; the live site stays on the previous version.

## Keep README.md in sync with the code
`README.md` describes the scripts, project structure, conventions, deployment and release process. When a change affects any of these (for example build or deploy workflows, `package.json` scripts, Node version, folder layout, where contact data or translations live), update `README.md` in the same change. Before finishing such a change, check that what the README says still matches the code, and fix whichever side is wrong.

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
