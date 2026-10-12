import { LandingContent } from "@/components/pages/LandingContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("en", "imola")

export default function Page() {
  return <LandingContent lang="en" page="imola" />
}
