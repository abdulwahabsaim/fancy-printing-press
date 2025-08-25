import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, Heart, Calendar, Users, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function WeddingCardsPage() {
  const cardTypes = [
    {
      icon: Heart,
      title: "Wedding Invitations",
      description: "Elegant wedding invitations with premium paper and beautiful designs",
      features: ["Premium cardstock", "Foil stamping available", "Custom designs", "RSVP cards included"],
      image: "/elegant-wedding-invitations-premium-design.png",
    },
    {
      icon: Calendar,
      title: "Save the Date Cards",
      description: "Beautiful save the date cards to announce your special day",
      features: ["Various sizes", "Photo integration", "Magnetic options", "Quick turnaround"],
      image: "/save-the-date-cards-beautiful-designs.png",
    },
    {
      icon: Users,
      title: "Reception Cards",
      description: "Formal reception invitations for your celebration",
      features: ["Matching designs", "Menu cards", "Table numbers", "Thank you cards"],
      image: "/reception-cards-formal-invitations.png",
    },
    {
      icon: Sparkles,
      title: "Special Occasion Cards",
      description: "Birthday, anniversary, and celebration invitations",
      features: ["Custom themes", "Photo printing", "Envelope addressing", "Bulk discounts"],
      image: "/special-occasion-cards-celebrations.png",
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
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Wedding Cards & Invitations</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Make your special moments unforgettable with our elegant wedding cards and invitation designs.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20wedding%20cards%20and%20invitations.">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Wedding Card Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From elegant wedding invitations to special occasion cards, we create memorable designs for your
              celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-card-foreground">{type.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
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
            Ready to Create Your Perfect Invitations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized consultation and custom quote for your wedding cards.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'd%20like%20to%20discuss%20wedding%20card%20options.">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Order
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
