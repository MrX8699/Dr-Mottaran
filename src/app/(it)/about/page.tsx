import { AboutContent } from "@/components/pages/AboutContent"
import { JsonLd } from "@/components/JsonLd"
import { pageMetadata } from "@/lib/seo"
import { profilePageGraph } from "@/lib/structuredData"

export const metadata = pageMetadata("it", "about")

export default function Page() {
  return (
    <>
      <JsonLd data={profilePageGraph("it", "Chi è il Dott. Luca Mottaran")} />
      <AboutContent />
    </>
  )
}
