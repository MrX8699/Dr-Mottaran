import { PrivacyContent } from "@/components/pages/PrivacyContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("en", "privacy")

export default function Page() {
  return <PrivacyContent lang="en" />
}
