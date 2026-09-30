import { AboutContent } from "@/components/pages/AboutContent"
import { JsonLd } from "@/components/JsonLd"
import { pageMetadata } from "@/lib/seo"
import { profilePageGraph } from "@/lib/structuredData"

export const metadata = pageMetadata("en", "about")

export default function Page() {
  return (
    <>
      <JsonLd data={profilePageGraph("en", "About Dr. Luca Mottaran")} />
      <AboutContent />
    </>
  )
}
