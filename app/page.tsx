import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, MessageCircle, CreditCard, BookOpen, Flag, Stamp, FileText, Palette } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  const services = [
    {
      icon: CreditCard,
      title: "Business Cards",
      description:
        "Professional digital and offset business cards that make lasting impressions with premium finishes.",
      image: "/professional-business-cards-printing-showcase.png",
      href: "/services/business-cards",
    },
    {
      icon: Palette,
      title: "Wedding Cards",
      description: "Beautiful greeting cards and invitations for your special occasions with elegant designs.",
      image: "/elegant-wedding-invitation-cards-printing.png",
      href: "/services/wedding-cards",
    },
    {
      icon: Flag,
      title: "Banners & Displays",
      description: "Eye-catching flex banners, roll-ups, and display solutions for maximum brand visibility.",
      image: "/professional-banner-and-display-printing.png",
      href: "/services/banners-displays",
    },
    {
      icon: BookOpen,
      title: "Book & Thesis Services",
      description: "Professional book binding, thesis printing, and booklet services with quality binding.",
      image: "/book-binding-and-thesis-printing-services.png",
      href: "/services/book-thesis",
    },
    {
      icon: FileText,
      title: "Office Stationery",
      description: "Complete range of letterheads, envelopes, and office stationery solutions.",
      image: "/professional-office-stationery-letterhead-printing.png",
      href: "/services/office-stationery",
    },
    {
      icon: Stamp,
      title: "Graphic Design Services",
      description: "Professional online graphic design services for logos, brochures, and marketing materials.",
      image: "/graphic-design-services-digital-branding.png",
      href: "/services/graphic-design",
    },
  ]

  const benefits = [
    {
      icon: Star,
      title: "20+ Years of Experience",
      description: "Leveraging decades of expertise to deliver exceptional quality printing solutions.",
    },
    {
      icon: CheckCircle,
      title: "Premium Quality",
      description: "We use the finest materials and modern technology for every project.",
    },
    {
      icon: MessageCircle,
      title: "Personalized Consultation",
      description: "Get expert advice and custom quotes directly on WhatsApp.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-4">
                <Star className="w-4 h-4 mr-2" />
                20+ Years of Excellence in Printing
              </div>

              <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
                Premium Printing
                <br />
                <span className="text-secondary bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                Transform your ideas into stunning printed materials with Gujranwala's most trusted printing experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="#services">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Services
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-primary-foreground/20">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">20+</div>
                  <div className="text-sm text-primary-foreground/80">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">5000+</div>
                  <div className="text-sm text-primary-foreground/80">Happy Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-secondary">99%</div>
                  <div className="text-sm text-primary-foreground/80">On-Time Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/professional-printing-showcase-with-business-cards.png"
                  alt="Professional Printing Showcase"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 text-secondary" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-20 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">24/7</div>
                  <div className="text-xs text-accent/80">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive printing solutions tailored to meet all your business and personal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <CardContent className="p-5 flex-1 flex flex-col">
                  <h3 className="font-sans font-semibold text-lg text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{service.description}</p>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-primary/20 hover:border-primary bg-transparent"
                  >
                    <Link href={service.href}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes Fancy Printing Press the preferred choice for quality printing in Gujranwala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your printing needs. Our team is ready to help you bring your vision to life.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4" asChild>
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us on WhatsApp
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
