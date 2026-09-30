export type Language = "it" | "en"

// Italian lives at the root, English under /en.
export const languagePrefix: Record<Language, string> = { it: "", en: "/en" }

// localizedHref("en", "/about") -> "/en/about", localizedHref("en", "/#contact") -> "/en/#contact"
export function localizedHref(lang: Language, path: string) {
  const prefix = languagePrefix[lang]
  if (!prefix) return path
  return path === "/" ? `${prefix}/` : `${prefix}${path}`
}

// Same page in the other language: "/en/services/" -> "/services", "/about" -> "/en/about"
export function alternateLanguagePath(pathname: string, target: Language) {
  const withoutPrefix = pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/+$/, "") || "/"
  return localizedHref(target, withoutPrefix)
}
