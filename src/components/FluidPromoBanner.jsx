import React from 'react';
import { Crown } from 'lucide-react';
import pearlPromo from '../assets/pearl_promo.png';

export default function FluidPromoBanner() {
  return (
    <section className="w-full py-16 bg-[#FAF7F2] border-b border-amber-900/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Main Fluid Wave Container Card */}
        <div className="w-full min-h-[500px] bg-[#FAF7F2] border border-amber-800/15 rounded-3xl p-6 sm:p-12 relative flex items-center justify-center overflow-hidden shadow-xl group">
          
          {/* SVG Wavy Organic Fluid Frame Container */}
          <div className="relative w-full max-w-2xl min-h-[460px] rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-600/30 flex items-center justify-center text-center p-8 bg-[#8B5E14]">
            
            {/* Background High-Res Image with Fluid Opacity Mask */}
            <img
              src={pearlPromo}
              alt="Jewellery Showcase"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-70 mix-blend-overlay"
            />
            
            {/* Dark Fluid Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-900/70" />

            {/* Organic SVG Wavy Overlay Frame Graphics (Left and Right Fluid Cutouts) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 800 500" 
              preserveAspectRatio="none"
            >
              <path 
                d="M 0,0 C 150,100 50,300 0,500 L 0,0 Z" 
                fill="#FAF7F2" 
              />
              <path 
                d="M 800,0 C 650,150 750,350 800,500 L 800,0 Z" 
                fill="#FAF7F2" 
              />
            </svg>

            {/* Center Content Inside Fluid Frame */}
            <div className="relative z-10 space-y-4 max-w-md mx-auto text-amber-50">
              
              <span className="text-xs sm:text-sm font-serif font-bold tracking-[0.3em] text-[#C5A059] uppercase block">
                AMRAPALI RATNA SHOWROOM
              </span>

              <div className="space-y-1">
                <span className="text-2xl sm:text-4xl font-serif font-light tracking-widest uppercase block text-amber-100">
                  UP TO
                </span>
                <h2 className="text-5xl sm:text-7xl font-serif font-bold tracking-tight text-white drop-shadow-lg leading-none">
                  50% OFF
                </h2>
              </div>

              <p className="text-xs sm:text-sm font-serif text-amber-100/90 font-light max-w-xs mx-auto">
                Rings, necklaces and keepsakes crafted with care.
              </p>

              <span className="text-[11px] font-mono tracking-widest text-amber-200/90 uppercase block pt-1">
                WWW.AMRAPALIJEWELLERS.COM
              </span>

              {/* Exact Outlined Ghost Luxury Button from User Screenshot */}
              <div className="pt-4">
                <a
                  href="#silver"
                  className="inline-block border border-white/80 bg-stone-900/30 backdrop-blur-xs text-white uppercase tracking-[0.25em] font-serif text-xs px-10 py-3.5 hover:bg-white hover:text-stone-900 transition-all duration-500 cursor-pointer shadow-sm"
                >
                  EXPLORE JEWELRY
                </a>
              </div>

            </div>

            {/* Bottom Right Floating Crown Badge */}
            <div className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-xl bg-stone-900/90 border border-amber-500/40 text-[#C5A059] flex items-center justify-center shadow-lg">
              <Crown className="w-5 h-5" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
