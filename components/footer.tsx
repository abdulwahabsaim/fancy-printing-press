// FILE: components/footer.tsx

import Link from "next/link";
import { Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-primary-foreground/20">
          <div>
            <h2 className="font-sans font-bold text-3xl text-white mb-2">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80">
              Get in touch with our experts today for a free, no-obligation quote.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base rounded-md px-8 py-6">
              <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}?text=Hello%20FPP,%20I%20need%20a%20quote.`}>
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
             <Link href="/#home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">FPP</span>
              </div>
              <span className="font-sans font-bold text-xl text-white">Fancy Printing Press</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for premium printing solutions in Gujranwala for over 20 years.
            </p>
          </div>

          <div className="md:ml-auto">
            <h3 className="font-semibold text-white tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
               <li><Link href="/#home" className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm">Home</Link></li>
               <li><Link href="/#services" className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm">Our Services</Link></li>
               <li><Link href="/#about" className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm">Why Choose Us</Link></li>
               <li><Link href="/#contact" className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:ml-auto">
            <h3 className="font-semibold text-white tracking-wider mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <p className="text-primary-foreground/70 text-sm">
                  Bank More Near TCS Office, Gujranwala Cantt
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                 <p className="text-primary-foreground/70 text-sm">
                   <a href={`tel:+${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}`} className="hover:text-white">{`+${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}`}</a>
                 </p>
              </div>
              <div className="flex items-start space-x-3">
                <MessageSquare className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}`} className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm">Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Fancy Printing Press. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}