"use client";

import { useState } from "react";
import { MapPin, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const coveredAreas = [
  "ruiru",
  "kimbo",
  "murera",
  "kwihota",
  "ruai",
  "kamulu",
  "karuguru",
  "limuru",

  "kamakis",
  "kamakis corner",
  "corner",
  "mitikenda",
  "green valley",
  "greenspot",
  "green spot",
  "rainbow",
];

export default function CoverageChecker() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState<"idle" | "yes" | "no">("idle");

  function checkCoverage() {
    const search = location.trim().toLowerCase();
    if (!search) return;
    setResult(
      coveredAreas.some((area) => search.includes(area)) ? "yes" : "no"
    );
  }

  return (
    <section id="coverage" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — form */}
          <div>
            <p className="uppercase tracking-widest text-blue-600 font-semibold text-xs mb-3">
              Coverage Checker
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Check if We Cover Your Area
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Enter your area below and we'll instantly let you know if Edgetel
              Internet is available.
            </p>

            {/* Input row */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setResult("idle");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && checkCoverage()}
                  placeholder="e.g. Ruiru, Kamakis, Limuru..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-white shadow-sm"
                />
              </div>
              <button
                onClick={checkCoverage}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center gap-2 transition shadow-sm whitespace-nowrap"
              >
                Check Coverage
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Results */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div
                className={`rounded-xl border p-4 flex items-start gap-3 transition ${
                  result === "yes"
                    ? "border-green-400 bg-green-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <CheckCircle
                  size={20}
                  className={result === "yes" ? "text-green-500 shrink-0 mt-0.5" : "text-slate-300 shrink-0 mt-0.5"}
                />
                <div>
                  <p className={`font-semibold text-sm ${result === "yes" ? "text-green-700" : "text-slate-400"}`}>
                    Great news!
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">We cover your area.</p>
                  {result === "yes" && (
                    <Link
                      href="/contact"
                      className="inline-block mt-3 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-700 transition"
                    >
                      Get Connected
                    </Link>
                  )}
                </div>
              </div>

              <div
                className={`rounded-xl border p-4 flex items-start gap-3 transition ${
                  result === "no"
                    ? "border-red-300 bg-red-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <XCircle
                  size={20}
                  className={result === "no" ? "text-red-500 shrink-0 mt-0.5" : "text-slate-300 shrink-0 mt-0.5"}
                />
                <div>
                  <p className={`font-semibold text-sm ${result === "no" ? "text-red-600" : "text-slate-400"}`}>
                    Not yet available
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">We'll notify you when we're in your area.</p>
                  {result === "no" && (
                    <Link
                      href="/contact"
                      className="inline-block mt-3 bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-black transition"
                    >
                      Join Waitlist
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[380px] lg:h-[420px]">
            <iframe
              title="Edgetel Coverage Map"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63800!2d36.96!3d-1.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}