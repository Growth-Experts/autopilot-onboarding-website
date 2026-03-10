import { Button } from "@/components/ui/button";
import { FileSignature, BarChart2, Building2, ShieldCheck, Plug, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="bg-white font-montserrat">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#171717] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter text-[#ED7A30]">
            Simple, Usage-Based Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            One base fee. Pay per workflow as you scale — the more you use, the less you pay per workflow.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ED7A30] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-900 blur-[120px]" />
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">

          {/* Base License */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm mb-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Base License</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-extrabold text-[#171717] tracking-tight">$500</span>
              <span className="text-lg text-gray-400 font-normal">/ month</span>
            </div>
            <p className="text-sm text-gray-400">Includes 1 – 100 workflows initiated per month.</p>
          </div>

          {/* Volume Tiers */}
          <div className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-4">
            <div className="px-8 pt-7 pb-4 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Above Base Volume</p>
              <p className="text-sm text-gray-400">Per workflow initiated, based on total monthly volume.</p>
            </div>

            {[
              { tier: "Tier 1", range: "101 – 1,000 workflows", price: "$1.00" },
              { tier: "Tier 2", range: "1,001 – 5,000 workflows", price: "$0.70" },
              { tier: "Tier 3", range: "5,001+ workflows", price: "$0.60" },
            ].map((row, i, arr) => (
              <div key={i} className={`flex items-center justify-between px-8 py-5 ${i < arr.length - 1 ? "border-b border-gray-100" : ""}`}>
                <div>
                  <p className="font-bold text-[#171717] text-sm">{row.tier}</p>
                  <p className="text-sm text-gray-400">{row.range}</p>
                </div>
                <span className="text-2xl font-extrabold text-[#171717] tracking-tight">{row.price}</span>
              </div>
            ))}
          </div>

          {/* Custom quote */}
          <div className="text-center pt-6">
            <p className="text-base font-semibold text-[#171717] mb-1">Need a custom quote?</p>
            <p className="text-sm text-gray-400 mb-6">
              Get in touch and we'll tailor a plan to your workflow volume.
            </p>
            <Link href="/contact">
              <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white rounded-none font-bold uppercase tracking-wider px-10 h-12 cursor-pointer">
                Get in Touch
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Extend your workflows */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-tighter mb-4">
            Additional Features
          </h2>
          <p className="text-gray-500 text-lg mb-16">
            These integrations carry additional per-transaction costs. Available on request.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FileSignature size={24} />,
                title: "DocuSign",
                desc: "Electronic signatures embedded directly in your onboarding flow.",
              },
              {
                icon: <BarChart2 size={24} />,
                title: "Power BI",
                desc: "Approval analytics and reporting dashboards for your team.",
              },
              {
                icon: <Building2 size={24} />,
                title: "Bank Verification",
                desc: "Validate banking details as part of the onboarding process.",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "DHA Verification",
                desc: "South African ID verification integrated into workflows.",
              },
              {
                icon: <Plug size={24} />,
                title: "Custom Integrations",
                desc: "Connect Autopilot to your existing business systems.",
              },
              {
                icon: <Sparkles size={24} />,
                title: "AI Data Extraction",
                desc: "Automatically extract structured data from uploaded documents.",
              },
            ].map((addon, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:shadow-md hover:border-[#ED7A30] transition-all">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ED7A30] mb-4">
                  {addon.icon}
                </div>
                <h3 className="font-bold text-[#171717] mb-2">{addon.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-500 text-sm">
            Don't see what you need?{" "}
            <Link href="/contact">
              <span className="text-[#ED7A30] font-semibold cursor-pointer hover:underline">Talk to our team →</span>
            </Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#ED7A30] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl font-light opacity-90 mb-10">
            Get in touch and we'll tailor a plan to your workflow volume.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-[#ED7A30] hover:bg-gray-100 rounded-none font-bold uppercase tracking-wider px-10 py-6 text-lg cursor-pointer">
                Talk to our team
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#ED7A30] rounded-none font-bold uppercase tracking-wider px-10 py-6 text-lg transition-all cursor-pointer">
                Book a Demo
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm opacity-70">No setup fees. Month-to-month. Usage adjusts automatically.</p>
        </div>
      </section>
    </div>
  );
}
