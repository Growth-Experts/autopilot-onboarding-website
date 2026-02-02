import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Quote } from "lucide-react";
import { Link } from "wouter";

import Onboarding_6 from "@assets/Onboarding 6.png";

interface CaseStudyTemplateProps {
  client: string;
  industry: string;
  title: string;
  subtitle: string;
  stats: {
    label: string;
    value: string;
  }[];
  challenge: {
    title: string;
    content: string;
    points?: string[];
  };
  solution: {
    title: string;
    content: string;
    points: string[];
    image: string;
  };
  results: {
    title: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  logo: ReactNode;
}

export function CaseStudyTemplate({
  client,
  industry,
  title,
  subtitle,
  stats,
  challenge,
  solution,
  results,
  quote,
  logo
}: CaseStudyTemplateProps) {
  return (
    <div className="bg-white font-montserrat">
      {/* Hero Section */}
      <section className="bg-[#171717] text-white relative overflow-hidden pt-[30px] pb-[30px]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/case-studies">
            <Button variant="link" className="text-gray-400 hover:text-[#ED7A30] pl-0 mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
            <div className="opacity-90">
              {logo}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tighter max-w-4xl text-white">
            {title}
          </h1>
          
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-10 font-medium">
            {subtitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 border-t border-gray-800 pt-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-xl md:text-2xl font-bold text-[#ED7A30] mb-0.5">{stat.value}</div>
                <div className="text-gray-600 uppercase tracking-wide font-bold text-[14px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ED7A30] rounded-full opacity-5 blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      </section>
      {/* Challenge Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#ED7A30] uppercase tracking-widest mb-4">The Challenge</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#171717] mb-8">{challenge.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {challenge.content}
              </p>
              {challenge.points && (
                <ul className="space-y-4">
                  {challenge.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ED7A30] shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {quote && (
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 relative">
                <Quote className="absolute top-8 left-8 text-[#ED7A30]/20 w-16 h-16" />
                <blockquote className="relative z-10 text-xl text-gray-800 italic leading-relaxed mb-8 pt-4">
                  "{quote.text}"
                </blockquote>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ED7A30] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {quote.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#171717]">{quote.author}</div>
                    <div className="text-sm text-gray-500">{quote.role}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#ED7A30] uppercase tracking-widest mb-4">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#171717] mb-6">{solution.title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {solution.content}
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 sm:px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-[#ED7A30]/10 via-transparent to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#ED7A30]">Delivered in weeks</div>
                    <div className="text-lg font-extrabold text-[#171717]">What Autopilot automated for LAWD</div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#ED7A30]" />
                    Workflow automation
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                {solution.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 px-6 sm:px-8 py-5 border-t border-gray-100 sm:[&:nth-child(-n+2)]:border-t-0 sm:border-l sm:[&:nth-child(odd)]:border-l-0"
                  >
                    <div className="mt-0.5 w-9 h-9 rounded-xl bg-[#ED7A30]/10 text-[#ED7A30] flex items-center justify-center shrink-0">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Capability</div>
                      <div className="font-semibold text-gray-900 leading-snug">{point}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#171717] tracking-tight">{results.title}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable gains in speed, accountability, and consistency — without hiring a dedicated HR team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-[#171717] text-white rounded-2xl p-10 shadow-xl relative overflow-hidden border border-gray-900">
              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">Headline outcome</div>
                <div className="mt-3 text-5xl md:text-6xl font-extrabold tracking-tight text-[#ED7A30]">50%</div>
                <div className="mt-2 text-xl font-bold">Less onboarding management time</div>
                <div className="mt-4 text-white/70 leading-relaxed">
                  A smoother process for new hires, and far fewer follow-ups for operations.
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-white/60">Staff growth</div>
                    <div className="mt-1 text-2xl font-extrabold">2x</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-white/60">Compliance</div>
                    <div className="mt-1 text-2xl font-extrabold">100%</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-28 -right-24 w-72 h-72 bg-[#ED7A30] rounded-full blur-[90px] opacity-20" />
              <div className="absolute -bottom-28 -left-24 w-72 h-72 bg-blue-900 rounded-full blur-[90px] opacity-25" />
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.points.map((result, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all group hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-11 h-11 bg-[#ED7A30]/10 text-[#ED7A30] rounded-xl flex items-center justify-center group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                        <Check size={22} />
                      </div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Impact</div>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#171717] mb-3 tracking-tight">{result.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="bg-[#171717] text-white p-12 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Ready to achieve similar results?</h3>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join {client} and other industry leaders who have transformed their onboarding with Autopilot.
                </p>
                <Link href="/book-demo">
                  <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-lg px-8 py-4 rounded-none font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer">
                    Book a Demo
                  </Button>
                </Link>
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ED7A30] rounded-full blur-[80px]" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-900 rounded-full blur-[80px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
