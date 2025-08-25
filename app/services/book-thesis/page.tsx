import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageCircle, BookOpen, GraduationCap, FileText, Bookmark } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function BookThesisPage() {
  const services = [
    {
      icon: GraduationCap,
      title: "Thesis Binding",
      description: "Professional thesis binding services for students and researchers",
      features: ["Hard cover binding", "Spiral binding", "Perfect binding", "Gold foil stamping"],
    },
    {
      icon: BookOpen,
      title: "Book Printing",
      description: "Complete book printing and binding services for authors and publishers",
      features: ["Offset printing", "Digital printing", "Custom sizes", "ISBN placement"],
    },
    {
      icon: FileText,
      title: "Booklet Services",
      description: "Professional booklet printing for manuals, catalogs, and brochures",
      features: ["Saddle stitching", "Perfect binding", "Various paper weights", "Full color printing"],
    },
    {
      icon: Bookmark,
      title: "Academic Materials",
      description: "Specialized printing for academic institutions and research centers",
      features: ["Research papers", "Conference materials", "Academic journals", "Presentation folders"],
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
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">Book & Thesis Services</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Professional book printing and thesis binding services with quality materials and expert craftsmanship.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20book%20and%20thesis%20services.">
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
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Book & Thesis Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See examples of our professional book printing and thesis binding work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/book-binding-and-thesis-printing-services.png",
                title: "Thesis Binding",
                description: "Professional hard cover thesis binding",
              },
              {
                image: "/professional-business-cards-printing-showcase.png",
                title: "Academic Books",
                description: "University textbooks and academic publications",
              },
              {
                image: "/elegant-wedding-invitation-cards-printing.png",
                title: "Custom Books",
                description: "Personal memoirs and custom publications",
              },
              {
                image: "/professional-office-stationery-letterhead-printing.png",
                title: "Research Papers",
                description: "Conference papers and research publications",
              },
              {
                image: "/graphic-design-services-digital-branding.png",
                title: "Booklets & Manuals",
                description: "Training manuals and instruction booklets",
              },
              {
                image: "/professional-banner-and-display-printing.png",
                title: "Catalogs",
                description: "Product catalogs and company brochures",
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

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Book & Thesis Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From student thesis binding to professional book publishing, we provide comprehensive printing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">
            Ready to Print Your Book or Thesis?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for professional book printing and thesis binding services with quality guaranteed.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'd%20like%20to%20discuss%20book%20printing%20options.">
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
