import { notFound } from "next/navigation"
import { LandingContent } from "@/components/pages/LandingContent"
import { pageMetadata } from "@/lib/seo"
import { serviceKeyFromSlug, serviceSlugs } from "@/lib/routes"

type Props = { params: Promise<{ slug: string }> }

// One page per entry in serviceSlugs (src/lib/routes.ts); any other slug is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return Object.values(serviceSlugs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const key = serviceKeyFromSlug((await params).slug)
  return key ? pageMetadata("en", key) : {}
}

export default async function Page({ params }: Props) {
  const key = serviceKeyFromSlug((await params).slug)
  if (!key) notFound()
  return <LandingContent lang="en" page={key} />
}
