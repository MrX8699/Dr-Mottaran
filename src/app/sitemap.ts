import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { languageAlternates, pageKeys, pagePath } from "@/lib/seo"
import type { Language } from "@/lib/i18n"

// Required for `output: "export"` (GitHub Pages) to emit a static file.
export const dynamic = "force-static"

const languages: Language[] = ["it", "en"]

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lang) =>
    pageKeys.map((page) => ({
      url: `${SITE_URL}${pagePath(lang, page)}`,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(page)).map(([hreflang, path]) => [hreflang, `${SITE_URL}${path}`])
        ),
      },
    }))
  )
}
