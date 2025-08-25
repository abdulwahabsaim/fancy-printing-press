import type React from "react"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata = {
  title: "Fancy Printing Press - Quality Printing, Professional Results",
  description:
    "Premium printing services in Gujranwala. From business cards to large-format banners, we are your trusted printing partner.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
