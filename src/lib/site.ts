// Single source of truth for the practice's identity, contact details and
// the public site URL. Metadata, sitemap, structured data and contact blocks
// should read from here so name, address and phone never drift apart.
//
// The URL comes from NEXT_PUBLIC_SITE_URL so moving off the current test
// domain (see public/CNAME) is a one-line change. No trailing slash.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://whodriving.com").replace(/\/+$/, "")

export const site = {
  name: "Dr. Luca Mottaran",
  personName: "Luca Mottaran",
  alternateNames: ["Dott. Luca Mottaran", "Dottor Luca Mottaran", "Dr. Luca Mottaran"],
  phone: "+393661459269",
  phoneDisplay: "+39 366 145 9269",
  email: "lucamottaran99@gmail.com",
  portrait: "/images/luca-mottaran-fisioterapista.jpg",
  // 1200x630 share card, generated from the portrait.
  ogImage: "/og.jpg",
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
    },
    {
      id: "portomaggiore",
      label: "Gambulaga, Portomaggiore",
      streetAddress: "Via Gambulaga Masi 104",
      postalCode: "44015",
      locality: "Portomaggiore",
      region: "FE",
      country: "IT",
    },
  ],
  // Every day, by appointment only.
  hours: { opens: "08:00", closes: "18:00" },
} as const

export type Location = (typeof site.locations)[number]

// "Via Banfi 42, 40026 Imola (BO)"
export function formatAddress(location: Location) {
  return `${location.streetAddress}, ${location.postalCode} ${location.locality} (${location.region})`
}

// Points at the exact street address rather than just the town.
export function mapsUrl(location: Location) {
  const query = `${location.streetAddress}, ${location.postalCode} ${location.locality} ${location.region}, Italia`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
