import { LandingContent } from "@/components/pages/LandingContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("it", "imola")

export default function Page() {
  return <LandingContent lang="it" page="imola" />
}
