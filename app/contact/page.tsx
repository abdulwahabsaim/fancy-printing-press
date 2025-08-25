import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, MessageCircle, Clock, Users, Award, Zap } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/professional-printing-showcase-with-business-cards.png')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Available 24/7 on WhatsApp
            </div>

            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Get in{" "}
              <span className="text-accent bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-10">
              Ready to start your printing project? Contact us today for expert consultation, competitive quotes, and
              exceptional service that exceeds your expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I%20need%20a%20quote%20for%20printing%20services.">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Instant Quote
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="tel:+923006484741">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Why Choose FPP?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with Gujranwala's most trusted printing professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Get quotes within 30 minutes during business hours",
                color: "text-yellow-500",
                bgColor: "from-yellow-500/10 to-yellow-500/5",
              },
              {
                icon: Award,
                title: "Quality Assured",
                desc: "20+ years of excellence with premium materials",
                color: "text-blue-500",
                bgColor: "from-blue-500/10 to-blue-500/5",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Professional consultation and design support",
                color: "text-green-500",
                bgColor: "from-green-500/10 to-green-500/5",
              },
              {
                icon: MessageCircle,
                title: "24/7 Support",
                desc: "WhatsApp support available round the clock",
                color: "text-purple-500",
                bgColor: "from-purple-500/10 to-purple-500/5",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-sm"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Contact Information</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help with all your printing needs. Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Address Card */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-card-foreground mb-3">Visit Our Shop</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Bank More Near TCS Office
                      <br />
                      Gujranwala Cantt, Punjab
                    </p>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                      <Link
                        href="https://maps.google.com/?q=Bank+More+Near+TCS+Office+Gujranwala+Cantt"
                        target="_blank"
                      >
                        Get Directions
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-primary/10 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-card-foreground mb-3">Business Hours</h3>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <div className="flex justify-between items-center">
                        <span>Mon - Sat:</span>
                        <span className="font-medium text-primary">9AM - 7PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sunday:</span>
                        <span className="font-medium text-primary">10AM - 5PM</span>
                      </div>
                      <div className="mt-3 p-2 bg-accent/10 rounded-lg text-xs text-accent font-medium">
                        Emergency orders 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA Card */}
            <Card className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-card-foreground mb-3">Need Immediate Help?</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Chat with us directly on WhatsApp for instant quotes and expert consultation.
                </p>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I%20need%20immediate%20assistance.">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-accent/5 to-accent/10 shadow-sm">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-card-foreground">Call or WhatsApp</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="p-4 bg-white rounded-lg border border-accent/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center space-y-3">
                    <div>
                      <p className="font-medium text-card-foreground">M Nadeem Ahmed</p>
                      <Link
                        href="tel:+923006484741"
                        className="text-primary hover:text-secondary transition-colors font-medium"
                      >
                        +92 300 6484741
                      </Link>
                    </div>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                      <Link href="https://wa.me/923006484741?text=Hello%20Mr.%20Nadeem,%20I'm%20interested%20in%20your%20services.">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-accent/20 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center space-y-3">
                    <div>
                      <p className="font-medium text-card-foreground">Jazib Ahmad</p>
                      <Link
                        href="tel:+923041568682"
                        className="text-primary hover:text-secondary transition-colors font-medium"
                      >
                        +92 304 1568682
                      </Link>
                    </div>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                      <Link href="https://wa.me/923041568682?text=Hello%20Mr.%20Jazib,%20I'm%20interested%20in%20your%20services.">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Explore Our Services</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Discover our comprehensive range of printing solutions designed to meet all your business and personal
            needs.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
