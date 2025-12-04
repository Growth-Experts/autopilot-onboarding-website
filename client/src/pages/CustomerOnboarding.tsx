import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Zap } from "lucide-react";
import caseStudyImage from "@assets/stock_images/chaotic_messy_office_8b8ef31a.jpg";
import capsicumLogo from "@assets/capsicum-logo_1764671045702.png";
import saCanegrowersLogo from "@assets/SA_CaneGrowers_logo_1764682801217.png";
import threeWayLogo from "@assets/3way-logo_1764684321801.png";
import brmLogo from "@assets/brm-logo_1764685148310.png";
import cbfLogo from "@assets/cbf-logo_1764685158359.png";
import nologoLogo from "@assets/nologo_studios_1764685164945.png";
import tongaatLogo from "@assets/Tongaat-Huletts-Logo_1764685174149.png";
import turnkeyLogo from "@assets/Turnkey_logo_1764685300771.png";
import joanneWalsh from "@assets/Joanne_Walsh_1764834864661.jpeg";
import brendanAntunez from "@assets/Brendan_Antunez_1764834968337.jpeg";
import johnMoll from "@assets/John_Moll_1764835180381.jpeg";
import sageLogo from "@assets/sage-group-logo_1764839521453.png";
import docusignLogo from "@assets/docusign_logo_1764839521453.png";
import flowgearLogo from "@assets/flowgear_logo_1764839521453.png";
import axureLogo from "@assets/axure-logo_1764839521453.png";
import pipedriveLogo from "@assets/pipedrive-logo_1764839521453.png";
import sharepointLogo from "@assets/sharepoint-logo_1764839521453.png";

import { Link } from "wouter";

export default function CustomerOnboarding() {
  return (
    <div className="bg-white font-montserrat">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#171717] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[#ED7A30] text-xs font-bold uppercase tracking-widest mb-8">
            <Users size={12} />
            <span>Customer Onboarding</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tighter max-w-5xl mx-auto text-white">
            Fast customer onboarding that <span className="text-[#ED7A30]">never misses a detail</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Give customers a fast, seamless start with a workflow that keeps every detail accurate and every team aligned.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-demo">
              <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-lg px-8 py-4 rounded-none font-bold uppercase tracking-wider w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ED7A30] blur-[120px]" />
           <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-900 blur-[120px]" />
        </div>
      </section>
      {/* Trusted By Section */}
      <section className="py-20 bg-[#FAFAFA] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-[#171717] mb-12 tracking-tighter uppercase opacity-80">
            Trusted by teams who care about first impressions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center [&>*]:opacity-50 [&>*]:grayscale [&>*]:transition-all [&>*]:duration-500 [&>:hover]:grayscale-0 [&>:hover]:opacity-100">
            <div className="flex items-center justify-center">
               <img src={threeWayLogo} alt="3 Way Marketing" className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={saCanegrowersLogo} alt="SA Canegrowers" className="h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={capsicumLogo} alt="Capsicum" className="h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={cbfLogo} alt="CBF" className="h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={turnkeyLogo} alt="Turnkey" className="h-12 w-auto object-contain" />
            </div>
             <div className="flex items-center justify-center">
               <img src={brmLogo} alt="BRM" className="h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={nologoLogo} alt="Nologo Studios" className="h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={tongaatLogo} alt="Tongaat Hulett" className="h-12 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* The Challenge & Solution Section */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#171717] leading-tight mb-8 tracking-tighter">
                Onboarding delays hurt customer impressions
              </h2>
              
              <div className="space-y-8">
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-[#171717] mb-2">The Problem</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Customer onboarding often breaks down because every department uses different tools and processes. Information gets lost, timelines stretch, and first impressions suffer.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-[#171717] mb-2">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Autopilot removes the bottlenecks by giving everyone one place to view, track, and collaborate.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
               <img 
                src={caseStudyImage} 
                alt="Chaotic Office Environment" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-medium italic">"Is this document the latest version?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Core Value Proposition */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6 tracking-tighter">
              Use one connected system for every customer onboarding
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 text-left hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-[#ED7A30] mb-6">
                <ArrowRight size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">One Platform</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Manage requirements, tasks, documents, KYC, handovers, and activation—giving your team a predictable, repeatable process for every new customer.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 text-left hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-[#ED7A30] mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">The Result</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Automatically notify teams, track progress, prevent bottlenecks, and give every customer a smooth, consistent start.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Key Features That Matter */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#171717] border-l-8 border-[#ED7A30] pl-6 uppercase tracking-wide mb-16">
            Key Features That Matter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               "Guided Customer Journey",
               "Automated Data & Document Collection",
               "Multi-Team Checklists",
               "Role-Based Visibility",
               "Built-in Communication",
               "Document Generation & Signing",
               "Automatic Archiving",
               "AI-Driven Document Validation"
             ].map((feature, i) => (
               <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center gap-4 hover:border-[#ED7A30] transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#ED7A30] shrink-0 group-hover:scale-110 transition-transform">
                    <Check size={20} strokeWidth={3} />
                 </div>
                 <span className="font-bold text-[#171717] text-lg">{feature}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
      {/* Integrations */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold text-[#171717] mb-6 tracking-tighter">
                  Works with the tools your team already uses
                </h2>
                <p className="text-lg text-gray-600 font-light mb-8">
                  Autopilot fits naturally into your existing environment, no need to rebuild.
                </p>
             </div>
             
             <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: "Sage", logo: sageLogo },
                  { name: "DocuSign", logo: docusignLogo },
                  { name: "Flowgear", logo: flowgearLogo },
                  { name: "Axure", logo: axureLogo },
                  { name: "Pipedrive", logo: pipedriveLogo },
                  { name: "SharePoint", logo: sharepointLogo }
                ].map((tool, i) => (
                  <div key={i} className="bg-white h-24 rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all p-6 group">
                    <img src={tool.logo} alt={tool.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#171717] mb-16 text-center uppercase tracking-tighter">
            Made for People. Powered by Process.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
             <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-100 -z-10" />
             
             {[
               {
                 title: "Prepare Once",
                 desc: "Set up your onboarding checklist, data fields, documents, and automations—one setup for all future workflows."
               },
               {
                 title: "Collect What's Needed",
                 desc: "External parties complete a clean, guided journey to submit details, upload documents, and sign agreements."
               },
               {
                 title: "Everyone in Sync",
                 desc: "HR, IT, Finance, Payroll, and vendors receive structured tasks with full visibility of what's done and what's pending."
               },
               {
                 title: "Deliver a Confident Start",
                 desc: "Every onboarding ends with validated data, completed documents, and a complete audit trail without anyone needing to chase."
               }
             ].map((step, i) => (
               <div key={i} className="bg-white pt-4">
                 <div className="w-16 h-16 bg-[#ED7A30] text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg rotate-3">
                   {i + 1}
                 </div>
                 <h3 className="text-xl font-bold text-[#171717] mb-3">{step.title}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
      {/* Case Study: YMCA */}
      <section className="py-24 bg-[#171717] text-white border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#ED7A30] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6">
              Case Study: YMCA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white max-w-5xl mx-auto tracking-tighter mb-8">
              From Paper Delays to Real-Time, Error-Free Onboarding for YMCA
            </h2>
            <p className="text-xl text-gray-400 italic font-medium">
              "A network of partners. A shared standard."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Gave remote and rural staff mobile-friendly access, reducing onboarding delays caused by limited computer access.",
              "Centralized documents and activity logs for easy retrieval, removing back-and-forth and missing paperwork during supplier or partner onboarding.",
              "Standardized onboarding steps through rule-driven digital workflows, ensuring consistency and fewer manual errors."
            ].map((point, i) => (
              <div key={i} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <div className="w-10 h-10 bg-[#ED7A30]/20 text-[#ED7A30] rounded-full flex items-center justify-center mb-6">
                  <Check size={20} />
                </div>
                <p className="text-gray-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/case-studies/ymca">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#171717] rounded-none uppercase font-bold px-10 py-6 text-lg transition-all duration-300">
                Read Full Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#171717] text-center mb-16 tracking-tighter">
            Results that speak for themselves
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Onboarding time was reduced from hours to minutes, eliminated errors with documents, avoided the need to hire new staff, and provided business-wide visibility on client progress.",
                name: "Joanne Walsh",
                role: "Commercial Director",
                company: "Commscloud",
                image: joanneWalsh
              },
              {
                quote: "Massive amounts of time saved all around. Autopilot has more than paid for itself in the hours we have saved.",
                name: "Brendan Antunez",
                role: "Sr. IT Manager",
                company: "CLARK+ELBING LLP",
                image: brendanAntunez
              },
              {
                quote: "As a small company, we increasingly rely on systems and data; our new staff have many systems and protocols to learn – onboarding can be overwhelming for them. Autopilot's 'keep it clean and simple' is great because it takes 5 minutes to onboard and they get it, no worries or comebacks.",
                name: "John Moll",
                role: "Knowledge and Information Manager",
                company: "SA Canegrowers",
                image: johnMoll
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-xl flex flex-col">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#ED7A30] text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" />
                  <div>
                    <div className="font-bold text-[#171717] text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 leading-tight">{testimonial.role}</div>
                    <div className="text-xs text-gray-400 leading-tight">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer / Bottom CTA */}
      <section className="py-32 bg-[#ED7A30] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tighter">
                Make customer onboarding the easiest part of your day.
              </h2>
            </div>
            
            <div className="flex flex-col items-start gap-8">
              <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed text-left">
                Connecting people, teams, and partners from day one
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs md:text-sm font-medium opacity-80 w-full max-w-md">
                {[
                  "Free 30-day trial",
                  "No payment info required",
                  "Full feature access",
                  "Dedicated onboarding support"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-white p-0.5 rounded-full">
                      <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={4} />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/book-demo">
                <Button className="bg-white text-[#ED7A30] hover:bg-gray-100 hover:text-[#ED7A30] text-xl px-8 py-4 rounded-none font-bold uppercase tracking-wider shadow-2xl w-full md:w-auto cursor-pointer">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}