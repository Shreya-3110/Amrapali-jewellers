import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MapPin, ShieldCheck, Crown } from 'lucide-react';

export default function AnnouncementBar() {
  const [activeMsg, setActiveMsg] = useState(0);

  const messages = [
    "COMPLIMENTARY INSURED PAN-INDIA DELIVERY • LIFETIME EXCHANGE GUARANTEE",
    "100% BIS HALLMARKED 22KT GOLD & IGI CERTIFIED NATURAL DIAMONDS",
    "EXPERIENCE RATNA SHOWROOM • HERITAGE CRAFTSMANSHIP SINCE 1978"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMsg((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="w-full bg-[#12100E] text-[#D4AF37] text-[10px] font-serif tracking-[0.25em] uppercase border-b border-amber-900/30 py-2 relative z-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 flex items-center justify-between">
        
        {/* Left: Store Concierge */}
        <div className="hidden md:flex items-center gap-4 text-stone-400 text-[9px] tracking-widest">
          <a href="#store-location" className="hover:text-amber-200 flex items-center gap-1.5 transition-colors">
            <MapPin className="w-3 h-3 text-[#D4AF37]" />
            <span>RATNA SHOWROOM</span>
          </a>
        </div>

        {/* Center: Rotating Minimalist Luxury Message */}
        <div className="flex-1 text-center font-medium transition-all duration-700 ease-out">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-2.5 h-2.5 text-[#D4AF37] animate-pulse" />
            <span className="text-[#F5EBE1]">{messages[activeMsg]}</span>
            <Sparkles className="w-2.5 h-2.5 text-[#D4AF37] animate-pulse" />
          </span>
        </div>

        {/* Right: Direct Assistance */}
        <div className="hidden md:flex items-center gap-4 text-stone-400 text-[9px] tracking-widest">
          <a href="tel:18001234567" className="hover:text-amber-200 flex items-center gap-1.5 transition-colors">
            <Phone className="w-3 h-3 text-[#D4AF37]" />
            <span>1800-123-4567</span>
          </a>
        </div>

      </div>
    </div>
  );
}
