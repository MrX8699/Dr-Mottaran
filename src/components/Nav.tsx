'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTranslation } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { getWhatsAppMessage } from "@/lib/whatsapp"

type NavLink = "about" | "services" | "approach"

const NAV_HEIGHT = 80 // px, matches the h-20 bar height

const links: { key: NavLink; href: string; label: string }[] = [
  { key: "about", href: "/about", label: "nav.about" },
  { key: "services", href: "/services", label: "nav.services" },
  { key: "approach", href: "/approach", label: "nav.approach" },
]

export function Nav({ active }: { active?: NavLink }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [hoverReveal, setHoverReveal] = useState(false)
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  const navVisible = atTop || hoverReveal

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY <= 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const inZone = e.clientY <= NAV_HEIGHT
      setHoverReveal((prev) => (prev === inZone ? prev : inZone))
    }
    const handleMouseLeaveWindow = () => setHoverReveal(false)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleMouseLeaveWindow)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeaveWindow)
    }
  }, [])

  const linkClass = (key: NavLink) =>
    active === key
      ? "text-primary font-semibold"
      : "text-foreground hover:text-primary transition-colors"

  const whatsappHref = `https://wa.me/393661459269?text=${encodeURIComponent(getWhatsAppMessage(t))}`

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50 transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <h1 className="font-serif text-2xl font-medium text-primary">Dr. Luca Mottaran</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {links.map(({ key, href, label }) => (
                <Link key={key} href={href} className={linkClass(key)}>{t(label)}</Link>
              ))}
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">{t('nav.contact')}</Link>
              <LanguageSwitcher />
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
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
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              {links.map(({ key, href, label }) => (
                <Link
                  key={key}
                  href={href}
                  className={`block ${linkClass(key)}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(label)}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90">{t('nav.book')}</Button>
              </a>
            </div>
          )}
        </div>
      </nav>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed top-4 right-4 z-50 transition-opacity duration-300 ${
          navVisible ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        <Button className="bg-primary text-primary-foreground hover:brightness-95 shadow-lg">{t('nav.book')}</Button>
      </a>
    </>
  )
}
