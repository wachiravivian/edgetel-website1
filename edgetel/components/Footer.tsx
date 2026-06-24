import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Logo from "@/components/Logo";

const footerLinks = {
  Packages: [
    { label: "20 Mbps — KES 2,000", href: "/#packages" },
    { label: "30 Mbps — KES 2,500", href: "/#packages" },
    { label: "40 Mbps — KES 3,000", href: "/#packages" },
    { label: "45 Mbps — KES 3,500", href: "/#packages" },
    { label: "50 Mbps — KES 4,000", href: "/#packages" },
    { label: "55 Mbps — KES 4,500", href: "/#packages" },
    { label: "60 Mbps — KES 5,000", href: "/#packages" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-5">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-5">
            <Logo />
          </Link>

          <p className="text-slate-900 text-sm mb-6 max-w-sm">
            Reliable, high-speed internet across Kenya. Built for homes and businesses.
          </p>

          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex gap-2 items-center text-slate-900">
              <Phone size={14} className="text-blue-600" /> +254 709 665 855
            </div>
            <div className="flex gap-2 items-center text-slate-900">
              <Mail size={14} className="text-blue-600" /> info@edgetel.co.ke
            </div>
            <div className="flex gap-2 items-center text-slate-900">
              <MapPin size={14} className="text-blue-600" /> Ruiru town, star house 4th floor, suite no 416. Just behind Magunas Supermarket
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-slate-900 leading-relaxed transition"
            >
              <Facebook size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-lg text-slate-300 hover:bg-blue-500/10 hover:text-white leading-relaxed transition"
            >
              <Twitter size={14} />
            </a>
            <a
              href="https://www.instagram.com/edgeteltechnology?igsh=MW9ramdwdmRjOWJlYg=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-lg text-slate-300 hover:bg-blue-500/10 hover:text-white leading-relaxed transition"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <p className="text-sm font-semibold text-slate-900 mb-4">
              {section}
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Bottom */}
        <div className="lg:col-span-5 border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Edgetel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}