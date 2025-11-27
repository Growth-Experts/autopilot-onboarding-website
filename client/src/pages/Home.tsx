import { Button } from "@/components/ui/button";
import { WindowFrame } from "@/components/ui/WindowFrame";
import heroDashboard from "@assets/generated_images/modern_saas_dashboard_ui_showing_onboarding_progress_with_orange_accents.png";
import featureDashboard from "@assets/generated_images/clean_saas_form_interface_for_employee_data_collection.png";
import checklistImage from "@assets/generated_images/saas_interface_showing_role-based_checklists_and_progress_tracking.png";
import caseStudyImage from "@assets/stock_images/diverse_professional_10bf22ef.jpg";
import avatarJane from "@assets/stock_images/professional_woman_c_a3afb741.jpg";
import avatarJohn from "@assets/stock_images/professional_man_cor_a0338afc.jpg";
import avatarEmily from "@assets/stock_images/business_woman_profe_0724059b.jpg";
import { Check, ArrowRight, Clock, Users, FileText, Shield, MessageSquare, Database, Archive, Zap, Play } from "lucide-react";

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
      {/* Trusted By Section */}
      <section className="py-20 bg-[#FAFAFA] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#171717] mb-12 tracking-tight">
            Trusted by teams who care about first impressions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="font-extrabold text-xl text-gray-600 tracking-tight">3 WAY MARKETING</div>
            <div className="font-bold text-xl text-green-700 flex items-center justify-center gap-2">
               <span className="text-2xl">🌱</span> SA Canegrowers
            </div>
            <div className="font-bold text-xl text-red-600 flex items-center justify-center gap-2">
               <span className="text-2xl">🌶️</span> Capsicum
            </div>
            <div className="font-bold text-xl text-purple-800 border-2 border-purple-800 rounded-full w-12 h-12 flex items-center justify-center">cbf</div>
            <div className="font-bold text-xl text-gray-800 flex items-center justify-center gap-1">
               <span className="text-red-600 text-2xl">❖</span> turnkey
            </div>
             <div className="font-bold text-lg text-red-700 border-2 border-red-700 rounded px-3 py-1 tracking-wider">BRM</div>
            <div className="font-extrabold text-2xl text-black tracking-tighter lowercase">nologo</div>
            <div className="font-bold text-xl text-amber-800 font-serif">Tongaat Hulett</div>
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
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              Autopilot links HR, IT, Finance, and your vendors into one shared onboarding flow - no spreadsheets, no chasing, no guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-[#ED7A30]/10 flex items-center justify-center text-[#ED7A30] shrink-0 group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#171717] mb-2">Automate data collection and task hand offs</h3>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-[#ED7A30]/10 flex items-center justify-center text-[#ED7A30] shrink-0 group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#171717] mb-2">Give internal teams role-based checklists</h3>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-[#ED7A30]/10 flex items-center justify-center text-[#ED7A30] shrink-0 group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                  <ArrowRight size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#171717] mb-2">Let external parties upload documents and sign in one guided journey</h3>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-[#ED7A30]/10 flex items-center justify-center text-[#ED7A30] shrink-0 group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                  <Check size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#171717] mb-2">Track progress end-to-end with a clear audit trail</h3>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 mt-4">
                <p className="text-xl font-bold text-[#171717] italic mb-8">Everything moves in sync, every time.</p>
                <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wider shadow-lg">
                  See how it works
                </Button>
              </div>
            </div>

            <div className="relative">
              <WindowFrame title="Workflow Management">
                <img 
                  src={checklistImage} 
                  alt="Checklist Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </WindowFrame>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: Features Grid (Bento Style) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#171717] mb-12 border-l-8 border-[#ED7A30] pl-6 uppercase tracking-wide">
            Key Features That Matter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Guided Journey - Large Block */}
            <div className="md:col-span-2 md:row-span-2 bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between group hover:border-[#ED7A30] transition-colors relative overflow-hidden min-h-[300px]">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center mb-4 text-[#ED7A30] shadow-sm">1</div>
                <h3 className="text-2xl font-bold text-[#171717]">Guided Journey</h3>
                <p className="text-gray-500 mt-2 text-lg leading-relaxed max-w-md">Give customers, vendors, and new hires one simple, step-by-step flow to provide details and upload documents - no back-and-forth emails.</p>
              </div>
              <img src={featureDashboard} alt="Guided Journey" className="absolute -right-12 -bottom-12 w-[90%] shadow-2xl rounded-tl-xl border border-gray-200 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500" />
            </div>

            {/* Automated Data - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col justify-start gap-4">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">2</div>
                <h3 className="text-lg font-bold text-[#171717] leading-tight">Automated Data & Document Collection</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Capture information, documents, and signatures from anyone through a single, structured process.</p>
            </div>

            {/* Checklists - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col justify-start gap-4">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">3</div>
                <h3 className="text-lg font-bold text-[#171717] leading-tight">Multi-Team Checklists</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">HR, IT, Finance, Operations - everyone sees their tasks in one shared place, so work happens in parallel, not sequentially.</p>
            </div>

            {/* Role Based - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col justify-start gap-4">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">4</div>
                <h3 className="text-lg font-bold text-[#171717] leading-tight">Role-Based Visibility</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Each team member sees only what they need, with sensitive data protected by role permissions.</p>
            </div>

            {/* Communication - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col justify-start gap-4">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">5</div>
                <h3 className="text-lg font-bold text-[#171717] leading-tight">Built-In Communication</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Ask questions and share clarifications directly inside the flow (instead of spawning new email threads).</p>
            </div>

            {/* Doc Gen - Tall Block */}
            <div className="md:col-span-1 md:row-span-2 bg-white border border-gray-200 p-8 flex flex-col justify-between hover:border-[#ED7A30] transition-colors min-h-[300px] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-[#ED7A30] font-bold text-sm">6</div>
                <h3 className="text-2xl font-bold text-[#171717] mb-2">Document Generation & Signing</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Generate standard forms automatically and send them for compliant e-signature with a click.</p>
              </div>
              <FileText className="text-[#ED7A30] opacity-10 w-32 h-32 absolute -bottom-4 -right-4 group-hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Archiving - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col justify-start gap-4">
              <div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-[#ED7A30] font-bold text-xs">7</div>
                <h3 className="text-lg font-bold text-[#171717] leading-tight">Automatic Archiving</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Completed documents go straight into SharePoint or your CRM - neatly stored and fully traceable.</p>
            </div>

            {/* AI - Standard Block */}
            <div className="md:col-span-2 bg-orange-50 border border-orange-100 p-6 flex flex-col justify-center gap-2">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-[#ED7A30] text-white flex items-center justify-center shrink-0">
                  <Zap size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#171717]">AI-Driven Document Validation</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-14">Uploaded documents are checked and cross-verified against captured form data, reducing errors and preventing onboarding delays.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5: Integrations & Workflow */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-6">
              Works with the tools your team already uses
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Autopilot fits naturally into your existing environment, no need to rebuild.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: The Process Copy */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ED7A30] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
                <div>
                  <h3 className="text-xl font-bold text-[#171717] mb-2">Prepare Once</h3>
                  <p className="text-gray-600 leading-relaxed">Set up your onboarding checklist, data fields, documents, and automations - one setup for all future workflows.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ED7A30] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">2</div>
                <div>
                  <h3 className="text-xl font-bold text-[#171717] mb-2">Collect What's Needed</h3>
                  <p className="text-gray-600 leading-relaxed">External parties complete a clean, guided journey to submit details, upload documents, and sign agreements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ED7A30] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">3</div>
                <div>
                  <h3 className="text-xl font-bold text-[#171717] mb-2">Everyone in Sync</h3>
                  <p className="text-gray-600 leading-relaxed">HR, IT, Finance, Payroll, and vendors receive structured tasks with full visibility of what's done and what's pending.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ED7A30] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">4</div>
                <div>
                  <h3 className="text-xl font-bold text-[#171717] mb-2">Deliver a Confident Start</h3>
                  <p className="text-gray-600 leading-relaxed">Every onboarding ends with validated data, completed documents, and a complete audit trail - without anyone needing to chase.</p>
                </div>
              </div>
            </div>

            {/* Right: The Logos Grid */}
            <div className="bg-white p-10 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">Integrated Ecosystem</h3>
              <div className="grid grid-cols-2 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {["Sage One", "DocuSign", "Flowgear", "Azure", "Pipedrive", "SharePoint Online"].map((name) => (
                  <div key={name} className="h-16 w-full flex items-center justify-center border border-dashed border-gray-300 rounded-lg hover:border-[#ED7A30] hover:border-solid transition-colors">
                    <span className="text-sm font-bold text-gray-500">{name}</span>
                  </div>
                ))}
                <div className="col-span-2 text-xs text-gray-400 font-mono mt-4">
                  + Custom API Integrations Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 6: The Process (Timeline Strip) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#171717] mb-16 text-center uppercase tracking-widest">made for people. powered by process.</h2>
          
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
          <div className="text-center mb-16">
            <div className="inline-block bg-[#ED7A30] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6">
              Case Study
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white max-w-5xl mx-auto">
              From Paper Delays to Real-Time, Error-Free Onboarding for YMCA
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <img 
                src={caseStudyImage} 
                alt="YMCA Team Collaboration" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/20" />
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

          <div className="text-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#171717] rounded-none uppercase font-bold px-10 py-6 text-lg transition-all duration-300">
              Read Full Story
            </Button>
          </div>
        </div>
      </section>
      {/* Section 8: Testimonials & Video */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#171717] text-center mb-16">
            Results that speak for themselves
          </h2>

          {/* Video Placeholder */}
          <div className="max-w-5xl mx-auto mb-20 relative group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
              <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 text-[#ED7A30] ml-2 fill-[#ED7A30]" />
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Autopilot Onboarding has transformed our internal processes. What used to take days now takes hours. The visibility and control are unmatched.",
                name: "Jane Doe",
                role: "Operations Manager",
                company: "Tech Solutions Inc.",
                image: avatarJane
              },
              {
                quote: "The ease of setting up workflows and the clarity it provides are game-changers. Our team is more efficient, and we can make quicker, more informed decisions.",
                name: "John Smith",
                role: "Product Lead",
                company: "Innovate Corp.",
                image: avatarJohn
              },
              {
                quote: "Finally, an onboarding solution that truly understands B2B needs. The customizable features and robust reporting have saved us countless hours.",
                name: "Emily White",
                role: "Marketing Director",
                company: "Global Brands Inc.",
                image: avatarEmily
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
      {/* Section 9: Bottom CTA */}
      <section className="py-32 bg-[#ED7A30] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Make onboarding the easiest part of your day.
              </h2>
            </div>
            
            <div className="flex flex-col items-start gap-8">
              <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed text-left">
                Let's replace scattered emails and loose tasks with one clean onboarding flow.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs md:text-sm font-medium opacity-80 w-full max-w-md">
                {[
                  "Free 30-day trial",
                  "No payment info required",
                  "Full feature access",
                  "Dedicated onboarding support"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-white/20 p-0.5 rounded-full">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-white text-[#ED7A30] hover:bg-gray-100 hover:text-[#ED7A30] text-xl px-10 py-8 rounded-none font-bold uppercase tracking-wider shadow-2xl w-full md:w-auto">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
