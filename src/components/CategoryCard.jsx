import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CategoryCard({ name, count, image, isSpecial, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`group bg-white rounded-2xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-between border transition-all duration-500 ease-out cursor-pointer relative shadow-sm hover:shadow-xl hover:-translate-y-1 ${
        isSpecial 
          ? 'border-amber-500/60 ring-2 ring-amber-500/20 bg-gradient-to-b from-amber-50/50 to-white' 
          : 'border-amber-900/15 hover:border-[#8B5E14]'
      }`}
    >
      {/* Optional Top Badge for Free Recommendation / Special */}
      {isSpecial && (
        <span className="absolute -top-2.5 right-2 px-2 py-0.5 bg-gradient-to-r from-red-600 to-amber-600 text-[8px] font-serif font-bold tracking-wider text-white uppercase rounded-full shadow-sm flex items-center gap-1 z-10">
          <Sparkles className="w-2.5 h-2.5" />
          <span>FREE</span>
        </span>
      )}

      {/* Category Image Frame - Clean Aspect Ratio matching Reference Photo */}
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF7F2] border border-amber-900/10 group-hover:border-amber-600/40 relative shadow-inner">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        )}

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
          <span className="text-[10px] text-amber-200 font-serif font-bold tracking-wider uppercase flex items-center gap-1">
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 text-amber-300" />
          </span>
        </div>
      </div>

      {/* Category Title & Count */}
      <div className="w-full pt-2.5 pb-1 px-1">
        <h3 className="text-xs sm:text-sm font-serif font-bold text-[#1C1917] group-hover:text-[#8B5E14] transition-colors leading-tight line-clamp-2">
          {name}
        </h3>
        {count && (
          <span className="text-[9px] sm:text-[10px] font-serif font-medium tracking-wider text-[#8B5E14] block mt-0.5 uppercase">
            {count}
          </span>
        )}
      </div>

    </div>
  );
}
