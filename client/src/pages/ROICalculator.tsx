import { OnboardingCalculator } from "@/components/OnboardingCalculator";
import { Link } from "wouter";

export default function ROICalculator() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#171717] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-block bg-[#ED7A30] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6">
            Free Tool
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white">
            ROI Calculator
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Find out exactly how much your manual onboarding process is costing you — in dollars and hours — every single year.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <OnboardingCalculator />

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-gray-100 text-center">
        <p className="text-gray-500 text-lg mb-6 font-light">Ready to see what Autopilot would cost for your volume?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/pricing">
            <button className="bg-[#ED7A30] hover:bg-[#d66520] text-white font-bold uppercase tracking-wider px-10 py-4 transition-all cursor-pointer">
              View Pricing
            </button>
          </Link>
          <a href="https://calendly.com/marklehrer-autopilot/30min" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white font-bold uppercase tracking-wider px-10 py-4 transition-all cursor-pointer">
              Book a Demo
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
