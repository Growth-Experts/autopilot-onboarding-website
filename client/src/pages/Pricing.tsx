import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="bg-white font-montserrat">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-[#171717] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter text-[#ED7A30]">
            Monthly Usage Fees
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            One simple base fee. Pay per workflow as you scale.
          </p>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ED7A30] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-900 blur-[120px]" />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {/* Base License */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 mb-8">
            <p className="text-xs font-bold text-[#ED7A30] uppercase tracking-widest mb-4">Base License</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-extrabold text-[#171717] tracking-tighter">$500</span>
              <span className="text-xl text-gray-500 font-medium">/ month</span>
            </div>
            <p className="text-gray-600 text-lg font-light">
              Includes 1 – 100 workflows initiated per month.
            </p>
          </div>

          {/* Above Base Volume */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
            <p className="text-xs font-bold text-[#ED7A30] uppercase tracking-widest mb-2">Above Base Volume</p>
            <p className="text-gray-600 text-lg font-light mb-8">
              Per workflow initiated, based on total monthly volume.
            </p>

            <div className="divide-y divide-gray-100">
              {[
                { tier: "Tier 1", range: "101 – 1,000 workflows", price: "$1.00" },
                { tier: "Tier 2", range: "1,001 – 5,000 workflows", price: "$0.70" },
                { tier: "Tier 3", range: "5,001+ workflows", price: "$0.60" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-6">
                  <div>
                    <p className="font-bold text-[#171717] text-lg">{item.tier}</p>
                    <p className="text-gray-500 text-sm">{item.range}</p>
                  </div>
                  <span className="text-3xl font-extrabold text-[#171717] tracking-tight">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 tracking-tighter">
            Need a custom quote?
          </h2>
          <p className="text-lg text-gray-600 font-light mb-10">
            Get in touch and we'll tailor a plan to your workflow volume.
          </p>
          <Link href="/contact">
            <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-lg px-10 py-4 rounded-none font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer">
              Talk to our team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
