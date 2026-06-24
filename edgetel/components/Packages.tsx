"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const homePackages = [
  { speed: 20, price: 2000, popular: false },
  { speed: 30, price: 2500, popular: false },
  { speed: 40, price: 3000, popular: false },
  { speed: 45, price: 3500, popular: false },
  { speed: 50, price: 4000, popular: false },
  { speed: 60, price: 4500, popular: true },
];

const businessPackages = [
  { speed: 20, price: 4500, popular: false },
  { speed: 50, price: 8000, popular: true },
  { speed: 100, price: 15000, popular: false },
];

type Tab = "home" | "business";

export default function Packages() {
  const [tab, setTab] = useState<Tab>("home");
  const packages = tab === "home" ? homePackages : businessPackages;

  return (
    <section id="packages" className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choose a plan that fits your needs — clear pricing, no surprises.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white shadow-sm rounded-full p-1">
            {(["home", "business"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition ${
                  tab === t
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {t === "home" ? "Home" : "Business"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className={`grid gap-6 ${
            tab === "home"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto"
          }`}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.speed}
              className={`relative rounded-4xl border p-8 transition bg-white/5 backdrop-blur-sm border-white/10 shadow-lg hover:shadow-2xl transform will-change-transform ${
                pkg.popular
                  ? "scale-[1.02] ring-1 ring-blue-200"
                  : "hover:-translate-y-1"
              }`}
            >

              {/* decorative accent */}
              <div className="pointer-events-none absolute top-6 right-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-50/40 to-transparent blur-md opacity-60" />

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {pkg.speed} Mbps
              </h3>

              <p className="text-4xl sm:text-5xl font-extrabold text-blue-600 my-3 leading-tight">
                KSH {pkg.price.toLocaleString()}
                <span className="text-base text-slate-500 font-medium"> /month</span>
              </p>
              <p className="text-sm sm:text-base text-slate-700 mb-6 font-medium">
                Plus free installation included.
              </p>

              <ul className="space-y-3 text-base text-slate-700 mb-6">
                <li className="flex gap-3 items-center">
                  <Check size={16} className="text-blue-600" />
                  <span className="font-medium">Unlimited Data</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Check size={16} className="text-emerald-500" />
                  <span className="font-medium">Router Included</span>
                </li>
              </ul>

              <a
                href={`/contact?plan=${pkg.speed}`}
                className={`inline-flex items-center justify-center gap-3 mx-auto px-6 py-3.5 rounded-full text-lg font-semibold transition-shadow ${
                  pkg.popular
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-xl"
                    : "border border-white/10 text-slate-900 hover:bg-white/5"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}