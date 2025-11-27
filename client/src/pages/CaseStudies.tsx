import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      client: "YMCA",
      industry: "Non-Profit",
      title: "From Paper Delays to Real-Time, Error-Free Onboarding",
      stat: "60% Faster Onboarding",
      color: "bg-red-600"
    },
    {
      client: "TechFlow Inc.",
      industry: "SaaS",
      title: "Scaling Engineering Hires Across 3 Continents",
      stat: "Zero Compliance Failures",
      color: "bg-blue-600"
    },
    {
      client: "Global Logistics",
      industry: "Supply Chain",
      title: "Automating Vendor Compliance for 500+ Suppliers",
      stat: "Saved 20hrs/Week",
      color: "bg-green-600"
    },
    {
      client: "City Finance",
      industry: "Financial Services",
      title: "Secure Onboarding for High-Trust Roles",
      stat: "100% Audit Readiness",
      color: "bg-slate-600"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 pb-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#171717] mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            See how leading organizations are transforming their onboarding from a bottleneck into a competitive advantage.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((study, index) => (
              <div key={index} className="group bg-white border border-gray-200 p-8 md:p-12 hover:border-[#ED7A30] transition-colors cursor-pointer flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`px-4 py-1 text-white text-xs font-bold uppercase tracking-widest ${study.color}`}>
                    {study.industry}
                  </div>
                  <ArrowUpRight className="text-gray-300 group-hover:text-[#ED7A30] transition-colors w-8 h-8" />
                </div>
                
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">
                  {study.client}
                </h3>
                <h2 className="text-3xl font-bold text-[#171717] mb-6 group-hover:underline decoration-[#ED7A30] decoration-2 underline-offset-4">
                  {study.title}
                </h2>
                
                <div className="mt-auto pt-8 border-t border-gray-100">
                  <div className="text-4xl font-bold text-[#ED7A30]">
                    {study.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
