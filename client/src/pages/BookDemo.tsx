import { useEffect } from "react";
import { Mail, Phone } from "lucide-react";

declare global {
  interface Window {
    SavvyCal: any;
  }
}

export default function BookDemo() {
  useEffect(() => {
    // Load SavvyCal script
    const script = document.createElement("script");
    script.src = "https://embed.savvycal.com/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize SavvyCal
    window.SavvyCal = window.SavvyCal || function() {
      (window.SavvyCal.q = window.SavvyCal.q || []).push(arguments);
    };
    window.SavvyCal('init');
    window.SavvyCal('inline', { link: 'jasonbagley/quickquick', selector: '#booking-page' });

    return () => {
      // Cleanup script if needed, though usually fine to leave for SPA
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6 tracking-tighter">
            Book a Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a time to see how Autopilot can streamline your onboarding process.
          </p>
        </div>

        {/* SavvyCal Embed */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-16 min-h-[600px]">
          <div id="booking-page" className="w-full h-full"></div>
        </div>

        {/* Contact Details */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-[#171717] mb-8 uppercase tracking-wide">
            Or get in touch directly
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#ED7A30] flex items-center justify-center rounded-full text-white shadow-md">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Email Us</p>
                <a href="mailto:hello@autopilot.com" className="text-lg text-[#171717] hover:text-[#ED7A30] transition-colors font-medium">
                  hello@autopilot.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#ED7A30] flex items-center justify-center rounded-full text-white shadow-md">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Call Us</p>
                <a href="tel:+15551234567" className="text-lg text-[#171717] hover:text-[#ED7A30] transition-colors font-medium">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
