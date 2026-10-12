import { LandingContent } from "@/components/pages/LandingContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("it", "portomaggiore")

export default function Page() {
  return <LandingContent lang="it" page="portomaggiore" />
}
