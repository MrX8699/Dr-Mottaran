"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { withBasePath } from "@/lib/basePath"

const approachImages = [
  withBasePath("/images/motta-pit-walk.jpeg"),
  withBasePath("/images/motta-cinque-cera.jpeg"),
  withBasePath("/images/motta-haga.jpeg"),
]

export default function ApproachPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % approachImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      <Nav active="approach" />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-12"
        style={{ backgroundImage: `url('${withBasePath('/images/Fieda Nuoto.jpg')}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '32vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image src={withBasePath("/images/Fieda Nuoto.jpg")} alt="Approach background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4">{t('approach.title')}</h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">{t('approach.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

  {/* Content */}
  <section className="py-12 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{t('approach.heading')}</h2>
              <p className="text-lg leading-relaxed mb-6 text-foreground/80">{t('approach.intro')}</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-base font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t('approach.step1.title')}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{t('approach.step1.description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-base font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t('approach.step2.title')}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{t('approach.step2.description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-base font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t('approach.step3.title')}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{t('approach.step3.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-md">
              {approachImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt="Approach image"
                  fill
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    index === activeImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

  {/* CTA Section */}
  <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-foreground">{t('approach.cta.title')}</h2>
          <p className="text-lg text-foreground/75 mb-8">{t('aboutPage.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393661459269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:brightness-95 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t('aboutPage.cta.whatsapp')}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-primary/5 text-primary px-8 py-3 rounded-md font-medium border border-primary transition-colors"
            >
              {t('aboutPage.cta.book')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
