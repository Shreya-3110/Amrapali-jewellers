import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function HorizontalCollection({ title, badge, subtitle, items, id }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={id} className="w-full py-10 bg-[#FAF7F2] border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-6 pb-3 border-b border-amber-900/15">
          <div>
            {badge && (
              <span className="text-[9px] font-serif font-bold tracking-widest text-[#8B5E14] uppercase block mb-0.5">
                {badge}
              </span>
            )}
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs text-stone-600 mt-0.5 font-serif italic">
                {subtitle}
              </p>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-1.5 bg-white border border-amber-800/20 rounded-full text-[#8B5E14] hover:bg-amber-100/50 transition-colors shadow-2xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-1.5 bg-white border border-amber-800/20 rounded-full text-[#8B5E14] hover:bg-amber-100/50 transition-colors shadow-2xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Container */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 overflow-x-auto scrollbar-none pb-2 snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((prod, idx) => (
            <div key={idx} className="min-w-[240px] sm:min-w-[260px] max-w-[260px] snap-start flex-shrink-0">
              <ProductCard {...prod} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
