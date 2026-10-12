import type { Metadata } from "next"
import { SITE_URL, site } from "@/lib/site"
import type { Language } from "@/lib/i18n"
import { languageAlternates, pagePath, type PageKey } from "@/lib/routes"

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
      title: "Fisioterapia a Imola e Portomaggiore | Dr. Luca Mottaran",
      absolute: true,
      description: "Riabilitazione ortopedica, terapia manuale, massaggio sportivo, rieducazione posturale, tecarterapia, laser Yag e onde d'urto a Imola e Portomaggiore.",
    },
    approach: {
      title: "Come lavoro: dalla valutazione al recupero",
      description: "Dalla prima visita al recupero: valutazione completa, trattamento personalizzato e monitoraggio dei progressi con il Dott. Luca Mottaran.",
    },
    imola: {
      title: "Fisioterapista a Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Fisioterapista a Imola in Via Banfi 42: fisioterapia sportiva, riabilitazione post operatoria, terapia manuale e onde d'urto. Solo su appuntamento.",
    },
    portomaggiore: {
      title: "Fisioterapista a Portomaggiore | Dr. Luca Mottaran",
      absolute: true,
      description: "Fisioterapista a Gambulaga di Portomaggiore (FE), in Via Gambulaga Masi 104: riabilitazione, terapia manuale e fisioterapia sportiva. Solo su appuntamento.",
    },
    sports: {
      title: "Fisioterapia sportiva a Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Fisioterapia sportiva a Imola e Portomaggiore: recupero dagli infortuni, ritorno allo sport, prevenzione e massaggio sportivo con il Dott. Luca Mottaran.",
    },
    postop: {
      title: "Riabilitazione post operatoria a Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Riabilitazione dopo protesi di anca, ginocchio e spalla, ricostruzione del crociato e della cuffia dei rotatori, a Imola e Portomaggiore.",
    },
    manual: {
      title: "Terapia manuale e ATM a Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Terapia manuale e manipolazione miofasciale per mal di schiena, cervicale, dolore alla mandibola (ATM) e mal di testa, a Imola e Portomaggiore.",
    },
    instrumental: {
      title: "Onde d'urto, tecarterapia e laser a Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Onde d'urto, tecarterapia, laser Yag ad alta potenza, ultrasuoni ed ecografia a Imola e Portomaggiore, sempre dentro un percorso di fisioterapia.",
    },
  },
  en: {
    home: {
      title: "Dr. Luca Mottaran | Physiotherapist in Imola, Italy",
      absolute: true,
      description: "Dr. Luca Mottaran, physiotherapist in Imola, Italy. Sports and post surgical rehab, manual therapy and physio support for motorsport teams at the Imola circuit.",
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
    imola: {
      title: "Physiotherapist in Imola, Italy | Dr. Luca Mottaran",
      absolute: true,
      description: "Physiotherapist in Imola, Italy, at Via Banfi 42: sports physiotherapy, rehab after surgery, manual therapy and shockwave therapy. By appointment only.",
    },
    portomaggiore: {
      title: "Physiotherapist in Portomaggiore, Ferrara | Dr. Luca Mottaran",
      absolute: true,
      description: "Physiotherapist in Gambulaga, Portomaggiore (Ferrara), at Via Gambulaga Masi 104: rehabilitation, manual therapy and sports physiotherapy. By appointment only.",
    },
    sports: {
      title: "Sports physiotherapy in Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Sports physiotherapy in Imola: injury recovery, return to sport, injury prevention and sports massage, including support for teams at the Imola circuit.",
    },
    postop: {
      title: "Rehabilitation after surgery in Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Rehabilitation after hip, knee and shoulder replacement, ACL reconstruction and rotator cuff repair, in Imola and Portomaggiore, Italy.",
    },
    manual: {
      title: "Manual therapy and TMJ treatment in Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Manual therapy and myofascial manipulation for back and neck pain, jaw pain (TMJ) and headaches, in Imola and Portomaggiore, Italy.",
    },
    instrumental: {
      title: "Shockwave, Tecar and laser therapy in Imola | Dr. Luca Mottaran",
      absolute: true,
      description: "Shockwave therapy, Tecar therapy, high power Yag laser and ultrasound in Imola and Portomaggiore, always as part of a physiotherapy plan.",
    },
  },
}

const ogLocale: Record<Language, string> = { it: "it_IT", en: "en_US" }

const ogAlt: Record<Language, string> = {
  it: "Dr. Luca Mottaran, fisioterapista e chinesiologo a Imola e Portomaggiore",
  en: "Dr. Luca Mottaran, physiotherapist and kinesiologist in Imola and Portomaggiore",
}

export function ogImage(lang: Language) {
  return { url: site.ogImage[lang], width: 1200, height: 630, alt: ogAlt[lang] }
}

// Shared by both root layouts ("/" Italian, "/en" English).
export function rootMetadata(lang: Language): Metadata {
  const { title, description } = pages[lang].home
  return {
    metadataBase: new URL(SITE_URL),
    // Pages set their own title/description via pageMetadata(); these
    // defaults only apply to routes without one (e.g. the 404 page).
    title: { default: title, template: "%s | Dr. Luca Mottaran" },
    description,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale[lang],
      images: [ogImage(lang)],
    },
  }
}

export function pageMetadata(lang: Language, page: PageKey): Metadata {
  const { title, absolute, description } = pages[lang][page]
  const path = pagePath(lang, page)

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path, languages: languageAlternates(page) },
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
