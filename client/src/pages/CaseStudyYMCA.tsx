import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import ymcaLogo from "@assets/ymca-logo_1764755090576.png";
import solutionImage from "@assets/generated_images/clean_saas_form_interface_for_employee_data_collection.png";

export default function CaseStudyYMCA() {
  return (
    <CaseStudyTemplate
      client="YMCA South Africa"
      industry="Non-Profit / NGO"
      title="Addressing Key Challenges with Automation"
      subtitle="How YMCA South Africa transformed their operational efficiency, reduced audit times, and enhanced financial accountability with Autopilot."
      logo={<img src={ymcaLogo} alt="YMCA South Africa" className="h-16 w-auto object-contain bg-white/10 p-2 rounded" />}
      stats={[
        { label: "Audit Time Reduction", value: "30-40%" },
        { label: "Approval Time", value: "Days to Hours" },
        { label: "Audit Findings", value: "Reduced" }
      ]}
      challenge={{
        title: "Operational Hurdles in a Distributed Non-Profit",
        content: "YMCA South Africa faced significant operational challenges that hindered their efficiency and accountability. Manual processes for funding management and reporting were slow and prone to error. With staff located in rural areas having limited computer access, communication and document submission were difficult. The lack of standardized approval processes led to delays, and retrieving documents for audits was a major pain point.",
        points: [
          "Manual funding management and reporting",
          "Rural staff with limited computer access",
          "Delays and lack of approval processes",
          "Document retrieval difficulties for audits"
        ]
      }}
      solution={{
        title: "Smart Digital Forms & Rule-Driven Workflows",
        content: "Autopilot implemented a comprehensive workflow solution to address these challenges directly. By introducing smart digital forms with built-in validation, data integrity was ensured from the start. The approval process was streamlined and moved to the cloud, making it mobile-friendly for rural staff. Automated notifications kept tasks moving, while built-in activity logs provided full transparency.",
        points: [
          "Smart digital forms with data validation and checks",
          "Streamlined, rule-driven approval process - cloud-based (mobile friendly)",
          "Automated progression and task-reminder notifications",
          "Rapid Reports and fully transparent, accountable and auditable built-in activity logs"
        ],
        image: solutionImage
      }}
      results={{
        title: "Tangible Benefits for YMCA South Africa",
        points: [
          {
            title: "Operational Improvements",
            description: "Approval times were drastically reduced from days to hours, with minimized errors and enhanced data integrity. Real-time visibility increased transparency across the organization."
          },
          {
            title: "Audit Efficiency",
            description: "Audit times were reduced by 40%, with significantly fewer audit findings due to the organized, easily retrievable digital documentation."
          },
          {
            title: "Positive Impact",
            description: "Higher financial accountability and efficiency positively impacted partnerships with funders. Simplified processes reduced the need for manual interventions and alleviated administrative stress."
          }
        ]
      }}
      quote={{
        text: "SA-YMCA started using Autopilot in 2018 and it was the best decision we’ve made. It has cut the time spent with auditors by at least 30-40%. (Autopilot) has proven that the financial accountability has increased, and this has increased the integrity of the organization with our international funders",
        author: "Petro Bantjes",
        role: "Financial Administrator, YMCA South Africa"
      }}
    />
  );
}
