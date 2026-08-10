import React from 'react';
import { Image as ImageIcon, ArrowRight } from 'lucide-react';

export default function CategoryCard({ name, count, image }) {
  return (
    <div className="group bg-white border border-amber-800/15 rounded-2xl p-4 text-center flex flex-col items-center justify-between hover:border-[#C5A059] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out cursor-pointer relative min-h-[220px]">
      
      {/* Category Image - Circular Luxury Ring Showcase Frame */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-600/40 p-1 shadow-md overflow-hidden bg-[#FAF7F2] group-hover:border-[#8B5E14] group-hover:scale-105 transition-all duration-500 my-1 relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="text-amber-800/40 flex flex-col items-center justify-center h-full">
            <ImageIcon className="w-7 h-7 mb-1 text-amber-800/50 stroke-[1.5]" />
            <span className="text-[9px] font-mono text-amber-800/40">Category</span>
          </div>
        )}

        {/* Hover Arrow Overlay */}
        <div className="absolute inset-0 bg-[#8B5E14]/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
          <ArrowRight className="w-5 h-5 text-amber-100" />
        </div>
      </div>

      {/* Category Title & Count Details */}
      <div className="w-full pt-2">
        <h3 className="text-xs sm:text-sm font-serif font-bold text-[#1C1917] group-hover:text-[#8B5E14] transition-colors leading-tight line-clamp-1">
          {name}
        </h3>
        <span className="text-[10px] font-serif font-bold tracking-wider text-[#8B5E14] block mt-1 uppercase">
          {count || '120+ Designs'}
        </span>
      </div>

    </div>
  );
}
