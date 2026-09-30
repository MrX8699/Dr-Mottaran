import { RootDocument } from "@/components/RootDocument";
import { rootMetadata } from "@/lib/seo";

export const metadata = rootMetadata("en");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
