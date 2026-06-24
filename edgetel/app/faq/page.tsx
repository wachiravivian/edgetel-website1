"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I sign up for Edgetel?",
        a: "Fill in our contact form or call us directly. We'll confirm your area is covered, schedule an installation appointment, and have you online within 24–48 hours.",
      },
      {
        q: "I am moving from one area to another, how do I take my internet connection with me?",
        a: "Contact customer service 7days before you move to check if your new location is within the express network. If it is, the engineers will come to make your move. Make sure to take the router with you and if possible take the yellow patch cord as well. If you can’t, our engineers will collect it on the re-installation day. If your new home is not within the EXPRESS network, we will decommission your connection at no charge to you.",
      },
      {
        q: "How do I pay for the service?",
        a: "PAYBILL\nGO TO LIPA NA MPESA\nBUSINESS NO: 518658\nACCOUNT NO: EDN...(the account no. is given by customer service on the first day of installation)\nAMOUNT:\nENTER PIN AND CONFIRM TRANSACTION\n\nNB: your service will be automatically switched on and you will continue enjoying EDGETEL internet.",
      },
      {
        q: "How long does installation take?",
        a: "Our standard installation takes 1–2 hours on the day. We schedule within 24–48 hours of sign-up, and same-day installation is available on 50 Mbps and above plans.",
      },
    ],
  },
  {
    category: "Packages & Pricing",
    items: [
      {
        q: "What home packages do you offer?",
        a: "Our home packages range from 20 Mbps at KES 2,500/month to 60 Mbps at KES 5,000/month. All packages include unlimited data, a free router, and free installation.",
      },
      {
        q: "Do you offer business packages?",
        a: "Yes. Our business plans start at KES 4,500/month and include static IPs, SLA guarantees, and a dedicated support line. Contact us for custom business pricing.",
      },
      {
        q: "Can I upgrade my plan later?",
        a: "Absolutely. You can upgrade or downgrade your plan at any time. Simply contact support and the change takes effect the next billing cycle.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "What equipment do I need?",
        a: "We supply everything, a router is included with all packages. You just need a device (phone, laptop, smart TV) to connect via WiFi.",
      },
      {
        q: "Will I get the advertised speed?",
        a: "Our network is designed to deliver the speed you pay for. On WiFi, actual speeds depend on your device and distance from the router, but wired connections consistently hit the plan speed.",
      },
      {
        q: "What if my internet goes down?",
        a: "Call or WhatsApp our support line. For most issues, our team can diagnose and fix problems remotely. Physical faults get a technician dispatched within 4–8 hours.",
      },
      {
        q: "Do you support smart home and IoT devices?",
        a: "Yes. Our routers handle multiple simultaneous connections. If you have a large smart home setup, let us know and we'll recommend the right plan and router configuration.",
      },
    ],
  },
  
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
      >
        <span className="text-gray-600 leading-relaxed text-sm font-medium group-hover:text-blue-600 transition-colors"
          style={{ fontFamily: "var(--font-space)" }}>
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-slate-400 text-sm leading-relaxed pb-5 whitespace-pre-wrap">{a}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-space)" }}>
            FAQ
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-600 leading-relaxed"
            style={{ fontFamily: "var(--font-space)" }}>
            Frequently Asked Questions
          </h1>
            <p className="text-slate-400">
            Can&apos;t find your answer?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact our team →
            </a>
          </p>
        </div>

        {/* FAQ sections */}
        <div className="space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2
                className="text-xs text-blue-600 font-semibold uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {section.category}
              </h2>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-6">
                {section.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
