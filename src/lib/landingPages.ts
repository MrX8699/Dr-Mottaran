import type { LandingKey, ServiceKey } from "@/lib/routes"

// Structure of the landing pages: /imola/, /portomaggiore/ and the pages
// under /services/. Their text lives in translations.ts under
// "landing.<page>.": every page has .name (H1, breadcrumb and link label),
// .intro (under the H1) and .summary (under links pointing to the page).
// A section { id: "how", paragraphs: 2, items: 3 } reads .how.title,
// .how.p1, .how.p2 and .how.item1 to .how.item3; faq: 2 reads .faq.q1,
// .faq.a1, .faq.q2 and .faq.a2.
export type LandingSection = {
  id: string
  paragraphs: number
  items?: number
  // Cards linking to other landing pages, shown after the paragraphs.
  links?: LandingKey[]
}

export type LandingPage = {
  kind: "location" | "service"
  // Hero background photo; without one the hero uses the brand color.
  hero?: string
  sections: LandingSection[]
  faq: number
  related: LandingKey[]
}

export const serviceKeys: ServiceKey[] = ["sports", "postop", "manual", "instrumental"]

export const landingPages: Record<LandingKey, LandingPage> = {
  imola: {
    kind: "location",
    sections: [
      { id: "services", paragraphs: 1, links: serviceKeys },
      { id: "sport", paragraphs: 1 },
      { id: "booking", paragraphs: 1 },
    ],
    faq: 4,
    related: ["portomaggiore"],
  },
  portomaggiore: {
    kind: "location",
    sections: [
      { id: "services", paragraphs: 1, links: serviceKeys },
      { id: "area", paragraphs: 1 },
      { id: "booking", paragraphs: 1 },
    ],
    faq: 4,
    related: ["imola"],
  },
  sports: {
    kind: "service",
    hero: "/images/Calia_Derapata.jpg",
    sections: [
      { id: "who", paragraphs: 1 },
      { id: "how", paragraphs: 1, items: 6 },
      { id: "experience", paragraphs: 2 },
    ],
    faq: 0,
    related: ["postop", "manual", "instrumental"],
  },
  postop: {
    kind: "service",
    hero: "/images/terapia_rullo.jpg",
    sections: [
      { id: "when", paragraphs: 1, items: 5 },
      { id: "how", paragraphs: 2 },
      { id: "tools", paragraphs: 1 },
    ],
    faq: 0,
    related: ["sports", "manual", "instrumental"],
  },
  manual: {
    kind: "service",
    hero: "/images/fisioterapia-valutazione-spalla.webp",
    sections: [
      { id: "what", paragraphs: 2 },
      { id: "tmj", paragraphs: 2 },
      { id: "problems", paragraphs: 1, items: 6 },
    ],
    faq: 0,
    related: ["instrumental", "postop", "sports"],
  },
  instrumental: {
    kind: "service",
    hero: "/images/lata-masi.webp",
    sections: [
      { id: "shockwave", paragraphs: 1 },
      { id: "tecar", paragraphs: 1 },
      { id: "laser", paragraphs: 1 },
      { id: "ultrasound", paragraphs: 1 },
      { id: "when", paragraphs: 1 },
    ],
    faq: 0,
    related: ["manual", "sports", "postop"],
  },
}
