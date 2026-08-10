import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

import antiqueOm from '../assets/AntiqueOm.jpeg';
import rakhi2 from '../assets/2.jpeg';
import rakhi3 from '../assets/3.jpeg';
import lionRakhi from '../assets/Lion.jpeg';
import deviRakhi from '../assets/Devi.jpeg';
import rakhi6 from '../assets/6.jpeg';
import rakhi7 from '../assets/7.jpeg';
import rakhi8 from '../assets/8.jpeg';
import rakhi9 from '../assets/9.jpeg';
import rakhi10 from '../assets/10.jpeg';
import rakhi11 from '../assets/11.jpeg';

import goldCat from '../assets/gold_cat.png';
import diamondCat from '../assets/diamond_cat.png';
import gemstonesCat from '../assets/gemstones_cat.png';
import bridalCat from '../assets/bridal_cat.png';
import mensCat from '../assets/mens_cat.png';
import silverCoinsCat from '../assets/silver_coins_cat.png';

export default function ShopByCategory() {
  const [activeTab, setActiveTab] = useState('departments'); // 'departments' | 'rakhi'

  const mainDepartments = [
    { name: 'Pure Silver Rakhis', count: '450+ Festive Designs', image: antiqueOm },
    { name: 'Gold Jewellery', count: '850+ 22KT BIS Hallmarked', image: goldCat },
    { name: 'Diamond Collection', count: '320+ Solitaires & Rings', image: diamondCat },
    { name: 'Precious Gemstones', count: '280+ Emerald & Ruby', image: gemstonesCat },
    { name: 'Bridal & Heritage', count: '210+ Wedding Sets', image: bridalCat },
    { name: 'Men’s Collection', count: '180+ Kadas & Chains', image: mensCat },
    { name: 'Silver Coins & Puja Gifts', count: '120+ Pure 999 Coins', image: silverCoinsCat },
  ];

  const rakhiVarieties = [
    { name: 'Antique Om Silver Rakhis', count: '450+ Designs', image: antiqueOm },
    { name: 'Peacock Silver Rakhis', count: '620+ Designs', image: rakhi2 },
    { name: 'Divine Ganesha Rakhis', count: '310+ Designs', image: rakhi3 },
    { name: 'Royal Lion Silver Rakhis', count: '280+ Designs', image: lionRakhi },
    { name: 'Divine Devi Silver Rakhis', count: '390+ Designs', image: deviRakhi },
    { name: 'Silver Filigree Rakhis', count: '240+ Designs', image: rakhi6 },
    { name: 'Thread & Bead Rakhis', count: '180+ Designs', image: rakhi7 },
    { name: 'Designer Lumba Rakhis', count: '150+ Designs', image: rakhi8 },
    { name: 'Kundan Silver Rakhis', count: '90+ Designs', image: rakhi9 },
    { name: 'Royal Pattern Silver Rakhis', count: '210+ Designs', image: rakhi10 },
    { name: 'Artisanal Silver Rakhis', count: '500+ Designs', image: rakhi11 },
  ];

  const displayedCategories = activeTab === 'departments' ? mainDepartments : rakhiVarieties;

  return (
    <section className="w-full py-12 bg-[#FAF7F2] border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-3 border-b border-amber-900/15 gap-4">
          <div>
            <span className="text-[9px] font-serif font-bold tracking-[0.2em] text-[#8B5E14] uppercase block mb-1">
              EXPLORE AMRAPALI COLLECTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1C1917] tracking-tight">
              Timeless Elegance For Every Occasion
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('departments')}
              className={`px-5 py-2 text-xs font-serif tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'departments'
                  ? 'bg-[#8B5E14] text-amber-50 shadow-md border border-[#8B5E14]'
                  : 'bg-white text-stone-700 hover:bg-amber-100/60 border border-amber-900/15'
              }`}
            >
              Main Jewellery Categories
            </button>

            <button
              onClick={() => setActiveTab('rakhi')}
              className={`px-5 py-2 text-xs font-serif tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'rakhi'
                  ? 'bg-[#8B5E14] text-amber-50 shadow-md border border-[#8B5E14]'
                  : 'bg-white text-stone-700 hover:bg-amber-100/60 border border-amber-900/15'
              }`}
            >
              Silver Rakhi Varieties
            </button>
          </div>
        </div>

        {/* Categories Grid - 7 Columns on Large Screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5">
          {displayedCategories.map((category, idx) => (
            <CategoryCard key={idx} name={category.name} count={category.count} image={category.image} />
          ))}
        </div>

      </div>
    </section>
  );
}
