import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left: Form */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">Get in touch!</h1>
            <p className="text-gray-600 mb-10 text-lg">
              Ready to streamline your onboarding? Fill out the form below and our team will be in touch shortly.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">First Name</label>
                  <Input className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="Jane" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Last Name</label>
                  <Input className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="Doe" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Work Email</label>
                  <Input type="email" className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="jane@company.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Phone Number</label>
                  <Input type="tel" className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Company Name</label>
                <Input className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="Acme Inc." required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Message</label>
                <Textarea className="rounded-none border-gray-300 focus:border-[#ED7A30] min-h-[150px] bg-gray-50" placeholder="Tell us about your onboarding challenges..." required />
              </div>

              <Button className="w-full bg-[#ED7A30] hover:bg-[#d66520] text-white h-14 text-lg font-bold uppercase tracking-wider rounded-none">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Right: Info & Map Graphic */}
        <div className="bg-[#171717] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Abstract Map Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M20 0 L100 80 M0 20 L80 100" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 max-w-lg mx-auto w-full">

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#ED7A30] flex items-center justify-center rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Email Us</p>
                  <p className="text-xl">hello@autopilot.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#ED7A30] flex items-center justify-center rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Call Us</p>
                  <p className="text-xl">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
