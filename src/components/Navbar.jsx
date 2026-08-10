import React, { useState } from 'react';
import { 
  Sparkles, 
  Crown, 
  Gem, 
  CircleDot, 
  Circle, 
  Clock, 
  Heart, 
  Gift, 
  Sun,
  Layers,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ onOpenRecommendation }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const scrollToSection = (targetId, e) => {
    if (e) e.preventDefault();
    setActiveDropdown(null);
    const cleanId = targetId.replace('#', '');
    const elem = document.getElementById(cleanId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  const menuItems = [
    { 
      name: 'Gemstones (Ratnas)', 
      icon: Gem, 
      link: 'gemstone',
      subCategories: [
        { title: 'Yellow Sapphire (Pukhraj)', link: 'gemstone' },
        { title: 'Blue Sapphire (Neelam)', link: 'gemstone' },
        { title: 'Colombian Emerald (Panna)', link: 'gemstone' },
        { title: 'Burmese Ruby (Manik)', link: 'gemstone' },
        { title: 'South Sea Pearl (Moti)', link: 'gemstone' },
        { title: 'Italian Red Coral (Moonga)', link: 'gemstone' },
        { title: 'Hessonite & Cat’s Eye (Gomed/Lehsuniya)', link: 'gemstone' },
        { title: 'Natural Australian Opal', link: 'gemstone' },
      ]
    },
    { 
      name: 'Rudraksha & Malas', 
      icon: Sun, 
      link: 'gemstone',
      subCategories: [
        { title: '1 to 21 Mukhi Authentic Nepali Beads', link: 'gemstone' },
        { title: '1-14 Mukhi Sarva Siddha Mala', link: 'gemstone' },
        { title: 'Sacred Gauri Shankar Rudraksha', link: 'gemstone' },
        { title: '108 Pure Sphatik (Quartz) Japa Mala', link: 'gemstone' },
        { title: 'Red Sandalwood (Rakt Chandan) Mala', link: 'gemstone' },
      ]
    },
    { 
      name: 'Healing Bracelets', 
      icon: CircleDot, 
      link: 'gemstone',
      subCategories: [
        { title: 'Golden Tiger Eye Energy Bracelet', link: 'gemstone' },
        { title: 'Rose Quartz Love & Compassion Bracelet', link: 'gemstone' },
        { title: 'Lapis Lazuli Wisdom Bracelet', link: 'gemstone' },
        { title: '7 Chakra Harmony Healing Bracelet', link: 'gemstone' },
        { title: 'Pyrite Wealth Magnet Bracelet', link: 'gemstone' },
      ]
    },
    { 
      name: 'Astrological Rings', 
      icon: Circle, 
      link: 'gemstone',
      subCategories: [
        { title: '22KT Gold Pukhraj Rings', link: 'gemstone' },
        { title: '925 Pure Silver Neelam Rings', link: 'gemstone' },
        { title: 'Sacred 5-Metal Panchdhatu Panna Rings', link: 'gemstone' },
        { title: 'Custom Vedic Open-Back Rings', link: 'gemstone' },
      ]
    },
    { 
      name: 'Crystal Products', 
      icon: Sparkles, 
      link: 'gemstone',
      subCategories: [
        { title: 'Raw Amethyst Geodes & Clusters', link: 'gemstone' },
        { title: 'Golden Citrine Wealth Towers', link: 'gemstone' },
        { title: 'Clear Quartz Vastu Energy Pyramids', link: 'gemstone' },
        { title: '7 Chakra Tumbled Stone Energy Set', link: 'gemstone' },
      ]
    },
    { 
      name: 'Free Gems Recommendation', 
      icon: Sparkles, 
      isAction: true,
      action: onOpenRecommendation,
      subCategories: null 
    },
    { 
      name: 'Showroom Gold & Silver', 
      icon: Crown, 
      link: 'showroom-exclusive',
      subCategories: [
        { title: '22KT & 24KT BIS Hallmarked Gold', link: 'showroom-exclusive' },
        { title: 'IGI Certified Diamond Solitaires', link: 'showroom-exclusive' },
        { title: '925 Sterling Silver Rakhis & Utensils', link: 'showroom-exclusive' },
        { title: 'Book Showroom Visit in Bhopal', link: 'store-location' },
      ]
    },
    { 
      name: 'About Showroom', 
      icon: null, 
      link: 'about-us',
      subCategories: [
        { title: 'About Ratna Showroom (Est. 1998)', link: 'about-us' },
        { title: 'Founder: Mr. Sumant Kumar Soni', link: 'about-us' },
        { title: 'Our 5 Commitment Pillars', link: 'about-us' },
        { title: 'Flagship Showroom Boutique', link: 'store-location' },
      ]
    },
  ];

  return (
    <nav className="w-full bg-[#FAF7F2] border-b border-amber-900/10 py-2 sticky top-[69px] z-30 shadow-2xs backdrop-blur-md bg-[#FAF7F2]/95">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        <ul className="flex items-center justify-between gap-3 sm:gap-5 text-stone-800 text-[11px] font-serif tracking-wider uppercase overflow-x-auto scrollbar-none py-0.5">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const hasSub = item.subCategories && item.subCategories.length > 0;
            const isRightSide = idx >= menuItems.length - 3;
            const isRecommendation = item.isAction;

            return (
              <li 
                key={idx} 
                className="shrink-0 relative group"
                onMouseEnter={() => !item.isAction && setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => {
                    if (item.isAction && item.action) {
                      item.action();
                    } else if (hasSub) {
                      setActiveDropdown(activeDropdown === idx ? null : idx);
                    } else {
                      scrollToSection(item.link, e);
                    }
                  }}
                  className={`flex items-center gap-1.5 transition-colors py-1 cursor-pointer outline-none relative ${
                    isRecommendation 
                      ? 'text-[#8B5E14] font-bold bg-amber-500/15 px-2.5 py-1 rounded-full hover:bg-amber-500/25 border border-amber-600/30' 
                      : 'hover:text-[#8B5E14]'
                  }`}
                >
                  {Icon && <Icon className={`w-3.5 h-3.5 ${isRecommendation ? 'text-[#8B5E14]' : 'text-[#8B5E14]/70 group-hover:text-[#8B5E14]'} stroke-[1.5] transition-colors`} />}
                  <span className="whitespace-nowrap">{item.name}</span>
                  {hasSub && (
                    <ChevronDown className={`w-3 h-3 text-amber-800/40 group-hover:text-[#8B5E14] transition-transform duration-300 ${activeDropdown === idx ? 'rotate-180 text-[#8B5E14]' : ''}`} />
                  )}

                  {!isRecommendation && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5E14] group-hover:w-full transition-all duration-300 rounded-full" />
                  )}
                </button>

                {/* Dropdown Menu Container */}
                {hasSub && activeDropdown === idx && (
                  <div className={`absolute top-full mt-1.5 w-64 max-w-[calc(100vw-2rem)] bg-[#1A1614] border border-amber-600/30 rounded-xl p-3.5 shadow-2xl z-50 text-amber-50 animate-in fade-in slide-in-from-top-1 duration-200 backdrop-blur-md ${
                    isRightSide ? 'right-0' : 'left-0'
                  }`}>
                    <div className="text-[9px] font-serif font-bold tracking-[0.2em] text-[#C5A059] uppercase px-3 py-1 border-b border-amber-800/30 mb-2 flex items-center justify-between">
                      <span>{item.name}</span>
                      <button 
                        onClick={(e) => scrollToSection(item.link, e)}
                        className="text-[9px] text-amber-300 hover:underline uppercase cursor-pointer"
                      >
                        View All →
                      </button>
                    </div>

                    <div className="space-y-1">
                      {item.subCategories.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={(e) => scrollToSection(sub.link, e)}
                          className="w-full text-left flex items-center justify-between px-3 py-2 text-xs font-serif hover:bg-[#8B5E14] hover:text-white rounded-lg transition-colors group/sub cursor-pointer"
                        >
                          <span>{sub.title}</span>
                          <ArrowRight className="w-3 h-3 text-amber-400 group-hover/sub:text-white opacity-0 group-hover/sub:opacity-100 transition-opacity shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
