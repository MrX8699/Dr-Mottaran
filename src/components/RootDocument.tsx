import type { ReactNode } from "react";
import localFont from "next/font/local";
import "@/app/globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { JsonLd } from "@/components/JsonLd";
import { siteGraph } from "@/lib/structuredData";
import type { Language } from "@/lib/i18n";

// Self-hosted instead of next/font/google: Google Fonts started serving this
// family from "/l/font?kit=…&skey=…" URLs, which Turbopack's font loader
// can't resolve ("next/font/google queries have exactly one entry").
// Variable-weight latin subset (400–700), OFL licensed, from fonts.gstatic.com.
const newsreader = localFont({
  variable: "--font-newsreader",
  src: [
    { path: "../app/fonts/Newsreader-latin.woff2", weight: "400 700", style: "normal" },
    { path: "../app/fonts/Newsreader-latin-italic.woff2", weight: "400 700", style: "italic" },
  ],
  fallback: ["Georgia", "ui-serif", "serif"],
});

// The <html> shell shared by the two root layouts: app/(it)/layout.tsx for
// Italian at "/" and app/en/layout.tsx for English at "/en", so each language
// gets the correct <html lang>.
export function RootDocument({
  lang,
  withStructuredData = true,
  children,
}: {
  lang: Language;
  withStructuredData?: boolean;
  children: ReactNode;
}) {
  return (
    <html lang={lang}>
      <body className={`${newsreader.variable} antialiased`}>
        {withStructuredData && <JsonLd data={siteGraph(lang)} />}
        <LanguageProvider language={lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
