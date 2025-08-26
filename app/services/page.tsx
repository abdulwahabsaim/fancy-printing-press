import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stamp, MessageSquare, CheckCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { services } from "@/lib/data"; // Import the centralized service data

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1.5 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-4">
              <Stamp className="w-3 h-3 mr-1.5" />
              Complete Printing Solutions
            </div>

            <h1 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              Our{" "}
              <span className="text-secondary bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Printing Services
              </span>
            </h1>

            <p className="text-base md:text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Comprehensive printing solutions for all your business and personal needs. Quality guaranteed, delivered on time, every time.
            </p>

            <Button
              size="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-6 py-2.5 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20printing%20services.">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((category) => (
              <div
                key={category.slug}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-card/80 border-2 border-border/40 hover:border-primary/60 hover:bg-card/90 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl h-full flex flex-col shadow-lg"
              >
                {/* Image Container with Fixed Aspect Ratio */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-muted/20 to-muted/10 border-b border-border/30">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  {/* Hover Overlay with Service Count */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-xl font-bold">{category.subServices.length}</div>
                      <div className="text-xs opacity-90">Services</div>
                    </div>
                  </div>
                </div>

                {/* Content Section with Fixed Height */}
                <div className="p-5 flex-1 flex flex-col min-h-[260px]">
                  {/* Title */}
                  <h3 className="font-sans font-bold text-lg text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                    {category.shortDescription}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-5">
                    <h4 className="font-semibold text-card-foreground mb-3 text-xs uppercase tracking-wide text-primary flex items-center">
                      <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Includes:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1.5">
                      {category.subServices.slice(0, 3).map((sub, index) => (
                        <li key={index} className="flex items-center group/item">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                          <span className="group-hover/item:text-primary transition-colors">{sub.title}</span>
                        </li>
                      ))}
                      {category.subServices.length > 3 && (
                        <li className="text-primary text-xs font-medium mt-2">
                          +{category.subServices.length - 3} more services
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Button - Always at Bottom */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-sm py-2"
                    >
                      <Link href={`/services/${category.slug}`} className="flex items-center justify-center">
                        View Details
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
  );
}