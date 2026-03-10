import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left: Form */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">Get in touch!</h1>
            <p className="text-gray-600 mb-10 text-lg">
              Ready to streamline your onboarding? Fill out the form below and our team will be in touch shortly.
            </p>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-700 font-semibold text-lg">Message sent!</p>
                <p className="text-green-600 text-sm mt-1">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">First Name</label>
                    <Input name="firstName" value={form.firstName} onChange={handleChange} className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="Jane" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Last Name</label>
                    <Input name="lastName" value={form.lastName} onChange={handleChange} className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Work Email</label>
                    <Input type="email" name="email" value={form.email} onChange={handleChange} className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="jane@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Phone Number</label>
                    <Input type="tel" name="phone" value={form.phone} onChange={handleChange} className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="+27 (0) 00 000 0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Company Name</label>
                  <Input name="company" value={form.company} onChange={handleChange} className="rounded-none border-gray-300 focus:border-[#ED7A30] h-12 bg-gray-50" placeholder="Acme Inc." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#171717] uppercase tracking-wide">Message</label>
                  <Textarea name="message" value={form.message} onChange={handleChange} className="rounded-none border-gray-300 focus:border-[#ED7A30] min-h-[150px] bg-gray-50" placeholder="Tell us about your onboarding challenges..." required />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#ED7A30] hover:bg-[#d66520] text-white h-14 text-lg font-bold uppercase tracking-wider rounded-none disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Right: Info */}
        <div className="bg-[#171717] text-white p-8 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M20 0 L100 80 M0 20 L80 100" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 max-w-lg mx-auto w-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#ED7A30] flex items-center justify-center rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Email Us</p>
                  <p className="text-xl">info@autopilot.co.za</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#ED7A30] flex items-center justify-center rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Call Us</p>
                  <p className="text-xl">+27 (0) 10 880 8846</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
