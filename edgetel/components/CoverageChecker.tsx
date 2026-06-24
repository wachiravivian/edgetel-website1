"use client";
import { useState } from "react";
import { MapPin, ArrowRight, CheckCircle, XCircle, Loader } from "lucide-react";

// Covered areas list — expand this as you grow
const coveredAreas = [
  "nairobi", "murera", "1four", "westlands", "karen", "kilimani", "lavington",
  "kenyatta rd", "kiambu", "thika", "ruiru", "ruai", "kamulu", "membley",
  "kamiti corner", "rainbow", "kwihota", "karuguru",
  "juja", "limuru", "machakos", "nakuru", "eldoret", "kisumu", "mombasa",
  "kasarani", "roysambu", "githurai", "kahawa", "zimmerman",
  "embakasi", "south b", "south c", "langata", "ngong",
];

type Status = "idle" | "checking" | "covered" | "not-covered";

export default function CoverageChecker() {
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [mapQuery, setMapQuery] = useState("");

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[\u0300-\u036f]/g, "") // remove diacritics
      .replace(/[^a-z0-9\s]/g, "");

  const checkCoverage = () => {
    const raw = location || "";
    const cleaned = normalize(raw);
    if (!cleaned) return;
    setStatus("checking");

    // Find exact/listed matches only. Match when any token intersects with a listed area's tokens.
    const cleanedTokens = cleaned.split(/\s+/).filter(Boolean);

    const matched = coveredAreas.find((area) => {
      const a = normalize(area);
      if (a === cleaned) return true;
      const areaTokens = a.split(/\s+/).filter(Boolean);
      return cleanedTokens.some((t) => areaTokens.includes(t));
    });

    setTimeout(() => {
      if (matched) {
        setMapQuery(matched);
        setStatus("covered");
      } else {
        setMapQuery(cleaned);
        setStatus("not-covered");
      }
    }, 700);
  };

  return (
    <section id="coverage" className="py-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50 to-white p-8 sm:p-12 text-left glow-border relative">
          <div className="flex items-start gap-6 md:gap-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mt-1">
              <MapPin size={26} className="text-blue-600" />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-space)" }}>
                Are You Covered?
              </h2>
              <p className="text-slate-600 mb-6">
                Enter your area, estate, or street name to check if Edgetel is available near you. Results include a quick map view.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setStatus("idle");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && checkCoverage()}
                  placeholder="e.g. Ruiru, Murera, Membley, Kenyatta rd ..."
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white text-slate-900 border border-slate-200 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <button
                  onClick={checkCoverage}
                  disabled={status === "checking" || !location.trim()}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-sm text-white transition-all"
                >
                  {status === "checking" ? (
                    <Loader size={16} className="animate-spin" />
                  ) : (
                    <>
                      Check <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>

              {/* Result + Map */}
              {status === "covered" && (
                <div className="mt-6 flex flex-col gap-4 animate-fade-in">
                  <div className="flex items-center gap-3 text-emerald-600 font-medium">
                    <CheckCircle size={18} />
                    <span>Great news! We&apos;re available in your area.</span>
                    <a href="/contact" className="underline text-blue-600 hover:text-blue-500 ml-2">Sign up now →</a>
                  </div>

                  <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-100">
                    <iframe
                      title="coverage-map"
                      className="w-full h-full"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery || location)}&output=embed`}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {status === "not-covered" && (
                <div className="mt-6 flex flex-col items-start gap-3 animate-fade-in">
                  <div className="flex items-center gap-2 text-rose-500 font-medium">
                    <XCircle size={18} />
                    <span>Not yet available in that area.</span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Leave your contact and we&apos;ll notify you when we expand. <a href="/contact" className="text-blue-600 hover:underline">Join the waitlist →</a>
                  </p>

                  <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-100">
                    <iframe
                      title="nearby-map"
                      className="w-full h-full"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery || location || "Kenya")}&output=embed`}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Covered areas list */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest mb-5">Currently serving</p>
            <div className="flex flex-wrap justify-start gap-3">
              {["Murera", "1four", "Kenyatta Rd", "Membley", "Kamiti Corner", "Ruai", "Kamulu", "Rainbow", "Kwihota", "Karuguru", "Westlands", "Ruiru", "Limuru", "+more"].map((area) => (
                <span key={area} className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-700 shadow-sm hover:shadow-md transition-shadow">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
