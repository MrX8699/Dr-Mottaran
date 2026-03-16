"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export default function ApproachPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Dr. Luca Mottaran</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">{t('nav.about')}</Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">{t('nav.services')}</Link>
              <Link href="/approach" className="text-primary font-semibold">{t('nav.approach')}</Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">{t('nav.contact')}</Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-16"
        style={{ backgroundImage: "url('/images/Calia_Piega.webp')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '40vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/images/Calia_Piega.webp" alt="Approach background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('approach.title')}</h1>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">{t('approach.heading')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('approach.heading')}</h2>
              <p className="text-lg leading-relaxed mb-6">{t('approach.intro')}</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{t('approach.step1.title')}</h4>
                    <p className="text-white/80">{t('approach.step1.description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{t('approach.step2.title')}</h4>
                    <p className="text-white/80">{t('approach.step2.description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{t('approach.step3.title')}</h4>
                    <p className="text-white/80">{t('approach.step3.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-6">
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <Image src="/images/Cera Medaglia.webp" alt="Approach image" fill className="object-cover" />
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">{t('aboutPage.cta.title')}</h3>
            <p className="text-white/90 mb-6">{t('aboutPage.cta.subtitle')}</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/393661459269"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded-lg font-semibold"
              >
                {t('aboutPage.cta.whatsapp')}
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border-2 border-white/20">
                {t('aboutPage.cta.book')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
