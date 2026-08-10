import React, { useState } from 'react';
import { Sparkles, MessageCircle, Volume2, VolumeX } from 'lucide-react';

import video11 from '../assets/11R.mp4';
import video12 from '../assets/12R.mp4';
import video13 from '../assets/13R.mp4';
import video14 from '../assets/14r.mp4';
import rudrakshaVideo from '../assets/Rudraksha/rudraksha_video.mp4';
import stoneBraceletVideo from '../assets/stone_bracelet_video.mp4';
import stoneBraceletVideo2 from '../assets/stone_bracelet_video_2.mp4';

import ratnaImg from '../assets/Ratna.jpeg';
import img3R from '../assets/3R.jpeg';
import img7R from '../assets/7R.jpeg';
import img9R from '../assets/9R.jpeg';
import img5R from '../assets/5R.jpeg';
import img8R from '../assets/8R.jpeg';
import mala4Mukhi from '../assets/Rudraksha/4_mukhi_rudraksha_mala.jpg';

export default function LiveGemstoneReels() {
  const [isMuted, setIsMuted] = useState(true);

  const reels = [
    {
      id: 1,
      title: "Authentic Nepali Rudraksha & Sacred Siddha Japa Mala Motion",
      tag: "ORIGINAL NEPALI MUKHI",
      category: "Sacred Rudraksha",
      videoSrc: rudrakshaVideo,
      poster: mala4Mukhi,
      desc: "Live showroom video capture of authentic textured Mukhi Nepali Rudraksha beads strung in sacred red silk with natural auspicious clefts.",
    },
    {
      id: 2,
      title: "Natural Energy Healing Gemstone Bracelets Showcase",
      tag: "100% NATURAL STONES",
      category: "Healing Bracelets",
      videoSrc: stoneBraceletVideo,
      poster: img5R,
      desc: "Real studio close-up showcasing genuine Turquoise, Quartz, and Chakra stones with natural matrix and high gloss polish.",
    },
    {
      id: 3,
      title: "Vedic Crystal Energy Stones & Multi-Gemstone Radiance",
      tag: "STUDIO 4K CAPTURE",
      category: "Aura Balancing",
      videoSrc: stoneBraceletVideo2,
      poster: img8R,
      desc: "High-definition showroom lighting revealing natural crystal facets, inclusions, and spherical precision.",
    },
    {
      id: 4,
      title: "Raw Amethyst Geode & Multi-Chakra Gemstone Bead Luster",
      tag: "100% NATURAL UNHEATED",
      category: "Healing Energy Stones",
      videoSrc: video11,
      poster: img3R,
      desc: "Watch the genuine natural color zoning, clarity and deep celestial purple hues of authentic Brazilian Amethyst and energized Chakra crystals.",
    },
    {
      id: 5,
      title: "Natural Green Fluorite & Jade Luminous Crystal Motion",
      tag: "HIGH CLARITY GRADE",
      category: "Heart Chakra Stones",
      videoSrc: video12,
      poster: img7R,
      desc: "Observe the soothing translucent green light transmission and precision spherical polishing under pure white studio lighting.",
    },
    {
      id: 6,
      title: "Royal Lapis Lazuli & Golden Pyrite Inclusions Showcase",
      tag: "PYRITE GOLD SPECKS",
      category: "Third-Eye Wisdom",
      videoSrc: video14,
      poster: img9R,
      desc: "Natural deep ultramarine blue Lapis Lazuli with shimmering golden metallic pyrite crystals verified for authenticity.",
    },
  ];

  const handleWhatsAppEnquire = (reel) => {
    const text = encodeURIComponent(
      `Namaste Amrapali Jewellers! ✨\n\nI just watched the live video showcase of "${reel.title}" on your website.\n\nCould you please share pricing, certification details, and availability at your Bhopal showroom?`
    );
    window.open(`https://wa.me/919412288300?text=${text}`, '_blank');
  };

  return (
    <section id="live-gemstone-videos" className="w-full py-16 bg-[#161311] text-amber-50 border-b border-amber-900/20 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5E14]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-amber-800/30 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[9px] font-serif font-bold tracking-[0.3em] text-[#C5A059] uppercase block">
                LIVE SHOWROOM VIDEO SHOWCASE
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] px-2.5 py-0.5 bg-amber-500/20 border border-amber-500/40 text-amber-200 font-serif rounded-full font-bold">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Continuous 4K Showroom Motion
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-tight">
              Experience Natural Rudraksha & Ratnas in Motion
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-serif italic mt-1.5 max-w-2xl">
              Real high-definition video captures of our certified Nepali Rudraksha beads, healing crystal bracelets, and raw geode crystals directly from our Bhopal atelier.
            </p>
          </div>

          {/* Sound Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-amber-600/30 text-amber-200 text-xs font-serif flex items-center gap-2 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isMuted ? 'Unmute Audio' : 'Mute Audio'}</span>
            </button>
          </div>
        </div>

        {/* 6 Video Reels Grid - Seamless Continuous Autoplay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="bg-[#201B17] border border-amber-800/30 rounded-3xl overflow-hidden shadow-xl hover:border-[#C5A059] transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Video Media Container (Aspect 9:14 portrait reel style) - AutoPlay Loop */}
              <div className="w-full aspect-[9/14] bg-stone-950 relative overflow-hidden">
                <video
                  src={reel.videoSrc}
                  poster={reel.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[7px] font-serif font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {reel.tag}
                  </span>
                  <span className="bg-red-600/90 text-white text-[7px] font-sans font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Details Footer */}
              <div className="p-3 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[8px] font-serif font-bold tracking-wider text-[#C5A059] uppercase block mb-0.5">
                    {reel.category}
                  </span>
                  <h3 className="text-xs font-serif font-medium text-white line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {reel.title}
                  </h3>
                </div>

                {/* WhatsApp Enquiry Button */}
                <button
                  onClick={() => handleWhatsAppEnquire(reel)}
                  className="w-full py-1.5 px-2 rounded-lg bg-gradient-to-r from-[#8B5E14] to-[#A87928] hover:from-[#724B0D] hover:to-[#8B5E14] text-white text-[9px] font-serif font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer mt-1"
                >
                  <MessageCircle className="w-3 h-3 fill-white" />
                  <span>Inquire</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
