// Next.js's `basePath` config is applied automatically to `next/link` and
// `next/router`, but NOT to a plain string handed to `next/image` (which is
// how this site references files in public/images), nor to a raw CSS
// `url(...)` in an inline style. On GitHub Pages project pages the site is
// served from a subpath (e.g. /Dr-Mottaran), so those hardcoded "/images/…"
// paths must be prefixed manually or every image 404s.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function withBasePath(path: string) {
  return `${basePath}${path}`
}
