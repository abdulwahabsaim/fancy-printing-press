import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, MessageCircle, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function BusinessCardsPage() {
  const services = [
    {
      title: "Digital Business Cards",
      description: "High-quality digital printing with vibrant colors and sharp text. Perfect for modern businesses.",
      features: ["Full color printing", "Quick turnaround", "Cost-effective", "Various paper options"],
      image: "/digital-business-cards-modern-design.png",
    },
    {
      title: "Offset Business Cards",
      description: "Premium offset printing for large quantities with exceptional quality and consistency.",
      features: ["Superior print quality", "Bulk pricing available", "Pantone color matching", "Premium paper stocks"],
      image: "/offset-business-cards-premium-quality.png",
    },
    {
      title: "PVC ID Cards",
      description: "Durable plastic ID cards for employee identification, membership cards, and access control.",
      features: ["Waterproof and durable", "Magnetic stripe options", "RFID compatibility", "Custom designs"],
      image: "/pvc-id-cards-employee-badges.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <CreditCard className="w-12 h-12 text-secondary mr-4" />
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl">Business Cards</h1>
          </div>
          <p className="text-xl md:text-2xl text-center text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Professional business cards that make lasting first impressions. Choose from digital, offset, or PVC options
            to suit your needs.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-muted">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-card-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary text-center mb-12">
              Specifications & Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-4">Standard Sizes</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Standard: 3.5" × 2" (89mm × 51mm)</li>
                    <li>• European: 3.346" × 2.165" (85mm × 55mm)</li>
                    <li>• Custom sizes available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-4">Paper Options</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 300gsm Art Card (Standard)</li>
                    <li>• 350gsm Art Card (Premium)</li>
                    <li>• Matte or Glossy finish</li>
                    <li>• Textured paper options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-4">Finishing Options</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Lamination (Matte/Glossy)</li>
                    <li>• UV Coating</li>
                    <li>• Embossing/Debossing</li>
                    <li>• Foil Stamping</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-4">Quantity & Turnaround</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Minimum: 100 cards</li>
                    <li>• Digital: 1-2 business days</li>
                    <li>• Offset: 3-5 business days</li>
                    <li>• Rush orders available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Ready to Order Your Business Cards?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a personalized quote based on your specific requirements. Our team will help you choose the best options
            for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4" asChild>
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I%20need%20a%20quote%20for%20business%20cards.">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Quote on WhatsApp
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
