import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Clock, DollarSign, TrendingDown } from "lucide-react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const SAVINGS_RATE = 0.6;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatHours(value: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

function CalcSlider({
  value,
  min,
  max,
  step,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <SliderPrimitive.Root
      min={min}
      max={max}
      step={step}
      value={[value]}
      onValueChange={([v]) => onChange(v)}
      className="relative flex w-full touch-none select-none items-center"
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
        <SliderPrimitive.Range className="absolute h-full bg-[#ED7A30]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-[#ED7A30] bg-white shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7A30] cursor-pointer" />
    </SliderPrimitive.Root>
  );
}

export function OnboardingCalculator() {
  const [hiresPerMonth, setHiresPerMonth] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [hoursPerHire, setHoursPerHire] = useState(8);

  const results = useMemo(() => {
    const annualHires = hiresPerMonth * 12;
    const annualHours = annualHires * hoursPerHire;
    const annualCost = annualHours * hourlyRate;
    const savedCost = annualCost * SAVINGS_RATE;
    const savedHours = annualHours * SAVINGS_RATE;
    return { annualCost, savedCost, savedHours, annualHours };
  }, [hiresPerMonth, hourlyRate, hoursPerHire]);

  return (
    <section style={{ backgroundColor: "#F5F0EB" }} className="py-24 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#ED7A30] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6">
            Free Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4" style={{ color: "#171717" }}>
            What is your onboarding<br />really costing you?
          </h2>
          <p className="text-lg max-w-2xl mx-auto font-light" style={{ color: "#6b7280" }}>
            Every hire triggers a scavenger hunt across departments — emails, follow-ups, IT setup, document chasing. This adds up fast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Inputs */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "1rem", padding: "2rem", border: "1px solid #f3f4f6" }} className="shadow-sm space-y-10">

            {/* Hires per month */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-sm font-semibold uppercase tracking-wide" style={{ color: "#171717" }}>
                  Hires per month
                </label>
                <span className="text-2xl font-bold" style={{ color: "#ED7A30" }}>{hiresPerMonth}</span>
              </div>
              <CalcSlider value={hiresPerMonth} min={1} max={100} step={1} onChange={setHiresPerMonth} />
              <div className="flex justify-between text-xs mt-2" style={{ color: "#9ca3af" }}>
                <span>1</span><span>100</span>
              </div>
            </div>

            {/* Hourly rate */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-sm font-semibold uppercase tracking-wide" style={{ color: "#171717" }}>
                  HR / Admin hourly rate
                </label>
                <span className="text-2xl font-bold" style={{ color: "#ED7A30" }}>${hourlyRate}/hr</span>
              </div>
              <CalcSlider value={hourlyRate} min={10} max={150} step={5} onChange={setHourlyRate} />
              <div className="flex justify-between text-xs mt-2" style={{ color: "#9ca3af" }}>
                <span>$10</span><span>$150</span>
              </div>
            </div>

            {/* Hours per hire */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-sm font-semibold uppercase tracking-wide" style={{ color: "#171717" }}>
                  Admin hours per hire
                </label>
                <span className="text-2xl font-bold" style={{ color: "#ED7A30" }}>{hoursPerHire} hrs</span>
              </div>
              <CalcSlider value={hoursPerHire} min={1} max={40} step={1} onChange={setHoursPerHire} />
              <div className="flex justify-between text-xs mt-2" style={{ color: "#9ca3af" }}>
                <span>1 hr</span><span>40 hrs</span>
              </div>
            </div>

            <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
              <span className="font-semibold">Admin hours</span> include: chasing documents across departments, setting up IT accounts, sending reminder emails, and manual data entry.
            </p>
          </div>

          {/* Output */}
          <div className="flex flex-col gap-5">

            {/* Annual cost — hero stat */}
            <div style={{ backgroundColor: "#171717", borderRadius: "1rem", padding: "2rem", color: "#ffffff" }}>
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-4 h-4" style={{ color: "#ED7A30" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#9ca3af" }}>Annual hidden onboarding cost</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold tracking-tighter mt-2">
                {formatCurrency(results.annualCost)}
              </div>
              <p className="text-sm mt-3 font-light" style={{ color: "#9ca3af" }}>
                Spent on manual follow-ups, coordination, and admin overhead — not actual onboarding.
              </p>
            </div>

            {/* Hours lost */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "1rem", padding: "1.5rem", border: "1px solid #f3f4f6" }} className="shadow-sm flex items-center gap-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#FFF0E5" }}>
                <Clock className="w-5 h-5" style={{ color: "#ED7A30" }} />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: "#171717" }}>{formatHours(results.annualHours)} hours/year</div>
                <div className="text-sm font-light" style={{ color: "#6b7280" }}>of HR &amp; admin time lost to manual onboarding tasks</div>
              </div>
            </div>

            {/* Autopilot savings */}
            <div style={{ backgroundColor: "#ED7A30", borderRadius: "1rem", padding: "1.5rem", color: "#ffffff" }}>
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-4 h-4" style={{ color: "rgba(255,255,255,0.8)" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.8)" }}>With Autopilot Onboarding</span>
              </div>
              <div className="text-3xl font-bold tracking-tight mb-1">
                Recover {formatCurrency(results.savedCost)}/year
              </div>
              <div className="text-sm font-light mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
                and reclaim {formatHours(results.savedHours)} hours of admin time — based on a conservative 60% reduction in manual onboarding work.*
              </div>
              <Link href="/pricing">
                <Button className="rounded-none font-bold uppercase text-sm px-6 py-5 w-full transition-all duration-200 cursor-pointer" style={{ backgroundColor: "#ffffff", color: "#ED7A30" }}>
                  See Pricing &amp; ROI <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <p className="text-xs leading-relaxed px-1" style={{ color: "#9ca3af" }}>
              * 60% figure reflects the lower bound of time savings reported by organisations using structured onboarding automation. Source: SHRM / Deloitte onboarding research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
