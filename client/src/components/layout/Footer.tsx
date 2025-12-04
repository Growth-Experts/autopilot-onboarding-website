import { Link } from "wouter";
import logo from "@assets/autopilot-onboarding-logo_1764237094364.png";

import Autopilot_Logo_Onboarding___White from "@assets/Autopilot Logo_Onboarding - White.png";

export function Footer() {
  return (
    <footer className="bg-[#171717] text-white border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img src={Autopilot_Logo_Onboarding___White} alt="Autopilot Onboarding" className="h-8 w-auto brightness-0 invert" />
            <p className="text-sm leading-relaxed font-medium text-[#ffffff]">
              Autopilot Onboarding connects every department so the people you're onboarding get one clean, guided flow.
            </p>
          </div>

          <div>
            <h4 className="text-[#ED7A30] font-bold uppercase tracking-wider mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/solutions/employee"><a className="hover:text-white transition-colors">Employee Onboarding</a></Link></li>
              <li><Link href="/solutions/customer"><a className="hover:text-white transition-colors">Customer Onboarding</a></Link></li>
              <li><Link href="/solutions/vendor"><a className="hover:text-white transition-colors">Vendor Onboarding</a></Link></li>
              <li><Link href="/solutions/reseller"><a className="hover:text-white transition-colors">Reseller Onboarding</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#ED7A30] font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/case-studies"><a className="hover:text-white transition-colors">Case Studies</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#ED7A30] font-bold uppercase tracking-wider mb-6">Connect</h4>
            <p className="text-gray-400 text-sm mb-4">
              Ready to streamline your onboarding?
            </p>
            <Link href="/book-demo">
              <button className="w-full py-3 px-6 border border-[#ED7A30] text-[#ED7A30] hover:bg-[#ED7A30] hover:text-white transition-colors font-bold uppercase text-sm cursor-pointer">
                Book a Demo
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2025 Autopilot Onboarding. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
