import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FloatingGemsRecommendationBadge({ onOpenModal }) {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center select-none shadow-2xl">
      <button
        onClick={onOpenModal}
        className="group bg-gradient-to-b from-[#D32F2F] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#8B0000] text-white py-3 px-2 rounded-l-2xl border-y border-l border-amber-300/40 shadow-2xl flex flex-col items-center gap-1.5 transition-all duration-300 transform hover:-translate-x-1 cursor-pointer"
        title="Free Astrological Kundli & Gemstone Recommendation"
      >
        {/* Glowing Pulse Icon */}
        <div className="relative">
          <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
        </div>

        {/* Hindi Badge */}
        <span className="text-[11px] font-bold tracking-wider writing-vertical-lr [writing-mode:vertical-lr] text-amber-100 font-serif">
          फ्री जन्मपत्री
        </span>

        {/* Separator Accent */}
        <div className="w-3 h-px bg-amber-200/50 my-0.5" />

        {/* English Badge */}
        <span className="text-[9px] font-bold tracking-[0.2em] writing-vertical-lr [writing-mode:vertical-lr] text-white font-sans uppercase">
          GEMS
        </span>
      </button>
    </div>
  );
}
