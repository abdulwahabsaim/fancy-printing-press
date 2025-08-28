// FILE: components/service-modal.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Service } from "@/lib/data";
import { MessageSquare } from "lucide-react";
import { Icon } from "@/lib/icons";

type ServiceModalProps = {
  service: Service;
  children: React.ReactNode;
};

export function ServiceModal({ service, children }: ServiceModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon name={service.icon} className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-sans font-bold text-primary">{service.title}</DialogTitle>
              <DialogDescription>{service.longDescription}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[65vh] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {service.subServices.map((sub, index) => (
              <div key={index} className="flex flex-col rounded-lg border bg-card overflow-hidden">
                <div className="relative aspect-video">
                  <Image 
                    src={sub.image} 
                    alt={`Example of ${sub.title}`}
                    fill 
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={sub.image}
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="font-semibold mb-2 text-card-foreground">{sub.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{sub.description}</p>
                  <Button asChild size="sm" className="w-full mt-auto bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NADEEM}?text=Hello%20FPP,%20I'm%20interested%20in%20the%20${sub.title}%20service.`}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}