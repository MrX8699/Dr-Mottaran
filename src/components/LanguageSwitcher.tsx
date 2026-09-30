'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { alternateLanguagePath, type Language } from '@/lib/i18n'

const options: { lang: Language; label: string; name: string }[] = [
  { lang: 'it', label: 'IT', name: 'Italiano' },
  { lang: 'en', label: 'EN', name: 'English' },
]

// Real links to the same page in the other language, so crawlers can follow
// them and each language keeps its own URL.
export function LanguageSwitcher() {
  const { language } = useLanguage()
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
      {options.map(({ lang, label, name }) => (
        <Link
          key={lang}
          href={alternateLanguagePath(pathname, lang)}
          hrefLang={lang}
          lang={lang}
          aria-label={name}
          aria-current={language === lang ? 'true' : undefined}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
            language === lang
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-foreground/60 hover:text-foreground hover:bg-muted/70'
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
