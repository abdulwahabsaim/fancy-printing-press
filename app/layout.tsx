// FILE: app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLdSchema } from "@/components/json-ld-schema";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fancyprintingpress.com"),
  title: {
    default: "Fancy Printing Press | Quality Printing in Gujranwala",
    template: "%s | Fancy Printing Press",
  },
  description: "Your trusted partner for premium printing solutions for over 20 years in Gujranwala. We offer business cards, banners, book printing, custom mugs, and more.",
  
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  
  // --- THIS IS THE CRITICAL CHANGE ---
  openGraph: {
    title: "Fancy Printing Press | Gujranwala",
    description: "Your trusted partner for premium printing solutions.",
    url: "https://fancyprintingpress.com",
    siteName: "Fancy Printing Press",
    // We are now pointing to a static PNG file instead of the dynamic route.
    images: '/social-card.png', 
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Fancy Printing Press | Quality Printing in Gujranwala",
    description: "Your trusted partner for premium printing solutions for over 20 years.",
    // We also point Twitter to the static PNG file.
    images: ['/social-card.png'], 
  },
  // --- END OF THE CRITICAL CHANGE ---

  keywords: ["printing press gujranwala", "business cards", "wedding cards", "flex printing", "book binding", "rubber stamps"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <JsonLdSchema />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}