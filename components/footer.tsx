import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export default function Footer() {
  const services = ["Business Cards", "Wedding Cards", "Flex Banners", "Book Binding", "Rubber Stamps"]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">FPP</span>
              </div>
              <span className="font-sans font-bold text-lg">Fancy Printing Press</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted printing partner in Gujranwala for over 20 years. We deliver quality printing solutions with
              professional results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-secondary" />
                <p className="text-primary-foreground/80 text-sm">
                  Bank More Near TCS Office
                  <br />
                  Gujranwala Cantt
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <div className="space-y-1">
                  <Link
                    href="https://wa.me/923006484741"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm block"
                  >
                    M Nadeem: +92 300 6484741
                  </Link>
                  <Link
                    href="https://wa.me/923041568682"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm block"
                  >
                    Jazib Ahmad: +92 304 1568682
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">© 2024 Fancy Printing Press. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
