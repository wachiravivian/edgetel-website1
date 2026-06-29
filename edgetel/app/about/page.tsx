import { ArrowRight, Users, MapPin, Wifi, Star, Shield, Zap, Heart } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "1,000+", label: "Happy Customers" },
  { value: "10+", label: "Areas Covered" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4.8★", label: "Average Rating" },
];

const values = [
  { en: "Integrity", sw: "Uadilifu", icon: Shield, desc: "We do what we say, every time." },
  { en: "Sustainability", sw: "Uendelevu", icon: Heart, desc: "Built to last for communities long-term." },
  { en: "Local Engagement", sw: "Ushirika wa ndani", icon: Users, desc: "Rooted in the communities we serve." },
  { en: "Inclusivity", sw: "Ujumuishaji", icon: Zap, desc: "Internet for everyone, not just a few." },
];

const differences = [
  { icon: Wifi, text: "No throttling. Your speed is your speed, all day." },
  { icon: Star, text: "Transparent pricing with no hidden fees or setup costs." },
  { icon: Users, text: "Real humans answer your support calls." },
  { icon: MapPin, text: "We only sell where we can actually deliver quality." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#1535b0] pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-green-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-6">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Fast, reliable and affordable internet connection for homes and business premises.<br />
            <span className="text-blue-300">One Community at a Time</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Egdetel technology and networks is a dedicated internet service provider specializing in fiber and wireless connections. We are currently connection Ruiru town, kimbo, murera, kwihota, along eastern bypass, ruai, kamulu and its environs.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-black text-blue-600 mb-1">{stat.value}</p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

        {/* Vision & Mission */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Our Vision</p>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Where We're Going</h2>
            <p className="text-slate-600 leading-relaxed">
              Empower Africa with robust digital solutions to foster a community-centered internet environment for online inclusivity, e-commerce, and e-learning.
            </p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8">
            <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Our Mission</p>
            <h2 className="text-2xl font-black text-white mb-4">How We Do It</h2>
            <p className="text-slate-400 leading-relaxed">
              Affordably connect marginalized African communities through local partnerships, talent, and technology.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-10">
            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">What Drives Us</p>
            <h2 className="text-3xl font-black text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.en} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{v.en}</h3>
                  <p className="text-blue-500 text-xs font-medium mb-2">{v.sw}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How We're Different */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Why Edgetel</p>
            <h2 className="text-3xl font-black text-slate-900 mb-4">How We're Different</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              We're not just another ISP. We're a local team that understands what Kenyan homes and businesses actually need.
            </p>
            <ul className="space-y-4">
              {differences.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-1.5 text-sm">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual card */}
          <div className="bg-[#1535b0] rounded-3xl p-8 text-white">
            <div className="space-y-5">
              {[
                { label: "Network Uptime", value: "99.9%", width: "w-[99%]", color: "bg-blue-400" },
                { label: "Customer Satisfaction", value: "4.8 / 5", width: "w-[96%]", color: "bg-green-400" },
                { label: "Support Response", value: "< 2 hrs", width: "w-[90%]", color: "bg-cyan-400" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5 text-sm">
                    <span className="text-blue-200">{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/20">
                    <div className={`h-full rounded-full ${item.color} ${item.width}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-black">24/7</p>
                <p className="text-blue-300 text-xs mt-1">Support</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-black">Free</p>
                <p className="text-blue-300 text-xs mt-1">Installation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-black text-white mb-3">
            Ready to get connected?
          </h3>
          <p className="text-blue-200 max-w-xl mx-auto mb-8 leading-relaxed">
            Join thousands of happy Edgetel customers. Fast internet, free installation, and a local team that actually picks up the phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-white text-blue-700 hover:bg-blue-50 transition shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/#packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition"
            >
              View Packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}