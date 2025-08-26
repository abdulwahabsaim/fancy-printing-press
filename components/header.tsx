"use client";

import Link from "next/link";
import { Menu, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">FPP</span>
          </div>
          <span className="hidden font-bold sm:inline-block font-sans text-xl text-primary">
            Fancy Printing Press
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium ml-auto">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition-colors hover:text-primary text-foreground/80">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end md:ml-6">
          <div className="hidden md:flex">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
              <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get a Quote
              </Link>
            </Button>
          </div>

          <div className="md:hidden ml-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                 <Link href="/" className="flex items-center space-x-2 mb-8">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">FPP</span>
                  </div>
                  <span className="font-bold font-sans text-xl text-primary">Fancy Printing Press</span>
                </Link>
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link href={item.href} className="text-foreground/80 hover:text-primary">
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}