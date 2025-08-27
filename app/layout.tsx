// FILE: app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"; // --- 1. ADD THIS IMPORT LINE ---

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
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
    url: "https://www.abdulwahabsaim.site ", // You can change this to your live vercel URL later
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Analytics /> {/* --- 2. ADD THIS COMPONENT LINE --- */}
      </body>
    </html>
  );
}