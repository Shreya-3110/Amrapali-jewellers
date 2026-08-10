import React from 'react';

export default function AmrapaliLogo({ variant = 'dark', className = '' }) {
  // variant: 'dark' for header (amber-800 text), 'light' for footer (white/amber text)
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      
      {/* Emblem Circle Badge */}
      <div className={`w-10 h-10 rounded-full border border-amber-600/40 flex items-center justify-center shrink-0 shadow-2xs ${
        isLight ? 'bg-slate-900 border-amber-500/40' : 'bg-amber-50/60 border-amber-700/30'
      }`}>
        <svg viewBox="0 0 100 100" className={`w-6 h-6 ${isLight ? 'text-amber-400' : 'text-amber-800'} fill-current`}>
          {/* Curved Arch Emblem */}
          <path d="M 22 56 C 30 28, 70 28, 78 56 C 70 42, 60 36, 50 36 C 40 36, 30 42, 22 56 Z" />
          {/* Central Dot */}
          <circle cx="50" cy="68" r="6.5" />
        </svg>
      </div>

      {/* Typography Stack */}
      <div className="flex flex-col">
        <span className={`text-xl sm:text-2xl font-serif font-bold tracking-wider leading-none ${
          isLight ? 'text-amber-300' : 'text-amber-900'
        }`}>
          AMRAPALI
        </span>
        
        <span className={`text-[10px] sm:text-[11px] font-serif font-semibold tracking-[0.22em] uppercase mt-1 leading-none ${
          isLight ? 'text-slate-300' : 'text-amber-800'
        }`}>
          JEWELLERS
        </span>

        <span className={`text-[7.5px] font-sans font-medium tracking-[0.35em] uppercase mt-0.5 leading-none ${
          isLight ? 'text-slate-400' : 'text-amber-700/80'
        }`}>
          RATNA SHOWROOM
        </span>
      </div>

    </div>
  );
}
