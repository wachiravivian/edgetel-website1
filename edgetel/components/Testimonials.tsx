import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina Wanjiku",
    location: "Westlands, Nairobi",
    initials: "AW",
    review:
      "Switched from my old provider and the difference was night and day. No more buffering on Netflix. My kids can study and I can WFH at the same time without issues.",
    plan: "45 Mbps",
    stars: 5,
  },
  {
    name: "Brian Otieno",
    location: "Ruiru, Kiambu",
    initials: "BO",
    review:
      "Installation was done the next morning after I signed up. The technician was professional and clean. Speed tests consistently hit above what I'm paying for.",
    plan: "30 Mbps",
    stars: 5,
  },
  {
    name: "Grace Muthoni",
    location: "Kilimani, Nairobi",
    initials: "GM",
    review:
      "We run a small design studio and reliable internet is everything. Edgetel has been rock solid for 8 months now. Support actually picks up when you call.",
    plan: "60 Mbps",
    stars: 5,
  },
  {
    name: "David Kamau",
    location: "Thika Town",
    initials: "DK",
    review:
      "Best value internet I've found in Thika. KES 2,500 for 30 Mbps unlimited? My family streams, games, and video calls every day with zero complaints.",
    plan: "30 Mbps",
    stars: 5,
  },
  {
    name: "Fatuma Hassan",
    location: "South B, Nairobi",
    initials: "FH",
    review:
      "I was skeptical because I'd been burned by other ISPs. But Edgetel actually delivers what they promise. Speeds are consistent, billing is transparent.",
    plan: "40 Mbps",
    stars: 4,
  },
  {
    name: "Peter Njoroge",
    location: "Kasarani, Nairobi",
    initials: "PN",
    review:
      "Upgraded to 50 Mbps after starting with 20 Mbps. Process was quick, no new installation needed, just a call. Great service overall.",
    plan: "50 Mbps",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Customer Stories
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Loved Across Kenya
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.stars ? "text-amber-400 fill-amber-400" : "text-slate-700"}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-xs font-bold flex-shrink-0"
                  style={{ fontFamily: "var(--font-space)" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-space)" }}>
                    {t.name}
                  </p>
                  <p className="text-slate-500 text-xs">{t.location} · {t.plan} plan</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
