import { ServicesContent } from "@/components/pages/ServicesContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("en", "services")

export default function Page() {
  return <ServicesContent />
}
