import Link from "next/link";
import {
  Building2,
  Home,
  Wifi,
  Shield,
  Camera,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Wide Area Networks",
    description:
      "Reliable WAN solutions connecting offices, campuses and branches.",
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Wireless Internet Connection",
    description:
      "Wireless coverage – Murera, 1four, Kenyatta rd, Membley, Kamiti Corner, Ruai, Kamulu..",
    icon: Home,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Networking",
    description:
      "Professional wired network installation and support.",
    icon: Wifi,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Structured Cabling",
    description:
      "Copper and fibre cabling with proper testing and documentation.",
    icon: Shield,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "CCTV Installation",
    description:
      "Smart surveillance with remote viewing and reliable recording.",
    icon: Camera,
    color: "from-orange-500 to-red-500",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto px-4 mb-16">
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
          WHAT WE DO
        </span>

        <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
          Our Services
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          From fibre internet to enterprise networking solutions,
          we build reliable technology that keeps your home and
          business connected.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              {/* Top gradient */}
              <div
                className={`h-2 bg-gradient-to-r ${service.color}`}
              />

              <div className="p-8">

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition`}
                >
                  <Icon size={28} />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-slate-600 leading-7 mb-8">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

              </div>
            </div>
          );
        })}

      </section>

      {/* CTA */}
      <section className="mt-24 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center p-12">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Upgrade Your Network?
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you need fibre internet, networking, CCTV,
            structured cabling or enterprise solutions,
            our team is ready to help.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:scale-105 transition"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}