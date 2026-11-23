import { Card } from "@/components/ui/card"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { getTranslation } from "@/lib/translations"
import type { Language } from "@/lib/i18n"
import { site, formatAddress } from "@/lib/site"

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1)

// Structure of the privacy policy (/privacy/). Its text lives in
// translations.ts under "privacy.": a section { id: "rights", paragraphs: 1,
// items: 6 } reads .rights.title, .rights.p1 and .rights.item1 to
// .rights.item6. Links point at the official pages a section refers to and
// are labelled by privacy.link.<key>.
//
// The policy describes what the site actually does: no cookies, no browser
// storage, cookieless visit statistics with Umami (the only other domain the
// pages load from, see Analytics.tsx), contact only through WhatsApp, email
// and phone. Update it before adding anything that changes that (see
// "Privacy" in README.md).
type PrivacySection = {
  id: string
  paragraphs: number
  items?: number
  // Shows the controller's contact details from site.ts after the text.
  controllerDetails?: boolean
  links?: { key: string; href: string }[]
}

const sections: PrivacySection[] = [
  { id: "controller", paragraphs: 1, controllerDetails: true },
  {
    id: "browsing",
    paragraphs: 3,
    links: [
      { key: "githubPages", href: "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" },
      { key: "github", href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" },
    ],
  },
  { id: "contact", paragraphs: 3, links: [{ key: "whatsapp", href: "https://www.whatsapp.com/legal/privacy-policy-eea" }] },
  { id: "email", paragraphs: 2, links: [{ key: "google", href: "https://policies.google.com/privacy" }] },
  { id: "health", paragraphs: 2 },
  { id: "external", paragraphs: 1 },
  { id: "analytics", paragraphs: 3, links: [{ key: "umami", href: "https://umami.is/privacy" }] },
  {
    id: "cookies",
    paragraphs: 2,
    links: [{ key: "cookieGuidelines", href: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876" }],
  },
  { id: "recipients", paragraphs: 2 },
  { id: "transfers", paragraphs: 1 },
  { id: "retention", paragraphs: 0, items: 4 },
  { id: "required", paragraphs: 1 },
  { id: "rights", paragraphs: 1, items: 6 },
  { id: "exercise", paragraphs: 2, links: [{ key: "garante", href: "https://www.garanteprivacy.it" }] },
  { id: "changes", paragraphs: 1 },
]

// A server component: the language is passed in by the route.
export function PrivacyContent({ lang }: { lang: Language }) {
  const t = (key: string) => getTranslation(lang, key)

  return (
    <div className="min-h-screen">
      <Nav />

      <main>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4">{t("privacy.title")}</h1>
          <p className="text-lg sm:text-xl text-white/90 mb-4">{t("privacy.subtitle")}</p>
          <p className="text-sm text-white/70">{t("privacy.updated")}</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
            {range(3).map((n) => (
              <p key={n}>{t(`privacy.intro.p${n}`)}</p>
            ))}
          </div>

          <Card className="mt-8 p-6 shadow-none">
            <h2 className="font-semibold text-foreground mb-3">{t("privacy.contents")}</h2>
            <ol className="space-y-1.5 list-decimal list-inside marker:text-primary/50">
              {sections.map(({ id }) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-primary hover:text-primary/80 transition-colors">{t(`privacy.${id}.title`)}</a>
                </li>
              ))}
            </ol>
          </Card>

          <div className="mt-10 space-y-10">
            {sections.map(({ id, paragraphs, items = 0, controllerDetails, links }) => (
              <section key={id} id={id} className="scroll-mt-24">
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">{t(`privacy.${id}.title`)}</h2>
                {paragraphs > 0 && (
                  <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                    {range(paragraphs).map((n) => (
                      <p key={n}>{t(`privacy.${id}.p${n}`)}</p>
                    ))}
                  </div>
                )}
                {items > 0 && (
                  <ul className="mt-4 space-y-2 text-lg leading-relaxed text-foreground/80 list-disc pl-6 marker:text-primary/40">
                    {range(items).map((n) => (
                      <li key={n}>{t(`privacy.${id}.item${n}`)}</li>
                    ))}
                  </ul>
                )}
                {controllerDetails && (
                  <dl className="mt-4 grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-1 sm:gap-y-3 text-lg text-foreground/80">
                    <dt className="font-semibold text-foreground">{t("privacy.controller.email")}</dt>
                    <dd className="mb-3 sm:mb-0 break-words">
                      <a href={`mailto:${site.email}`} className="text-primary hover:text-primary/80 transition-colors">{site.email}</a>
                    </dd>
                    <dt className="font-semibold text-foreground">{t("privacy.controller.phone")}</dt>
                    <dd className="mb-3 sm:mb-0">
                      <a href={`tel:${site.phone}`} className="text-primary hover:text-primary/80 transition-colors">{site.phoneDisplay}</a>
                    </dd>
                    <dt className="font-semibold text-foreground">{t("privacy.controller.locations")}</dt>
                    <dd>
                      {site.locations.map((location) => (
                        <span key={location.id} className="block">{formatAddress(location)}</span>
                      ))}
                    </dd>
                  </dl>
                )}
                {links && (
                  <ul className="mt-4 space-y-2">
                    {links.map(({ key, href }) => (
                      <li key={key}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          {t(`privacy.link.${key}`)}
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
