import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/autopilot-onboarding-logo_1764237094364.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions/employee" }, // Defaulting to employee for the link
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <img src={logo} alt="Autopilot Onboarding" className="h-10 w-auto" />
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={`text-sm font-semibold uppercase tracking-wide hover:text-[#ED7A30] transition-colors ${
                    location === link.href ? "text-[#ED7A30]" : "text-[#171717]"
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
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
        <div className="md:hidden border-t border-gray-200 bg-white absolute w-full">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className="block text-base font-semibold text-[#171717] hover:text-[#ED7A30]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button className="w-full bg-[#ED7A30] hover:bg-[#d66520] text-white rounded-none font-bold uppercase">
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
