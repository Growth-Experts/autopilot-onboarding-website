import { Button } from "@/components/ui/button";
import { WindowFrame } from "@/components/ui/WindowFrame";
import heroDashboard from "@assets/generated_images/modern_saas_dashboard_ui_showing_onboarding_progress_with_orange_accents.png";
import featureDashboard from "@assets/generated_images/clean_saas_form_interface_for_employee_data_collection.png";
import checklistImage from "@assets/generated_images/saas_interface_showing_role-based_checklists_and_progress_tracking.png";
import appShot1 from "@assets/generated_images/saas_dashboard_showing_onboarding_progress.png";
import appShot2 from "@assets/generated_images/digital_form_for_employee_data.png";
import appShot3 from "@assets/generated_images/document_signing_interface.png";
import appShot4 from "@assets/generated_images/team_collaboration_checklist.png";
import caseStudyImage from "@assets/stock_images/diverse_professional_10bf22ef.jpg";
import problemImage from "@assets/stock_images/chaotic_messy_office_8b8ef31a.jpg";
import avatarJane from "@assets/stock_images/professional_woman_c_a3afb741.jpg";
import avatarJohn from "@assets/stock_images/professional_man_cor_a0338afc.jpg";
import avatarEmily from "@assets/stock_images/business_woman_profe_0724059b.jpg";
import bidvestLogo from "@assets/bidvest-logo_1765964035827.png";
import integrationsImage from "@assets/autopilot-integrations_1764671619557.png";
import { Check, ArrowRight, Clock, Users, FileText, Shield, MessageSquare, Database, Archive, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

import autopilot_integrations from "@assets/autopilot-integrations.png";

import saCanegrowersLogo from "@assets/SA_CaneGrowers_logo_1764682801217.png";
import threeWayLogo from "@assets/3way-logo_1764684321801.png";
import syntechLogo from "@assets/Syntech-Logo_1765963655582.png";
import cbfLogo from "@assets/cbf-logo_1764685158359.png";
import nologoLogo from "@assets/nologo_logo_1765189608574.png";
import tongaatLogo from "@assets/Tongaat-Huletts-Logo_1764685174149.png";
import metrofileLogo from "@assets/metrofile-logo_1765964032371.png";

import backoffice004 from "@assets/Backoffice_004_1765964508560.PNG";
import backoffice005 from "@assets/Backoffice_005_1765964508562.PNG";
import reseller009 from "@assets/Reseller_Application_009_1765964508563.PNG";
import reseller011 from "@assets/Reseller_Application_011_1765964508563.PNG";
import backoffice011 from "@assets/Backoffice_011_1764836642764.PNG";
import joanneWalsh from "@assets/Joanne_Walsh_1764834864661.jpeg";
import brendanAntunez from "@assets/Brendan_Antunez_1764834968337.jpeg";
import johnMoll from "@assets/John_Moll_1764835180381.jpeg";

import backoffice001 from "@assets/Backoffice_001_1764837439866.PNG";
import backoffice002 from "@assets/Backoffice_002_1764837444678.PNG";
import resellerApp001 from "@assets/Reseller_Application_001_1764837470544.PNG";
import resellerApp008 from "@assets/Reseller_Application_008_1764837481982.PNG";
import resellerApp010 from "@assets/Reseller_Application_010_1764837488338.PNG";

function HeroSlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Onboarding Preview ${index + 1}`}
              className="w-full h-full object-contain bg-gray-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function AppGallerySlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <img 
          src={images[currentIndex]} 
          alt={`App Screenshot ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-opacity duration-500" 
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      </div>
      
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        <button 
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 border-0 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 border-0 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Section 1: Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#171717] leading-[1.1] mb-8 tracking-tighter">
              Onboarding shouldn't feel like a <span className="text-[#ED7A30]">scavenger hunt</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-10"><span className="font-bold text-[#171717]">Autopilot Onboarding</span> connects every department - HR, IT, Finance, Ops, and anyone else - so the people you're onboarding get one clean, guided flow instead of scattered emails and manual checklists.</h2>
            <Link href="/book-demo">
              <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-lg px-8 py-4 rounded-none font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer">
                Book a Demo
              </Button>
            </Link>
          </div>

          <div className="max-w-6xl mx-auto mt-12">
            <WindowFrame title="Autopilot Onboarding Overview">
              <HeroSlideshow images={[backoffice004, backoffice005, reseller009, reseller011]} />
            </WindowFrame>
          </div>
        </div>
      </section>
      {/* Trusted By Section */}
      <section className="py-20 bg-[#FAFAFA] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#171717] mb-12 tracking-tighter">
            Trusted by teams who care about first impressions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center [&>*]:opacity-50 [&>*]:grayscale [&>*]:transition-all [&>*]:duration-500 [&>:hover]:grayscale-0 [&>:hover]:opacity-100">
            <div className="flex items-center justify-center">
              <img src={threeWayLogo} alt="3 Way Marketing" className="h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src={saCanegrowersLogo} alt="SA Canegrowers" className="h-14 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={bidvestLogo} alt="Bidvest" className="h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={cbfLogo} alt="CBF" className="h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
               <img src={metrofileLogo} alt="Metrofile" className="h-12 w-auto object-contain" />
            </div>
             <div className="flex items-center justify-center">
               <img src={syntechLogo} alt="Syntech" className="h-12 w-auto object-contain" />
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
      {/* Section 2: The Problem (Pain Points) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#171717] leading-tight mb-8 tracking-tighter">
                Onboarding delays hurt people and partnerships
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                When onboarding lives in inboxes, mistakes follow. People get duplicate requests. Documents go missing. IT setups are delayed. Teams work from different versions of the truth.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#171717]">The real issue?</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Confusion makes your organization feel disorganized - and creates friction at the very moment you're trying to build trust.
                </p>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
              <img 
                src={problemImage} 
                alt="Disorganized Onboarding Process" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 3: The Solution (High Level) */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6 tracking-tighter">
              Use one connected system for every onboarding
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Autopilot links HR, IT, Finance, and your vendors into one shared onboarding flow - no spreadsheets, no chasing, no guesswork.
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* Central Visual - Large & Responsive */}
            <div className="w-full max-w-5xl mb-16">
              <div className="relative shadow-2xl rounded-xl overflow-hidden border border-gray-200 bg-white">
                <WindowFrame title="Workflow Management">
                  <img 
                    src={backoffice011} 
                    alt="Checklist Dashboard" 
                    className="w-full h-auto object-contain"
                  />
                </WindowFrame>
              </div>
            </div>

            {/* Features Grid - Underneath */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-[#ED7A30]/10 rounded-lg flex items-center justify-center text-[#ED7A30] mb-4 group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2">Automate data collection and task hand offs</h3>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-[#ED7A30]/10 rounded-lg flex items-center justify-center text-[#ED7A30] mb-4 group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2">Give internal teams role-based checklists</h3>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-[#ED7A30]/10 rounded-lg flex items-center justify-center text-[#ED7A30] mb-4 group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                  <ArrowRight size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2">Let external parties upload documents and sign in one guided journey</h3>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-[#ED7A30]/10 rounded-lg flex items-center justify-center text-[#ED7A30] mb-4 group-hover:bg-[#ED7A30] group-hover:text-white transition-colors">
                  <Check size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#171717] mb-2">Track progress end-to-end with a clear audit trail</h3>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="mt-16 text-center">
              <p className="text-2xl font-bold text-[#171717] italic mb-8 tracking-tight">Everything moves in sync, every time.</p>
              <Link href="/book-demo">
                <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-lg px-8 py-4 rounded-none font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: Features Grid (Bento Style) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-3xl font-bold text-[#171717] border-l-8 border-[#ED7A30] pl-6 uppercase tracking-wide">
              Key Features That Matter
            </h2>
            <div className="text-gray-500 text-sm font-medium tracking-wide uppercase hidden md:block">
              Everything you need to onboard better
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(232px,auto)] grid-flow-dense">
            
            {/* 1. Guided Journey - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all rounded-xl flex flex-col justify-start gap-4 group hover:-translate-y-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#ED7A30] font-mono text-lg font-bold">01</span>
                <h3 className="text-xl font-bold text-[#171717] leading-tight">Guided Journey</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Give customers, vendors, and new hires one simple, step-by-step flow to provide details and upload documents - no back-and-forth emails.</p>
            </div>

            {/* NEW: App Gallery Slider - Big Block (3x2) */}
            <div className="md:col-span-2 lg:col-span-3 lg:row-span-2 bg-[#171717] rounded-xl overflow-hidden relative flex flex-col justify-center p-0 group h-[488px] border border-gray-800 shadow-2xl">
               <div className="absolute top-6 left-6 z-20 bg-[#ED7A30] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                  Platform Preview
               </div>
               
               <AppGallerySlider images={[backoffice001, backoffice002, resellerApp001, resellerApp008, resellerApp010]} />
            </div>

            {/* 2. Automated Data - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all rounded-xl flex flex-col justify-start gap-4 group hover:-translate-y-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#ED7A30] font-mono text-lg font-bold">02</span>
                <h3 className="text-xl font-bold text-[#171717] leading-tight">Automated Data & Document Collection</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Capture information, documents, and signatures from anyone through a single, structured process.</p>
            </div>

            {/* 3. Checklists - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all rounded-xl flex flex-col justify-start gap-4 group hover:-translate-y-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#ED7A30] font-mono text-lg font-bold">03</span>
                <h3 className="text-xl font-bold text-[#171717] leading-tight">Multi-Team Checklists</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">HR, IT, Finance, Operations - everyone sees their tasks in one shared place, so work happens in parallel, not sequentially.</p>
            </div>

            {/* 4. Role Based - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all rounded-xl flex flex-col justify-start gap-4 group hover:-translate-y-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#ED7A30] font-mono text-lg font-bold">04</span>
                <h3 className="text-xl font-bold text-[#171717] leading-tight">Role-Based Visibility</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Each team member sees only what they need, with sensitive data protected by role permissions.</p>
            </div>

            {/* 5. Communication - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all rounded-xl flex flex-col justify-start gap-4 group hover:-translate-y-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#ED7A30] font-mono text-lg font-bold">05</span>
                <h3 className="text-xl font-bold text-[#171717] leading-tight">Built-In Communication</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Ask questions and share clarifications directly inside the flow (instead of spawning new email threads).</p>
            </div>

            {/* 6. Document Generation - Standard Block (Fixed Alignment) */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all rounded-xl flex flex-col justify-start gap-4 group hover:-translate-y-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#ED7A30] font-mono text-lg font-bold">06</span>
                <h3 className="text-xl font-bold text-[#171717] leading-tight">Document Generation & Signing</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Generate standard forms automatically and send them for compliant e-signature with a click.</p>
              <div className="mt-auto pt-4">
                 <FileText className="text-[#ED7A30] opacity-20 w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* 7. Archiving - Standard Block */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all rounded-xl flex flex-col justify-start gap-4 group hover:-translate-y-1">
              <div className="flex flex-col items-start gap-2">
                 <span className="text-[#ED7A30] font-mono text-lg font-bold">07</span>
                 <h3 className="text-xl font-bold text-[#171717] leading-tight">Automatic Archiving</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Completed documents go straight into SharePoint or your CRM - neatly stored and fully traceable.</p>
              <div className="mt-auto pt-4">
                 <Archive className="text-[#ED7A30] opacity-20 w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* AI - Standard Block */}
            <div className="bg-orange-50 border border-orange-100 p-6 hover:shadow-lg transition-all rounded-xl flex flex-col justify-start gap-4 group hover:border-[#ED7A30]">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-[#171717] leading-tight">AI Validation</h3>
                <div className="w-8 h-8 bg-[#ED7A30] text-white rounded-full flex items-center justify-center shadow-md">
                  <Zap size={16} />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">Uploaded documents are checked and cross-verified against captured form data, reducing errors and preventing delays.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5: Integrations & Workflow */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-6 tracking-tighter">
              Works with the tools your team already uses
            </h2>
            <p className="text-lg text-gray-600 font-medium">
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
              <div className="flex justify-center items-center">
                <img 
                  src={autopilot_integrations} 
                  alt="Autopilot Integrations Ecosystem including Sage, DocuSign, Azure, and more" 
                  className="w-full h-auto max-w-md object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 6: The Process (Timeline Strip) */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-[#171717] mb-16 text-center uppercase tracking-tighter">made for people. powered by process.</h2>
          
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
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white max-w-5xl mx-auto tracking-tighter">
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
            <Link href="/case-studies/ymca">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#171717] rounded-none uppercase font-bold px-10 py-6 text-lg transition-all duration-300">
                Read Full Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Section 8: Testimonials & Video */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#171717] text-center mb-16 tracking-tighter">
            Results that speak for themselves
          </h2>


          {/* Testimonials Grid */}
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
                quote: "The support and documentation from Autopilot is amazing - they go above and beyond documenting what they have done, even in the backend. They are on par with Fortune 500 companies in support.",
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
      {/* Section 9: Bottom CTA */}
      <section className="py-32 bg-[#ED7A30] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tighter">
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
