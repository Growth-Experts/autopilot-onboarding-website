import { useState, useEffect } from "react";
import { Check, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "ZAR">("USD");
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    // Only ask for location services on this page as requested
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            // Free API for reverse geocoding to detect country
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            
            if (data.countryCode === "ZA") {
              setCurrency("ZAR");
            }
            setLoadingLocation(false);
          } catch (error) {
            console.error("Error detecting country:", error);
            setLoadingLocation(false);
            // Fallback to USD default
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocationError("Location access denied. Showing default pricing.");
          setLoadingLocation(false);
        }
      );
    } else {
      setLoadingLocation(false);
    }
  }, []);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with automation.",
      price: currency === "USD" ? "$99" : "R1,900",
      period: "/month",
      features: [
        "Up to 5 active workflows",
        "Basic document generation",
        "Email support",
        "1 Admin user",
        "Standard templates"
      ],
      notIncluded: [
        "Custom branding",
        "API access",
        "SSO"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Growth",
      description: "For scaling companies that need more power and flexibility.",
      price: currency === "USD" ? "$249" : "R4,500",
      period: "/month",
      features: [
        "Unlimited workflows",
        "Advanced document generation",
        "Priority email & chat support",
        "5 Admin users",
        "Custom branding",
        "Role-based permissions"
      ],
      notIncluded: [
        "SSO",
        "Dedicated success manager"
      ],
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Full control and support for large organizations.",
      price: "Custom",
      period: "",
      features: [
        "Unlimited everything",
        "Custom integrations",
        "24/7 Phone support",
        "Unlimited users",
        "SSO & Advanced Security",
        "Dedicated success manager",
        "SLA guarantees"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6 tracking-tighter">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your team's needs. No hidden fees.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-500">
            <MapPin size={16} />
            {loadingLocation ? (
              <span>Detecting location...</span>
            ) : (
              <span>
                Pricing shown in <strong>{currency}</strong> {currency === "ZAR" ? "(South Africa detected)" : ""}
              </span>
            )}
          </div>
          
          {/* Manual Toggle fallback (optional, but good UX) */}
          <div className="mt-4 flex justify-center gap-4 text-sm">
             <button 
               onClick={() => setCurrency("USD")}
               className={`px-3 py-1 rounded transition-colors ${currency === "USD" ? "bg-gray-200 font-bold" : "text-gray-500 hover:bg-gray-100"}`}
             >
               USD
             </button>
             <button 
               onClick={() => setCurrency("ZAR")}
               className={`px-3 py-1 rounded transition-colors ${currency === "ZAR" ? "bg-gray-200 font-bold" : "text-gray-500 hover:bg-gray-100"}`}
             >
               ZAR
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 border ${
                plan.highlighted 
                  ? "border-[#ED7A30] shadow-xl scale-105 z-10" 
                  : "border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ED7A30] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#171717] mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-[#171717]">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <Link href={plan.cta === "Contact Sales" ? "/contact" : "/book-demo"}>
                  <Button 
                    className={`w-full py-6 text-lg font-bold rounded-lg transition-all ${
                      plan.highlighted 
                        ? "bg-[#ED7A30] hover:bg-[#d66520] text-white shadow-lg" 
                        : "bg-gray-100 hover:bg-gray-200 text-[#171717]"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">What's included</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[16px]">
                      <Check size={16} className="text-[#ED7A30]" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-50">
                    <div className="mt-1 min-w-[16px]">
                      <X size={16} className="text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-500 line-through">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
