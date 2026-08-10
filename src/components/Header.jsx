import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, MapPin, X, Camera, Mic, Sparkles } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function Header({ onOpenWishlist }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { wishlistItems } = useWishlist();

  return (
    <header className="w-full bg-[#FAF7F2] border-b border-amber-900/10 sticky top-0 z-40 backdrop-blur-md bg-[#FAF7F2]/95 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-12 py-3.5">
        
        {/* Main Unified Luxury Header Row */}
        <div className="flex items-center justify-between gap-6">
          
          {/* Left: Minimal Editorial Links */}
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-serif tracking-[0.25em] text-[#1C1917] uppercase">
            <a href="#collections" className="hover:text-[#8B5E14] transition-colors relative group py-1">
              <span>COLLECTIONS</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5E14] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#bespoke" className="hover:text-[#8B5E14] transition-colors relative group py-1">
              <span>BESPOKE</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5E14] group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#gold" className="hover:text-[#8B5E14] transition-colors relative group py-1">
              <span>HIGH JEWELLERY</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5E14] group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Center: Iconic Amrapali High-Serif Typography */}
          <div className="text-center shrink-0 mx-auto lg:mx-0">
            <a href="#" className="inline-block group py-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-[0.38em] font-light text-[#1C1917] uppercase group-hover:text-[#8B5E14] transition-colors leading-none">
                A M R A P A L L I
              </h1>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="h-px w-6 bg-amber-800/30" />
                <span className="text-[8px] sm:text-[9px] font-serif tracking-[0.3em] text-[#8B5E14] uppercase font-bold">
                  RATNA SHOWROOM
                </span>
                <span className="h-px w-6 bg-amber-800/30" />
              </div>
            </a>
          </div>

          {/* Right: Modern Minimalist Utilities & Search */}
          <div className="flex items-center gap-5 sm:gap-7 text-[11px] font-serif tracking-widest text-[#1C1917] uppercase shrink-0">
            
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center gap-1.5 hover:text-[#8B5E14] transition-colors cursor-pointer"
              title="Search Collections"
            >
              <Search className="w-4 h-4 stroke-[1.5]" />
              <span className="hidden xl:inline">SEARCH</span>
            </button>

            {/* Our Story Link */}
            <a 
              href="#about-us" 
              className="hidden md:flex items-center gap-1.5 hover:text-[#8B5E14] transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8B5E14] stroke-[1.5]" />
              <span className="hidden sm:inline">OUR STORY</span>
            </a>

            {/* Dynamic Wishlist Action */}
            <button
              onClick={onOpenWishlist}
              className="flex items-center gap-1.5 hover:text-[#8B5E14] transition-colors cursor-pointer relative group"
              title="View Wishlist"
            >
              <Heart className={`w-4 h-4 stroke-[1.5] ${wishlistItems.length > 0 ? 'text-[#8B5E14] fill-[#8B5E14]' : ''}`} />
              <span className="hidden sm:inline">WISHLIST</span>
              <span className="text-[#8B5E14] font-bold">({wishlistItems.length})</span>
            </button>

            {/* Bag Button */}
            <button className="flex items-center gap-1.5 hover:text-[#8B5E14] transition-colors cursor-pointer">
              <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
              <span className="hidden sm:inline">BAG</span>
              <span className="text-[#8B5E14] font-bold">(0)</span>
            </button>

          </div>

        </div>

        {/* Expandable Sleek Minimalist Luxury Search Bar */}
        {isSearchOpen && (
          <div className="pt-3 pb-1 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="relative flex items-center bg-white/90 border border-amber-800/30 rounded-full px-5 py-2.5 shadow-lg focus-within:border-[#8B5E14] focus-within:ring-2 focus-within:ring-[#8B5E14]/10 transition-all">
              <Search className="w-4 h-4 text-amber-800/70 shrink-0 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search 22kt gold necklace, solitaire rings, pure silver rakhis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm bg-transparent outline-none text-[#1C1917] placeholder-stone-400 font-serif"
              />
              
              <div className="flex items-center gap-2.5 text-amber-800/60 shrink-0 ml-2 border-l border-amber-900/15 pl-3">
                <button className="p-1 hover:text-[#8B5E14] transition-colors" title="Visual Search">
                  <Camera className="w-4 h-4" />
                </button>
                <button className="p-1 hover:text-[#8B5E14] transition-colors" title="Voice Search">
                  <Mic className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsSearchOpen(false)} 
                  className="p-1 hover:text-stone-900 transition-colors ml-1 text-stone-400"
                  title="Close Search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
