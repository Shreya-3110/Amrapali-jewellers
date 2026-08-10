import React from 'react';

import navaratnaDrops from '../assets/navaratna_drops.png';
import templeCuff from '../assets/temple_cuff.png';
import polkiSolitaire from '../assets/polki_solitaire.png';

export default function MinimalistCollectionShowcase() {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAF7F2] border-b border-amber-900/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        
        {/* Top Minimal Editorial Header Bar */}
        <div className="flex items-center justify-between border-b border-stone-300/60 pb-6 mb-16 text-xs font-serif tracking-widest text-[#1C1917] uppercase">
          {/* Left Menu Links */}
          <div className="flex items-center gap-8">
            <a href="#collections" className="hover:text-[#8B5E14] transition-colors">COLLECTIONS</a>
            <a href="#bespoke" className="hover:text-[#8B5E14] transition-colors">BESPOKE</a>
          </div>

          {/* Center Brand Title */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-serif tracking-[0.35em] font-normal text-[#1C1917] uppercase">
              A M R A P A L L I
            </h2>
          </div>

          {/* Right Menu Links */}
          <div className="flex items-center gap-8">
            <a href="#story" className="hover:text-[#8B5E14] transition-colors">OUR STORY</a>
            <a href="#wishlist" className="hover:text-[#8B5E14] transition-colors">BAG (0)</a>
          </div>
        </div>

        {/* 3 Asymmetric / Staggered Editorial Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          
          {/* Card 1: Left Standard Position */}
          <div className="space-y-4 group cursor-pointer">
            <div className="w-full aspect-[4/5] bg-stone-200 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-700">
              <img
                src={navaratnaDrops}
                alt="The Navaratna Drops"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="space-y-1.5 pt-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#1C1917] group-hover:text-[#8B5E14] transition-colors">
                The Navaratna Drops
              </h3>

              <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                HERITAGE BRIDAL
              </span>

              <p className="text-xs sm:text-sm text-stone-500 font-serif leading-relaxed italic max-w-sm pt-1">
                Handcrafted 22kt gold set with nine precious gemstones, inspired by celestial alignments.
              </p>
            </div>
          </div>

          {/* Card 2: Center Staggered Offset Lower */}
          <div className="space-y-4 group cursor-pointer md:mt-16">
            <div className="w-full aspect-[4/5] bg-stone-200 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-700">
              <img
                src={templeCuff}
                alt="Temple Arch Cuff"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="space-y-1.5 pt-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#1C1917] group-hover:text-[#8B5E14] transition-colors">
                Temple Arch Cuff
              </h3>

              <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                ARCHITECTURE SERIES
              </span>

              <p className="text-xs sm:text-sm text-stone-500 font-serif leading-relaxed italic max-w-sm pt-1">
                A singular statement of architectural grace, mirroring the intricate pillars of Hampi.
              </p>
            </div>
          </div>

          {/* Card 3: Right Standard Position */}
          <div className="space-y-4 group cursor-pointer">
            <div className="w-full aspect-[4/5] bg-stone-200 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-700">
              <img
                src={polkiSolitaire}
                alt="The Polki Solitaire"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="space-y-1.5 pt-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#1C1917] group-hover:text-[#8B5E14] transition-colors">
                The Polki Solitaire
              </h3>

              <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                MODERN ROYAL
              </span>

              <p className="text-xs sm:text-sm text-stone-500 font-serif leading-relaxed italic max-w-sm pt-1">
                Ancient Polki diamonds reimagined for the contemporary silhouette. Minimal, yet profound.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
