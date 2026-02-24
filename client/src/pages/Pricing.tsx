import { Button } from "@/components/ui/button";
import { Check, FileSignature, BarChart2, Building2, ShieldCheck, Plug, Sparkles } from "lucide-react";
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

      {/* Plans start at */}
      <section className="py-16 bg-[#F5F5F5] border-b border-gray-200 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-tighter mb-2">
          Autopilot plans start at just <span className="text-[#ED7A30]">$500 / month</span>
        </h2>
        <p className="text-gray-500 text-sm">Volume and non-profit discounts are available</p>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Essentials */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              {/* invisible spacer matches "Most Popular" banner height */}
              <div className="h-[33px]" />
              <div className="px-7 pt-7 pb-8 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#171717] mb-1">Essentials</h3>
                <p className="text-sm text-gray-400 mb-5">Up to 1,000 workflows / mo</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">From</p>
                <p className="text-4xl font-extrabold text-[#171717] tracking-tight leading-none mb-1">$500</p>
                <p className="text-sm text-gray-400 mb-1">per month</p>
                <p className="text-xs text-gray-400 mb-0">$1.00 per workflow above 100</p>
                <div className="mt-auto pt-8">
                  <Link href="/contact">
                    <Button className="w-full bg-[#171717] hover:bg-[#ED7A30] text-white rounded-none font-bold uppercase tracking-wider transition-colors cursor-pointer h-12 text-sm">
                      Get Quote
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-[11px] font-bold text-[#171717] uppercase tracking-widest mb-3">Plan includes</p>
                  <ul className="space-y-2.5">
                    {[
                      "1 – 100 workflows included",
                      "101 – 1,000 workflows at $1.00 each",
                      "Unlimited users",
                      "Unlimited process types",
                      "Unlimited external approvers",
                      "Full audit trail & reporting",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <Check size={14} className="text-[#ED7A30] mt-0.5 shrink-0" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Growth — Most Popular */}
            <div className="border-2 border-[#ED7A30] rounded-2xl overflow-hidden flex flex-col shadow-xl">
              <div className="bg-[#ED7A30] text-white text-[11px] font-bold uppercase tracking-widest text-center py-2.5">
                Most Popular
              </div>
              <div className="px-7 pt-7 pb-8 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#171717] mb-1">Growth</h3>
                <p className="text-sm text-gray-400 mb-5">Up to 5,000 workflows / mo</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Per workflow</p>
                <p className="text-4xl font-extrabold text-[#171717] tracking-tight leading-none mb-1">$0.70</p>
                <p className="text-sm text-gray-400 mb-1">per workflow</p>
                <p className="text-xs text-[#ED7A30] font-medium mb-0">Above 1,000 workflows</p>
                <div className="mt-auto pt-8">
                  <Link href="/contact">
                    <Button className="w-full bg-[#ED7A30] hover:bg-[#d66520] text-white rounded-none font-bold uppercase tracking-wider cursor-pointer h-12 text-sm">
                      Get Quote
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-orange-100">
                  <p className="text-[11px] font-bold text-[#171717] uppercase tracking-widest mb-3">Plan includes</p>
                  <ul className="space-y-2.5">
                    {[
                      "Everything in Essentials, plus:",
                      "1,001 – 5,000 workflows at $0.70 each",
                      "Lower cost per workflow at scale",
                      "Unlimited users",
                      "Unlimited process types",
                      "Unlimited external approvers",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <Check size={14} className="text-[#ED7A30] mt-0.5 shrink-0" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              {/* invisible spacer matches "Most Popular" banner height */}
              <div className="h-[33px]" />
              <div className="px-7 pt-7 pb-8 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#171717] mb-1">Enterprise</h3>
                <p className="text-sm text-gray-400 mb-5">5,001+ workflows / mo</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Per workflow</p>
                <p className="text-4xl font-extrabold text-[#171717] tracking-tight leading-none mb-1">$0.60</p>
                <p className="text-sm text-gray-400 mb-1">per workflow</p>
                <p className="text-xs text-gray-400 mb-0">Above 5,000 workflows</p>
                <div className="mt-auto pt-8">
                  <Link href="/contact">
                    <Button className="w-full bg-[#171717] hover:bg-[#ED7A30] text-white rounded-none font-bold uppercase tracking-wider transition-colors cursor-pointer h-12 text-sm">
                      Get Quote
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-[11px] font-bold text-[#171717] uppercase tracking-widest mb-3">Plan includes</p>
                  <ul className="space-y-2.5">
                    {[
                      "Everything in Growth, plus:",
                      "5,001+ workflows at $0.60 each",
                      "Lowest cost per workflow",
                      "Unlimited users",
                      "Unlimited process types",
                      "Unlimited external approvers",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <Check size={14} className="text-[#ED7A30] mt-0.5 shrink-0" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-10">
            Each rate applies only to workflows in that band — your base cost never retroactively changes.
          </p>
        </div>
      </section>

      {/* Extend your workflows */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-tighter mb-4">
            Extend your workflows
          </h2>
          <p className="text-gray-500 text-lg mb-16">
            Autopilot integrates with the tools your team already uses. Add-ons are available on request.
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
