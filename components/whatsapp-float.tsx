"use client"

import { MessageSquare } from "lucide-react"
import Link from "next/link"

export default function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.`}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </Link>
  )
}