import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import talksureLogo from "@assets/talksure-logo_1764682329403.png";
import dashboardImage from "@assets/generated_images/saas_interface_showing_role-based_checklists_and_progress_tracking.png";

export default function CaseStudyTalksure() {
  return (
    <CaseStudyTemplate
      client="Talksure"
      industry="Financial Services"
      title="Streamlining Procurement Processes with Autopilot"
      subtitle="How a financial services provider with 1,200+ employees centralized purchase requests inside Microsoft Teams to reduce costs and speed up approvals."
      logo={<img src={talksureLogo} alt="Talksure Logo" className="h-12 w-auto object-contain brightness-0 invert" />}
      stats={[
        { label: "User Satisfaction", value: "High" },
        { label: "License Cost", value: "Reduced" },
        { label: "Mobile Access", value: "100%" }
      ]}
      challenge={{
        title: "Rigid ERP Workflows & High Costs",
        content: "Despite implementing a new ERP system, Talksure found the procurement module unable to fully adapt to their needs. It required costly licenses for occasional users who just needed to request or approve purchases.",
        points: [
          "Rigid workflows didn't allow for necessary approval steps",
          "Managers had to log into a complex finance system to approve",
          "Occasional users found the forms unfriendly, leading to errors",
          "Manual intervention was often required to fix mistakes"
        ]
      }}
      quote={{
        text: "The Autopilot solution not only met but exceeded our expectations. What used to be a rigid and time-consuming process is now streamlined and efficient. The users have adapted quickly thanks to the integration with Teams.",
        author: "Kathryn Schuster",
        role: "Head of Finance @ Talksure"
      }}
      solution={{
        title: "Procurement Inside Microsoft Teams",
        content: "Greenlight implemented a seamless process starting with the Autopilot Workflow app inside Microsoft Teams, where users easily request and approve purchases.",
        points: [
          "User-friendly interface directly inside Microsoft Teams",
          "Flexible approval steps aligned to business structure",
          "Role-based access and complete audit trails",
          "Integration with ERP via Microsoft Power Automate",
          "Automatic Purchase Order generation (PDF)"
        ],
        image: dashboardImage
      }}
      results={{
        title: "The Result",
        points: [
          {
            title: "Reduced License Costs",
            description: "Significant savings by removing the need for ERP licenses for users who only need to request or approve purchases."
          },
          {
            title: "Mobile-Friendly Approvals",
            description: "Managers can now approve requests from anywhere via the Teams mobile app, reducing delays."
          },
          {
            title: "Better Reporting",
            description: "Finance team has better visibility with everything on one page, making month-end payments faster and easier."
          }
        ]
      }}
    />
  );
}
