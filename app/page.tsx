import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, MessageSquare, BookOpen } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { services } from "@/lib/data";

export default function HomePage() {
  const benefits = [
    { icon: Star, title: "20+ Years of Experience", description: "Leveraging decades of expertise to deliver exceptional quality printing solutions." },
    { icon: CheckCircle, title: "Premium Quality", description: "We use the finest materials and modern technology for every project." },
    { icon: MessageSquare, title: "Personalized Consultation", description: "Get expert advice and custom quotes directly on WhatsApp." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - 70% screen height */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground h-[70vh] flex items-center py-8 lg:py-12">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left space-y-4">
                {/* "20+ Years..." badge */}
                <div className="inline-flex items-center px-3 py-1.5 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-2">
                  <Star className="w-3 h-3 mr-1.5" />
                  20+ Years of Excellence in Printing
                </div>
                <h1 className="font-sans font-bold text-2xl md:text-4xl lg:text-5xl leading-tight text-white">
                  Premium Printing
                  <br />
                  <span className="text-secondary">Solutions</span>
                </h1>
                <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transform your ideas into stunning printed materials with Gujranwala's most trusted printing experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button size="default" variant="secondary" asChild className="text-base px-6 py-2.5 shadow-lg hover:shadow-xl transition-all">
                    <Link href="#services">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Explore Services
                    </Link>
                  </Button>
                  <Button size="default" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-6 py-2.5 shadow-lg hover:shadow-xl transition-all" asChild>
                    <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
                {/* Stats section */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary-foreground/20">
                  <div className="text-center lg:text-left">
                    <div className="text-xl md:text-2xl font-bold text-secondary">20+</div>
                    <div className="text-xs text-primary-foreground/80">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl md:text-2xl font-bold text-secondary">5000+</div>
                    <div className="text-xs text-primary-foreground/80">Happy Clients</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl md:text-2xl font-bold text-secondary">99%</div>
                    <div className="text-xs text-primary-foreground/80">On-Time Delivery</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <Image src="/professional-printing-showcase-with-business-cards.png" alt="Professional Printing Showcase" width={600} height={450} className="w-full h-auto max-h-[320px] object-cover rounded-2xl shadow-2xl" priority />
                </div>
                {/* Floating visual elements - positioned outside the image with higher z-index */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg z-20">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-28 h-20 bg-accent/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl z-20 border border-accent/30">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">24/7</div>
                    <div className="text-xs text-white/90 font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive printing solutions tailored to meet all your business and personal needs.
              </p>
            </div>
            
            {/* Featured Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.slice(0, 2).map((service) => (
                <div key={service.slug} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="flex flex-col lg:flex-row h-full">
                    <div className="relative lg:w-1/2 overflow-hidden">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        width={500} 
                        height={300} 
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-sans font-bold text-2xl text-primary">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.shortDescription}</p>
                      <Button asChild className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all">
                        <Link href={`/services/${service.slug}`}>
                          Learn More
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(2, 6).map((service) => (
                <div key={service.slug} className="group text-center p-6 rounded-2xl bg-card border-2 border-border/30 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-lg transition-all">
                    <Link href={`/services/${service.slug}`}>View Details</Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex flex-col items-center">
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white text-lg px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
                  <Link href="/services" className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    View All Services
                    <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </Link>
                </Button>
                {/* <p className="text-muted-foreground text-sm mt-3">Discover our complete range of printing solutions</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes Fancy Printing Press the preferred choice for quality printing in Gujranwala.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group text-center p-8 rounded-3xl bg-card border-2 border-border/20 hover:border-primary/40 hover:bg-card/80 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-secondary/30 group-hover:to-accent/30 transition-all duration-500">
                    <benefit.icon className="w-10 h-10 text-secondary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-primary mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmed Khan",
                  company: "Khan Enterprises",
                  text: "FPP delivered exceptional quality business cards that perfectly represent our brand. Fast delivery and professional service!",
                  rating: 5
                },
                {
                  name: "Fatima Ali",
                  company: "Design Studio",
                  text: "The wedding cards they printed for us were absolutely stunning. Every detail was perfect and the quality exceeded our expectations.",
                  rating: 5
                },
                {
                  name: "Muhammad Hassan",
                  company: "Tech Solutions",
                  text: "Professional service from start to finish. Our company brochures look amazing and the turnaround time was impressive.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="group p-6 rounded-3xl bg-card border-2 border-border/20 hover:border-primary/40 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}