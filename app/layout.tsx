// FILE: app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// --- THIS METADATA OBJECT IS NOW UPDATED ---
export const metadata: Metadata = {
  // This line fixes the warning by setting the base URL for your site
  metadataBase: new URL("https://fancy-printing-press.vercel.app"), // IMPORTANT: Change this if you use a custom domain later

  title: "Fancy Printing Press - Quality Printing, Professional Results",
  description: "Premium printing services in Gujranwala. From business cards to large-format banners, we are your trusted printing partner.",
  
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  
  openGraph: {
    title: "Fancy Printing Press | Gujranwala",
    description: "Your trusted partner for premium printing solutions for over 20 years.",
    url: "https://www.abdulwahabsaim.site ",
    siteName: "Fancy Printing Press",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fancy Printing Press",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Fancy Printing Press | Gujranwala",
    description: "Your trusted partner for premium printing solutions for over 20 years.",
    images: ["/opengraph-image"],
  },
};
// --- END OF UPDATED METADATA ---


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}