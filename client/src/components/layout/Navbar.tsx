import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/autopilot-onboarding-logo_1764237094364.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions/employee", isDropdown: true },
    { name: "Features", href: "/#features", isAnchor: true },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const solutionLinks = [
    { name: "Employee Onboarding", href: "/solutions/employee" },
    { name: "Reseller Onboarding", href: "/solutions/reseller" },
    { name: "Vendor Onboarding", href: "/solutions/vendor" },
    { name: "Customer Onboarding", href: "/solutions/customer" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <img src={logo} alt="Autopilot Onboarding" className="h-10 md:h-14 w-auto cursor-pointer" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                {navLinks.map((link) => {
                  if (link.isDropdown) {
                    return (
                      <NavigationMenuItem key={link.name}>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent p-0 h-auto text-base font-medium font-montserrat transition-colors rounded-none",
                            location.startsWith("/solutions") ? "text-[#ED7A30]" : "text-[#171717] hover:text-[#ED7A30]"
                          )}
                        >
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-64 p-2 bg-white border border-gray-200 shadow-xl">
                            {solutionLinks.map((subLink) => (
                              <NavigationMenuLink key={subLink.name} asChild>
                                <Link href={subLink.href}>
                                  <div className="block w-full py-2 px-2 text-sm font-medium text-[#171717] hover:bg-orange-50 hover:text-[#ED7A30] cursor-pointer transition-colors">
                                    {subLink.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  
                  if (link.isAnchor) {
                    return (
                      <NavigationMenuItem key={link.name}>
                        <a
                          href={link.href}
                          className={cn(
                            "text-base font-medium font-montserrat transition-colors cursor-pointer block",
                            "text-[#171717] hover:text-[#ED7A30]"
                          )}
                        >
                          {link.name}
                        </a>
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-base font-medium font-montserrat transition-colors cursor-pointer block",
                            location === link.href ? "text-[#ED7A30]" : "text-[#171717] hover:text-[#ED7A30]"
                          )}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link href="/book-demo">
              <Button 
                className="bg-[#ED7A30] hover:bg-[#d66520] text-white rounded-none px-8 font-bold uppercase tracking-wider cursor-pointer"
              >
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#171717]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white absolute w-full shadow-xl z-50 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-6">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="space-y-3">
                    <div className="text-base font-semibold text-[#171717] uppercase tracking-wide border-b border-gray-100 pb-2">
                      {link.name}
                    </div>
                    <div className="pl-4 flex flex-col space-y-3">
                      {solutionLinks.map((subLink) => (
                         <Link key={subLink.name} href={subLink.href} className="block text-sm font-medium text-gray-600 hover:text-[#ED7A30]" onClick={() => setIsOpen(false)}>
                           {subLink.name}
                         </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              if (link.isAnchor) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-base font-semibold text-[#171717] hover:text-[#ED7A30] uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base font-semibold text-[#171717] hover:text-[#ED7A30] uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link href="/book-demo">
                <Button className="w-full bg-[#ED7A30] hover:bg-[#d66520] text-white rounded-none font-bold uppercase py-6 cursor-pointer">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
