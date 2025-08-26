import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Have a question or ready to start a project? We&apos;d love to hear from you. Reach out via WhatsApp for the fastest response.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column: Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="font-sans text-2xl md:text-3xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary">Phone Numbers</h3>
                        <p className="text-muted-foreground">M Nadeem: <a href="tel:+923006484741" className="hover:text-primary transition">+92 300 6484741</a></p>
                        <p className="text-muted-foreground">Jazib Ahmad: <a href="tel:+923041568682" className="hover:text-primary transition">+92 304 1568682</a></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary">Our Location</h3>
                        <p className="text-muted-foreground">Bank More Near TCS Office, Gujranwala Cantt</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary">Business Hours</h3>
                        <p className="text-muted-foreground">Mon - Sat: 9AM - 7PM | Sun: 10AM - 5PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary text-primary-foreground p-8 rounded-lg shadow-lg">
                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-white mb-4">Fastest Way to Connect</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    For instant quotes, project discussions, and expert advice, chat with us directly on WhatsApp. We&apos;re available 24/7 for emergency orders.
                  </p>
                  <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full">
                    <a href="https://wa.me/923006484741?text=Hello%20FPP,%20I%20have%20a%20question.">
                      <MessageSquare className="w-5 h-5 mr-2" /> Chat Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Map with CORRECTED URL */}
              <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg border mt-8 lg:mt-0">
              <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.936990646153!2d74.1215438758117!3d32.2468759738096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f24771492066d%3A0x6f6b5535c5c99946!2sTCS%20-%20Express%20Center%20Cantt!5e0!3m2!1sen!2s!4v1717352458461!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Fancy Printing Press Location"
  ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}