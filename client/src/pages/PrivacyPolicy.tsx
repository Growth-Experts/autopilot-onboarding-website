import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white font-montserrat pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#171717] mb-12">Privacy Policy</h1>

        <div className="space-y-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#171717] mb-4">Privacy Policy – Autopilot Workflows</h2>
            <p className="mb-4">The information below relates to Apps that Autopilot has uploaded to AppSource</p>
            <p>
              We, at Autopilot, understand the fact that our clients are entrusting us with their most
              valuable asset, their data. Security and privacy is of paramount importance to us and we
              strive to ensure that this data will be used only in a way that is consistent with our client’s
              expectations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171717] mb-2">Data storage</h3>
            <p>
              Autopilot makes use of Microsoft Azure cloud services when storing client data. All data is
              stored on the Microsoft Azure Hosting Platform in North Europe with Geo-redundant backup
              in West Europe. We endeavour to ensure that no Client Data is accessed in an unauthorised
              manner and shall promptly inform our Client if any Client Data has been accessed in an
              unauthorised manner or if we suspect that such access has occurred.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171717] mb-2">Data access</h3>
            <p className="mb-2">
              All Client data remains the property of our Client and we will not use, nor make available for
              use, any of this information without the Client permission. Autopilot may, however, view
              Client data only as necessary
            </p>
            <ul className="list-none pl-0 space-y-1">
              <li>(i) to maintain, provide and improve the Services;</li>
              <li>(ii) to resolve a support request from you; or</li>
              <li>(iii) to comply with a valid legal subpoena or request. We may also analyse the Client
              data in aggregate and on an anonymised basis, in order to better understand the
              manner in which our Services are being used.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171717] mb-2">Microsoft privacy polices</h3>
            <p>
              For more information on the Microsoft hosting and privacy policies, please <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="text-[#ED7A30] hover:underline">click here</a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#171717] mb-2">Contact information</h3>
            <p>
              Please contact us at <a href="mailto:support@autopilot.co.za" className="text-[#ED7A30] hover:underline">support@autopilot.co.za</a> if you have any questions regarding our
              privacy and storage policies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
