import { HomeContent } from "@/components/pages/HomeContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("en", "home")

export default function Page() {
  return <HomeContent />
}
