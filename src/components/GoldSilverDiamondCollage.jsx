import React from 'react';
import { Crown, Gem, Sparkles, Layers, MapPin, PhoneCall, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import goldSilverDiamondCollage from '../assets/gold_silver_diamond_collage.png';
import goldCat from '../assets/gold_cat.png';
import diamondCat from '../assets/diamond_cat.png';
import silverCoinsCat from '../assets/silver_coins_cat.png';

export default function GoldSilverDiamondCollage() {
  const showroomHighlights = [
    {
      title: "22KT BIS Hallmarked Gold",
      purity: "91.6% Pure Gold • HUID Stamped",
      desc: "Traditional bridal Rani Haars, handcrafted temple chokers, lightweight chains, and solid gold kadas.",
      icon: Crown,
      badge: "BIS HALLMARKED",
      image: goldCat,
    },
    {
      title: "IGI Graded Natural Diamonds",
      purity: "VVS-VS Clarity • EF Color Certified",
      desc: "Solitaire rings, diamond bridal necklaces, halo pendant sets, and brilliant diamond tennis bracelets.",
      icon: Gem,
      badge: "IGI CERTIFIED",
      image: diamondCat,
    },
    {
      title: "925 Pure Sterling Silver & Utensils",
      purity: "92.5% Sterling Hallmark & 999 Pure Silver",
      desc: "Handcrafted silver jewellery, festive silver rakhis, pure silver dining thalis, and sacred puja artifacts.",
      icon: Layers,
      badge: "925 HALLMARK",
      image: silverCoinsCat,
    },
  ];

  const handleBookVisit = () => {
    const text = encodeURIComponent(
      "Namaste Amrapali Jewellers! 🏛️\n\nI would like to schedule a personal showroom visit at your Bhopal Flagship Boutique (10 No. Market, Arera Colony) to explore Gold, Diamond, and Silver Collections.\n\nPlease share available consultation slots."
    );
    window.open(`https://wa.me/919412288300?text=${text}`, '_blank');
  };

  return (
    <section id="showroom-exclusive" className="w-full py-16 sm:py-20 bg-[#FAF7F2] border-b border-amber-900/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[9px] sm:text-[10px] font-serif font-bold tracking-[0.3em] text-[#8B5E14] uppercase block mb-2">
            AMRAPALI JEWELLERS FLAGSHIP BOUTIQUE • BHOPAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1C1917] tracking-tight">
            Gold, Diamond & Silver Showroom Showcase
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-serif italic mt-2.5 leading-relaxed">
            While our digital portal specializes in Vedic Ratnas & Gemstones, our flagship boutique in Arera Colony, Bhopal offers an exquisite spectrum of BIS Hallmarked Gold, IGI Diamonds, and Pure 925 Silver. Walk in or book a private viewing.
          </p>
        </div>

        {/* Master Showcase Grid: Left Collage / Right Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Collage with Boutique Badge (7 Cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="w-full rounded-3xl overflow-hidden border-2 border-amber-800/20 shadow-2xl bg-white p-2 relative">
              <img
                src={goldSilverDiamondCollage}
                alt="Gold, Silver and Diamond Collection Collage"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1C1917]/90 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4 sm:p-5 text-amber-50 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                    EXCLUSIVE IN-STORE EXPERIENCE
                  </span>
                  <h3 className="text-sm sm:text-lg font-serif font-medium text-white mt-0.5">
                    Bhopal Flagship Showroom • Open 7 Days A Week
                  </h3>
                  <p className="text-[11px] text-stone-300 font-serif">
                    10 No. Market, Beside Manohar Dairy, Arera Colony, Bhopal (M.P.)
                  </p>
                </div>

                <button
                  onClick={handleBookVisit}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8B5E14] hover:from-[#A87928] hover:to-[#724B0D] text-white text-xs font-serif font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Book Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Category Highlight Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {showroomHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-amber-800/15 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#8B5E14] transition-all duration-300 group flex items-start gap-4"
                >
                  {/* Thumbnail / Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-amber-600/30 p-0.5 bg-[#FAF7F2] shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[9px] font-serif font-bold tracking-widest text-[#8B5E14] uppercase">
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-mono text-stone-500">
                        {item.purity}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-serif font-bold text-[#1C1917] group-hover:text-[#8B5E14] transition-colors leading-tight">
                      {item.title}
                    </h4>

                    <p className="text-xs text-stone-600 font-serif leading-relaxed mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Direct Assistance Bar */}
            <div className="bg-gradient-to-r from-[#8B5E14]/10 via-amber-500/10 to-[#8B5E14]/10 border border-amber-800/20 rounded-2xl p-4 flex items-center justify-between gap-3 text-xs font-serif text-stone-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8B5E14] shrink-0" />
                <span>100% Purity Guarantee & Lifetime Exchange</span>
              </div>
              <a
                href="tel:+919412288300"
                className="text-[#8B5E14] font-bold hover:underline shrink-0 flex items-center gap-1"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
