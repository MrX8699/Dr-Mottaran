import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { sitemapPaths } from "@/lib/seo"

// Required for `output: "export"` (GitHub Pages) to emit a static file.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths.map((path) => ({ url: `${SITE_URL}${path}` }))
}
