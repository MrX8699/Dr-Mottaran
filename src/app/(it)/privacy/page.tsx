import { PrivacyContent } from "@/components/pages/PrivacyContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("it", "privacy")

export default function Page() {
  return <PrivacyContent lang="it" />
}
