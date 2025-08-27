// FILE: app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// --- REPLACE YOUR EXISTING METADATA OBJECT WITH THIS ONE ---
export const metadata: Metadata = {
  title: "Fancy Printing Press - Quality Printing, Professional Results",
  description: "Premium printing services in Gujranwala. From business cards to large-format banners, we are your trusted printing partner.",
  
  // This 'icons' object explicitly tells Next.js where to find the favicon.
  icons: {
    icon: '/favicon.ico', // Points to public/favicon.ico
    shortcut: '/favicon.ico',
    apple: '/favicon.ico', // You can create apple-touch-icon.png for better iOS support later
  },
  
  // This 'openGraph' object explicitly tells social media platforms
  // where to find the generated image.
  openGraph: {
    title: "Fancy Printing Press | Gujranwala",
    description: "Your trusted partner for premium printing solutions for over 20 years.",
    url: "https://www.your-final-domain.com", // Replace this later!
    siteName: "Fancy Printing Press",
    images: [
      {
        // This is the key change: We point directly to the generation route.
        url: "/opengraph-image", // Note: NO .png extension!
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
    images: ["/opengraph-image"], // Pointing to the same generated image
  },
};
// --- END OF REPLACEMENT ---


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}