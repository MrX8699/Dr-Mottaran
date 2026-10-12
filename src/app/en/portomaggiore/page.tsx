import { LandingContent } from "@/components/pages/LandingContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("en", "portomaggiore")

export default function Page() {
  return <LandingContent lang="en" page="portomaggiore" />
}
