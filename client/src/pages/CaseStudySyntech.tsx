import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import dashboardImage from "@assets/generated_images/clean_saas_form_interface_for_employee_data_collection.png";
import syntechLogo from "@assets/Syntech-Logo_1764684082971.png";

export default function CaseStudySyntech() {
  return (
    <CaseStudyTemplate
      client="Syntech"
      industry="Technology Distribution"
      title="Faster, Paperless Reseller Onboarding"
      subtitle="How Syntech leveraged Autopilot to streamline their reseller application process, reducing turnaround time from 10 days to just 1 day."
      logo={<img src={syntechLogo} alt="Syntech" className="h-12 w-auto object-contain brightness-0 invert" />}
      stats={[
        { label: "Turnaround Time", value: "1 Day" },
        { label: "Record Completion", value: "10 Min" },
        { label: "Paper Usage", value: "0%" }
      ]}
      challenge={{
        title: "Manual Processes Chilling Revenue",
        content: "When new customers wanted to register as resellers, they had to manually complete PDF forms and email them back. Large files bounced, handwriting was illegible, and data had to be manually re-captured by Syntech staff.",
        points: [
          "Vetting and approval took at least 10 days",
          "Manual data entry led to human errors and validation issues",
          "Poor communication and lack of visibility during the waiting period",
          "Sub-par customer experience for new partners"
        ]
      }}
      quote={{
        text: "Our aim was simple – prioritize the customer experience. Autopilot allowed us to make work flow faster, effortlessly, and more accurately.",
        author: "Syntech Management",
        role: "Leadership Team"
      }}
      solution={{
        title: "Fully Digital Reseller Onboarding",
        content: "New Syntech resellers are now welcomed by a fully digital form accessible through their browser that autosaves progress and validates data in real-time.",
        points: [
          "Digital Smart Forms with autosave functionality",
          "Pre-populated fields using CIPC database integration",
          "Real-time application tracking for customers",
          "Digital signature integration for directors",
          "Automated supporting document collection",
          "Direct integration with financial and CRM systems (Pipedrive)"
        ],
        image: dashboardImage
      }}
      results={{
        title: "The Result",
        points: [
          {
            title: "90% Faster Approvals",
            description: "Reseller approval times have been reduced from 10 days to one day, with some applications completed in just 10 minutes."
          },
          {
            title: "Improved Data Accuracy",
            description: "Validation checks at the point of entry mean no more illegible handwriting or missing information."
          },
          {
            title: "Effortless Integration",
            description: "Validated data is automatically pushed to Syntech’s existing financial and CRM systems, eliminating manual re-keying."
          }
        ]
      }}
    />
  );
}
