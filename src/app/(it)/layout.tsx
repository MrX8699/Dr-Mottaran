import { RootDocument } from "@/components/RootDocument";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata("it");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="it">{children}</RootDocument>;
}
