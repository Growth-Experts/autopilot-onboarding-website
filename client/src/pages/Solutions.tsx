import { Button } from "@/components/ui/button";
import { useRoute } from "wouter";
import { WindowFrame } from "@/components/ui/WindowFrame";
import featureDashboard from "@assets/generated_images/clean_saas_form_interface_for_employee_data_collection.png";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Data for different solution types
const solutionsData = {
  employee: {
    title: "Employee Onboarding",
    hero: "Give new hires a world-class welcome.",
    painPoint: "Stop burying new employees in paperwork on their first day.",
    howItWorks: [
      "Digital offer letters and contract signing",
      "IT provisioning automation",
      "Policy acknowledgement tracking",
      "First-week goal setting"
    ],
    testimonial: "We reduced our time-to-productivity by 40% with Autopilot."
  },
  customer: {
    title: "Customer Onboarding",
    hero: "Accelerate time-to-value for every new client.",
    painPoint: "Don't let momentum die after the deal is closed.",
    howItWorks: [
      "Client data intake forms",
      "Implementation project tracking",
      "Document collection and approval",
      "Automated status updates"
    ],
    testimonial: "Our clients love the transparency. No more 'black box' onboarding."
  },
  vendor: {
    title: "Vendor Onboarding",
    hero: "Secure, compliant vendor setup in minutes.",
    painPoint: "Eliminate the risk of unvetted suppliers and manual data entry.",
    howItWorks: [
      "Self-service supplier portal",
      "Compliance document collection",
      "Bank detail verification",
      "Approval workflow routing"
    ],
    testimonial: "Compliance audits are now a breeze thanks to the digital trail."
  },
  reseller: {
    title: "Reseller Onboarding",
    hero: "Scale your partner network without the chaos.",
    painPoint: "Partnerships shouldn't fail because of administrative friction.",
    howItWorks: [
      "Partner agreement management",
      "Training material distribution",
      "Marketing asset sharing",
      "Performance tracking setup"
    ],
    testimonial: "We doubled our partner network without adding admin headcount."
  }
};

export default function Solutions() {
  const [match, params] = useRoute("/solutions/:type");
  const type = params?.type as keyof typeof solutionsData || "employee";
  const data = solutionsData[type] || solutionsData.employee;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-24 bg-[#171717] text-white border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-block border border-[#ED7A30] text-[#ED7A30] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            {data.title}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            {data.hero}
          </h1>
          <Button className="bg-[#ED7A30] hover:bg-[#d66520] text-white px-8 py-6 rounded-none font-bold uppercase">
            Get Started
          </Button>
        </div>
      </section>

      {/* Pain Point */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#171717] mb-6">
                The Problem
              </h2>
              <p className="text-2xl text-gray-600 font-light leading-relaxed">
                {data.painPoint}
              </p>
            </div>
            <div className="bg-gray-50 p-10 border-l-4 border-red-500">
              <h3 className="font-bold text-[#171717] uppercase tracking-wide mb-4">Without Autopilot</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Manual data entry errors</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Lost documents in email threads</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Frustrated stakeholders</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Compliance risks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <WindowFrame title={`${data.title} Workflow`}>
                <img src={featureDashboard} alt="Workflow" className="w-full" />
              </WindowFrame>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#171717] mb-10">How It Works</h2>
              <div className="space-y-6">
                {data.howItWorks.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#ED7A30] text-white flex items-center justify-center rounded-full font-bold shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-lg text-[#171717] font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white border-b border-gray-200 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <div className="text-[#ED7A30] text-6xl font-serif leading-none mb-4 opacity-30">"</div>
           <h2 className="text-3xl font-bold text-[#171717] italic mb-8">
             {data.testimonial}
           </h2>
           <Button variant="link" className="text-[#ED7A30] font-bold uppercase tracking-widest text-sm">
             Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
           </Button>
        </div>
      </section>
    </div>
  );
}
