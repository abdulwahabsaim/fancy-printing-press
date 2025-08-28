// FILE: app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLdSchema } from "@/components/json-ld-schema"; // Import the new schema component

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// --- FINAL, FULLY OPTIMIZED METADATA ---
export const metadata: Metadata = {
  // Sets the base URL for the entire site
  metadataBase: new URL("https://abdulwahabsaim.site"),

  title: {
    default: "Fancy Printing Press | Quality Printing in Gujranwala",
    template: "%s | Fancy Printing Press",
  },
  description: "Your trusted partner for premium printing solutions for over 20 years in Gujranwala. We offer business cards, banners, book printing, custom mugs, and more.",
  
  // Favicons for all devices
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // Add apple-touch-icon.png to your public folder
    other: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    ],
  },
  
  // Social Media Sharing (Open Graph for Facebook, WhatsApp, etc.)
  openGraph: {
    title: "Fancy Printing Press | Gujranwala",
    description: "Your trusted partner for premium printing solutions.",
    url: "https://abdulwahabsaim.site",
    siteName: "Fancy Printing Press",
    images: [
      {
        url: "/opengraph-image", // Automatically uses your custom OG image
        width: 1200,
        height: 630,
        alt: "Fancy Printing Press Logo and Tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Sharing Card
  twitter: {
    card: "summary_large_image",
    title: "Fancy Printing Press | Quality Printing in Gujranwala",
    description: "Your trusted partner for premium printing solutions for over 20 years.",
    images: ["/opengraph-image"],
  },

  // Extra SEO metadata
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
        {/* This injects the JSON-LD schema into the head of every page */}
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