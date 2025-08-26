"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageSquare, Home, LayoutGrid, Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export default function Header() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: LayoutGrid },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">FPP</span>
          </div>
          <span className="hidden font-bold sm:inline-block font-sans text-xl text-primary">
            Fancy Printing Press
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-2 text-base font-medium">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-2 transition-all duration-200",
                    isActive ? "bg-muted text-primary font-semibold" : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md transition-transform hover:scale-105">
            <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get a Quote
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-4 flex flex-col bg-background">
              <div className="p-2">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">FPP</span>
                  </div>
                  <span className="font-bold font-sans text-xl text-primary">Fancy Printing Press</span>
                </Link>
                <nav className="flex flex-col gap-2 text-base font-medium">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-4 rounded-md p-3 transition-colors",
                            isActive ? "bg-muted text-primary" : "text-foreground/80 hover:bg-muted"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.name}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-auto p-2">
                <Separator className="my-4 bg-border/60" />
                <p className="text-sm text-muted-foreground mb-4 text-center">Ready to start a project?</p>
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
                  <Link href="https://wa.me/923006484741?text=Hello%20FPP,%20I'm%20interested%20in%20your%20services.">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}