import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Users, Headphones, Handshake } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#171717] mb-4">Contact Autopilot</h1>
        <p className="text-gray-500 text-lg max-w-md mx-auto">
          Whether you need a full demonstration, technical assistance, or partnership information, we're here to help.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">

          {/* Left: Contact Cards */}
          <div className="space-y-4">

            {/* General Inquiries */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="text-base font-semibold text-[#171717] mb-1">General Inquiries</h3>
              <p className="text-sm text-gray-500 mb-4">
                For general questions about the company, licensing, or corporate information.
              </p>
              <div className="space-y-2">
                <a href="mailto:info@autopilot.co.za" className="flex items-center gap-2 text-sm text-[#ED7A30] hover:underline">
                  <Mail className="w-4 h-4" />
                  info@autopilot.co.za
                </a>
                <a href="tel:+27111234567" className="flex items-center gap-2 text-sm text-[#ED7A30] hover:underline">
                  <Phone className="w-4 h-4" />
                  +27 (0) 11 123 4567
                </a>
              </div>
            </div>

            {/* Technical Support */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="text-base font-semibold text-[#171717] mb-1">Technical Support</h3>
              <p className="text-sm text-gray-500 mb-4">
                If you are a current client and require technical assistance or support.
              </p>
              <a href="mailto:support@autopilot.co.za" className="flex items-center gap-2 text-sm text-[#ED7A30] hover:underline">
                <Mail className="w-4 h-4" />
                support@autopilot.co.za
              </a>
            </div>

            {/* Partnerships */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="text-base font-semibold text-[#171717] mb-1">Partnerships</h3>
              <p className="text-sm text-gray-500 mb-4">
                Interested in becoming an implementation Partner?
              </p>
              <a href="mailto:partners@autopilot.co.za" className="flex items-center gap-2 text-sm text-[#ED7A30] hover:underline">
                <Mail className="w-4 h-4" />
                partners@autopilot.co.za
              </a>
            </div>
          </div>

          {/* Right: Schedule Demo + Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-xl font-bold text-[#171717] mb-1">Send Us a Message</h2>
            <p className="text-sm text-gray-500 mb-6">Fill out the form and our team will be in touch shortly.</p>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-700 font-semibold text-lg">Message sent!</p>
                <p className="text-green-600 text-sm mt-1">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#171717] uppercase tracking-wide">First Name</label>
                    <Input name="firstName" value={form.firstName} onChange={handleChange} className="rounded-lg border-gray-300 focus:border-[#ED7A30] h-11 bg-gray-50" placeholder="Jane" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#171717] uppercase tracking-wide">Last Name</label>
                    <Input name="lastName" value={form.lastName} onChange={handleChange} className="rounded-lg border-gray-300 focus:border-[#ED7A30] h-11 bg-gray-50" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#171717] uppercase tracking-wide">Work Email</label>
                    <Input type="email" name="email" value={form.email} onChange={handleChange} className="rounded-lg border-gray-300 focus:border-[#ED7A30] h-11 bg-gray-50" placeholder="jane@company.com" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#171717] uppercase tracking-wide">Phone Number</label>
                    <Input type="tel" name="phone" value={form.phone} onChange={handleChange} className="rounded-lg border-gray-300 focus:border-[#ED7A30] h-11 bg-gray-50" placeholder="+27 (0) 00 000 0000" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#171717] uppercase tracking-wide">Company Name</label>
                  <Input name="company" value={form.company} onChange={handleChange} className="rounded-lg border-gray-300 focus:border-[#ED7A30] h-11 bg-gray-50" placeholder="Acme Inc." />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#171717] uppercase tracking-wide">Message</label>
                  <Textarea name="message" value={form.message} onChange={handleChange} className="rounded-lg border-gray-300 focus:border-[#ED7A30] min-h-[120px] bg-gray-50" placeholder="Tell us about your onboarding challenges..." required />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#ED7A30] hover:bg-[#d66520] text-white h-12 text-sm font-bold uppercase tracking-wider rounded-lg disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
