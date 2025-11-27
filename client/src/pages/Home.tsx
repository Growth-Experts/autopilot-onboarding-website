import { Button } from "@/components/ui/button";
import { WindowFrame } from "@/components/ui/WindowFrame";
import heroDashboard from "@assets/generated_images/modern_saas_dashboard_ui_showing_onboarding_progress_with_orange_accents.png";
import featureDashboard from "@assets/generated_images/clean_saas_form_interface_for_employee_data_collection.png";
import janeDoe from "@assets/generated_images/professional_headshot_of_a_female_operations_manager.png";
import { Check, ArrowRight, Clock, Users, FileText, Shield, MessageSquare, Database, Archive, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Section 1: Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#171717] leading-[1.1] mb-8 tracking-tight">
              Onboarding shouldn't feel like a <span className="text-[#ED7A30]">scavenger hunt</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-10">Autopilot Onboarding connects every department - HR, IT, Finance, Ops, and anyone else - so the people you're onboarding get one clean, guided flow instead of scattered emails and manual checklists.</h2>
            <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-lg px-10 py-7 rounded-none font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Book a Demo
            </Button>
          </div>

          <div className="max-w-6xl mx-auto mt-12">
            <WindowFrame title="Onboarding Overview - Dashboard">
              <img 
                src={heroDashboard} 
                alt="Autopilot Dashboard" 
                className="w-full h-auto object-cover"
              />
            </WindowFrame>
          </div>
        </div>
      </section>
      {/* Section 2: The Problem (Pain Points) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold text-[#171717] leading-tight mb-8">
                Onboarding delays hurt people and partnerships
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                When onboarding lives in inboxes, details fall through. People get duplicate requests. Documents go missing. IT setups are delayed. Teams work from different versions of the truth.
              </p>
              
              <div className="bg-[#F5F5F5] p-8 border-l-4 border-[#ED7A30]">
                <p className="text-2xl font-serif italic text-[#171717] leading-relaxed">
                  "The real issue? Confusion makes your organization feel scattered and creates friction at the very moment you're trying to build trust."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: The Solution (High Level) */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">
              Use one connected system for every onboarding
            </h2>
            <p className="text-lg text-gray-500 font-light uppercase tracking-widest">Unified Workflow Engine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 bg-white shadow-sm">
            <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-orange-50/30 transition-colors">
              <div className="w-12 h-12 bg-[#ED7A30]/10 flex items-center justify-center mb-6 text-[#ED7A30]">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">Unified Ecosystem</h3>
              <p className="text-gray-600 leading-relaxed">
                Autopilot links HR, IT, Finance, and your vendors into one shared onboarding flow—no spreadsheets, no chasing, no guesswork.
              </p>
            </div>
            
            <div className="p-10 md:p-12 border-b border-gray-200 hover:bg-orange-50/30 transition-colors">
              <div className="w-12 h-12 bg-[#ED7A30]/10 flex items-center justify-center mb-6 text-[#ED7A30]">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">Automated Handoffs</h3>
              <p className="text-gray-600 leading-relaxed">
                Automate data collection and task hand-offs. Trigger provisioning the moment a contract is signed.
              </p>
            </div>

            <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-orange-50/30 transition-colors">
              <div className="w-12 h-12 bg-[#ED7A30]/10 flex items-center justify-center mb-6 text-[#ED7A30]">
                <ArrowRight size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">External Portal</h3>
              <p className="text-gray-600 leading-relaxed">
                Let external parties upload documents and sign in one guided journey. No login friction, just a secure link.
              </p>
            </div>

            <div className="p-10 md:p-12 hover:bg-orange-50/30 transition-colors">
              <div className="w-12 h-12 bg-[#ED7A30]/10 flex items-center justify-center mb-6 text-[#ED7A30]">
                <Check size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">Full Audit Trail</h3>
              <p className="text-gray-600 leading-relaxed">
                Track progress end-to-end with a clear audit trail. Everything moves in sync, every time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: Features Grid (Bento Style) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#171717] mb-12 border-l-8 border-[#ED7A30] pl-6 uppercase tracking-wide">
            Platform Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Guided Journey - Large Block */}
            <div className="md:col-span-2 md:row-span-2 bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between group hover:border-[#ED7A30] transition-colors relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center mb-4 text-[#ED7A30] shadow-sm">1</div>
                <h3 className="text-2xl font-bold text-[#171717]">Guided Journey</h3>
                <p className="text-gray-500 mt-2">Step-by-step wizards for every user type.</p>
              </div>
              <img src={featureDashboard} alt="Guided Journey" className="absolute right-0 bottom-0 w-2/3 shadow-xl translate-x-10 translate-y-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform opacity-80" />
            </div>

            {/* Automated Data - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">2</div>
              <h3 className="text-lg font-bold text-[#171717] leading-tight">Automated Data & Document Collection</h3>
            </div>

            {/* Checklists - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">3</div>
              <h3 className="text-lg font-bold text-[#171717] leading-tight">Multi-Team Checklists</h3>
            </div>

            {/* Role Based - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">4</div>
              <h3 className="text-lg font-bold text-[#171717] leading-tight">Role-Based Visibility</h3>
            </div>

            {/* Communication - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">5</div>
              <h3 className="text-lg font-bold text-[#171717] leading-tight">Built-In Communication</h3>
            </div>

            {/* Doc Gen - Tall Block */}
            <div className="md:col-span-1 md:row-span-2 bg-[#171717] p-8 flex flex-col justify-between text-white">
              <div>
                <div className="w-10 h-10 border border-gray-600 flex items-center justify-center mb-4 text-[#ED7A30]">6</div>
                <h3 className="text-2xl font-bold mb-2">Document Generation & Signing</h3>
                <p className="text-gray-400 text-sm">Instantly create contracts and get them e-signed.</p>
              </div>
              <FileText className="text-[#ED7A30] opacity-50 w-16 h-16 self-end" />
            </div>

            {/* Archiving - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">7</div>
              <h3 className="text-lg font-bold text-[#171717] leading-tight">Automatic Archiving</h3>
            </div>

            {/* AI - Standard Block */}
            <div className="md:col-span-2 bg-orange-50 border border-orange-100 p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ED7A30] text-white flex items-center justify-center shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#171717] mb-1">AI-Driven Document Validation</h3>
                <p className="text-gray-600 text-sm">Automatically verify uploaded IDs and certifications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5: Integrations */}
      <section className="py-20 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
            Works with the tools your team already uses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-light">
            Autopilot fits naturally into your existing environment, no need to rebuild.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Text placeholders for logos as requested, styled to look like logos */}
            {["Sage One", "DocuSign", "Flowgear", "Azure", "Pipedrive", "SharePoint Online"].map((name) => (
              <div key={name} className="text-xl md:text-2xl font-bold text-gray-400 font-sans tracking-tighter">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 6: The Process (Timeline Strip) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#171717] mb-16 text-center uppercase tracking-widest">
            How It Works
          </h2>
          
          <div className="relative">
            {/* Line connecting steps */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Prepare Once",
                  desc: "Set up your onboarding checklist, data fields, documents, and automations one setup for all future workflows."
                },
                {
                  step: "02",
                  title: "Collect What's Needed",
                  desc: "External parties complete a clean, modern journey to submit details, upload documents, and sign agreements."
                },
                {
                  step: "03",
                  title: "Everyone in Sync",
                  desc: "HR, IT, Finance, Payroll, and vendors receive structured tasks with full visibility of what's done and what's pending."
                },
                {
                  step: "04",
                  title: "Deliver a Confident Start",
                  desc: "Every onboarding ends with validated data, completed documents, and a complete audit trail without anyone needing to chase."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 md:pt-0">
                  <div className="w-24 h-24 bg-white border-2 border-[#ED7A30] rounded-full flex items-center justify-center text-[#ED7A30] text-2xl font-bold mb-6 mx-auto md:mx-0 shadow-[0_0_0_8px_rgba(255,255,255,1)] z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#171717] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section 7: Case Study Teaser */}
      <section className="py-24 bg-[#171717] text-white border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#ED7A30] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6">
                Case Study
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                From Paper Delays to Real-Time, Error-Free Onboarding for YMCA
              </h2>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#171717] rounded-none uppercase font-bold px-8">
                Read Full Story
              </Button>
            </div>
            
            <div className="space-y-8">
              {[
                "Gave remote and rural staff mobile-friendly access, reducing onboarding delays caused by limited computer access.",
                "Centralized documents and activity logs for easy retrieval, removing back-and-forth and missing paperwork.",
                "Standardized onboarding steps through rule-driven digital workflows, ensuring consistency and fewer manual errors."
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 border-b border-gray-800 pb-6 last:border-0">
                  <div className="w-6 h-6 rounded-full bg-[#ED7A30] shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg font-light leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section 8: Testimonials */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0">
              <img src={janeDoe} alt="Jane Doe" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-4 border-gray-100" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-[#ED7A30] text-6xl font-serif leading-none mb-4 opacity-30">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-[#171717] leading-relaxed mb-6">
                The ease of setting up workflows and the clarity it provides are game-changers. Our team is more efficient, and we can make quicker, more informed decisions. Finally, an onboarding solution that truly understands our needs.
              </blockquote>
              <cite className="not-italic">
                <div className="font-bold text-[#171717] uppercase tracking-wide">Jane Doe</div>
                <div className="text-gray-500 font-light">Operations Manager</div>
              </cite>
            </div>
          </div>
        </div>
      </section>
      {/* Section 9: Bottom CTA */}
      <section className="py-32 bg-[#ED7A30] text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 max-w-4xl mx-auto leading-tight">
            Make onboarding the easiest part of your day.
          </h2>
          <Button className="bg-white text-[#ED7A30] hover:bg-gray-100 hover:text-[#ED7A30] text-xl px-12 py-8 rounded-none font-bold uppercase tracking-wider shadow-2xl">
            Book a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
