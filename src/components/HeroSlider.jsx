import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  X, 
  ShieldCheck, 
  Sparkles,
  Phone,
  Globe,
  MapPin,
  Gem,
  Crown,
  HeartHandshake
} from 'lucide-react';

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
import bridalHero from '../assets/bridal_hero.png';
import mosaicJewelry from '../assets/mosaic_jewelry.png';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rakhiIndex, setRakhiIndex] = useState(0);
  const [chatWidgetOpen, setChatWidgetOpen] = useState(true);

  const totalSlides = 4;

  const rakhis = [
    {
      brandTag: "AUSPICIOUS OM COLLECTION",
      titleLine1: "Antique Om",
      titleLine2: "Silver Rakhi",
      subtitle: "Sacred Om Motifs Handcrafted in Pure 925 Sterling Silver",
      cta: "EXPLORE OM RAKHI",
      image: antiqueOm,
      badge: "LIMITED EDITION"
    },
    {
      brandTag: "HERITAGE CRAFTSMANSHIP",
      titleLine1: "Royal Peacock",
      titleLine2: "Silver Rakhi",
      subtitle: "Intricate Peacock Motif Handcrafted in Pure 925 Silver",
      cta: "EXPLORE SHOWCASE",
      image: rakhi2,
      badge: "FESTIVE FEATURED"
    },
    {
      brandTag: "DIVINE GANESHA COLLECTION",
      titleLine1: "Divine Ganesha",
      titleLine2: "Silver Rakhi",
      subtitle: "Sacred Traditional Motifs for Brotherly Bond",
      cta: "EXPLORE SHOWCASE",
      image: rakhi3,
      badge: "PURE 925 STERLING"
    },
    {
      brandTag: "REGAL SIMHA EDITION",
      titleLine1: "Royal Lion",
      titleLine2: "Silver Rakhi",
      subtitle: "Handcrafted 925 Sterling Silver Royal Lion Motif",
      cta: "EXPLORE SHOWCASE",
      image: lionRakhi,
      badge: "SHOWROOM EXCLUSIVE"
    },
    {
      brandTag: "DIVINE DEVI GODDESS EDITION",
      titleLine1: "Divine Devi",
      titleLine2: "Silver Rakhi",
      subtitle: "Auspicious Goddess Motif in Pure Sterling Silver",
      cta: "EXPLORE SHOWCASE",
      image: deviRakhi,
      badge: "RATNA CRAFT"
    },
    {
      brandTag: "FILIGREE ARTISTRY",
      titleLine1: "Silver Filigree",
      titleLine2: "Designer Rakhi",
      subtitle: "Exquisite Intricate Wire Work in Pure 925 Silver",
      cta: "EXPLORE SHOWCASE",
      image: rakhi6,
      badge: "HANDCRAFTED"
    },
    {
      brandTag: "THREAD & BEAD CRAFT",
      titleLine1: "Handcrafted Silver",
      titleLine2: "Thread Rakhi",
      subtitle: "Elegant Silk Thread Accented with Pure Silver",
      cta: "EXPLORE SHOWCASE",
      image: rakhi7,
      badge: "SILK THREAD CRAFT"
    },
    {
      brandTag: "FLORAL LUMBA COLLECTION",
      titleLine1: "Designer Silver",
      titleLine2: "Bhabhi Lumba",
      subtitle: "Exquisite Bhabhi Lumba & Rakhi Set",
      cta: "EXPLORE SHOWCASE",
      image: rakhi8,
      badge: "LUMBA PAIR"
    },
    {
      brandTag: "ROYAL KUNDAN COLLECTION",
      titleLine1: "Kundan Silver",
      titleLine2: "Heritage Rakhi",
      subtitle: "Heritage Gemstone & Pure Silver Craftsmanship",
      cta: "EXPLORE SHOWCASE",
      image: rakhi9,
      badge: "KUNDAN GEMSTONE"
    },
    {
      brandTag: "ROYAL PATTERN COLLECTION",
      titleLine1: "Pure Silver",
      titleLine2: "Royal Rakhi",
      subtitle: "Auspicious Laxmi & Ganesha Pure Silver Rakhi",
      cta: "EXPLORE SHOWCASE",
      image: rakhi10,
      badge: "AUSPICIOUS PATTERN"
    },
    {
      brandTag: "ARTISANAL BEADED COLLECTION",
      titleLine1: "Artisanal Silver",
      titleLine2: "Beaded Rakhi",
      subtitle: "Hand-beaded 925 Sterling Silver Masterpiece",
      cta: "EXPLORE SHOWCASE",
      image: rakhi11,
      badge: "ARTISANAL MASTERPIECE"
    }
  ];

  const currentRakhi = rakhis[rakhiIndex];

  const nextRakhi = (e) => {
    if (e) e.stopPropagation();
    setRakhiIndex((prev) => (prev + 1) % rakhis.length);
  };

  const prevRakhi = (e) => {
    if (e) e.stopPropagation();
    setRakhiIndex((prev) => (prev - 1 + rakhis.length) % rakhis.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-6 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        
        {/* Main Hero Banner Container */}
        <div className="w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] rounded-3xl overflow-hidden relative shadow-2xl transition-all duration-700">
          
          {/* Navigation Circular Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-stone-900/80 border border-amber-500/40 text-amber-100 flex items-center justify-center shadow-xl hover:bg-[#8B5E14] hover:scale-110 transition-all cursor-pointer"
            aria-label="Previous Banner Slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-stone-900/80 border border-amber-500/40 text-amber-100 flex items-center justify-center shadow-xl hover:bg-[#8B5E14] hover:scale-110 transition-all cursor-pointer"
            aria-label="Next Banner Slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[2]" />
          </button>

          {/* SLIDE 1: Interactive 11-Rakhi Cycling Showcase */}
          {currentSlide === 0 && (
            <div className="w-full h-full min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] bg-gradient-to-r from-[#1C1917] via-[#26201B] to-[#1C1917] border border-amber-700/30 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 animate-in fade-in duration-500">
              
              {/* Left Content Column */}
              <div className="w-full md:w-[48%] space-y-5 z-10 pr-0 md:pr-4">
                <span className="text-[10px] sm:text-xs font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                  {currentRakhi.brandTag}
                </span>

                <h1 className="text-4xl sm:text-6xl font-serif font-light text-amber-50 tracking-tight leading-[1.1]">
                  <span className="block">{currentRakhi.titleLine1}</span>
                  <span className="block font-normal text-white">{currentRakhi.titleLine2}</span>
                </h1>

                <p className="text-sm sm:text-base font-serif text-stone-300 max-w-md font-light leading-relaxed">
                  {currentRakhi.subtitle}
                </p>

                {/* Ultra-Elegant Outlined Ghost Luxury Button */}
                <div className="pt-3">
                  <a 
                    href="#silver"
                    className="inline-block border border-white/80 bg-stone-900/30 backdrop-blur-xs text-white uppercase tracking-[0.25em] font-serif text-xs px-8 py-3.5 hover:bg-white hover:text-stone-900 transition-all duration-500 cursor-pointer shadow-sm"
                  >
                    EXPLORE JEWELRY
                  </a>
                </div>

                {/* Clean Vector Badges (No raw emojis) */}
                <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-amber-900/30 text-[11px] text-stone-300 font-serif">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border border-amber-500/40 flex items-center justify-center text-[9px] font-mono font-bold text-[#C5A059]">
                      925
                    </div>
                    <div>
                      <span className="font-bold text-amber-100 block leading-tight">925</span>
                      <span className="text-stone-400 text-[10px]">Sterling Silver</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-900/30 border border-amber-500/40 flex items-center justify-center text-[#C5A059]">
                      <HeartHandshake className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-amber-100 block leading-tight">Handcrafted</span>
                      <span className="text-stone-400 text-[10px]">with Care</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-amber-900/30 border border-amber-500/40 flex items-center justify-center text-[#C5A059]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-amber-100 block leading-tight">Tarnish</span>
                      <span className="text-stone-400 text-[10px]">Resistant</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Cutout Container (Tap Image to Cycle 11 Rakhis) */}
              <div 
                onClick={nextRakhi}
                className="w-full md:w-[50%] h-[280px] sm:h-[380px] lg:h-[420px] relative mt-6 md:mt-0 flex items-center justify-end group cursor-pointer"
                title="Tap Rakhi image to view next design"
              >
                {/* Gold Arch Frame */}
                <div className="absolute inset-0 rounded-2xl md:rounded-l-[120px] border-2 border-amber-600/40 bg-[#FAF7F2] p-1.5 shadow-2xl overflow-hidden">
                  <img
                    src={currentRakhi.image}
                    alt={currentRakhi.titleLine1}
                    className="w-full h-full object-cover rounded-xl md:rounded-l-[110px] group-hover:scale-108 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay Prompt */}
                  <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="border border-white/90 bg-stone-900/70 text-white text-xs font-serif uppercase tracking-widest px-5 py-2.5 shadow-2xl">
                      Tap to Cycle Design →
                    </span>
                  </div>
                </div>

                {/* Rakhi Counter & Tap Prompt Badge */}
                <div className="absolute top-4 right-4 z-20 bg-stone-900/90 border border-amber-500/40 text-amber-100 text-[10px] font-serif font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                  <span>Rakhi Design {rakhiIndex + 1} of 11</span>
                </div>

                {/* Mini Image Controls */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <button
                    onClick={prevRakhi}
                    className="w-8 h-8 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-100 flex items-center justify-center hover:bg-[#8B5E14] transition-colors"
                    title="Previous Rakhi Design"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextRakhi}
                    className="w-8 h-8 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-100 flex items-center justify-center hover:bg-[#8B5E14] transition-colors"
                    title="Next Rakhi Design"
                  >
                    ›
                  </button>
                </div>

                {/* Limited Edition Pill Badge */}
                <div className="absolute bottom-4 right-4 z-20 bg-stone-900/85 backdrop-blur-md border border-amber-500/40 text-amber-100 text-[10px] sm:text-xs font-serif font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{currentRakhi.badge}</span>
                </div>
              </div>

            </div>
          )}

          {/* SLIDE 2: Modern Hexagonal Mosaic Collage Showcase (Liceria & Co. Style) */}
          {currentSlide === 1 && (
            <div className="w-full h-full min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] bg-gradient-to-r from-[#FDFBF7] via-[#F8F1E7] to-[#F3E7D7] border border-amber-800/20 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden animate-in fade-in duration-500">
              
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#8B5E14_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="w-full md:w-[50%] space-y-4 z-10 pr-0 md:pr-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-serif font-bold tracking-[0.3em] text-[#8B5E14] uppercase">
                    AMRAPALI & CO. RATNA SHOWROOM
                  </span>
                </div>

                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] tracking-wider uppercase block">
                    NEW ARRIVAL
                  </span>
                  <h2 className="text-4xl sm:text-6xl font-serif italic font-normal text-[#8B5E14] tracking-tight leading-none mt-1">
                    Shine bright
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 font-serif max-w-md">
                  Rings, necklaces and keepsakes crafted with care.
                </p>

                {/* Ultra-Elegant Outlined Ghost Luxury Button */}
                <div className="pt-2">
                  <a
                    href="#silver"
                    className="inline-block border border-[#8B5E14] bg-white/40 text-[#8B5E14] hover:bg-[#8B5E14] hover:text-white uppercase tracking-[0.25em] font-serif text-xs px-8 py-3.5 transition-all duration-500 shadow-sm"
                  >
                    EXPLORE JEWELRY
                  </a>
                </div>

                <div className="pt-4 text-[10px] font-mono text-stone-500 space-y-0.5 border-t border-amber-900/10">
                  <p>Ratna Showroom, Main Market • Tel: 1800-123-4567</p>
                  <p className="text-[#8B5E14] font-bold">www.amrapalijewellers.com</p>
                </div>
              </div>

              <div className="w-full md:w-[48%] h-[320px] sm:h-[400px] lg:h-[440px] relative mt-6 md:mt-0 flex items-center justify-center">
                <div className="absolute -top-2 left-4 z-20 w-24 h-24 rounded-full bg-white border-2 border-amber-700/30 p-1 shadow-xl flex items-center justify-center text-center animate-spin-slow">
                  <div className="w-full h-full rounded-full border border-dashed border-[#8B5E14] flex flex-col items-center justify-center text-[8px] font-serif font-bold text-[#8B5E14] leading-tight uppercase">
                    <span>✦ NEW ✦</span>
                    <span className="text-[12px] my-0.5">✦</span>
                    <span>NEW</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 w-full h-full max-w-md">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-amber-600/30 shadow-md group">
                    <img 
                      src={mosaicJewelry} 
                      alt="Luxury Flatlay Jewelry" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border-2 border-amber-600/30 shadow-md group">
                    <img 
                      src={rakhi9} 
                      alt="Kundan Silver Rakhi" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border-2 border-amber-600/30 shadow-md group">
                    <img 
                      src={rakhi2} 
                      alt="Royal Peacock Silver Rakhi" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border-2 border-amber-600/30 shadow-md group">
                    <img 
                      src={rakhi7} 
                      alt="Thread Rakhi Showcase" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* SLIDE 3: Royal Indian Heritage Bridal Showcase (Borcelle Jewellers Style) */}
          {currentSlide === 2 && (
            <div className="w-full h-full min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] bg-gradient-to-r from-[#2A050A] via-[#4A0A10] to-[#1F0205] border border-amber-600/30 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden animate-in fade-in duration-500">
              
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A059_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

              <div className="w-full md:w-[55%] space-y-5 z-10 pr-0 md:pr-6 text-amber-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-amber-400/50 flex items-center justify-center text-[#C5A059] bg-amber-950/60 shadow-lg">
                    <Gem className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-widest text-[#C5A059] uppercase">
                      AMRAPALI JEWELLERS
                    </h3>
                    <span className="text-[10px] font-serif italic text-amber-200/80 tracking-wider block">
                      Where Elegance Meets Eternity • Ratna Showroom
                    </span>
                  </div>
                </div>

                <div className="inline-block bg-gradient-to-b from-[#8B5E14] via-[#A37322] to-[#734C0E] border-2 border-amber-300/40 rounded-t-full rounded-b-2xl p-6 shadow-2xl text-center max-w-xs relative my-2">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-none">
                    50%
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-light text-amber-100 tracking-widest uppercase">
                    OFF
                  </div>
                  <div className="text-[11px] font-serif italic text-amber-200 mt-1 border-t border-amber-300/30 pt-1">
                    on making charges
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-amber-100/90 font-serif max-w-md">
                  Rings, necklaces and keepsakes crafted with care.
                </p>

                {/* Ultra-Elegant Outlined Ghost Luxury Button */}
                <div className="pt-2">
                  <a 
                    href="#gold"
                    className="inline-block border border-white/80 bg-stone-900/40 backdrop-blur-xs text-white uppercase tracking-[0.25em] font-serif text-xs px-8 py-3.5 hover:bg-white hover:text-stone-900 transition-all duration-500 cursor-pointer shadow-sm"
                  >
                    EXPLORE JEWELRY
                  </a>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4 text-[10px] font-sans text-amber-200/90 border-t border-amber-700/30">
                  <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-amber-500/30">
                    <Phone className="w-3 h-3 text-[#C5A059]" />
                    <span>1800-123-4567</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-amber-500/30">
                    <Globe className="w-3 h-3 text-[#C5A059]" />
                    <span>amrapalijewellers.com</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-amber-500/30">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    <span>Ratna Showroom</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[42%] h-[320px] sm:h-[400px] lg:h-[450px] relative mt-6 md:mt-0 flex items-center justify-end">
                <div className="w-full h-full rounded-2xl border-2 border-amber-500/40 shadow-2xl overflow-hidden relative">
                  <img
                    src={bridalHero}
                    alt="Royal Indian Bride Kundan Jewellery"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center bg-black/70 backdrop-blur-md border border-amber-500/30 py-2 px-3 rounded-xl text-amber-100 text-[10px] font-serif italic">
                    Royal Indian Kundan Bridal Collection 2026
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* SLIDE 4: Royal Lion & Divine Devi Rakhis */}
          {currentSlide === 3 && (
            <div className="w-full h-full min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] bg-gradient-to-r from-[#1C1917] via-[#2D221A] to-[#1C1917] border border-amber-700/30 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 animate-in fade-in duration-500">
              
              <div className="w-full md:w-[48%] space-y-4 z-10">
                <span className="text-[10px] sm:text-xs font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                  REGAL SIMHA & DEVI EDITIONS
                </span>

                <h2 className="text-3xl sm:text-5xl font-serif font-light text-amber-50 tracking-tight leading-[1.1]">
                  <span className="block">Royal Lion &</span>
                  <span className="block font-normal text-white">Divine Devi Rakhis</span>
                </h2>

                <p className="text-sm font-serif italic text-amber-200/90 max-w-md">
                  Auspicious Goddess Motifs & Royal Lion Handcrafted in Pure 925 Sterling Silver
                </p>

                <div className="pt-2">
                  <a
                    href="#silver"
                    className="inline-block border border-white/80 bg-stone-900/40 backdrop-blur-xs text-white uppercase tracking-[0.25em] font-serif text-xs px-8 py-3.5 hover:bg-white hover:text-stone-900 transition-all duration-500 cursor-pointer shadow-sm"
                  >
                    EXPLORE JEWELRY
                  </a>
                </div>
              </div>

              <div className="w-full md:w-[48%] grid grid-cols-2 gap-4 h-[280px] sm:h-[350px] mt-6 md:mt-0">
                <div className="rounded-xl overflow-hidden border border-amber-500/30 shadow-lg">
                  <img src={lionRakhi} alt="Royal Lion Rakhi" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="rounded-xl overflow-hidden border border-amber-500/30 shadow-lg">
                  <img src={deviRakhi} alt="Divine Devi Rakhi" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Carousel Diamond Indicators */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all cursor-pointer ${
                currentSlide === idx 
                  ? 'text-[#8B5E14] scale-125 font-bold' 
                  : 'text-amber-700/30 hover:text-[#8B5E14]'
              }`}
              aria-label={`Slide ${idx + 1}`}
            >
              ◆
            </button>
          ))}
        </div>

      </div>

      {/* Floating Assistance Widget */}
      {chatWidgetOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
          <div className="bg-[#1C1917] border border-amber-700/40 rounded-full px-4 py-2 shadow-2xl flex items-center gap-2 text-xs font-medium text-amber-100">
            <span>How can Ratna Showroom assist you?</span>
            <button 
              onClick={() => setChatWidgetOpen(false)}
              className="text-amber-400 hover:text-white ml-1 cursor-pointer"
              title="Close assistance widget"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="w-11 h-11 rounded-full bg-[#8B5E14] text-white flex items-center justify-center shadow-2xl cursor-pointer hover:bg-[#734C0E] transition-colors border border-amber-400/40">
            <MessageSquare className="w-5 h-5 text-amber-100" />
          </div>
        </div>
      )}

    </section>
  );
}
