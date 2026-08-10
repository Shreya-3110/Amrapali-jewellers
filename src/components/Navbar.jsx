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
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
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
      name: 'All Jewellery', 
      icon: Sparkles, 
      link: 'silver',
      subCategories: null 
    },
    { 
      name: 'Gold', 
      icon: Crown, 
      link: 'gold',
      subCategories: [
        { title: '22KT Gold Kadas', link: 'gold' },
        { title: 'Traditional Gold Rani Haar', link: 'gold' },
        { title: 'Gold Jhumka Earrings', link: 'gold' },
        { title: 'Gold Stackable Bangles', link: 'gold' },
        { title: '24KT Pure Laxmi Coins', link: 'gold' },
      ]
    },
    { 
      name: 'Diamond', 
      icon: Gem, 
      link: 'diamond',
      subCategories: [
        { title: 'Solitaire Engagement Rings', link: 'diamond' },
        { title: 'Diamond Drop Dangle Earrings', link: 'diamond' },
        { title: 'Brilliant Diamond Tennis Bracelet', link: 'diamond' },
        { title: 'Diamond & Emerald Halo Necklace', link: 'diamond' },
        { title: 'Cluster Diamond Nose Pins', link: 'diamond' },
      ]
    },
    { 
      name: 'Earrings', 
      icon: CircleDot, 
      link: 'silver',
      subCategories: [
        { title: 'Gold Jhumkas', link: 'gold' },
        { title: 'Diamond Drop Earrings', link: 'diamond' },
        { title: 'Sterling Silver Filigree Studs', link: 'silver' },
        { title: 'Royal Chandbali Earrings', link: 'silver' },
      ]
    },
    { 
      name: 'Rings', 
      icon: Circle, 
      link: 'diamond',
      subCategories: [
        { title: 'Solitaire Engagement Rings', link: 'diamond' },
        { title: 'Pure 925 Silver Bands', link: 'silver' },
        { title: '22KT Gold Cocktail Rings', link: 'gold' },
      ]
    },
    { 
      name: 'Daily Wear', 
      icon: Clock, 
      link: 'new-arrivals',
      subCategories: null 
    },
    { 
      name: 'Gemstone', 
      icon: Gem, 
      link: 'gemstone',
      subCategories: [
        { title: 'Natural Certified Gemstones', link: 'about-us' },
        { title: 'Sacred Rudraksha & Malas', link: 'about-us' },
        { title: 'Emerald & Ruby Heritage Necklaces', link: 'gemstone' },
        { title: 'Navratna Celestial Pendants', link: 'gemstone' },
      ]
    },
    { 
      name: 'Wedding', 
      icon: Heart, 
      link: 'gold',
      subCategories: [
        { title: 'Royal Kundan Collection', link: 'gold' },
        { title: 'Bridal Rani Haar Necklaces', link: 'gold' },
        { title: 'Bhabhi Silver Lumba Sets', link: 'silver' },
        { title: 'Heritage Wedding Jewelry', link: 'gold' },
      ]
    },
    { 
      name: 'Gifting', 
      icon: Gift, 
      link: 'silver',
      subCategories: [
        { title: 'Pure 999 Silver Rakhi Gifts', link: 'silver' },
        { title: '24KT Gold Coins & Bars', link: 'gold' },
        { title: 'Silver Artifacts & Puja Gifts', link: 'silver' },
      ]
    },
    { 
      name: 'About & More', 
      icon: null, 
      link: 'about-us',
      subCategories: [
        { title: 'About Ratna Showroom (Est. 1998)', link: 'about-us' },
        { title: 'Founder: Mr. Sumant Kumar Soni', link: 'about-us' },
        { title: 'What We Offer (7 Collections)', link: 'about-us' },
        { title: 'Our 5 Commitment Pillars', link: 'about-us' },
        { title: 'Flagship Showroom Boutique', link: 'store-location' },
        { title: 'Book Consultation Appointment', link: 'store-location' },
      ]
    },
  ];

  return (
    <nav className="w-full bg-[#FAF7F2] border-b border-amber-900/10 py-2 sticky top-[69px] z-30 shadow-2xs backdrop-blur-md bg-[#FAF7F2]/95">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 relative">
        <ul className="flex items-center justify-between gap-4 sm:gap-6 text-stone-800 text-[11px] font-serif tracking-wider uppercase overflow-x-visible">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const hasSub = item.subCategories && item.subCategories.length > 0;
            const isRightSide = idx >= menuItems.length - 3;

            return (
              <li 
                key={idx} 
                className="shrink-0 relative group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => {
                    if (hasSub) {
                      setActiveDropdown(activeDropdown === idx ? null : idx);
                    } else {
                      scrollToSection(item.link, e);
                    }
                  }}
                  className="flex items-center gap-1.5 hover:text-[#8B5E14] transition-colors py-1 cursor-pointer outline-none relative"
                >
                  {Icon && <Icon className="w-3.5 h-3.5 text-[#8B5E14]/70 group-hover:text-[#8B5E14] stroke-[1.5] transition-colors" />}
                  <span className="whitespace-nowrap">{item.name}</span>
                  {hasSub && (
                    <ChevronDown className={`w-3 h-3 text-amber-800/40 group-hover:text-[#8B5E14] transition-transform duration-300 ${activeDropdown === idx ? 'rotate-180 text-[#8B5E14]' : ''}`} />
                  )}

                  {/* Sleek Underline Accent */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5E14] group-hover:w-full transition-all duration-300 rounded-full" />
                </button>

                {/* Dropdown Menu Container */}
                {hasSub && activeDropdown === idx && (
                  <div className={`absolute top-full mt-1.5 w-64 max-w-[calc(100vw-2rem)] bg-[#1A1614] border border-amber-600/30 rounded-xl p-3.5 shadow-2xl z-50 text-amber-50 animate-in fade-in slide-in-from-top-1 duration-200 backdrop-blur-md ${
                    isRightSide ? 'right-0' : 'left-0'
                  }`}>
                    <div className="text-[9px] font-serif font-bold tracking-[0.2em] text-[#C5A059] uppercase px-3 py-1 border-b border-amber-800/30 mb-2 flex items-center justify-between">
                      <span>{item.name} Series</span>
                      <button 
                        onClick={(e) => scrollToSection(item.link, e)}
                        className="text-[9px] text-amber-300 hover:underline uppercase cursor-pointer"
                      >
                        Explore All →
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
