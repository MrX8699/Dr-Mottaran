// Single source of truth for the practice's identity, contact details and
// the public site URL. Metadata, sitemap, structured data and contact blocks
// should read from here so name, address and phone never drift apart.
//
// The URL comes from NEXT_PUBLIC_SITE_URL so moving to another domain
// (see public/CNAME) is a one-line change. No trailing slash.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://drlucamottaran.it").replace(/\/+$/, "")

export const site = {
  name: "Dr. Luca Mottaran",
  personName: "Luca Mottaran",
  alternateNames: ["Dott. Luca Mottaran", "Dottor Luca Mottaran", "Dr. Luca Mottaran"],
  phone: "+393661459269",
  phoneDisplay: "+39 366 145 9269",
  email: "lucamottaran99@gmail.com",
  portrait: "/images/luca-mottaran-fisioterapista.jpg",
  // 1200x630 share cards, generated from the portrait.
  ogImage: { it: "/og.jpg", en: "/og-en.jpg" },
  sameAs: [
    "https://www.instagram.com/cn_motta_/",
    "https://www.linkedin.com/in/luca-mottaran-428050293/",
  ],
  locations: [
    {
      id: "imola",
      label: "Imola",
      streetAddress: "Via Banfi 42",
      postalCode: "40026",
      locality: "Imola",
      region: "BO",
      country: "IT",
      // Towns named on the studio's pages (structured data areaServed).
      areaServed: ["Imola"],
      // No Google Business Profile for this studio yet.
      googleMaps: null,
    },
    {
      id: "portomaggiore",
      label: "Gambulaga, Portomaggiore",
      streetAddress: "Via Gambulaga Masi 104",
      postalCode: "44015",
      locality: "Portomaggiore",
      region: "FE",
      country: "IT",
      areaServed: ["Portomaggiore", "Argenta", "Ostellato", "Ferrara"],
      // Luca's Google Business Profile for this studio. `url` is the stable
      // listing link (cid = the listing's place id); directions links and
      // structured data point at it. `reviewUrl` opens Google's "write a
      // review" form for the listing.
      googleMaps: {
        url: "https://www.google.com/maps?cid=2640465595987840174",
        reviewUrl: "https://g.page/r/Ca7MfkJ40aQkEBE/review",
      },
    },
  ],
  // Every day, by appointment only.
  hours: { opens: "08:00", closes: "18:00" },
  // Cookieless visit statistics (Umami Cloud, EU data region). The script is
  // only added to the pages when websiteId is set, and it only counts visits
  // on the domains listed, so `npm run dev` on localhost is never counted.
  // The privacy policy describes this ("privacy.analytics." in
  // translations.ts): keep the two in step.
  analytics: {
    scriptSrc: "https://cloud.umami.is/script.js",
    websiteId: "7a43aecc-4492-499a-bb8d-102728ed9bb2",
    domains: "drlucamottaran.it",
  },
} as const

export type Location = (typeof site.locations)[number]

// "Via Banfi 42, 40026 Imola (BO)"
export function formatAddress(location: Location) {
  return `${location.streetAddress}, ${location.postalCode} ${location.locality} (${location.region})`
}

// The studio's Google Maps listing when it has one (reviews, hours, photos),
// otherwise a search for the exact street address rather than just the town.
export function mapsUrl(location: Location) {
  if (location.googleMaps) return location.googleMaps.url
  const query = `${location.streetAddress}, ${location.postalCode} ${location.locality} ${location.region}, Italia`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
