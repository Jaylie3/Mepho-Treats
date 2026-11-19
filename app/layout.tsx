import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mephotreats.co.za"),
  title: { default: "Mepho Treats | Homemade Ice Cream in Bergville", template: "%s | Mepho Treats" },
  description: "Handcrafted homemade ice cream in Bergville, KwaZulu-Natal. Explore flavours, view prices and order through WhatsApp.",
  openGraph: {
    title: "Mepho Treats", description: "Handcrafted Happiness in Every Scoop.", type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><div id="main">{children}</div><SiteFooter /></body></html>;
}
