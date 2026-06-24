"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    plan: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key:
              process.env.NEXT_PUBLIC_WEB3FORMS_KEY,

            subject: "New Edgetel Website Inquiry",

            botcheck: "",

            name: form.name,
            email: form.email,
            phone: form.phone,
            area: form.area,
            plan: form.plan,
            message: form.message,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(
          result.message || "Failed to send message."
        );
      }

      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        area: "",
        plan: "",
        message: "",
      });
    } catch (err: any) {
      setError(
        err.message || "Unable to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-50 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Get in Touch
          </p>

          <h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Let's Get You{" "}
            <span className="text-blue-600">
              Connected
            </span>
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto">
            Fill in the form and our team will reach out
            within 2 business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-5">

            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+254 709 665 855",
                href: "tel:+254709665855",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@edgetel.co.ke",
                href: "mailto:info@edgetel.co.ke",
              },
              {
                icon: MapPin,
                label: "Office",
                value:
                  "Star House (4th Floor), Ruiru Town",
                href: "#",
              },
              {
                icon: Clock,
                label: "Support Hours",
                value: "Mon – Sat, 8am – 6pm",
                href: "#",
              },
            ].map(
              ({
                icon: Icon,
                label,
                value,
                href,
              }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      {label}
                    </p>

                    <p className="text-gray-900 text-sm font-medium">
                      {value}
                    </p>
                  </div>
                </a>
              )
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">

            {sent ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-blue-200 bg-blue-50">
                <CheckCircle
                  size={50}
                  className="text-blue-600 mb-4"
                />

                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{
                    fontFamily: "var(--font-space)",
                  }}
                >
                  Message Sent Successfully!
                </h3>

                <p className="text-gray-600 max-w-md">
                  Thank you for contacting Edgetel.
                  Our team has received your inquiry
                  and will reach out shortly via
                  phone or email.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm space-y-5"
              >
                {/* Spam Protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label className="text-xs text-gray-500">
                      Full Name *
                    </label>

                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      placeholder="Jane Mwangi"
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-500">
                      Phone *
                    </label>

                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value,
                        })
                      }
                      placeholder="+254 700 000 000"
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>

                <div>
                  <label className="text-xs text-gray-500">
                    Email
                  </label>

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    placeholder="jane@example.com"
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  <input
                    required
                    type="text"
                    value={form.area}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        area: e.target.value,
                      })
                    }
                    placeholder="Area (Ruiru, Juja, Kahawa West...)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <select
                    value={form.plan}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        plan: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">
                      Select Package
                    </option>

                    <option>
                      20 Mbps - KES 2,500
                    </option>

                    <option>
                      30 Mbps - KES 3,000
                    </option>

                    <option>
                      40 Mbps - KES 4,000
                    </option>

                    <option>
                      50 Mbps - KES 5,000
                    </option>

                    <option>
                      60 Mbps - KES 5,000
                    </option>

                    <option>
                      Business Package
                    </option>
                  </select>

                </div>

                <div>
                  <label className="text-xs text-gray-500">
                    Message *
                  </label>

                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell us how we can help..."
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-900 resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all disabled:cursor-not-allowed disabled:opacity-70"
                  style={{
                    fontFamily: "var(--font-space)",
                  }}
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}