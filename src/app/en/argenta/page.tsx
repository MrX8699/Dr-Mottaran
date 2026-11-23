import { LandingContent } from "@/components/pages/LandingContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("en", "argenta")

export default function Page() {
  return <LandingContent lang="en" page="argenta" />
}
