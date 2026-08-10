import React, { useRef } from 'react';
import CategoryCard from './CategoryCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import gemstoneRef from '../assets/gemstone_cat_reference.png';
import rudrakshaRef from '../assets/rudraksha_cat_reference.png';
import braceletsRef from '../assets/bracelets_cat_reference.png';
import malaRef from '../assets/mala_cat_reference.png';
import ringsRef from '../assets/rings_cat_reference.png';
import recommendationRef from '../assets/recommendation_cat_reference.png';
import crystalProductsRef from '../assets/crystal_products_cat_reference.png';

export default function ShopByCategory({ onOpenRecommendation, onSelectCategory }) {
  const scrollContainerRef = useRef(null);

  const categories = [
    {
      name: 'Gemstone',
      count: '9 Vedic Ratnas',
      image: gemstoneRef,
      filterId: 'Gemstone',
    },
    {
      name: 'Rudraksha',
      count: '1 to 21 Mukhi Beads',
      image: rudrakshaRef,
      filterId: 'Rudraksha',
    },
    {
      name: 'Bracelets',
      count: 'Healing Gemstone Beads',
      image: braceletsRef,
      filterId: 'Bracelets',
    },
    {
      name: 'Mala',
      count: 'Sacred Japa Malas',
      image: malaRef,
      filterId: 'Mala',
    },
    {
      name: 'Rings',
      count: 'Astrological Rings',
      image: ringsRef,
      filterId: 'Rings',
    },
    {
      name: 'Free Gems Recommendation',
      count: 'Kundli & Janampatri',
      image: recommendationRef,
      isSpecial: true,
      onClick: onOpenRecommendation,
    },
    {
      name: 'Crystal Products',
      count: 'Amethyst, Citrine & Pyramids',
      image: crystalProductsRef,
      filterId: 'Crystal Products',
    },
  ];

  const handleCategoryClick = (cat) => {
    if (cat.onClick) {
      cat.onClick();
      return;
    }
    if (cat.filterId && onSelectCategory) {
      onSelectCategory(cat.filterId);
    }
    const gemElem = document.getElementById('gemstone');
    if (gemElem) {
      gemElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="categories-section" className="w-full py-12 bg-[#FAF7F2] border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 pb-3 border-b border-amber-900/15">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] font-serif font-bold tracking-[0.25em] text-[#8B5E14] uppercase block">
                EXPLORE SACRED RATNAS & GEMSTONES
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 bg-amber-500/15 text-[#8B5E14] font-serif rounded-full font-bold">
                <Sparkles className="w-2.5 h-2.5" />
                Govt. & IGI Lab Certified
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1C1917] tracking-tight">
              Featured Ratna & Spiritual Categories
            </h2>
          </div>

          {/* Navigation Controls for Smaller Screens */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 bg-white border border-amber-800/20 rounded-full text-[#8B5E14] hover:bg-amber-100/60 transition-colors shadow-2xs cursor-pointer"
              aria-label="Scroll categories left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 bg-white border border-amber-800/20 rounded-full text-[#8B5E14] hover:bg-amber-100/60 transition-colors shadow-2xs cursor-pointer"
              aria-label="Scroll categories right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Grid - 7 Columns on Large Displays, matching the reference photo */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              name={cat.name}
              count={cat.count}
              image={cat.image}
              isSpecial={cat.isSpecial}
              onClick={() => handleCategoryClick(cat)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
