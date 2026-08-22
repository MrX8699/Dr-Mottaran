'use client'

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <div className="min-h-screen">
      <Nav active="about" />

      {/* Hero Section with background image */}
      <section
        className="relative w-full"
        style={{ backgroundImage: "url('/images/Calia_Piega.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/busa_butterfly.jpg"
            alt="Clinic and movement background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="relative z-10 py-28 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center md:text-left mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">{t('aboutPage.title')}</h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl">
                {t('aboutPage.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">{t('aboutPage.journey.title')}</h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>{t('aboutPage.journey.p1')}</p>
                <p>{t('aboutPage.journey.p2')}</p>
                <p>{t('aboutPage.journey.p3')}</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Image placeholder - replace with /public/about-portrait.jpg or use next/image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/johnny-sins.webp"
                    alt="About portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Optionally a real Image component:
                  <Image src="/about-portrait.jpg" alt="About portrait" fill className="object-cover" />
                */}
              </div>
            </div>
          </div>

          {/* Athletic Background */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">{t('aboutPage.athletic.title')}</h2>
            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-primary/5">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t('aboutPage.athletic.heading')}</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-4">{t('aboutPage.athletic.p1')}</p>
                  <p className="text-lg text-foreground/80 leading-relaxed">{t('aboutPage.athletic.p2')}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('aboutPage.experience.title')}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('aboutPage.experience.motorsports.title')}</h3>
              <p className="text-white/90 leading-relaxed">{t('aboutPage.experience.motorsports.description')}</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('aboutPage.experience.swimming.title')}</h3>
              <p className="text-white/90 leading-relaxed">{t('aboutPage.experience.swimming.description')}</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('aboutPage.experience.basketball.title')}</h3>
              <p className="text-white/90 leading-relaxed">{t('aboutPage.experience.basketball.description')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">{t('aboutPage.holistic.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-foreground/80 leading-relaxed text-center mb-8">{t('aboutPage.holistic.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('aboutPage.holistic.assessment.title')}</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">{t('aboutPage.holistic.assessment.description')}</p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t('aboutPage.holistic.assessment.item1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t('aboutPage.holistic.assessment.item2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t('aboutPage.holistic.assessment.item3')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('aboutPage.holistic.treatment.title')}</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">{t('aboutPage.holistic.treatment.description')}</p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t('aboutPage.holistic.treatment.item1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t('aboutPage.holistic.treatment.item2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t('aboutPage.holistic.treatment.item3')}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaborations Gallery */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">{t('aboutPage.collaborations.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Photo Placeholder 1 - Le Mans */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">{t('gallery.replaceWith')}<br/>lemans-team.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{t('aboutPage.collaborations.lemans')}</h3>
                <p className="text-white/80 text-sm">{t('aboutPage.collaborations.lemans.subtitle')}</p>
              </div>
            </div>

            {/* Photo Placeholder 2 - Swimming */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">{t('gallery.replaceWith')}<br/>imola-nuoto.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{t('aboutPage.collaborations.swimming')}</h3>
                <p className="text-white/80 text-sm">{t('aboutPage.collaborations.swimming.subtitle')}</p>
              </div>
            </div>

            {/* Photo Placeholder 3 - Basketball */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">{t('gallery.replaceWith')}<br/>basketball-team.jpg</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{t('aboutPage.collaborations.basketball')}</h3>
                <p className="text-white/80 text-sm">{t('aboutPage.collaborations.basketball.subtitle')}</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-foreground/60 text-sm mb-4">{t('gallery.placeholdersHint').split('{folder}')[0]}<code className="bg-foreground/10 px-2 py-1 rounded">public/</code>{t('gallery.placeholdersHint').split('{folder}')[1]}</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-foreground/50">
              <span>• about-portrait.jpg</span>
              <span>• lemans-team.jpg</span>
              <span>• imola-nuoto.jpg</span>
              <span>• basketball-team.jpg</span>
              <span>• athletes-1.jpg</span>
              <span>• treatment-session.jpg</span>
              <span>• competition-support.jpg</span>
            </div>
          </div>
        </div>
      </section>

  {/* CTA Section (unified, blue/grey like Approach) */}
  <section className="py-16 bg-[#e6eef6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{t('aboutPage.cta.title')}</h2>
          <p className="text-xl text-foreground/80 mb-8">{t('aboutPage.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393661459269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t('aboutPage.cta.whatsapp')}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-primary/10 text-primary px-8 py-4 rounded-lg font-semibold border-2 border-primary transition-all"
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
