"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "254723111555"; // WhatsApp number without +

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Edgetel services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center z-50"
        aria-label="Chat support"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-blue-200 p-5 z-50 animate-in slide-in-from-bottom-4">
          <div className="mb-4">
            <h3 className="font-bold text-slate-900 mb-1">Chat Support</h3>
            <p className="text-sm text-slate-600">
              Hey! 👋 Need help with Edgetel? Chat with us on WhatsApp.
            </p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </button>

          <p className="text-xs text-slate-500 text-center mt-3">
            Available Mon-Fri, 9am-5pm EAT
          </p>
        </div>
      )}
    </>
  );
}
