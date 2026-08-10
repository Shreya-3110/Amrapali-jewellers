import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, ShieldCheck, MessageCircle, Eye } from 'lucide-react';

import video11 from '../assets/11R.mp4';
import video12 from '../assets/12R.mp4';
import video13 from '../assets/13R.mp4';
import video14 from '../assets/14r.mp4';
import ratnaImg from '../assets/Ratna.jpeg';
import img3R from '../assets/3R.jpeg';
import img7R from '../assets/7R.jpeg';
import img9R from '../assets/9R.jpeg';

export default function LiveGemstoneReels() {
  const [playingIdx, setPlayingIdx] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  const reels = [
    {
      id: 1,
      title: "Raw Amethyst Geode & Multi-Chakra Gemstone Bead Luster",
      tag: "100% NATURAL UNHEATED",
      category: "Healing Energy Stones",
      videoSrc: video11,
      poster: img3R,
      desc: "Watch the genuine natural color zoning, clarity and deep celestial purple hues of authentic Brazilian Amethyst and energized Chakra crystals.",
    },
    {
      id: 2,
      title: "Natural Green Fluorite & Jade Luminous Crystal Motion",
      tag: "HIGH CLARITY GRADE",
      category: "Heart Chakra Stones",
      videoSrc: video12,
      poster: img7R,
      desc: "Observe the soothing translucent green light transmission and precision spherical polishing under pure white studio lighting.",
    },
    {
      id: 3,
      title: "Pure Diamond-Cut Sphatik & Clear Quartz Brilliance",
      tag: "VEDIC ENERGIZED",
      category: "Pure Quartz Mala",
      videoSrc: video13,
      poster: ratnaImg,
      desc: "Experience the cool, crystalline purity and optical clarity of genuine Himalayan Sphatik beads crafted for Japa meditation.",
    },
    {
      id: 4,
      title: "Royal Lapis Lazuli & Golden Pyrite Inclusions Showcase",
      tag: "PYRITE GOLD SPECKS",
      category: "Third-Eye Wisdom",
      videoSrc: video14,
      poster: img9R,
      desc: "Natural deep ultramarine blue Lapis Lazuli with shimmering golden metallic pyrite crystals verified for authenticity.",
    },
  ];

  const togglePlay = (idx) => {
    const video = videoRefs.current[idx];
    if (!video) return;

    if (playingIdx === idx && !video.paused) {
      video.pause();
      setPlayingIdx(null);
    } else {
      // Pause others
      videoRefs.current.forEach((v, i) => {
        if (v && i !== idx) v.pause();
      });
      video.play();
      setPlayingIdx(idx);
    }
  };

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
                Raw Gemstone Luster In Motion
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-tight">
              Experience Natural Ratnas & Crystals in Motion
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-serif italic mt-1.5 max-w-2xl">
              Real high-definition video captures of our certified gemstones, raw geode crystals, and handcrafted healing malas directly from our Bhopal atelier.
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

        {/* 4 Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, idx) => {
            const isCurrentPlaying = playingIdx === idx;

            return (
              <div
                key={reel.id}
                className="bg-[#201B17] border border-amber-800/30 rounded-3xl overflow-hidden shadow-xl hover:border-[#C5A059] transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Video Media Container (Aspect 9:16 portrait reel style) */}
                <div 
                  className="w-full aspect-[9/14] bg-stone-950 relative overflow-hidden cursor-pointer"
                  onClick={() => togglePlay(idx)}
                >
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={reel.videoSrc}
                    poster={reel.poster}
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[8px] font-serif font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {reel.tag}
                    </span>
                    <span className="bg-red-600/90 text-white text-[8px] font-sans font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                      LIVE
                    </span>
                  </div>

                  {/* Play / Pause Center Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
                    <button
                      className={`w-14 h-14 rounded-full bg-[#8B5E14]/90 hover:bg-[#8B5E14] text-white flex items-center justify-center backdrop-blur-md border border-amber-400/40 shadow-2xl transition-all transform group-hover:scale-110 cursor-pointer ${
                        isCurrentPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-90'
                      }`}
                      aria-label={isCurrentPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isCurrentPlaying ? (
                        <Pause className="w-6 h-6 fill-white" />
                      ) : (
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Hint */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-amber-100/80 font-serif bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                    <span>Click to {isCurrentPlaying ? 'Pause' : 'Play'}</span>
                    <Eye className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-serif font-bold tracking-wider text-[#C5A059] uppercase block mb-1">
                      {reel.category}
                    </span>
                    <h3 className="text-sm font-serif font-medium text-white line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
                      {reel.title}
                    </h3>
                    <p className="text-[11px] text-stone-400 font-serif line-clamp-2 mt-1 leading-relaxed">
                      {reel.desc}
                    </p>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <button
                    onClick={() => handleWhatsAppEnquire(reel)}
                    className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#8B5E14] to-[#A87928] hover:from-[#724B0D] hover:to-[#8B5E14] text-white text-[11px] font-serif font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire Showroom Piece</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
