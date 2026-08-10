import React from 'react';
import { Sparkles, ShieldCheck, MessageCircle } from 'lucide-react';

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
      id: 0,
      title: "7 Chakra Crystals & Raw Amethyst Geode",
      collection: "HEALING ENERGY ATELIER",
      tag: "100% UNHEATED NATURAL",
      videoSrc: videoAmethystChakra,
      poster: img3R,
      description: "Hand-selected natural amethyst, carnelian, lapis lazuli and jade stones harmonizing planetary chakras on raw Brazilian geode.",
      code: "RAT-CHK-GEO",
    },
    {
      id: 1,
      title: "Authentic Nepali Mukhi Rudraksha & Japa Mala",
      collection: "SACRED VEDIC ROSARY",
      tag: "ORIGINAL NEPALI MUKHI",
      videoSrc: videoRudraksha,
      poster: mala4Mukhi,
      description: "Genuine textured Himalayan Mukhi beads strung in sacred red silk with certified Prana Pratishtha Vedic consecration.",
      code: "RUD-NEP-MALA",
      isOffset: true, // staggered center position
    },
    {
      id: 2,
      title: "Royal Lapis Lazuli & Golden Pyrite Inclusions",
      collection: "THIRD-EYE WISDOM & WEALTH",
      tag: "PYRITE GOLD SPECKS",
      videoSrc: videoLapisPyrite,
      poster: img9R,
      description: "Deep celestial ultramarine blue Lapis Lazuli flecked with natural metallic golden pyrite crystals for focus, truth and aura protection.",
      code: "RAT-LAP-PYR",
    },
  ];

  const handleWhatsAppInquiry = (item) => {
    const text = encodeURIComponent(
      `Namaste Amrapali Jewellers! ✨\n\nI am inquiring about the featured piece: "${item.title}" (Collection: ${item.collection}, Code: ${item.code}).\n\nPlease share pricing, certification and showroom availability.`
    );
    window.open(`https://wa.me/919412288300?text=${text}`, '_blank');
  };

  return (
    <section id="collections" className="w-full py-16 sm:py-24 bg-[#FAF7F2] border-b border-amber-900/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12">
        
        {/* Top Minimal Editorial Header Bar */}
        <div className="flex items-center justify-between border-b border-stone-300/60 pb-6 mb-16 text-xs font-serif tracking-widest text-[#1C1917] uppercase">
          {/* Left Menu Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#gemstone" className="hover:text-[#8B5E14] transition-colors font-bold">SACRED RATNAS</a>
            <a href="#live-gemstone-videos" className="hover:text-[#8B5E14] transition-colors">4K REELS</a>
          </div>

          {/* Center Brand Title */}
          <div className="text-center">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif tracking-[0.35em] font-normal text-[#1C1917] uppercase">
              A M R A P A L L I
            </h2>
            <span className="text-[9px] font-serif tracking-[0.3em] text-[#8B5E14] block mt-0.5 font-bold">
              AUTHENTIC RATNA & RUDRAKSHA SPOTLIGHT
            </span>
          </div>

          {/* Right Menu Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#store-location" className="hidden sm:inline-block hover:text-[#8B5E14] transition-colors">
              BHOPAL SHOWROOM
            </a>
            <a href="#wishlist" className="hover:text-[#8B5E14] transition-colors font-bold">
              ENQUIRE
            </a>
          </div>
        </div>

        {/* 3 Asymmetric Editorial Showcase Cards - Continuous Seamless Autoplay Video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
          
          {spotlights.map((item) => (
            <div
              key={item.id}
              className={`space-y-4 group flex flex-col justify-between ${
                item.isOffset ? 'md:mt-16' : ''
              }`}
            >
              {/* Media Container: Vertical Aspect Ratio (4/5) with Continuous Autoplaying Video */}
              <div className="w-full aspect-[4/5] bg-stone-900 overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl border border-amber-900/15">
                <video
                  src={item.videoSrc}
                  poster={item.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Top Tag & Live Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="bg-black/75 backdrop-blur-md border border-amber-400/30 text-amber-200 text-[8px] font-serif font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {item.tag}
                  </span>
                  <span className="bg-red-600/90 text-white text-[8px] font-sans font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Typography & Editorial Description */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                  {item.collection}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917] group-hover:text-[#8B5E14] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 font-serif leading-relaxed italic max-w-sm pt-1">
                  {item.description}
                </p>

                <div className="pt-3">
                  <button
                    onClick={() => handleWhatsAppInquiry(item)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FAF0E6] hover:bg-[#8B5E14] text-[#8B5E14] hover:text-white text-xs font-serif font-bold tracking-wider uppercase transition-all duration-300 border border-amber-300/60 shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire Showroom Piece</span>
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
