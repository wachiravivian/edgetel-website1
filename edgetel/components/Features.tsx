import { Shield, Zap, Clock, Headphones, Wifi, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Consistently Fast",
    description:
      "No throttling. Your speed stays the same whether it's 9am or 9pm.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description:
      "Enterprise-grade network infrastructure with built-in DDoS protection and firewall included.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description:
      "Our technicians arrive within 24 hours for most areas.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Headphones,
    title: "Real Support",
    description:
      "Talk to an actual human when something goes wrong. No bots, no 2-hour hold times.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Wifi,
    title: "Unlimited Data",
    description:
      "Stream, game, video call, and work from home without ever worrying about data caps or overage fees.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  
];

export default function Features() {
  return (
    <section className="py-16 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Why Edgetel
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Internet That Actually Works
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Egdetel technology and networks is a dedicated internet service provider specializing in fiber and wireless connections.
            We are currently connection Ruiru town, kimbo, murera, kwihota, along eastern bypass, ruai, kamulu and its environs. We provide fast, reliable and pocket friendly internet in the region.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={20} className={feature.color} />
                </div>
                <h3
                  className="text-slate-900 leading-relaxed font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
