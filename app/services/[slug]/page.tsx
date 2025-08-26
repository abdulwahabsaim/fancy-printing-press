import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageSquare, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { services } from "@/lib/data"

// This function tells Next.js which pages to build
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// This function gets the data for a specific page
function getServiceData(slug: string) {
  const service = services.find((s) => s.slug === slug)
  return service
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceData(params.slug)

  // If someone tries to visit a service page that doesn't exist, show a 404 page
  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-white/10">
              <Link href="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl">
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              {service.longDescription}
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link
                href={`https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20${service.title}%20services.`}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get a Quote for {service.title}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary mb-4">
              Types of {service.title} We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the different options available within our {service.title} services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {service.subServices.map((sub, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-card/80 border-2 border-border/40 hover:border-primary/60 hover:bg-card/90 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl h-full flex flex-col shadow-lg"
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/10 border-b border-border/30">
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay with Service Type */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-lg font-bold">View Details</div>
                      <div className="text-xs opacity-90">Click to learn more</div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col min-h-[180px]">
                  {/* Title */}
                  <h3 className="font-sans font-bold text-lg text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {sub.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                    {sub.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="mt-auto pt-4">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-sm py-2"
                    >
                      <Link href={`https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20${sub.title}%20service.`} className="flex items-center justify-center">
                        Get Quote
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}