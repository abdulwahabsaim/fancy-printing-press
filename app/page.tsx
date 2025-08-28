// FILE: app/page.tsx

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { services } from "@/lib/data";
import { images } from "@/lib/image-paths";
import { AboutSection, ContactSection } from "@/lib/page-content";
import { ServiceModal } from "@/components/service-modal";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* HERO SECTION with Image Placeholder */}
        <section id="home" className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={images.homeHero}
              alt="A vibrant showcase of high-quality printed materials from Fancy Printing Press"
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={images.homeHero}
            />
            <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <h1
              className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Quality Printing, Professional Results
            </h1>
            <p
              className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Your trusted partner for premium printing solutions for over 20 years. From business cards to large-format banners, we bring your vision to life.
            </p>
            <div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button size="lg" variant="secondary" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#services">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Our Services
                </Link>
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-shadow" asChild>
                <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.`}>
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get a Quote on WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION with Image Placeholders */}
        <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on any service to see more details and options.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceModal key={service.slug} service={service}>
                  <div className="group cursor-pointer overflow-hidden rounded-lg bg-card border flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="relative aspect-video">
                      <Image
                        src={service.image}
                        alt={`Promotional image for ${service.title} printing services`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        placeholder="blur"
                        blurDataURL={service.image}
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-sans font-semibold text-lg text-primary mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">{service.shortDescription}</p>
                      <div className="mt-auto text-primary font-semibold text-sm group-hover:underline">
                        View Details →
                      </div>
                    </div>
                  </div>
                </ServiceModal>
              ))}
            </div>
          </div>
        </section>

        <AboutSection />
        <ContactSection />
        
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}