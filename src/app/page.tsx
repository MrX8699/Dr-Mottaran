'use client'

import { useState, useEffect, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { getWhatsAppMessage } from "@/lib/whatsapp"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from 'next/image'

// Hero images rotation (public/ folder)
const heroImages = [
  '/images/fisioterapia stretching.webp',
  '/images/terapia_rullo.jpg'
]

export default function Home() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  const [heroIndex, setHeroIndex] = useState<number>(0)
  const certifications = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`about.cert.${n}`))

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 15000) // 15 seconds
    return () => clearInterval(interval)
  }, [])

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') as string || '').trim()
    const email = (formData.get('email') as string || '').trim()
    const phone = (formData.get('phone') as string || '').trim()
    const message = (formData.get('message') as string || '').trim()

    const lines = [
      `${t('contact.name')}: ${name}`,
      `${t('contact.email')}: ${email}`,
      phone ? `${t('contact.phone')}: ${phone}` : null,
      '',
      message,
    ].filter((line): line is string => line !== null).join('\n')

    const whatsappUrl = `https://wa.me/393661459269?text=${encodeURIComponent(lines)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    form.reset()
  }

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-start overflow-hidden"
        style={{ backgroundImage: "url('/images/Calia_Piega.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Background image using next/image for responsive loading */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            {heroImages.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={i === heroIndex ? "false" : "true"}
              >
                <Image
                  src={src}
                  alt={`Hero background ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === heroIndex}
                />
              </div>
            ))}
          </div>

          {/* overlay to improve text contrast over the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
        </div>

        <div className="relative z-20 px-6 py-12 w-full max-w-7xl mx-auto">
          <div className="max-w-2xl w-full ml-0 text-left [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.1] mb-4 whitespace-pre-line">
              {t('hero.name')}
            </h1>

            <p className="text-lg md:text-xl text-white/95 font-medium mb-4">
              {t('hero.title')}
            </p>

            <p className="text-base md:text-lg text-white/85 mb-8 leading-relaxed max-w-xl">{t('hero.description')}</p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href={`https://wa.me/393661459269?text=${encodeURIComponent(getWhatsAppMessage(t))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md text-base font-medium text-white bg-[#25D366] shadow-sm hover:brightness-95 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {t('hero.whatsapp')}
              </a>

              <a
                href="tel:+393661459269"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md text-base font-medium text-white border border-white/60 hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('hero.call')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-14 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{t('about.title')}</h2>
          </div>

          <div className="grid grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-8">
            <div className="text-center px-4">
              <div className="font-serif text-4xl md:text-5xl font-medium mb-2">200+</div>
              <div className="text-sm md:text-base text-white/70">{t('about.patients')}</div>
            </div>
            <div className="group relative text-center px-4 cursor-default">
              <div className="font-serif text-4xl md:text-5xl font-medium mb-2">7</div>
              <div className="text-sm md:text-base text-white/70">{t('about.certifications')}</div>
              <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-64 -translate-x-1/2 rounded-lg bg-white p-4 text-left text-sm text-secondary opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
                <ul className="space-y-1.5">
                  {certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-white" />
              </div>
            </div>
            <div className="text-center px-4">
              <div className="font-serif text-4xl md:text-5xl font-medium mb-2">15+</div>
              <div className="text-sm md:text-base text-white/70">{t('about.experience')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">{t('services.title')}</h2>
            <p className="text-lg text-foreground/75 leading-relaxed mb-4">
              {t('services.description')}
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
              {t('services.viewAll')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('services.pain.title')}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {t('services.pain.description')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('services.postop.title')}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {t('services.postop.description')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('services.sports.title')}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {t('services.sports.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-14 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{t('approach.heading')}</h2>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                {t('approach.intro')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-base font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t('approach.step1.title')}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">{t('approach.step1.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-base font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t('approach.step2.title')}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">{t('approach.step2.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-base font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t('approach.step3.title')}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">{t('approach.step3.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/motta-cera.jpeg"
                alt="Valutazione del movimento"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-14 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-foreground/75">
              {t('contact.subtitle')}
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')} *
                  </label>
                  <Input id="name" name="name" placeholder={t('contact.name')} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')} *
                  </label>
                  <Input id="email" name="email" type="email" placeholder={t('contact.email')} required />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.phone')}
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="+39 366 145 9269" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                {t('contact.send')}
              </Button>
            </form>
          </Card>

          <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('contact.phone.label')}</h3>
              <a href="tel:+393661459269" className="text-foreground/70 hover:text-primary transition-colors">+39 366 145 9269</a>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('contact.email.label')}</h3>
              <a href="mailto:lucamottaran99@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">lucamottaran99@gmail.com</a>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('contact.location.label')}</h3>
              <p className="text-foreground/70">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Imola%2C+Italia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Imola
                </a>
                {', '}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gambulaga%2C+Italia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Gambulaga
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
