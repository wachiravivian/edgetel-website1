import Link from "next/link";
import { Home, Building2, Wifi, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Wide area networks",
    description: "Design and manage WAN solutions that connect multiple sites, offices, and campuses with resilient, high-performance links.",
    cta: "Request a WAN quote",
    href: "/contact",
    tag: "Enterprise",
  },
  {
    icon: Home,
    title: "PAB-X & IP Intercom",
    description: "Install PABX and IP intercom systems for secure voice communications, visitor access, and facility paging.",
    cta: "Discuss your setup",
    href: "/contact",
    tag: null,
  },
  {
    icon: Wifi,
    title: "Networking",
    description: "Build and support wired and wireless LANs with modern routing, switching, and secure network design.",
    cta: "Plan your network",
    href: "/contact",
    tag: null,
  },
  {
    icon: Shield,
    title: "Structured cabling",
    description: "Deliver professional copper and fiber cabling installations with labeling, testing, and documentation for reliable infrastructure.",
    cta: "Schedule an audit",
    href: "/contact",
    tag: null,
  },
  {
    icon: Wifi,
    title: "CCTV Installation",
    description: "Install CCTV camera systems with recording, remote monitoring, and support to keep your premises safe.",
    cta: "Book CCTV setup",
    href: "/contact",
    tag: null,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-space)" }}>
            What We Offer
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-4"
            style={{ fontFamily: "var(--font-space)" }}>
            Our Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From home broadband to enterprise managed networks — we have a solution that fits.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                    key={service.title}
                    className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-blue-200 hover:bg-white/[0.04] transition-all duration-300 flex flex-col hover:shadow-lg"
                  >
                {service.tag && (
                  <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200 mb-4"
                    style={{ fontFamily: "var(--font-space)" }}>
                    {service.tag}
                  </span>
                )}
                <div className="w-16 h-16 rounded-3xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                  <Icon size={26} className="text-blue-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-relaxed mb-3" style={{ fontFamily: "var(--font-space)" }}>
                  {service.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-blue-600 text-base font-semibold hover:text-blue-500 transition-colors group mt-2"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {service.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
