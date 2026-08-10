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
      edition: '№ 01 • ENERGY ATELIER',
      title: '7 Chakra Crystals & Raw Amethyst Geode',
      tag: '100% UNHEATED NATURAL',
      origin: 'BRAZILIAN GEODE • CHAKRA STONES',
      videoSrc: videoAmethystChakra,
      poster: img3R,
      description: 'Hand-selected natural amethyst, carnelian, lapis lazuli and jade stones harmonizing planetary chakras on a raw crystalline geode.',
      code: 'RAT-CHK-GEO',
    },
    {
      id: '02',
      edition: '№ 02 • SACRED KAVACH',
      title: 'Authentic Nepali Mukhi Rudraksha & Japa Mala',
      tag: 'ORIGINAL NEPALI MUKHI',
      origin: 'HIMALAYAN HIGHLANDS • 108 BEADS',
      videoSrc: videoRudraksha,
      poster: mala4Mukhi,
      description: 'Genuine textured Himalayan Mukhi beads knotted in sacred red silk with certified Prana Pratishtha Vedic mantra consecration.',
      code: 'RUD-NEP-MALA',
      isOffset: true, // Editorial staggered center position
    },
    {
      id: '03',
      edition: '№ 03 • CELESTIAL WISDOM',
      title: 'Royal Lapis Lazuli & Golden Pyrite Inclusions',
      tag: 'PYRITE GOLD SPECKS',
      origin: 'CELESTIAL BLUE • NATURAL METALLIC',
      videoSrc: videoLapisPyrite,
      poster: img9R,
      description: 'Deep celestial ultramarine blue Lapis Lazuli flecked with shimmering golden pyrite crystals for intuition, truth, and aura protection.',
      code: 'RAT-LAP-PYR',
    },
  ];

  const handleWhatsAppInquiry = (item) => {
    const text = encodeURIComponent(
      `Namaste Amrapali Jewellers! ✨\n\nI am inquiring about the featured showroom spotlight masterpiece:\n"${item.title}" (${item.edition}, Code: ${item.code}).\n\nPlease share certificate, pricing, and showroom viewing details at Bhopal.`
    );
    window.open(`https://wa.me/919412288300?text=${text}`, '_blank');
  };

  return (
    <section id="collections" className="w-full py-20 sm:py-28 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6]/70 to-[#FAF7F2] border-b border-amber-900/10 relative overflow-hidden">
      
      {/* Ambient background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-200/20 via-amber-300/15 to-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Top Minimal Editorial Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-900/15 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8B5E14] animate-pulse" />
            <span className="text-[10px] font-serif font-bold tracking-[0.3em] text-[#8B5E14] uppercase">
              SHOWROOM SPOTLIGHT • LIVING MOTION
            </span>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-serif tracking-[0.3em] font-light text-[#1C1917] uppercase">
              A M R A P A L L I
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#8B5E14] text-[10px] tracking-[0.25em] font-serif uppercase mt-1">
              <span>✦</span>
              <span>SACRED RATNAS & HEALING CRYSTALS</span>
              <span>✦</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-serif tracking-widest text-stone-600 uppercase">
            <a href="#gemstone" className="hover:text-[#8B5E14] transition-colors font-bold">
              ALL RATNAS →
            </a>
          </div>
        </div>

        {/* 3 Staggered Luxury Editorial Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {spotlights.map((item) => (
            <div
              key={item.id}
              className={`bg-white/80 backdrop-blur-md rounded-3xl p-5 border border-amber-900/15 shadow-[0_12px_40px_-15px_rgba(139,94,20,0.12)] hover:border-[#C5A059] hover:shadow-[0_20px_50px_-12px_rgba(139,94,20,0.22)] transition-all duration-700 ease-out group flex flex-col justify-between ${
                item.isOffset ? 'md:mt-12' : ''
              }`}
            >
              {/* Card Header Row: Edition Number & Origin */}
              <div className="flex items-center justify-between text-[10px] font-serif font-bold text-[#8B5E14] tracking-widest uppercase border-b border-amber-900/10 pb-3 mb-4">
                <span>{item.edition}</span>
                <span className="text-stone-400 font-mono text-[9px]">{item.code}</span>
              </div>

              {/* Video Container (Aspect 4/5) with Gold Inner Border Frame */}
              <div className="w-full aspect-[4/5] bg-stone-950 rounded-2xl overflow-hidden relative shadow-inner border border-amber-900/15 group-hover:border-amber-400/40 transition-colors">
                <video
                  src={item.videoSrc}
                  poster={item.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                />

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="bg-black/70 backdrop-blur-md border border-amber-400/30 text-amber-200 text-[8px] font-serif font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {item.tag}
                  </span>
                  <span className="bg-red-600 text-white text-[8px] font-sans font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    4K MOTION
                  </span>
                </div>

                {/* Bottom Origin Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] text-amber-100/90 font-serif bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 pointer-events-none">
                  <span className="tracking-wider uppercase">{item.origin}</span>
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </div>
              </div>

              {/* Card Body: Typography & Details */}
              <div className="pt-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[#8B5E14] text-[10px] my-1">
                    <span className="h-[1px] w-4 bg-amber-800/20" />
                    <span>✦ ❖ ✦</span>
                    <span className="h-[1px] w-4 bg-amber-800/20" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#1C1917] group-hover:text-[#8B5E14] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 font-serif leading-relaxed italic pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Luxury WhatsApp Button */}
                <div className="pt-4 mt-2 border-t border-amber-900/10">
                  <button
                    onClick={() => handleWhatsAppInquiry(item)}
                    className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#8B5E14] via-[#A87928] to-[#8B5E14] hover:from-[#724B0D] hover:to-[#724B0D] text-white text-xs font-serif font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire Showroom Piece</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
