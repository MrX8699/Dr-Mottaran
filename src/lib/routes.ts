import { localizedHref, type Language } from "@/lib/i18n"

// Every page of the site and its URL. Kept apart from seo.ts so client
// components (nav links, footer) can build links without pulling in all the
// page titles and descriptions.

// Landing pages for local and service searches ("fisioterapista imola",
// "onde d'urto imola"); their layout lives in src/lib/landingPages.ts
// and their titles and descriptions in src/lib/seo.ts.
export type LocationKey = "imola" | "portomaggiore"
export type ServiceKey = "sports" | "postop" | "manual" | "instrumental"
export type LandingKey = LocationKey | ServiceKey
export type PageKey = "home" | "about" | "services" | "approach" | LandingKey

// Service pages live under /services/<slug>/. The Italian slug is used in
// both languages because Italian is the main search market.
export const serviceSlugs: Record<ServiceKey, string> = {
  sports: "fisioterapia-sportiva",
  postop: "riabilitazione-post-operatoria",
  manual: "terapia-manuale-atm",
  instrumental: "onde-urto-tecarterapia-laser",
}

export function serviceKeyFromSlug(slug: string): ServiceKey | undefined {
  return (Object.keys(serviceSlugs) as ServiceKey[]).find((key) => serviceSlugs[key] === slug)
}

// Paths carry a trailing slash to match the static export's
// `trailingSlash: true`, so canonicals point at the URLs GitHub Pages serves.
const paths: Record<PageKey, string> = {
  home: "/",
  about: "/about/",
  services: "/services/",
  approach: "/approach/",
  imola: "/imola/",
  portomaggiore: "/portomaggiore/",
  sports: `/services/${serviceSlugs.sports}/`,
  postop: `/services/${serviceSlugs.postop}/`,
  manual: `/services/${serviceSlugs.manual}/`,
  instrumental: `/services/${serviceSlugs.instrumental}/`,
}

export const pagePath = (lang: Language, page: PageKey) => localizedHref(lang, paths[page])

// hreflang alternates for a page; Italian is the default for other languages.
export function languageAlternates(page: PageKey) {
  return {
    it: pagePath("it", page),
    en: pagePath("en", page),
    "x-default": pagePath("it", page),
  }
}

export const pageKeys = Object.keys(paths) as PageKey[]
