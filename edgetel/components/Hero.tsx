import Link from "next/link";
import { ArrowRight, Wifi } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">

        

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-gray-900">Edgetel</span>
          <br />
          <span className="gradient-text">Technology &</span>{" "}
          <span className="text-gray-400">Networks Ltd.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          The fast, reliable and affordable internet connection for homes and business premises. 
          Reliable fibre and wireless internet for homes and businesses across Kenya.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/#packages"
            className="flex items-center gap-2 px-8 py-4 font-semibold text-base rounded-xl text-gray-600 leading-relaxed transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--primary)",
              fontFamily: "var(--font-heading)"
            }}
          >
            See Our Packages
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { value: "60 Mbps", label: "Max Speed" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-4 rounded-xl border bg-white shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="text-2xl font-bold mb-1"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-heading)"
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}