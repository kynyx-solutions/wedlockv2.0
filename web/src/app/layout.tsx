import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Tiro_Devanagari_Hindi } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

// Only the weights the design uses, to keep the font download small on 3G/4G.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Short Hindi accents only: never preloaded, so it never delays first paint.
const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari"],
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Wedlock — Wedding planners in Patna, Ranchi & New Delhi since 2014",
    template: "%s · Wedlock",
  },
  description:
    "Wedlock plans, designs and runs weddings in Patna, Ranchi, New Delhi and destinations across India and abroad. One team, every ceremony, since 2014.",
  openGraph: { type: "website", siteName: "Wedlock", locale: "en_IN" },
  robots: { index: false, follow: false }, // demo build on Vercel Hobby: keep it out of Google until launch
};

export const viewport: Viewport = {
  themeColor: "#23271F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions (Grammarly, translators) add attributes to <html>/<body>
    <html lang="en-IN" className={`${cormorant.variable} ${manrope.variable} ${tiro.variable} antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
