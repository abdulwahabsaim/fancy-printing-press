import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, Palette, Layout, Zap, Globe } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function GraphicDesignPage() {
  const designServices = [
    {
      icon: Palette,
      title: "Logo & Brand Identity",
      description: "Professional logo design and complete brand identity packages",
      features: ["Custom logo design", "Brand guidelines", "Color palette", "Typography selection"],
    },
    {
      icon: Layout,
      title: "Print Design",
      description: "Brochures, flyers, posters, and marketing material design",
      features: ["Brochure design", "Flyer layouts", "Poster design", "Print-ready files"],
    },
    {
      icon: Globe,
      title: "Digital Graphics",
      description: "Social media graphics, web banners, and digital marketing materials",
      features: ["Social media posts", "Web banners", "Email templates", "Digital ads"],
    },
    {
      icon: Zap,
      title: "Quick Design Services",
      description: "Fast turnaround design services for urgent projects",
      features: ["24-48 hour delivery", "Revisions included", "Multiple formats", "Rush orders"],
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
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Online Graphic Design Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Professional digital graphic design services for logos, branding, and marketing materials delivered
              online.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20graphic%20design%20services.">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Design Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Design Portfolio Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Design Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See examples of our creative graphic design work for various businesses and brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/graphic-design-services-digital-branding.png",
                title: "Logo Design",
                description: "Custom logo designs for brand identity",
              },
              {
                image: "/professional-business-cards-printing-showcase.png",
                title: "Business Branding",
                description: "Complete brand identity packages",
              },
              {
                image: "/professional-banner-and-display-printing.png",
                title: "Marketing Materials",
                description: "Brochures, flyers, and promotional designs",
              },
              {
                image: "/elegant-wedding-invitation-cards-printing.png",
                title: "Event Graphics",
                description: "Wedding and event design materials",
              },
              {
                image: "/professional-office-stationery-letterhead-printing.png",
                title: "Corporate Stationery",
                description: "Professional letterheads and documents",
              },
              {
                image: "/book-binding-and-thesis-printing-services.png",
                title: "Publication Design",
                description: "Book covers and publication layouts",
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

      {/* Design Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Design Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From logo design to complete brand identity, we create stunning digital graphics for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mr-6">
                      <service.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-sans font-bold text-2xl text-card-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
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

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Design Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, efficient, and collaborative design process delivered entirely online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Brief", desc: "Share your requirements via WhatsApp" },
              { step: "2", title: "Design", desc: "We create initial design concepts" },
              { step: "3", title: "Review", desc: "You review and provide feedback" },
              { step: "4", title: "Deliver", desc: "Final files delivered digitally" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-sans font-semibold text-lg text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your graphic design needs and get a custom quote.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'd%20like%20to%20start%20a%20graphic%20design%20project.">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Design
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
