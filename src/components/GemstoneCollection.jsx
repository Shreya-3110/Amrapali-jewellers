import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Sparkles, ShieldCheck, Gem, Sun, ChevronRight, MessageCircle } from 'lucide-react';
import { useProducts } from '../context/ProductContext';

import gemstoneRef from '../assets/gemstone_cat_reference.png';
import rudrakshaRef from '../assets/rudraksha_cat_reference.png';
import braceletsRef from '../assets/bracelets_cat_reference.png';
import malaRef from '../assets/mala_cat_reference.png';
import ringsRef from '../assets/rings_cat_reference.png';
import crystalProductsRef from '../assets/crystal_products_cat_reference.png';

export default function GemstoneCollection({ onOpenRecommendation }) {
  const { products } = useProducts();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = [
    { id: 'All', label: 'All Sacred Ratnas & Gems' },
    { id: 'Gemstone', label: '9 Vedic Ratnas' },
    { id: 'Rudraksha', label: 'Sacred Rudraksha' },
    { id: 'Bracelets', label: 'Healing Bracelets' },
    { id: 'Mala', label: 'Japa Malas' },
    { id: 'Rings', label: 'Astrological Rings' },
    { id: 'Crystal Products', label: 'Crystal Products' },
  ];

  const filteredProducts = selectedFilter === 'All'
    ? products.filter(p => ['Gemstone', 'Rudraksha', 'Bracelets', 'Mala', 'Rings', 'Crystal Products'].includes(p.category))
    : products.filter(p => p.category === selectedFilter);

  return (
    <section id="gemstone" className="w-full py-16 bg-[#FAF7F2] border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Section Header with Vedic Certification Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-amber-900/15 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[9px] font-serif font-bold tracking-[0.3em] text-[#8B5E14] uppercase block">
                AUTHENTIC VEDIC RATNA ATELIER • EST. 1998
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] px-2.5 py-0.5 bg-amber-500/15 text-[#8B5E14] font-serif rounded-full font-bold">
                <ShieldCheck className="w-3 h-3" />
                Govt. & IGI Certified Unheated
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1C1917] tracking-tight">
              Precious Gemstones & Sacred Ratna Collection
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-serif italic mt-1.5 max-w-2xl">
              Govt. Lab Certified unheated Ceylon Sapphires, Colombian Emeralds, Burmese Rubies, Nepali Rudraksha beads, and energy healing crystals.
            </p>
          </div>

          {/* Quick Consultation CTA */}
          <button
            onClick={onOpenRecommendation}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8B5E14] hover:from-[#A87928] hover:to-[#724B0D] text-white text-xs font-serif font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Kundli Gem Recommendation</span>
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-serif tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#8B5E14] text-amber-50 font-bold shadow-md border border-[#8B5E14]'
                  : 'bg-white text-stone-700 hover:bg-amber-100/60 border border-amber-900/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>

        {/* Bottom Astrological Trust Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-amber-800/15 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center text-[#8B5E14] shrink-0 border border-amber-600/30">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900">
                100% Astrologically Energized & Prana Pratishtha Consecrated
              </h4>
              <p className="text-xs text-stone-600 font-serif mt-0.5">
                Every gemstone and Rudraksha can be energized with Vedic mantras for your specific Rashi, Nakshatra, and Gotra before dispatch or showroom pickup.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919412288300?text=Namaste!%20I%20would%20like%20to%20inquire%20about%20energized%20Vedic%20gemstones%20and%20lab%20certificates."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-serif font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consult Gemologist</span>
          </a>
        </div>

      </div>
    </section>
  );
}
