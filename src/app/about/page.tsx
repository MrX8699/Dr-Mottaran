import { AboutContent } from "@/components/pages/AboutContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("it", "about")

export default function Page() {
  return <AboutContent />
}
