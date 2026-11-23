import { LandingContent } from "@/components/pages/LandingContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("it", "ferrara")

export default function Page() {
  return <LandingContent lang="it" page="ferrara" />
}
