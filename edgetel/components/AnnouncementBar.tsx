"use client";

export default function AnnouncementBar() {
  const items = [
    "📍 Now Serving Ruiru",
    "Murera",
    "Membley",
    "Kwihota",
    "Ruai",
    "Kamulu",
    "Rainbow",
    "Limuru",
    "⚡ Installation within 24 Hours",
    "🏠 Home Fibre Packages from KES 2,000/month",
    "🏢 Business Internet Solutions",
    "📞 Call +254 709 665 855",
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white overflow-hidden py-3">
  <div className="whitespace-nowrap animate-marquee">
    <span className="mx-8 font-semibold">
      🚀 Free Installation on Selected Packages
    </span>

    <span className="mx-8 font-semibold">
      📞 Call +254 709 665 855
    </span>

    <span className="mx-8 font-semibold">
      ⚡ Up to 60 Mbps Fibre Internet
    </span>

    <span className="mx-8 font-semibold">
      🏠 Home & Business Packages
    </span>

    <span className="mx-8 font-semibold">
      📍 Now Serving Ruiru • Murera • Membley • Ruai • Kamulu
    </span>
  </div>
</div>
  );
}