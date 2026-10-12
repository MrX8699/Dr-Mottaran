import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { JsonLd } from "@/components/JsonLd"
import { MoreLink } from "@/components/MoreLink"
import { getTranslation } from "@/lib/translations"
import { localizedHref, type Language } from "@/lib/i18n"
import { pagePath, type LandingKey } from "@/lib/routes"
import { landingPages } from "@/lib/landingPages"
import { site, formatAddress, mapsUrl } from "@/lib/site"
import { breadcrumbGraph } from "@/lib/structuredData"
import { withBasePath } from "@/lib/basePath"
import { whatsappUrl } from "@/lib/whatsapp"

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1)

// Shared template for the location pages (/imola/, /portomaggiore/) and the
// service pages (/services/<slug>/). Structure comes from landingPages.ts,
// text from translations.ts. A server component: the language is passed in
// by the route rather than read from context.
export function LandingContent({ lang, page }: { lang: Language; page: LandingKey }) {
  const t = (key: string) => getTranslation(lang, key)
  const k = (suffix: string) => t(`landing.${page}.${suffix}`)
  const { kind, hero, sections, faq, related } = landingPages[page]

  const crumbs = [
    { name: t("landing.home"), path: localizedHref(lang, "/") },
    ...(kind === "service" ? [{ name: t("nav.services"), path: pagePath(lang, "services") }] : []),
    { name: k("name"), path: pagePath(lang, page) },
  ]

  const linkCard = (key: LandingKey) => (
    <Link key={key} href={pagePath(lang, key)} className="group block h-full">
      <Card className="h-full p-5 shadow-none transition-colors group-hover:border-primary">
        <h3 className="text-lg font-semibold text-foreground mb-1">{t(`landing.${key}.name`)}</h3>
        <p className="text-sm text-foreground/70 leading-relaxed mb-3">{t(`landing.${key}.summary`)}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
          {t("landing.more")}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </Card>
    </Link>
  )

  return (
    <div className="min-h-screen">
      <JsonLd data={breadcrumbGraph(crumbs)} />
      <Nav active={kind === "service" ? "services" : undefined} />

      <main>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 bg-secondary" style={hero ? { minHeight: '34vh' } : undefined}>
        {hero && (
          <div className="absolute inset-0 z-0">
            <Image src={withBasePath(hero)} alt="" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
        )}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label={t("landing.breadcrumb")} className="mb-6 text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((crumb, i) => (
                <li key={crumb.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">›</span>}
                  {i < crumbs.length - 1 ? (
                    <Link href={crumb.path} className="hover:text-white transition-colors">{crumb.name}</Link>
                  ) : (
                    <span aria-current="page" className="text-white">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4">{k("name")}</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl">{k("intro")}</p>
        </div>
      </section>

      {/* Content and booking box */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {sections.map(({ id, paragraphs, items = 0, links }) => (
              <section key={id}>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">{k(`${id}.title`)}</h2>
                <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                  {range(paragraphs).map((n) => (
                    <p key={n}>{k(`${id}.p${n}`)}</p>
                  ))}
                </div>
                {items > 0 && (
                  <ul className="mt-4 space-y-2 text-foreground/75 list-disc list-inside marker:text-primary/40">
                    {range(items).map((n) => (
                      <li key={n}>{k(`${id}.item${n}`)}</li>
                    ))}
                  </ul>
                )}
                {links && (
                  <>
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">{links.map(linkCard)}</div>
                    <MoreLink href={pagePath(lang, "services")} className="mt-6">{t("services.viewAll")}</MoreLink>
                  </>
                )}
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 self-start">
            <Card className="p-6 shadow-none">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-2">{t("landing.book.title")}</h2>
              <p className="text-foreground/75 mb-5">{t("landing.book.text")}</p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:brightness-95 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {t("hero.whatsapp")}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="mt-3 w-full inline-flex items-center justify-center gap-3 border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-md font-medium transition-colors"
              >
                {site.phoneDisplay}
              </a>
              <p className="mt-4 text-sm text-foreground/70">{t("contact.hours")}</p>

              <h3 className="font-semibold text-foreground mt-6 mb-3">{t("contact.locations.title")}</h3>
              <ul className="space-y-4">
                {site.locations.map((location) => (
                  <li key={location.id}>
                    {location.id === page ? (
                      <p className="font-medium text-foreground">{location.label}</p>
                    ) : (
                      <Link href={pagePath(lang, location.id)} className="font-medium text-primary hover:text-primary/80 transition-colors">
                        {location.label}
                      </Link>
                    )}
                    <address className="not-italic text-sm text-foreground/70">{formatAddress(location)}</address>
                    <a
                      href={mapsUrl(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      {t("contact.locations.directions")}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </section>

      {faq > 0 && (
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 text-center">{t("landing.faq.title")}</h2>
            <div className="space-y-3">
              {range(faq).map((n) => (
                <details key={n} className="group rounded-xl border border-border bg-card p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                    {k(`faq.q${n}`)}
                    <span className="text-2xl leading-none text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{k(`faq.a${n}`)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className={`py-12 ${faq > 0 ? "bg-background" : "bg-muted"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              {t(kind === "service" ? "landing.related.service" : "landing.related.location")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">{related.map(linkCard)}</div>
          </div>
        </section>
      )}

      </main>

      <Footer />
    </div>
  )
}
