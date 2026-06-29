"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "0709 665 855",
    sub: "Mon – Sat, 8am – 6pm",
    href: "tel:+254709665855",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@edgetel.co.ke",
    sub: "We reply within 2 hours",
    href: "mailto:info@edgetel.co.ke",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Star House, 4th Floor, Suite 416",
    sub: "Ruiru Town, behind Magunas",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 8am – 6pm",
    sub: "24/7 technical support",
    href: "#",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", area: "", plan: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Edgetel Website Inquiry",
          botcheck: "",
          ...form,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message || "Failed to send message.");
      setSent(true);
      setForm({ name: "", email: "", phone: "", area: "", plan: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  const field = "w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white";

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#1535b0] pt-28 pb-14 px-4 text-center">
        <span className="inline-block bg-green-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-5">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
          Let's Get You <span className="text-blue-300">Connected</span>
        </h1>
        <p className="text-blue-200 max-w-lg mx-auto text-base">
          Fill in the form and our team will reach out within 2 business hours.
        </p>
      </section>

      {/* Contact cards */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map(({ icon: Icon, label, value, sub, href }) => (
              <a
                key={label}
                href={href}
                className="flex flex-col gap-3 p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Icon size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-slate-900 text-sm font-semibold leading-snug">{value}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Why Edgetel?</p>
            <h2 className="text-3xl font-black text-slate-900 mb-5">
              Fast internet,<br />local support.
            </h2>
            <ul className="space-y-4">
              {[
                "Free installation on all packages",
                "No throttling — full speed all day",
                "24/7 technical support hotline",
                "Transparent pricing, no hidden fees",
                "Real humans answer your calls",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* WhatsApp quick contact */}
            <a
              href="https://wa.me/254709665855"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-full transition text-sm w-fit"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-green-200 bg-green-50">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-5">
                  <CheckCircle size={30} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 max-w-sm">
                  Thank you! Our team will reach out within 2 hours via phone or email.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-4"
              >
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 mb-1 block">Full Name *</label>
                    <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Mwangi" className={field} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 mb-1 block">Phone *</label>
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="0700 000 000" className={field} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1 block">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" className={field} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 mb-1 block">Your Area *</label>
                    <input required type="text" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} placeholder="e.g. Ruiru, Juja, Kamulu" className={field} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 mb-1 block">Package Interest</label>
                    <select value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} className={field}>
                      <option value="">Select a package</option>
                      <option>20 Mbps – KES 2,000/mo</option>
                      <option>30 Mbps – KES 2,500/mo</option>
                      <option>40 Mbps – KES 3,000/mo</option>
                      <option>45 Mbps – KES 3,500/mo</option>
                      <option>50 Mbps – KES 4,000/mo</option>
                      <option>60 Mbps – KES 4,500/mo</option>
                      <option>Business Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 mb-1 block">Message *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help..." className={`${field} resize-none`} />
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-black text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>

                <p className="text-center text-xs text-slate-400">
                  Or call us directly: <a href="tel:+254709665855" className="text-blue-600 font-semibold">0709 665 855</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}