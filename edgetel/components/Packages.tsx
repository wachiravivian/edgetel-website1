"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Zap, Building2 } from "lucide-react";

type Package = {
  speed: number;
  price: number;
  devices: string;
  extra: string;
  popular?: boolean;
};

const homePackages: Package[] = [
  { speed: 20, price: 2000, devices: "Perfect for 3-5 devices", extra: "HD streaming & browsing" },
  { speed: 30, price: 2500, devices: "Ideal for 5-8 devices", extra: "Streaming & remote work" },
  { speed: 40, price: 3000, devices: "Ideal for 8-12 devices", extra: "Gaming & video calls" },
  { speed: 45, price: 3500, devices: "Ideal for 8-12 devices", extra: "Gaming & video calls" },
  { speed: 50, price: 4000, devices: "Great for 8-12 devices", extra: "Multiple 4K streaming" },
  { speed: 60, price: 4500, devices: "Excellent for smart homes", extra: "Gaming, streaming & work" },
];

const businessPackages: Package[] = [
  { speed: 20, price: 4500, devices: "Small office", extra: "Up to 10 users" },
  { speed: 50, price: 8000, devices: "Medium business", extra: "20+ users", popular: true },
  { speed: 100, price: 15000, devices: "Large offices", extra: "Heavy cloud applications" },
];

export default function Packages() {
  const [tab, setTab] = useState<"home" | "business">("home");
  const packages = tab === "home" ? homePackages : businessPackages;

  return (
    <section id="packages" className="py-14 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="text-center mb-8">
          <p className="uppercase tracking-[0.3em] text-blue-600 font-semibold text-xs mb-2">Affordable Internet</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Choose Your Package</h2>
          <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">
            Reliable fibre internet for homes and businesses with free installation and unlimited browsing.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="rounded-full border border-blue-600 p-0.5 flex">
            {(["home", "business"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-7 py-2 rounded-full font-semibold text-sm transition ${
                  tab === item ? "bg-blue-600 text-white" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {item === "home" ? "Home" : "Business"}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid gap-4 ${
          tab === "home"
            ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
            : "grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto"
        }`}>
          {packages.map((pkg) => (
            <div
              key={`${pkg.speed}-${pkg.price}`}
              className={`relative rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 overflow-hidden flex flex-col ${
                pkg.popular ? "border-blue-500 ring-2 ring-blue-500" : "border-slate-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-3 right-3 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white leading-tight">
                  Best Value
                </div>
              )}

              <div className="p-4 flex flex-col flex-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 border border-blue-100">
                  <Zap size={18} className="text-blue-600" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{pkg.speed} Mbps</h3>

                <div className="mb-4">
                  <span className="text-base font-extrabold text-blue-600">KES {pkg.price.toLocaleString()}</span>
                  <span className="text-slate-400 text-xs ml-0.5">/month</span>
                </div>

                <ul className="space-y-1.5 mb-4 flex-1">
                  {["Unlimited Internet", "Free Installation", "24/7 Technical Support", pkg.devices, pkg.extra].map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <Check className="text-blue-600 shrink-0 mt-0.5" size={12} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?plan=${pkg.speed}`}
                  className={`block rounded-lg py-2.5 text-center font-semibold text-xs transition mt-auto ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        {tab === "business" && (
          <div className="mt-6 flex items-center justify-center gap-2 text-blue-600 text-sm font-medium">
            <Building2 size={16} className="shrink-0" />
            Business plans include priority support, business-grade reliability and service level guarantees.
          </div>
        )}
      </div>
    </section>
  );
}