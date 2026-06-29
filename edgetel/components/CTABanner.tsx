"use client";

import Link from "next/link";
import { HeadphonesIcon, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-blue-600 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-blue-500/60 flex items-center justify-center shrink-0">
            <HeadphonesIcon size={26} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">
              Need help choosing the right package?
            </h3>
            <p className="text-blue-200 text-sm mt-0.5">
              Our team is ready to help you get connected.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-full hover:bg-blue-50 transition shadow-md shrink-0"
        >
          Talk to Us
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}