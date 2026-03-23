'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  // Hero images rotation (public/ folder)
  const heroImages = [
    '/images/fisioterapia stretching.webp',
    '/images/terapia_rullo.jpg'
  ]
  const [heroIndex, setHeroIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 15000) // 15 seconds
    return () => clearInterval(interval)
  }, [])

  const prevHero = () => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length)
  const nextHero = () => setHeroIndex((i) => (i + 1) % heroImages.length)

  // Helper function to generate WhatsApp message based on clinic hours
  const getWhatsAppMessage = () => {
    const now = new Date()
    const hours = now.getHours()
    const day = now.getDay() // 0 = Sunday, 6 = Saturday

    // Clinic hours: Monday-Friday 9:00-18:00, Saturday 9:00-13:00
    const isWeekday = day >= 1 && day <= 5
    const isSaturday = day === 6
    const isOpen = (isWeekday && hours >= 9 && hours < 18) || (isSaturday && hours >= 9 && hours < 13)

    if (isOpen) {
      return t('whatsapp.open')
    } else {
      return t('whatsapp.closed')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
  <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Dr. Luca Mottaran</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">{t('nav.about')}</Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">{t('nav.services')}</Link>
              <Link href="/approach" className="text-foreground hover:text-primary transition-colors">{t('nav.approach')}</Link>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t('nav.contact')}</a>
              <LanguageSwitcher />
              <a href={`https://wa.me/393661459269?text=${encodeURIComponent(getWhatsAppMessage())}`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:brightness-95">{t('nav.book')}</Button>
              </a>
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <Link href="/about" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</Link>
              <Link href="/services" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{t('nav.services')}</Link>
              <Link href="/approach" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{t('nav.approach')}</Link>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <a href={`https://wa.me/393661459269?text=${encodeURIComponent(getWhatsAppMessage())}`} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90">{t('nav.book')}</Button>
              </a>
            </div>
          )}
        </div>
      </nav>

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

          {/* Navigation arrows */}
          <button
            aria-label="Previous background"
            onClick={prevHero}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/40 hover:bg-black/50 text-white rounded-full p-2 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next background"
            onClick={nextHero}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/40 hover:bg-black/50 text-white rounded-full p-2 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* subtle overlay to improve text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10" />
        </div>

        <div className="relative z-20 px-6 py-12 w-full max-w-7xl mx-auto">
          <div className="max-w-3xl w-full ml-0 text-left">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 md:p-8 inline-block">
              <p className="text-base md:text-lg text-white font-semibold tracking-wide uppercase mb-3">
                {t('hero.welcome')}
              </p>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                {t('hero.name')}
              </h1>

              <p className="text-lg md:text-2xl text-white font-medium mb-3">
                {t('hero.title')}
              </p>

              <p className="text-base md:text-lg text-white mb-6">{t('hero.subtitle')}</p>

              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">{t('hero.description')}</p>

              <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                <a
                  href={`https://wa.me/393661459269?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-md hover:from-primary/90 hover:to-accent/90 transition-transform hover:scale-[1.03]"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {t('hero.whatsapp')}
                </a>

                <a
                  href="tel:+393661459269"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg text-base font-semibold text-primary-foreground bg-primary shadow-sm hover:shadow-md hover:brightness-95 transition-transform hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('hero.call')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-lg">{t('about.experience')}</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">2000+</div>
              <div className="text-lg">{t('about.patients')}</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-lg">{t('about.success')}</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg">{t('about.care')}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('services.title')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-6">
              {t('services.description')}
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors">
              {t('services.viewAll')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('services.manual.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.manual.description')}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('services.movement.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.movement.description')}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('services.sports.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.sports.description')}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('services.postop.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.postop.description')}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('services.pain.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.pain.description')}
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('services.functional.title')}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('services.functional.description')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('approach.title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">{t('approach.heading')}</h3>
              <p className="text-lg leading-relaxed mb-6">
                {t('approach.intro')}
              </p>
              <div className="space-y-4">
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
            <div className="relative h-96 md:h-full">
              <div
                className="absolute inset-0 rounded-lg shadow-2xl"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('contact.title')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-foreground/80">
              {t('contact.subtitle')}
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')} *
                  </label>
                  <Input id="name" placeholder={t('contact.name')} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')} *
                  </label>
                  <Input id="email" type="email" placeholder={t('contact.email')} required />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.phone')}
                </label>
                <Input id="phone" type="tel" placeholder="+39 366 145 9269" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')} *
                </label>
                <Textarea
                  id="message"
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

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
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
              <p className="text-foreground/70">info@lucamottaran.com</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t('contact.location.label')}</h3>
              <p className="text-foreground/70">{t('contact.location.value')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Luca Mottaran</h3>
              <p className="text-white/80">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">{t('nav.about')}</a></li>
                <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">{t('nav.services')}</Link></li>
                <li><Link href="/approach" className="text-white/80 hover:text-white transition-colors">{t('nav.approach')}</Link></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">{t('nav.contact')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.connect')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
