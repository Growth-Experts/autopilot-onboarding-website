import { Shield, Server, Eye, Lock, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white font-montserrat">
      {/* Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter">
            Privacy Policy <span className="text-[#ED7A30]">Autopilot Workflows</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl">
            Security and privacy is of paramount importance to us.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              The information below relates to Apps that Autopilot has uploaded to AppSource.
              We, at Autopilot, understand the fact that our clients are entrusting us with their most
              valuable asset, their data. Security and privacy is of paramount importance to us and we
              strive to ensure that this data will be used only in a way that is consistent with our client’s
              expectations.
            </p>
          </div>

          {/* Data Storage */}
          <section className="bg-[#FAFAFA] p-8 md:p-10 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#ED7A30]/10 rounded-lg flex items-center justify-center text-[#ED7A30]">
                <Server size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#171717]">Data Storage</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Autopilot makes use of Microsoft Azure cloud services when storing client data. All data is
              stored on the Microsoft Azure Hosting Platform in North Europe with Geo-redundant backup
              in West Europe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We endeavour to ensure that no Client Data is accessed in an unauthorised
              manner and shall promptly inform our Client if any Client Data has been accessed in an
              unauthorised manner or if we suspect that such access has occurred.
            </p>
          </section>

          {/* Data Access */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#ED7A30]/10 rounded-lg flex items-center justify-center text-[#ED7A30]">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#171717]">Data Access</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              All Client data remains the property of our Client and we will not use, nor make available for
              use, any of this information without the Client permission. Autopilot may, however, view
              Client data only as necessary:
            </p>
            <ul className="space-y-4 mb-6 ml-4">
              {[
                "To maintain, provide and improve the Services",
                "To resolve a support request from you",
                "To comply with a valid legal subpoena or request"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="min-w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-[#ED7A30] mt-0.5">
                    {["i", "ii", "iii"][i]}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We may also analyse the Client data in aggregate and on an anonymised basis, in order to better understand the
              manner in which our Services are being used.
            </p>
          </section>

          {/* Microsoft Privacy Policies */}
          <section className="bg-[#FAFAFA] p-8 md:p-10 rounded-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#ED7A30]/10 rounded-lg flex items-center justify-center text-[#ED7A30]">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#171717]">Microsoft Privacy Policies</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              For more information on the Microsoft hosting and privacy policies, please <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="text-[#ED7A30] font-medium hover:underline decoration-[#ED7A30] underline-offset-4">click here</a>.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-[#171717] text-white p-8 md:p-10 rounded-xl border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#ED7A30] rounded-lg flex items-center justify-center text-white">
                <Mail size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Please contact us at <a href="mailto:support@autopilot.co.za" className="text-[#ED7A30] font-medium hover:text-white transition-colors">support@autopilot.co.za</a> if you have any questions regarding our
              privacy and storage policies.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
