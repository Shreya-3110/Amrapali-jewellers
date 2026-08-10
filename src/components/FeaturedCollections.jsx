import React from 'react';
import { Sparkles, ShieldCheck, MessageCircle, ArrowUpRight } from 'lucide-react';

// Real Videos
import videoAmethystChakra from '../assets/11R.mp4';
import videoRudraksha from '../assets/Rudraksha/rudraksha_video.mp4';
import videoLapisPyrite from '../assets/14r.mp4';

// Real Photos
import img3R from '../assets/3R.jpeg';
import mala4Mukhi from '../assets/Rudraksha/4_mukhi_rudraksha_mala.jpg';
import img9R from '../assets/9R.jpeg';

export default function FeaturedCollections() {
  const spotlights = [
    {
      id: '01',
      edition: '№ 01',
      category: 'ENERGY ATELIER',
      title: '7 Chakra Crystals & Raw Amethyst Geode',
      tag: '100% UNHEATED NATURAL',
      origin: 'Brazilian Geode • Chakra Stones',
      videoSrc: videoAmethystChakra,
      poster: img3R,
      description: 'Hand-selected natural amethyst, carnelian, lapis lazuli and jade stones harmonizing planetary chakras on a raw crystalline geode.',
      code: 'RAT-CHK-GEO',
    },
    {
      id: '02',
      edition: '№ 02',
      category: 'SACRED KAVACH',
      title: 'Authentic Nepali Mukhi Rudraksha & Japa Mala',
      tag: 'ORIGINAL NEPALI MUKHI',
      origin: 'Himalayan Highlands • 108 Beads',
      videoSrc: videoRudraksha,
      poster: mala4Mukhi,
      description: 'Genuine textured Himalayan Mukhi beads knotted in sacred red silk with certified Prana Pratishtha Vedic mantra consecration.',
      code: 'RUD-NEP-MALA',
      isOffset: true, // Editorial staggered center position
    },
    {
      id: '03',
      edition: '№ 03',
      category: 'CELESTIAL WISDOM',
      title: 'Royal Lapis Lazuli & Golden Pyrite Inclusions',
      tag: 'PYRITE GOLD SPECKS',
      origin: 'Celestial Blue • Natural Metallic',
      videoSrc: videoLapisPyrite,
      poster: img9R,
      description: 'Deep celestial ultramarine blue Lapis Lazuli flecked with shimmering golden pyrite crystals for intuition, truth, and aura protection.',
      code: 'RAT-LAP-PYR',
    },
  ];

  const handleWhatsAppInquiry = (item) => {
    const text = encodeURIComponent(
      `Namaste Amrapali Jewellers! ✨\n\nI am inquiring about the featured showroom masterpiece:\n"${item.title}" (${item.category}, Code: ${item.code}).\n\nPlease share certificate details, price and availability at your Bhopal showroom.`
    );
    window.open(`https://wa.me/919412288300?text=${text}`, '_blank');
  };

  return (
    <section id="collections" className="w-full py-24 sm:py-36 bg-[#FAF7F2] border-b border-amber-900/10 relative overflow-hidden">
      
      {/* Soft Ambient Illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-amber-200/15 via-[#C5A059]/10 to-amber-100/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Top Minimal Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-amber-900/15 pb-10 mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#8B5E14] animate-pulse" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.35em] text-[#8B5E14] uppercase">
                SHOWROOM SPOTLIGHT • LIVING MOTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1C1917] tracking-tight">
              Curated Masterpieces
            </h2>
          </div>

          <div className="text-left md:text-right max-w-md">
            <p className="text-xs sm:text-sm text-stone-500 font-sans font-light leading-relaxed">
              Real high-definition video captures of our certified gemstones, sacred Nepali Rudraksha beads, and raw geode crystals in fluid natural light.
            </p>
            <div className="flex items-center md:justify-end gap-2 text-[#8B5E14] text-[11px] tracking-[0.25em] font-serif uppercase mt-3">
              <span>✦</span>
              <span>100% UNHEATED & CERTIFIED</span>
              <span>✦</span>
            </div>
          </div>
        </div>

        {/* 3 Modern Spacious Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 xl:gap-18 items-start">
          
          {spotlights.map((item) => (
            <div
              key={item.id}
              className={`bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-7 sm:p-8 border border-amber-900/10 shadow-[0_20px_60px_-15px_rgba(28,25,23,0.06)] hover:shadow-[0_30px_80px_-15px_rgba(139,94,20,0.18)] hover:border-amber-400/40 hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group flex flex-col justify-between ${
                item.isOffset ? 'md:mt-16' : ''
              }`}
            >
              {/* Card Top Row: Edition & SKU */}
              <div className="flex items-center justify-between text-[11px] font-sans font-semibold text-[#8B5E14] tracking-[0.25em] uppercase border-b border-amber-900/10 pb-4 mb-6">
                <span>{item.edition} • {item.category}</span>
                <span className="text-stone-400 font-mono text-[10px] tracking-normal">{item.code}</span>
              </div>

              {/* Video Media Container with Soft Radius & Subtle Gold Ring */}
              <div className="w-full aspect-[4/5] bg-stone-950 rounded-[1.75rem] overflow-hidden relative shadow-inner ring-1 ring-amber-900/10 group-hover:ring-amber-500/30 transition-all duration-700">
                <video
                  src={item.videoSrc}
                  poster={item.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-1000 ease-out"
                />

                {/* Soft ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="bg-black/70 backdrop-blur-md border border-amber-400/30 text-amber-200 text-[8px] font-sans font-semibold tracking-wider px-3 py-1 rounded-full uppercase shadow-md">
                    {item.tag}
                  </span>
                  <span className="bg-red-600 text-white text-[8px] font-sans font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    LIVE
                  </span>
                </div>

                {/* Bottom Origin Pill */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] text-amber-100/95 font-sans bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/10 pointer-events-none">
                  <span className="tracking-wide">{item.origin}</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </div>
              </div>

              {/* Card Body: Typography, Description & Action */}
              <div className="pt-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="text-2xl lg:text-[1.65rem] font-serif font-normal text-[#1C1917] group-hover:text-[#8B5E14] transition-colors duration-500 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-stone-500 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Modern Minimalist Pill CTA Button */}
                <div className="pt-6 mt-4 border-t border-amber-900/10">
                  <button
                    onClick={() => handleWhatsAppInquiry(item)}
                    className="w-full py-3.5 px-6 rounded-full bg-[#FAF7F2] hover:bg-[#1C1917] text-[#1C1917] hover:text-white border border-amber-900/20 hover:border-[#1C1917] text-xs font-sans font-semibold tracking-[0.15em] uppercase transition-all duration-500 shadow-xs hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#8B5E14] group-hover/btn:text-white transition-colors" />
                    <span>Inquire Showroom Piece</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8B5E14] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
