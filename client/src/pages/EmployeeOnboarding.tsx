import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, FileText, Shield, Zap } from "lucide-react";
import { WindowFrame } from "@/components/ui/WindowFrame";
import dashboardImage from "@assets/generated_images/clean_saas_form_interface_for_employee_data_collection.png";

export default function EmployeeOnboarding() {
  return (
    <div className="bg-white font-montserrat">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#171717] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-[#ED7A30] text-xs font-bold uppercase tracking-widest mb-8">
            <Users size={12} />
            <span>Employee Onboarding</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tighter max-w-4xl mx-auto">
            Give new hires a <span className="text-[#ED7A30]">world-class welcome</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Stop burying new employees in paperwork on their first day. Automate the boring stuff so they can focus on their new team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wider w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#171717] text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wider w-full sm:w-auto">
              View Demo
            </Button>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ED7A30] blur-[100px]" />
           <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-900 blur-[100px]" />
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#171717] tracking-tight">
                First impressions matter.<br/>Don't mess them up.
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                When a new employee spends their first week chasing IT for a laptop, printing forms to sign by hand, and waiting for access to systems, they feel forgotten.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <FileText className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171717] text-lg">Manual Paperwork</h4>
                    <p className="text-gray-500 leading-relaxed">Hours lost scanning, printing, and re-typing data.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Zap className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171717] text-lg">Slow IT Provisioning</h4>
                    <p className="text-gray-500 leading-relaxed">Employees waiting days for email and Slack access.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Shield className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171717] text-lg">Compliance Gaps</h4>
                    <p className="text-gray-500 leading-relaxed">Missing policy acknowledgments and incomplete files.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 relative">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded shadow-lg rotate-3">
                The Old Way
              </div>
              <div className="space-y-4 opacity-60 pointer-events-none grayscale">
                <div className="bg-white p-4 rounded shadow-sm border border-gray-200 flex gap-3 items-center">
                   <div className="w-8 h-8 bg-gray-200 rounded-full" />
                   <div className="h-2 bg-gray-200 rounded w-24" />
                   <div className="h-2 bg-gray-200 rounded w-full" />
                </div>
                <div className="bg-white p-4 rounded shadow-sm border border-gray-200 flex gap-3 items-center ml-8">
                   <div className="w-8 h-8 bg-gray-200 rounded-full" />
                   <div className="h-2 bg-gray-200 rounded w-24" />
                   <div className="h-2 bg-gray-200 rounded w-full" />
                </div>
                <div className="bg-white p-4 rounded shadow-sm border border-gray-200 flex gap-3 items-center">
                   <div className="w-8 h-8 bg-gray-200 rounded-full" />
                   <div className="h-2 bg-gray-200 rounded w-24" />
                   <div className="h-2 bg-gray-200 rounded w-full" />
                </div>
              </div>
              <div className="mt-8 text-center">
                 <p className="text-red-500 font-bold text-lg italic">"Where is my laptop?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#171717] mb-6 tracking-tighter">
              A complete onboarding journey in one flow
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Autopilot orchestrates the entire process—from offer letter to first-day login—so nothing slips through the cracks.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <WindowFrame title="Employee Onboarding Workflow">
              <img src={dashboardImage} alt="Onboarding Dashboard" className="w-full h-auto" />
            </WindowFrame>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            {[
              {
                title: "Pre-Boarding",
                desc: "Send welcome kits, digital contracts, and data forms before day one.",
                step: "01"
              },
              {
                title: "Day One",
                desc: "Automate IT account creation and hardware provisioning requests.",
                step: "02"
              },
              {
                title: "First Week",
                desc: "Schedule check-ins, assign training, and track policy sign-offs.",
                step: "03"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#ED7A30] transition-colors group">
                <div className="text-4xl font-bold text-gray-200 mb-4 group-hover:text-[#ED7A30] transition-colors">{feature.step}</div>
                <h3 className="text-xl font-bold text-[#171717] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#171717] text-white border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">The Autopilot Effect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center border-b border-gray-800 pb-6">
                    <span className="text-5xl font-bold text-[#ED7A30]">40%</span>
                    <p className="text-xl text-gray-300">Faster time-to-productivity for new hires</p>
                  </div>
                  <div className="flex gap-4 items-center border-b border-gray-800 pb-6">
                    <span className="text-5xl font-bold text-[#ED7A30]">0</span>
                    <p className="text-xl text-gray-300">Emails needed to setup IT accounts</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="text-5xl font-bold text-[#ED7A30]">100%</span>
                    <p className="text-xl text-gray-300">Compliance on policy acknowledgments</p>
                  </div>
                </div>
             </div>
             <div className="bg-gray-800/50 p-10 rounded-2xl border border-gray-700">
                <p className="text-2xl font-light italic leading-relaxed mb-8 text-gray-300">
                  "Our new hires used to spend their first week filling out forms. Now they spend it meeting their team and learning the product. It's a game changer."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full" />
                  <div>
                    <div className="font-bold text-white">Sarah Jenkins</div>
                    <div className="text-[#ED7A30] text-sm">VP of People, TechFlow</div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-8 tracking-tighter max-w-3xl mx-auto">
            Ready to upgrade your welcome mat?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join forward-thinking companies who treat onboarding as a strategic advantage, not an admin burden.
          </p>
          <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white text-xl px-12 py-8 rounded-none font-bold uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}