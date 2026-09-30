'use client'

import { createContext, useContext, ReactNode } from 'react'
import type { Language } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// The language comes from the URL (root layout for "/" vs "/en"), so each
// language is a separate, indexable page instead of a client-side toggle.
export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
