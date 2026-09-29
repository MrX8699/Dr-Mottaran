import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SITE_URL, site } from "@/lib/site";

// Self-hosted instead of next/font/google: Google Fonts started serving this
// family from "/l/font?kit=…&skey=…" URLs, which Turbopack's font loader
// can't resolve ("next/font/google queries have exactly one entry").
// Variable-weight latin subset (400–700), OFL licensed, from fonts.gstatic.com.
const newsreader = localFont({
  variable: "--font-newsreader",
  src: [
    { path: "./fonts/Newsreader-latin.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/Newsreader-latin-italic.woff2", weight: "400 700", style: "italic" },
  ],
  fallback: ["Georgia", "ui-serif", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Pages set their own title/description via pageMetadata() in src/lib/seo.ts;
  // these defaults only apply to routes without one (e.g. the 404 page).
  title: {
    default: "Dr. Luca Mottaran | Fisioterapista e Chinesiologo a Imola",
    template: "%s | Dr. Luca Mottaran",
  },
  description: "Dr. Luca Mottaran, fisioterapista e chinesiologo a Imola e Portomaggiore. Riabilitazione sportiva e post operatoria, terapia manuale e onde d'urto.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${newsreader.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
