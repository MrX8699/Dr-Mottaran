'use client'

import Link from "next/link"
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="min-h-screen">
      <Nav active="services" />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-32 pb-12"
        style={{ backgroundImage: "url('/images/Calia_Piega.webp')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '34vh' }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/images/Calia_Piega.webp" alt="Services background - Calia Piega" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4">{t('servicesPage.title')}</h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">{t('servicesPage.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Orthopedic and Post-Traumatic Rehabilitation */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.orthopedic.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.orthopedic.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.orthopedic.item1')}</li>
                <li>{t('servicesPage.orthopedic.item2')}</li>
                <li>{t('servicesPage.orthopedic.item3')}</li>
                <li>{t('servicesPage.orthopedic.item4')}</li>
              </ul>
            </Card>

            {/* Manual Therapy */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.manual.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.manual.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.manual.item1')}</li>
                <li>{t('servicesPage.manual.item2')}</li>
                <li>{t('servicesPage.manual.item3')}</li>
                <li>{t('servicesPage.manual.item4')}</li>
              </ul>
            </Card>

            {/* Sports Massage */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.sportsMassage.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.sportsMassage.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.sportsMassage.item1')}</li>
                <li>{t('servicesPage.sportsMassage.item2')}</li>
                <li>{t('servicesPage.sportsMassage.item3')}</li>
                <li>{t('servicesPage.sportsMassage.item4')}</li>
              </ul>
            </Card>

            {/* Functional Postural Re-education */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.postural.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.postural.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.postural.item1')}</li>
                <li>{t('servicesPage.postural.item2')}</li>
                <li>{t('servicesPage.postural.item3')}</li>
                <li>{t('servicesPage.postural.item4')}</li>
              </ul>
            </Card>

            {/* Kinesiology Consulting */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.kinesiology.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.kinesiology.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.kinesiology.item1')}</li>
                <li>{t('servicesPage.kinesiology.item2')}</li>
                <li>{t('servicesPage.kinesiology.item3')}</li>
                <li>{t('servicesPage.kinesiology.item4')}</li>
              </ul>
            </Card>

            {/* Personal Training */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.training.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.training.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.training.item1')}</li>
                <li>{t('servicesPage.training.item2')}</li>
                <li>{t('servicesPage.training.item3')}</li>
                <li>{t('servicesPage.training.item4')}</li>
              </ul>
            </Card>

            {/* Injury Prevention */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.prevention.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.prevention.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.prevention.item1')}</li>
                <li>{t('servicesPage.prevention.item2')}</li>
                <li>{t('servicesPage.prevention.item3')}</li>
                <li>{t('servicesPage.prevention.item4')}</li>
              </ul>
            </Card>

            {/* Recovery Pathways */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.recovery.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.recovery.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.recovery.item1')}</li>
                <li>{t('servicesPage.recovery.item2')}</li>
                <li>{t('servicesPage.recovery.item3')}</li>
                <li>{t('servicesPage.recovery.item4')}</li>
              </ul>
            </Card>

            {/* Physiotherapy for Older Adults */}
            <Card className="p-6 shadow-none">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('servicesPage.geriatric.title')}</h3>
              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{t('servicesPage.geriatric.description')}</p>
              <ul className="space-y-1.5 text-sm text-foreground/60 list-disc list-inside marker:text-primary/40">
                <li>{t('servicesPage.geriatric.item1')}</li>
                <li>{t('servicesPage.geriatric.item2')}</li>
                <li>{t('servicesPage.geriatric.item3')}</li>
                <li>{t('servicesPage.geriatric.item4')}</li>
              </ul>
            </Card>

          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">{t('servicesPage.gallery.title')}</h2>
            <p className="text-lg text-foreground/75">{t('servicesPage.gallery.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/servizio-terapia-manuale.jpg"
                alt={t('servicesPage.gallery.manual')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl">{t('servicesPage.gallery.manual')}</h3>
                <p className="text-white/80 text-sm">{t('servicesPage.gallery.manual.subtitle')}</p>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/servizio-riabilitazione.jpg"
                alt={t('servicesPage.gallery.rehab')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl">{t('servicesPage.gallery.rehab')}</h3>
                <p className="text-white/80 text-sm">{t('servicesPage.gallery.rehab.subtitle')}</p>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/motta studio.jpg"
                alt={t('servicesPage.gallery.assessment')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl">{t('servicesPage.gallery.assessment')}</h3>
                <p className="text-white/80 text-sm">{t('servicesPage.gallery.assessment.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* CTA Section */}
  <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-foreground">{t('servicesPage.cta.title')}</h2>
          <p className="text-lg text-foreground/75 mb-8">{t('servicesPage.cta.subtitle')}</p>
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
              {t('servicesPage.cta.whatsapp')}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-primary/5 text-primary px-8 py-3 rounded-md font-medium border border-primary transition-colors"
            >
              {t('servicesPage.cta.book')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
