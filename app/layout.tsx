import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // Correct way to import Geist Sans
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// The Manrope font is initialized as a function
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Fancy Printing Press - Quality Printing, Professional Results",
  description: "Premium printing services in Gujranwala. From business cards to large-format banners, we are your trusted printing partner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The Geist font is used as a className directly from the import
    <html lang="en" className={`${GeistSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}