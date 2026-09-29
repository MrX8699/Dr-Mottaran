import type { Metadata } from "next"
import { site } from "@/lib/site"

type Language = "it" | "en"
type PageKey = "home" | "about" | "services" | "approach"

// Paths carry a trailing slash to match the static export's
// `trailingSlash: true`, so canonicals point at the URLs GitHub Pages serves.
const paths: Record<PageKey, string> = {
  home: "/",
  about: "/about/",
  services: "/services/",
  approach: "/approach/",
}

// `absolute` titles already contain the name and skip the root
// "%s | Dr. Luca Mottaran" template; the others get it appended.
const pages: Record<Language, Record<PageKey, { title: string; absolute?: boolean; description: string }>> = {
  it: {
    home: {
      title: "Dr. Luca Mottaran | Fisioterapista e Chinesiologo a Imola",
      absolute: true,
      description: "Dr. Luca Mottaran, fisioterapista e chinesiologo a Imola e Portomaggiore. Riabilitazione sportiva e post operatoria, terapia manuale e onde d'urto.",
    },
    about: {
      title: "Chi è il Dott. Luca Mottaran | Fisioterapista",
      absolute: true,
      description: "Il Dott. Luca Mottaran, fisioterapista, chinesiologo ed ex nuotatore agonista. Collabora con Imola Nuoto, International Imola e team di motorsport endurance.",
    },
    services: {
      title: "Servizi di fisioterapia a Imola e Portomaggiore",
      description: "Riabilitazione ortopedica, terapia manuale, massaggio sportivo, rieducazione posturale, tecarterapia, laser Yag e onde d'urto a Imola e Portomaggiore.",
    },
    approach: {
      title: "Come lavoro: dalla valutazione al recupero",
      description: "Dalla prima visita al recupero: valutazione completa, trattamento personalizzato e monitoraggio dei progressi con il Dott. Luca Mottaran.",
    },
  },
  en: {
    home: {
      title: "Dr. Luca Mottaran | Physiotherapist in Imola, Italy",
      absolute: true,
      description: "Dr. Luca Mottaran, physiotherapist and kinesiologist in Imola and Portomaggiore, Italy. Sports and post surgical rehab, manual therapy and shockwave therapy.",
    },
    about: {
      title: "About Dr. Luca Mottaran | Sports Physiotherapist",
      absolute: true,
      description: "Dr. Luca Mottaran, physiotherapist, kinesiologist and former competitive swimmer, working with Imola Nuoto, International Imola and endurance racing teams.",
    },
    services: {
      title: "Physiotherapy services in Imola",
      description: "Orthopedic rehabilitation, manual therapy, sports massage, postural rehabilitation, Tecar therapy, Yag laser and shockwave therapy in Imola, Italy.",
    },
    approach: {
      title: "How I work: from assessment to recovery",
      description: "From first visit to full recovery: thorough assessment, tailored treatment and ongoing progress checks with Dr. Luca Mottaran.",
    },
  },
}

const ogLocale: Record<Language, string> = { it: "it_IT", en: "en_US" }

const ogAlt: Record<Language, string> = {
  it: "Dr. Luca Mottaran, fisioterapista e chinesiologo a Imola e Portomaggiore",
  en: "Dr. Luca Mottaran, physiotherapist and kinesiologist in Imola and Portomaggiore",
}

export function ogImage(lang: Language) {
  return { url: site.ogImage, width: 1200, height: 630, alt: ogAlt[lang] }
}

export function pageMetadata(lang: Language, page: PageKey): Metadata {
  const { title, absolute, description } = pages[lang][page]
  const path = paths[page]

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    // Next replaces (does not merge) the parent's openGraph object, so the
    // shared fields are repeated here rather than relying on the root layout.
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale[lang],
      url: path,
      title,
      description,
      images: [ogImage(lang)],
    },
  }
}

export const sitemapPaths = Object.values(paths)
