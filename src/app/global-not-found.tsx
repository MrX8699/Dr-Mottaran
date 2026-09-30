import type { Metadata } from "next"
import Link from "next/link"
import { RootDocument } from "@/components/RootDocument"
import { Button } from "@/components/ui/button"
import { getTranslation } from "@/lib/translations"
import { localizedHref, type Language } from "@/lib/i18n"
import { site } from "@/lib/site"

// With two root layouts ("/" and "/en") there is no single layout to render
// a 404 inside, so this full document serves every unknown URL (it becomes
// 404.html in the static export). It can't know the visitor's language, so
// it speaks both. (Next already marks 404 pages noindex.)
export const metadata: Metadata = {
  title: `${getTranslation("it", "notFound.title")} | ${site.name}`,
}

const languages: Language[] = ["it", "en"]

export default function GlobalNotFound() {
  return (
    <RootDocument lang="it" withStructuredData={false}>
      <main className="min-h-screen flex items-center justify-center bg-muted px-4 py-16">
        <div className="max-w-xl w-full text-center">
          <Link href="/" className="font-serif text-2xl font-medium text-primary">
            {site.name}
          </Link>
          <p className="font-serif text-7xl md:text-8xl font-medium text-foreground/20 mt-10 mb-6" aria-hidden="true">
            404
          </p>
          <div className="space-y-6">
            {languages.map((lang, i) => {
              const Heading = i === 0 ? "h1" : "h2"
              return (
                <section key={lang} lang={lang}>
                  <Heading className="font-serif text-3xl font-medium text-foreground mb-2">
                    {getTranslation(lang, "notFound.title")}
                  </Heading>
                  <p className="text-foreground/75">{getTranslation(lang, "notFound.text")}</p>
                </section>
              )
            })}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            {languages.map((lang) => (
              <Button key={lang} asChild variant={lang === "it" ? "default" : "outline"}>
                <Link href={localizedHref(lang, "/")} lang={lang}>
                  {getTranslation(lang, "notFound.home")}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </main>
    </RootDocument>
  )
}
