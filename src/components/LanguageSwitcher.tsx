'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
      <button
        onClick={() => setLanguage('it')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === 'it'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-foreground/60 hover:text-foreground hover:bg-muted/70'
        }`}
        aria-label="Switch to Italian"
      >
        IT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-foreground/60 hover:text-foreground hover:bg-muted/70'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
