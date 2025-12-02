import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/autopilot-onboarding-logo_1764237094364.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions/employee", isDropdown: true }, 
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const solutionLinks = [
    { name: "Employee Onboarding", href: "/solutions/employee" },
    { name: "Vendor Onboarding", href: "/solutions/vendor" },
    { name: "Customer Onboarding", href: "/solutions/customer" },
    { name: "Partner Onboarding", href: "/solutions/partner" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <img src={logo} alt="Autopilot Onboarding" className="h-10 w-auto cursor-pointer" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide hover:text-[#ED7A30] transition-colors outline-none ${
                      location.startsWith("/solutions") ? "text-[#ED7A30]" : "text-[#171717]"
                    }`}>
                      {link.name} <ChevronDown size={16} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 p-2 bg-white border border-gray-200 shadow-xl rounded-none animate-in fade-in-0 zoom-in-95">
                      {solutionLinks.map((subLink) => (
                        <DropdownMenuItem key={subLink.name} asChild className="rounded-none cursor-pointer focus:bg-orange-50 focus:text-[#ED7A30]">
                          <Link href={subLink.href} className="block w-full py-2 px-2 text-sm font-medium text-[#171717]">
                            {subLink.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wide hover:text-[#ED7A30] transition-colors ${
                    location === link.href ? "text-[#ED7A30]" : "text-[#171717]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Button 
              className="bg-[#ED7A30] hover:bg-[#d66520] text-white rounded-none px-8 font-bold uppercase tracking-wider"
            >
              Book a Demo
            </Button>
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
              <Button className="w-full bg-[#ED7A30] hover:bg-[#d66520] text-white rounded-none font-bold uppercase py-6">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
