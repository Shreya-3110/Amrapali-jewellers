import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';

import antiqueOm from '../assets/AntiqueOm.jpeg';
import rakhi2 from '../assets/2.jpeg';
import rakhi3 from '../assets/3.jpeg';
import lionRakhi from '../assets/Lion.jpeg';
import deviRakhi from '../assets/Devi.jpeg';
import rakhi6 from '../assets/6.jpeg';

export default function InstagramGallery() {
  const posts = [
    { handle: "@amrapalijewellry", tag: "#AntiqueOmRakhi", image: antiqueOm },
    { handle: "@amrapalijewellry", tag: "#PeacockSilverRakhi", image: rakhi2 },
    { handle: "@amrapalijewellry", tag: "#GaneshaSilverRakhi", image: rakhi3 },
    { handle: "@amrapalijewellry", tag: "#RoyalLionRakhi", image: lionRakhi },
    { handle: "@amrapalijewellry", tag: "#DeviSilverRakhi", image: deviRakhi },
    { handle: "@amrapalijewellry", tag: "#FiligreeSilverRakhi", image: rakhi6 },
  ];

  return (
    <section className="w-full py-10 bg-white border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-3 border-b border-amber-900/15 gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100/70 border border-amber-700/30 flex items-center justify-center text-[#8B5E14]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                Follow Us On Instagram
              </h2>
              <p className="text-xs text-stone-600">@amrapali.jewellers • Share your style with #AmrapaliGrace</p>
            </div>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-serif font-bold uppercase tracking-wider bg-[#1C1917] text-amber-50 px-4 py-2 rounded-lg hover:bg-[#8B5E14] transition-colors flex items-center gap-1.5 border border-amber-800/20"
          >
            <span>Follow @amrapali.jewellers</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group aspect-square bg-[#FAF7F2] border border-amber-800/15 rounded-xl overflow-hidden relative flex flex-col items-center justify-center cursor-pointer hover:border-[#C5A059]"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.tag}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1C1917]/80 text-amber-50 flex flex-col items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity text-center backdrop-blur-2xs">
                <Camera className="w-6 h-6 mb-1 text-[#C5A059]" />
                <span className="text-xs font-serif font-bold">{post.tag}</span>
                <span className="text-[10px] text-amber-200/80 mt-1 font-sans">View Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
