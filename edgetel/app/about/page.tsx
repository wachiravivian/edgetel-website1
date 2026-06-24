import { ArrowRight, Users, MapPin, Wifi, Star } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "15+", label: "Areas Covered" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.8★", label: "Average Rating" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

<div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "var(--font-space)" }}>
              Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed pl-3 border-l-4 border-blue-50">
              Empower Africa with robust digital solutions to foster a community-centered internet environment for online inclusivity, e-commerce, and e-learning.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "var(--font-space)" }}>
              Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed pl-3 border-l-4 border-blue-50">
              Affordably connect marginalized African communities through local partnerships, talent, and technology.
            </p>
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-3xl font-bold text-blue-600 mb-1" style={{ fontFamily: "var(--font-space)" }}>
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>        

        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-space)" }}>
              Our Core Values
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Integrity - Uadilifu
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sustainability - Uendelevu
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Local Engagement - Ushirika wa ndani
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Inclusivity - Ujumuishaji
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-space)" }}>
              How We&apos;re Different
            </h2>
            <ul className="space-y-3">
              {[
                { icon: Wifi, text: "No throttling. Your speed is your speed, all day." },
                { icon: Star, text: "Transparent pricing with no hidden fees or setup costs." },
                { icon: Users, text: "Real humans answer your support calls." },
                { icon: MapPin, text: "We only sell where we can actually deliver quality." },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm">
                  <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={12} className="text-blue-600" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-10 rounded-2xl border border-blue-200 bg-blue-50">
          <h3 className="text-3xl font-bold text-gray-600 mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Ready to bring better internet to your community?
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto leading-relaxed mb-8">
            Join Edgetel to connect faster, stay online without surprises, and get local support from a team that cares about your experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-all"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Contact Us
            </Link>
            <Link
              href="/#packages"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border border-white/20 text-gray-600 leading-relaxed hover:bg-white/10 transition-all"
              style={{ fontFamily: "var(--font-space)" }}
            >
              View Packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
