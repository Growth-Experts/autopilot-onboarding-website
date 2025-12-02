import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import lawdLogo from "@assets/lawd-logo_1764682505153.png";
import dashboardImage from "@assets/generated_images/modern_saas_dashboard_ui_showing_onboarding_progress_with_orange_accents.png";

export default function CaseStudyLAWD() {
  return (
    <CaseStudyTemplate
      client="LAWD"
      industry="Property Advisory & Legal Services"
      title="LAWD’s Growth on Autopilot: Slashing Onboarding Management Time by 50%"
      subtitle="How a rapidly expanding property advisory firm automated their recruitment and onboarding to support 100% staff growth without a dedicated HR department."
      logo={<img src={lawdLogo} alt="LAWD Logo" className="h-12 w-auto object-contain brightness-0 invert" />}
      stats={[
        { label: "Faster Onboarding", value: "50%" },
        { label: "Staff Growth", value: "2x" },
        { label: "Compliance", value: "100%" }
      ]}
      challenge={{
        title: "Rapid Expansion Without HR Support",
        content: "LAWD faced a critical challenge: their staff count doubled from 50 to over 100 in a short span, but they lacked an internal HR department. The National Operations Manager and CEO were manually managing recruitment and onboarding, leading to bottlenecks.",
        points: [
          "Manual processes led to missed steps and errors in IT setup",
          "No internal IT department meant reliance on external providers with manual communication",
          "Lack of visibility into which onboarding stages had been completed",
          "Inconsistent employee experience due to informal 'mental checklists'"
        ]
      }}
      quote={{
        text: "We used to use a mental checklist, so you can imagine that a few things fell through the cracks. Now, when things go wrong, we can refer back to the onboarding tool, and we know exactly what happened.",
        author: "Jo Beamsley",
        role: "National Operations Manager @ LAWD"
      }}
      solution={{
        title: "Automated Workflows for Onboarding",
        content: "Autopilot introduced a fully customized onboarding solution that automated the submission and approval of onboarding tasks, connecting internal teams with external vendors.",
        points: [
          "Customized Onboarding Workflow for IT, Payroll, and Equipment",
          "Centralized Task Assignment to responsible departments",
          "Pre-populated Forms to reduce manual input errors",
          "Approval Workflows involving CEO, Finance, and Payroll",
          "External Task Integration for outsourced IT providers",
          "Digital Contract Management & Signing",
          "Automated 1-month, 3-month, and 6-month survey triggers"
        ],
        image: dashboardImage
      }}
      results={{
        title: "The Impact",
        points: [
          {
            title: "40%+ Reduction in Time",
            description: "The operations team estimates the onboarding process is now 40% faster, with contract management showing up to 50% time savings."
          },
          {
            title: "Improved Accountability",
            description: "The system allows LAWD to quickly identify issues and hold the right parties accountable, particularly with external IT providers."
          },
          {
            title: "Enhanced Employee Experience",
            description: "Feedback from new hires has been significantly more positive, with fewer delays and smoother integration into the company."
          }
        ]
      }}
    />
  );
}
