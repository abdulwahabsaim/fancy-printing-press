import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Palette, Flag, BookOpen, FileText, Stamp, MessageCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function ServicesPage() {
  const serviceCategories = [
    {
      icon: CreditCard,
      title: "Business Cards",
      description:
        "Professional digital and offset business cards that make lasting impressions with premium finishes.",
      image: "/professional-business-cards-printing-showcase.png",
      services: ["Digital Business Cards", "Offset Business Cards", "PVC ID Cards", "Premium Finishes"],
      href: "/services/business-cards",
    },
    {
      icon: Palette,
      title: "Wedding Cards & Invitations",
      description: "Beautiful wedding cards, greeting cards, and special occasion invitations with elegant designs.",
      image: "/elegant-wedding-invitation-cards-printing.png",
      services: ["Wedding Invitations", "Save the Date Cards", "Reception Cards", "Special Occasion Cards"],
      href: "/services/wedding-cards",
    },
    {
      icon: Flag,
      title: "Banners & Displays",
      description: "Eye-catching banners and displays that make your brand stand out and attract customers.",
      image: "/professional-banner-and-display-printing.png",
      services: ["Flex Banners", "Roll-up Banners", "Building Signage", "Event Displays"],
      href: "/services/banners-displays",
    },
    {
      icon: BookOpen,
      title: "Book & Thesis Services",
      description:
        "Professional book printing and thesis binding services with quality materials and expert craftsmanship.",
      image: "/book-binding-and-thesis-printing-services.png",
      services: ["Thesis Binding", "Book Printing", "Booklet Services", "Academic Materials"],
      href: "/services/book-thesis",
    },
    {
      icon: FileText,
      title: "Office Stationery",
      description:
        "Complete range of professional office stationery to enhance your business communication and branding.",
      image: "/professional-office-stationery-letterhead-printing.png",
      services: ["Letterheads", "Envelopes", "Corporate Stationery", "Professional Forms"],
      href: "/services/office-stationery",
    },
    {
      icon: Stamp,
      title: "Graphic Design Services",
      description:
        "Professional online graphic design services for logos, branding, and marketing materials delivered digitally.",
      image: "/graphic-design-services-digital-branding.png",
      services: ["Logo & Brand Identity", "Print Design", "Digital Graphics", "Quick Design Services"],
      href: "/services/graphic-design",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-6">
              <Stamp className="w-4 h-4 mr-2" />
              Complete Printing Solutions
            </div>

            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Our{" "}
              <span className="text-secondary bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Printing Services
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive printing solutions for all your business and personal needs. Quality guaranteed, delivered
              on time, every time.
            </p>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20printing%20services.">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              Professional Printing Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From business essentials to special occasions, we provide comprehensive printing solutions with
              exceptional quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg overflow-hidden h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="font-sans font-bold text-xl text-card-foreground mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{category.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-card-foreground mb-4 text-sm uppercase tracking-wide">
                      Services Include:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-primary/20 hover:border-primary bg-transparent mt-auto"
                  >
                    <Link href={category.href}>View Details & Gallery</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Need a Custom Quote?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Every project is unique. Contact us on WhatsApp for personalized pricing and expert consultation.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4" asChild>
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I%20need%20a%20quote%20for%20printing%20services.">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
