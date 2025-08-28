// FILE: lib/page-content.tsx

import Link from "next/link";
import { Users, MessageSquare, MapPin, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Our team is ready to assist you. Contact us today for a free, no-obligation quote and expert advice for all your printing needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-background/10 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">M Nadeem Ahmed</div>
                    <div className="text-sm text-primary-foreground/70">Founder & Director</div>
                  </div>
                </div>
                <Button asChild className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white flex-shrink-0 shadow-lg">
                  <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}?text=Hello%20Mr.%20Nadeem,%20I'm%20interested%20in%20your%20services.`}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-background/10 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Jazib Ahmad</div>
                    <div className="text-sm text-primary-foreground/70">Operations Manager</div>
                  </div>
                </div>
                <Button asChild className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white flex-shrink-0 shadow-lg">
                  <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_JAZIB}?text=Hello%20Mr.%20Jazib,%20I'm%20interested%20in%20your%20services.`}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}