import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white shadow-lg border border-slate-200 p-12 sm:p-16 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h2
            className="text-3xl sm:text-5xl font-bold text-slate-900 leading-relaxed mb-4 leading-tight"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Ready to Get Connected?
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-10 max-w-xl mx-auto">
            Join thousands of Kenyan homes and businesses on Edgetel. Installation in as fast as 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#packages"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-blue-600 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
              style={{ fontFamily: "var(--font-space)", color: "#FFFFFF" }}
            >
              View Packages
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+254700000000"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-slate-200 text-slate-900 leading-relaxed hover:text-white hover:bg-blue-500 transition-all bg-white"
              style={{ fontFamily: "var(--font-space)" }}
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
