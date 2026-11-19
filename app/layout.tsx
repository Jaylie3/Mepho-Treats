import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Mepho Treats | Homemade Ice Cream in Bergville", template: "%s | Mepho Treats" },
  description: "Handcrafted homemade ice cream in Bergville, KwaZulu-Natal. Explore our flavours, view prices and order through WhatsApp.",
  metadataBase: new URL("https://mephotreats.co.za"),
  openGraph: { title: "Mepho Treats", description: "Handcrafted Happiness in Every Scoop.", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
