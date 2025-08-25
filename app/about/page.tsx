import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Target, MessageCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We never compromise on quality. Every project receives our full attention to detail and craftsmanship.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We listen, understand, and deliver beyond expectations.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure your projects are completed and delivered on time, every time.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "We continuously invest in modern technology and techniques to provide cutting-edge printing solutions.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our <span className="text-secondary">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Two decades of excellence in printing, serving Gujranwala with quality, reliability, and innovation.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-6">Founded on Excellence</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded over 20 years ago, Fancy Printing Press has been a cornerstone of the Gujranwala printing
                  industry. What started as a small family business with a vision to provide quality printing services
                  has grown into one of the most trusted names in the region.
                </p>
                <p>
                  Under the leadership of M Nadeem Ahmed and Jazib Ahmad, we have continuously evolved our services and
                  technology to meet the changing needs of our customers. From traditional offset printing to modern
                  digital solutions, we have embraced innovation while maintaining our commitment to quality.
                </p>
                <p>
                  Today, we serve hundreds of businesses, organizations, and individuals across Gujranwala and beyond,
                  providing comprehensive printing solutions that help our clients make lasting impressions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-printing-press-facility-in-gujranwala.png"
                alt="Fancy Printing Press facility"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The experienced professionals behind Fancy Printing Press, dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">M Nadeem Ahmed</h3>
                <p className="text-secondary font-medium mb-3">Founder & Managing Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  With over two decades of experience in the printing industry, Nadeem leads our team with vision and
                  expertise.
                </p>
                <Button variant="outline" asChild>
                  <Link href="https://wa.me/923006484741?text=Hello%20Mr.%20Nadeem,%20I'm%20interested%20in%20your%20services.">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact on WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">Jazib Ahmad</h3>
                <p className="text-secondary font-medium mb-3">Operations Manager</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Jazib ensures smooth operations and maintains our high standards of quality and customer service.
                </p>
                <Button variant="outline" asChild>
                  <Link href="https://wa.me/923041568682?text=Hello%20Mr.%20Jazib,%20I'm%20interested%20in%20your%20services.">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact on WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the difference that 20+ years of expertise can make for your printing needs.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4" asChild>
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project Today
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
