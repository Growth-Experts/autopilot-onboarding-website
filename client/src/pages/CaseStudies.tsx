import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import talksureLogo from "@assets/talksure-logo_1764682329403.png";
import lawdLogo from "@assets/lawd-logo_1764682505153.png";
import syntechLogo from "@assets/Syntech-Logo_1764684082971.png";
import ymcaLogo from "@assets/ymca-logo_1764755090576.png";
import { Link } from "wouter";

export default function CaseStudies() {
  const cases = [
    {
      client: "YMCA South Africa",
      industry: "Non-Profit / NGO",
      title: "Addressing Key Challenges with Automation",
      description: "How YMCA South Africa reduced audit times by 40% and streamlined approvals for rural staff using Autopilot's mobile-friendly workflows.",
      stat: "30-40% Less Audit Time",
      color: "bg-red-600",
      logo: <img src={ymcaLogo} alt="YMCA South Africa" className="h-12 w-auto object-contain" />,
      link: "/case-studies/ymca"
    },
    {
      client: "Talksure",
      industry: "Financial Services",
      title: "Streamlining Procurement with Microsoft Teams",
      description: "How Talksure centralized purchase requests inside Teams, reduced ERP licence costs, and sped up approvals across 1,200 employees.",
      stat: "Reduced ERP Costs",
      color: "bg-blue-600",
      logo: <img src={talksureLogo} alt="Talksure" className="h-12 w-auto object-contain" />,
      link: "/case-studies/talksure"
    },
    {
      client: "LAWD",
      industry: "Legal Services",
      title: "Cutting Onboarding Time by 40-50%",
      description: "See how LAWD automated recruitment and onboarding, improved accountability, and scaled processes during rapid growth.",
      stat: "40-50% Faster",
      color: "bg-slate-600",
      logo: <img src={lawdLogo} alt="LAWD" className="h-12 w-auto object-contain" />,
      link: "/case-studies/lawd"
    },
    {
      client: "Syntech",
      industry: "Technology",
      title: "Faster, Paperless Reseller Onboarding",
      description: "How Syntech replaced manual forms with a fully digital workflow, reducing onboarding from 10 days to 1 day.",
      stat: "10 Days → 1 Day",
      color: "bg-orange-600",
      logo: <img src={syntechLogo} alt="Syntech" className="h-12 w-auto object-contain" />,
      link: "/case-studies/syntech"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 pb-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#171717] mb-6 tracking-tighter leading-tight">
            Smarter Onboarding. <br className="hidden md:block" />
            <span className="text-[#ED7A30]">Stronger Partnerships.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-medium">
            See how organizations use Autopilot to replace scattered emails and manual checklists with one connected onboarding flow - for customers, vendors, resellers, and employees.
          </p>
        </div>
      </section>
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((study, index) => (
              <Link href={study.link} key={index}>
                <div className="group bg-white border border-gray-200 p-8 md:p-12 hover:border-[#ED7A30] transition-colors cursor-pointer flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="h-12 flex items-center">
                      {study.logo}
                    </div>
                    <ArrowUpRight className="text-gray-300 group-hover:text-[#ED7A30] transition-colors w-8 h-8" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-[#171717] mb-4 group-hover:underline decoration-[#ED7A30] decoration-2 underline-offset-4">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {study.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="text-lg font-bold text-[#ED7A30] uppercase tracking-wide">
                      {study.stat}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
