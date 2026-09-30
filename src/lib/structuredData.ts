import { SITE_URL, site, mapsUrl } from "@/lib/site"
import { localizedHref, type Language } from "@/lib/i18n"

// Every value here must match something visible on the site (Google's
// structured data guidelines). No ratings, reviews or awards.
export const ids = {
  website: `${SITE_URL}/#website`,
  person: `${SITE_URL}/#luca-mottaran`,
  location: (id: string) => `${SITE_URL}/#studio-${id}`,
}

const jobTitle: Record<Language, string> = {
  it: "Fisioterapista e Chinesiologo",
  en: "Physiotherapist and Kinesiologist",
}

const knowsAbout: Record<Language, string[]> = {
  it: ["Fisioterapia sportiva", "Riabilitazione ortopedica e post operatoria", "Terapia manuale", "Massaggio sportivo", "Rieducazione posturale", "Chinesiologia"],
  en: ["Sports physiotherapy", "Orthopedic and post surgical rehabilitation", "Manual therapy", "Sports massage", "Postural rehabilitation", "Kinesiology"],
}

const byAppointment: Record<Language, string> = {
  it: "Solo su appuntamento.",
  en: "By appointment only.",
}

const inLanguage: Record<Language, string> = { it: "it-IT", en: "en" }

export function siteGraph(lang: Language) {
  const website = {
    "@type": "WebSite",
    "@id": ids.website,
    url: `${SITE_URL}/`,
    name: site.name,
    alternateName: ["Dott. Luca Mottaran", "Luca Mottaran Fisioterapista"],
    inLanguage: [inLanguage.it, inLanguage.en],
    publisher: { "@id": ids.person },
  }

  const person = {
    "@type": "Person",
    "@id": ids.person,
    name: site.personName,
    honorificPrefix: "Dott.",
    alternateName: site.alternateNames,
    jobTitle: jobTitle[lang],
    url: `${SITE_URL}/about/`,
    image: `${SITE_URL}${site.portrait}`,
    telephone: site.phone,
    email: site.email,
    knowsAbout: knowsAbout[lang],
    sameAs: site.sameAs,
    worksFor: site.locations.map((location) => ({ "@id": ids.location(location.id) })),
  }

  const locations = site.locations.map((location) => ({
    "@type": "Physiotherapy",
    "@id": ids.location(location.id),
    name: `${site.name} (${location.label})`,
    description: `${jobTitle[lang]}. ${byAppointment[lang]}`,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${site.portrait}`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      postalCode: location.postalCode,
      addressLocality: location.locality,
      addressRegion: location.region,
      addressCountry: location.country,
    },
    hasMap: mapsUrl(location),
    areaServed: { "@type": "City", name: location.locality },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    employee: { "@id": ids.person },
    sameAs: site.sameAs,
  }))

  return {
    "@context": "https://schema.org",
    "@graph": [website, person, ...locations],
  }
}

// Marks the about page as the page that is about Luca Mottaran.
export function profilePageGraph(lang: Language, title: string) {
  const url = `${SITE_URL}${localizedHref(lang, "/about/")}`
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profilepage`,
    url,
    name: title,
    inLanguage: inLanguage[lang],
    isPartOf: { "@id": ids.website },
    mainEntity: { "@id": ids.person },
  }
}
