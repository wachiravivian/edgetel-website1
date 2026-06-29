"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Wifi, HeadphonesIcon, ShieldCheck, Phone } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast & Reliable", desc: "Ultra-fast fibre internet built for speed." },
  { icon: Wifi, title: "100% Fibre", desc: "Pure fibre connection for maximum performance." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "We're here for you anytime, every time." },
  { icon: ShieldCheck, title: "Affordable", desc: "High speed internet that fits your budget." },
];

export default function Hero() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500">

        {/* Bright animated blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/40 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-green-400/20 rounded-full blur-3xl" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:22px_22px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 items-center min-h-[620px] gap-10">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 backdrop-blur-sm px-5 py-2 text-white text-sm font-semibold mb-7">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                #1 Fibre Internet Provider in Ruiru
              </span>

              <h1 className="text-5xl xl:text-6xl font-black leading-[1.1] text-white mb-6">
                Fibre Internet<br />
                <span className="text-green-300 drop-shadow-lg">That Keeps Up</span><br />
                With Your Life
              </h1>

              <p className="text-blue-100 text-lg max-w-lg mb-8 leading-relaxed">
                Experience uninterrupted streaming, gaming, online learning, video meetings and downloads with{" "}
                <span className="font-bold text-white">Edgetel Fibre.</span>
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/#packages"
                  className="rounded-full bg-white px-8 py-4 text-blue-700 font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-sm"
                >
                  View Packages
                </Link>
                <a
                  href="tel:+254709665855"
                  className="rounded-full bg-green-500 px-8 py-4 text-white font-bold shadow-xl hover:bg-green-400 hover:scale-105 transition-all flex items-center gap-2 text-sm"
                >
                  <Phone size={16} />
                  Call Today
                </a>
              </div>

              {/* Phone bar */}
              <div className="inline-flex items-center gap-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-6 py-3.5">
                <Phone size={16} className="text-green-300" />
                <span className="text-white/70 text-sm">Call us</span>
                <span className="w-px h-4 bg-white/30" />
                <span className="text-white font-bold text-sm tracking-wide">0709 665 855 / 0730 988 113</span>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              {/* Glow ring behind image */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl scale-105" />
                <img
                  src="/hero-poster.jpg"
                  alt="Edgetel Internet"
                  className="relative w-full max-w-lg rounded-3xl shadow-2xl border-4 border-white/40 ring-4 ring-white/20"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Features strip ── */}
      <section className="bg-white relative z-10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mb-4 shadow-md group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-200">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{feature.title}</h3>
                  <p className="text-slate-500 mt-1.5 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}