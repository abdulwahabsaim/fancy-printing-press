import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, FileText, Mail, Building, Briefcase } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function OfficeStationeryPage() {
  const stationeryTypes = [
    {
      icon: FileText,
      title: "Letterheads",
      description: "Professional letterheads that represent your business identity",
      features: ["Premium paper quality", "Embossed options", "Watermark paper", "Multiple quantities"],
    },
    {
      icon: Mail,
      title: "Envelopes",
      description: "Custom printed envelopes in various sizes and styles",
      features: ["Window envelopes", "Security envelopes", "Colored options", "Logo printing"],
    },
    {
      icon: Building,
      title: "Corporate Stationery",
      description: "Complete corporate identity stationery packages",
      features: ["Business cards", "Compliment slips", "Invoice books", "Receipt books"],
    },
    {
      icon: Briefcase,
      title: "Professional Forms",
      description: "Custom forms and documents for business operations",
      features: ["Invoice forms", "Receipt books", "Order forms", "Delivery challans"],
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
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Office Stationery Solutions</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Complete range of professional office stationery to enhance your business communication and branding.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20office%20stationery%20services.">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Stationery Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See examples of our professional office stationery work for various businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/professional-office-stationery-letterhead-printing.png",
                title: "Letterheads",
                description: "Professional letterheads with company branding",
              },
              {
                image: "/professional-business-cards-printing-showcase.png",
                title: "Business Cards",
                description: "Premium business cards for networking",
              },
              {
                image: "/elegant-wedding-invitation-cards-printing.png",
                title: "Envelopes",
                description: "Custom printed envelopes in various sizes",
              },
              {
                image: "/book-binding-and-thesis-printing-services.png",
                title: "Invoice Books",
                description: "Professional invoice and receipt books",
              },
              {
                image: "/graphic-design-services-digital-branding.png",
                title: "Corporate Identity",
                description: "Complete corporate stationery packages",
              },
              {
                image: "/professional-banner-and-display-printing.png",
                title: "Forms & Documents",
                description: "Custom business forms and documents",
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

      {/* Stationery Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Stationery Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From letterheads to complete corporate packages, we provide all your office stationery needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stationeryTypes.map((type, index) => (
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
            Enhance Your Business Communication
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get professional office stationery that reflects your brand's quality and attention to detail.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'd%20like%20to%20order%20office%20stationery.">
              <MessageCircle className="w-5 h-5 mr-2" />
              Order Now
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
