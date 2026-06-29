import Link from "next/link";
import {
  Shield,
  Zap,
  Clock,
  Headphones,
  Wifi,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Consistently Fast",
    description:
      "No throttling. Enjoy stable internet speeds throughout the day whether you're streaming, gaming or working.",
    bullets: [
      "Unlimited bandwidth",
      "Low latency",
      "Optimized routing",
    ],
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description:
      "Our network is built with enterprise-grade security to keep your home and business protected.",
    bullets: [
      "Firewall protection",
      "DDoS mitigation",
      "Reliable infrastructure",
    ],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description:
      "Most installations are completed within 24 hours by our experienced technicians.",
    bullets: [
      "Professional setup",
      "Fast activation",
      "Quality equipment",
    ],
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Headphones,
    title: "Real Human Support",
    description:
      "Need help? Speak directly with our technical team whenever you need assistance.",
    bullets: [
      "Friendly support",
      "Fast response",
      "Technical assistance",
    ],
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Wifi,
    title: "Unlimited Internet",
    description:
      "Browse, stream, download and game without worrying about data caps or hidden limits.",
    bullets: [
      "Unlimited usage",
      "Perfect for streaming",
      "Ideal for businesses",
    ],
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}

        <div className="text-center mb-16">

          <p
            className="uppercase tracking-[0.3em] text-blue-600 font-bold text-sm mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Why Choose Edgetel
          </p>

          <h2
            className="text-5xl font-extrabold text-slate-900 mb-5"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Internet You Can Depend On
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Edgetel Technology & Networks delivers reliable fibre and wireless
            internet solutions backed by professional support, modern
            infrastructure and affordable pricing.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Decorative Gradient */}

                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-100 opacity-0 blur-3xl group-hover:opacity-70 transition duration-500" />

                <div
                  className={`relative w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition`}
                >
                  <Icon
                    className={feature.color}
                    size={28}
                  />
                </div>

                <h3
                  className="text-2xl font-bold text-slate-900 mb-4"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-7 mb-6">
                  {feature.description}
                </p>

                <div className="space-y-3 mb-8">

                  {feature.bullets.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-blue-600"
                      />
                      <span>{item}</span>
                    </div>

                  ))}

                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold group/link"
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-2"
                  />

                </Link>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}