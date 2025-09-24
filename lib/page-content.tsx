// FILE: lib/page-content.tsx

import Link from "next/link";
import { Users, MessageSquare, MapPin, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- "WHY CHOOSE US" SECTION ---
// This section remains unchanged but is included for completeness.
export function AboutSection() {
  const coreValues = [
    { icon: Star, title: "20+ Years of Experience", description: "Leveraging decades of expertise to deliver exceptional quality and reliability." },
    { icon: CheckCircle, title: "Premium Quality", description: "We use the finest materials and modern technology for every single project." },
    { icon: MessageSquare, title: "Personalized Consultation", description: "Get expert advice and custom quotes directly on WhatsApp for a tailored service." },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Our Commitment to Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are more than just printers; we are partners in bringing your vision to life.
          </p>
        </div>
        
        <div className="md:hidden">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-xs sm:max-w-md mx-auto"
          >
            <CarouselContent className="-ml-4">
              {coreValues.map((value, index) => (
                <CarouselItem key={index} className="pl-4">
                  <div className="text-center p-6 rounded-2xl bg-card border h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-card border h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- UPDATED "GET IN TOUCH" SECTION with Tahir Mehboob ---
export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Meet the Team & Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start a project? Contact our leadership team directly on WhatsApp.
          </p>
        </div>
        {/* Grid is now 3 columns on large screens to accommodate the new person */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* M Nadeem Ahmed */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-sans font-semibold text-xl text-card-foreground mb-1">M Nadeem Ahmed</h3>
              <p className="text-secondary font-medium mb-4">Founder & Director</p>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}?text=Hello%20Mr.%20Nadeem,%20I'm%20interested%20in%20your%20services.`}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Tahir Mehboob (NEW) */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-sans font-semibold text-xl text-card-foreground mb-1">Tahir Mehboob</h3>
              <p className="text-secondary font-medium mb-4">Co-Founder</p>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link href="https://wa.me/923216474183?text=Hello%20Mr.%20Tahir,%20I'm%20interested%20in%20your%20services.">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Jazib Ahmad */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-sans font-semibold text-xl text-card-foreground mb-1">Jazib Ahmad</h3>
              <p className="text-secondary font-medium mb-4">Operations Manager</p>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_JAZIB}?text=Hello%20Mr.%20Jazib,%20I'm%20interested%20in%20your%20services.`}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center p-6 border rounded-lg max-w-4xl mx-auto">
           <div className="flex items-center justify-center gap-4 mb-2">
             <MapPin className="w-5 h-5 text-primary" />
             <h3 className="font-semibold text-lg">Our Location</h3>
           </div>
           <p className="text-muted-foreground">Bank More Near TCS Office, Gujranwala Cantt</p>
        </div>
      </div>
    </section>
  );
}