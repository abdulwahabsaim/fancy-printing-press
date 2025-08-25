import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, Flag, Monitor, Building, Megaphone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function BannersDisplaysPage() {
  const displayTypes = [
    {
      icon: Flag,
      title: "Flex Banners",
      description: "High-quality vinyl banners for outdoor and indoor advertising",
      features: ["Weather resistant", "UV protected inks", "Various sizes", "Grommets included"],
    },
    {
      icon: Monitor,
      title: "Roll-up Banners",
      description: "Portable retractable banners perfect for events and presentations",
      features: ["Easy setup", "Lightweight design", "Premium stand", "Carrying case"],
    },
    {
      icon: Building,
      title: "Building Signage",
      description: "Large format building signs and facade displays",
      features: ["Durable materials", "Professional installation", "LED backlighting", "Custom shapes"],
    },
    {
      icon: Megaphone,
      title: "Event Displays",
      description: "Trade show displays, backdrop banners, and exhibition materials",
      features: ["Modular systems", "Quick assembly", "Transport friendly", "Reusable designs"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-white/10">
              <Link href="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Banners & Display Solutions</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Eye-catching banners and displays that make your brand stand out and attract customers.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20banners%20and%20display%20solutions.">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Banner Portfolio Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Banner Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See examples of our high-quality banner and display work for various businesses and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/professional-banner-and-display-printing.png",
                title: "Flex Banners",
                description: "Weather-resistant outdoor advertising banners",
              },
              {
                image: "/professional-business-cards-printing-showcase.png",
                title: "Roll-up Displays",
                description: "Portable retractable banners for events",
              },
              {
                image: "/elegant-wedding-invitation-cards-printing.png",
                title: "Event Backdrops",
                description: "Large format event and wedding displays",
              },
              {
                image: "/book-binding-and-thesis-printing-services.png",
                title: "Trade Show Displays",
                description: "Professional exhibition and booth displays",
              },
              {
                image: "/professional-office-stationery-letterhead-printing.png",
                title: "Building Signage",
                description: "Large format building and storefront signs",
              },
              {
                image: "/graphic-design-services-digital-branding.png",
                title: "Digital Displays",
                description: "Modern LED and digital display solutions",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-sans font-bold text-xl text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Display Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Display Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From small roll-up banners to large building signage, we create impactful displays for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayTypes.map((type, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mr-6">
                      <type.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-sans font-bold text-2xl text-card-foreground">{type.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">
            Ready to Make Your Brand Visible?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for professional banner and display solutions that get your message noticed.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'd%20like%20to%20discuss%20banner%20and%20display%20options.">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
