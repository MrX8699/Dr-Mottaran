import Script from "next/script"
import { site } from "@/lib/site"

// Umami visit counter: no cookies, nothing stored in the browser, no IP
// addresses kept. Renders nothing until site.analytics.websiteId is set.
export function Analytics() {
  const { scriptSrc, websiteId, domains } = site.analytics
  if (!websiteId) return null

  return (
    <Script
      src={scriptSrc}
      strategy="afterInteractive"
      data-website-id={websiteId}
      data-domains={domains}
      data-do-not-track="true"
    />
  )
}
