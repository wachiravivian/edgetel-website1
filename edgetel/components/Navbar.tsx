"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/#packages" },
  { label: "Coverage", href: "/#coverage" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100" : "bg-white"
    }`}>
      {/* h-16 = 64px — logo must fit inside this */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center shrink-0">
          {/* size="sm" keeps logo at 80×40 — fits comfortably in 64px navbar */}
          <Logo size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block shrink-0">
          <a
            href="tel:+254709665855"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-white font-semibold hover:bg-blue-700 transition text-sm shadow-md"
          >
            <Phone size={14} />
            0709 665 855
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 border-b border-slate-50"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <a href="tel:+254709665855" className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white font-semibold text-sm">
              <Phone size={14} />
              0709 665 855
            </a>
          </div>
        </div>
      )}
    </header>
  );
}