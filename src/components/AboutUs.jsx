import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Gem, 
  HeartHandshake, 
  Compass, 
  UserCheck, 
  CheckCircle2, 
  FileText, 
  Quote, 
  Clock, 
  Crown, 
  Sun,
  Layers,
  ArrowRight,
  PhoneCall
} from 'lucide-react';

export default function AboutUs() {
  const offerings = [
    {
      title: "Natural & Certified Gemstones",
      desc: "Govt. & Reputed Lab Certified unheated Yellow Sapphires, Colombian Emeralds, Burmese Rubies, Blue Sapphires & Astrological Navratnas.",
      tag: "100% Certified Natural",
      icon: Gem,
    },
    {
      title: "Rudraksha & Rudraksha Malas",
      desc: "Sacred Nepali and Indonesian 1 to 21 Mukhi Rudraksha, Siddh Malas, and energized talisman beads with authenticity certification.",
      tag: "Authentic & Energized",
      icon: Sun,
    },
    {
      title: "Gold Jewellery – 18KT & 22KT",
      desc: "100% BIS Hallmarked heritage temple sets, bridal Rani Haars, bangles, and everyday fine gold jewellery crafted to perfection.",
      tag: "BIS 916 Hallmarked",
      icon: Crown,
    },
    {
      title: "IGI Certified Diamond Jewellery",
      desc: "Exquisite solitaires, engagement rings, halo necklaces, and tennis bracelets graded by IGI with VVS-VS clarity.",
      tag: "IGI Graded Solitaires",
      icon: Sparkles,
    },
    {
      title: "925 Sterling Silver Jewellery",
      desc: "Pure 925 hallmarked silver jewellery, sacred puja articles, luxury silver utensils, and artisanal silver gifting collections.",
      tag: "Pure 925 Hallmark",
      icon: Layers,
    },
    {
      title: "Freshwater Pearl Jewellery",
      desc: "Handpicked, lustrous natural freshwater pearl necklaces, classic studs, and contemporary regal strings.",
      tag: "Natural Lustre Pearls",
      icon: Award,
    },
    {
      title: "Custom Jewellery & Gemstone Designs",
      desc: "Bespoke handcrafted jewellery made according to your personal aesthetic, ring sizes, and personalized astrological recommendations.",
      tag: "Bespoke Karigari",
      icon: Compass,
    },
  ];

  const commitmentPillars = [
    {
      title: "Authenticity",
      subtitle: "100% Genuine & Certified",
      desc: "Every gemstone, Rudraksha, and metal is verified for origin, natural untreated purity, and authenticity.",
      icon: ShieldCheck,
    },
    {
      title: "Transparency",
      subtitle: "Clear Guidance & Documentation",
      desc: "No hidden charges or ambiguities. We disclose every detail regarding carat, clarity, cut, and certification.",
      icon: FileText,
    },
    {
      title: "Quality",
      subtitle: "Master Artisan Standards",
      desc: "Only the finest materials and masterful craftsmanship pass our stringent multi-point quality inspections.",
      icon: Crown,
    },
    {
      title: "Expert Guidance",
      subtitle: "Gemological & Astrological",
      desc: "Dedicated consultation to help you choose the right gemstone or jewellery for your milestone or spiritual need.",
      icon: Compass,
    },
    {
      title: "Customer Satisfaction",
      subtitle: "Lifetime Trust & Relationships",
      desc: "Our bond with you continues forever through transparent after-sales support, cleaning, and buyback policies.",
      icon: HeartHandshake,
    },
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById('store-location');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about-us" className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#FAF7F2] relative overflow-hidden border-b border-amber-900/10">
      
      {/* Subtle Luxury Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. Grand Header & Legacy Tagline */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100/70 border border-amber-800/25 px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5E14]" />
            <span className="text-[11px] font-serif font-bold tracking-[0.25em] text-[#8B5E14] uppercase">
              ESTABLISHED IN 1998 • OVER 25+ YEARS OF HERITAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
            About Amrapali Jewellers <br className="hidden sm:inline" />
            <span className="text-[#8B5E14] italic font-normal font-serif">Ratna Showroom</span>
          </h2>

          <div className="flex items-center justify-center gap-4 my-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-800/40" />
            <p className="text-base sm:text-lg font-serif italic text-stone-700 tracking-wide">
              A Legacy of Trust, Purity & Expertise
            </p>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-800/40" />
          </div>

          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed mt-4">
            Amrapali Jewellers Ratna Showroom is a trusted name in <strong className="font-semibold text-stone-900">Natural Certified Gemstones</strong>, <strong className="font-semibold text-stone-900">Rudraksha</strong> and fine jewellery, serving customers with an unwavering commitment to authenticity, quality and transparent guidance.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. Brand Story & Essence Grid */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Heritage & Deep Product Knowledge */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-sm border border-amber-900/15 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Crown className="w-48 h-48 text-[#8B5E14]" />
            </div>

            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-800/20 flex items-center justify-center text-[#8B5E14]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1C1917]">Our Heritage Since 1998</h3>
                  <span className="text-xs text-[#8B5E14] font-medium tracking-wide">Decades of Uncompromising Quality</span>
                </div>
              </div>

              <p className="text-stone-700 leading-relaxed text-sm font-sans">
                Established in 1998, Amrapali Jewellers has built its reputation through years of dedicated service, deep product knowledge and a customer-first approach. From natural gemstones and Rudraksha to gold, diamond and silver jewellery, our endeavour has always been to offer products that combine <span className="font-semibold text-[#8B5E14]">purity, authenticity and timeless value</span>.
              </p>

              <div className="bg-amber-50/70 border-l-4 border-[#8B5E14] p-4 rounded-r-xl my-4">
                <h4 className="font-serif font-bold text-sm text-[#1C1917] mb-1">
                  Specialized Expertise in Gemstones & Rudraksha
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Our expertise particularly lies in <strong className="font-semibold text-stone-900">Natural & Certified Gemstones and Rudraksha</strong>, where every customer is guided with care to understand the quality, origin, suitability and authenticity of the product before making a purchase.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-amber-900/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#8B5E14]">1998</div>
                <div className="text-[11px] text-stone-500 font-sans uppercase tracking-wider mt-0.5">Established</div>
              </div>
              <div className="border-x border-amber-900/10">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#8B5E14]">100%</div>
                <div className="text-[11px] text-stone-500 font-sans uppercase tracking-wider mt-0.5">Certified Pure</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#8B5E14]">50,000+</div>
                <div className="text-[11px] text-stone-500 font-sans uppercase tracking-wider mt-0.5">Trusted Patrons</div>
              </div>
            </div>
          </div>

          {/* Right: Faith, Emotion & Meaning of Jewellery */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1C1917] via-[#2A241F] to-[#1C1917] rounded-3xl p-6 sm:p-10 text-stone-200 shadow-xl flex flex-col justify-between border border-amber-500/20 relative">
            
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Quote className="w-6 h-6" />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-serif font-bold tracking-[0.3em] text-amber-400 uppercase">
                  OUR PHILOSOPHY ON JEWELLERY
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-amber-100 leading-snug">
                  "Jewellery is not simply an accessory—it represents faith, tradition, emotions, celebrations and significant milestones in life."
                </h3>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans pt-2 border-t border-white/10">
                That is why at Amrapali Jewellers Ratna Showroom, we focus on creating a buying experience based on trust, knowledge and complete transparency. Every precious choice you make is backed with certified confidence.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-serif tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Buying Experience</span>
              </div>
              <a 
                href="#store-location" 
                onClick={scrollToContact}
                className="text-xs text-white hover:text-amber-300 font-medium flex items-center gap-1 transition-colors"
              >
                <span>Visit Showroom</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. Founder & Managing Director Spotlight */}
        {/* ========================================================================= */}
        <div className="mb-16 bg-white border border-amber-900/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Founder Monogram / Portrait Frame */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                {/* Outer Decorative Ring */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-amber-200 p-1 shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#1C1917] flex flex-col items-center justify-center p-4 text-center border-2 border-amber-300/30">
                    <Crown className="w-8 h-8 text-amber-400 mb-2 stroke-[1.5]" />
                    <span className="font-serif text-2xl font-bold tracking-widest text-amber-100 uppercase">
                      S K S
                    </span>
                    <span className="text-[9px] font-serif tracking-[0.25em] text-amber-400 uppercase mt-1">
                      FOUNDER
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#8B5E14] text-white text-[10px] font-serif font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                  EST. 1998
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                  Mr. Sumant Kumar Soni
                </h3>
                <p className="text-xs sm:text-sm font-serif font-medium text-[#8B5E14] uppercase tracking-wider mt-1">
                  Founder & Managing Director
                </p>
                <p className="text-xs text-stone-500 font-sans mt-1">
                  Amrapali Jewellers Ratna Showroom
                </p>
              </div>
            </div>

            {/* Founder Vision & Leadership Details */}
            <div className="lg:col-span-8 space-y-5 lg:border-l lg:border-amber-900/10 lg:pl-10">
              <div>
                <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#8B5E14] uppercase block mb-1">
                  LEADERSHIP & VISION
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] leading-tight">
                  Guiding With Integrity, Tradition & Personal Care
                </h4>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                <strong>Mr. Sumant Kumar Soni</strong>, Founder & Managing Director of Amrapali Jewellers Ratna Showroom, represents the vision and values behind the brand. With a deep understanding of the jewellery and gemstone industry, his vision has been to create a jewellery house where customers can confidently purchase genuine gemstones, Rudraksha and jewellery with proper guidance and transparency.
              </p>

              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                Under his leadership, Amrapali Jewellers has continued to evolve with changing customer needs while preserving the traditional values of trust, quality and personal relationships.
              </p>

              {/* Founder's Core Philosophy Highlight */}
              <div className="bg-gradient-to-r from-amber-50 via-amber-100/60 to-amber-50 border border-amber-800/20 rounded-2xl p-5 sm:p-6 shadow-2xs relative">
                <Quote className="w-6 h-6 text-amber-800/40 absolute top-4 right-4" />
                <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-[#8B5E14] block mb-1">
                  HIS PHILOSOPHY IS SIMPLE:
                </span>
                <blockquote className="text-base sm:text-lg font-serif italic font-semibold text-[#1C1917] leading-snug">
                  “A customer’s trust is more valuable than any transaction.”
                </blockquote>
                <p className="text-xs text-stone-600 font-sans mt-2">
                  This philosophy reflects in the way we serve our customers—from product selection and authenticity to after-sales support.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. What We Offer (Our Complete Collection & Certifications) */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#8B5E14] uppercase block mb-1">
              CURATED EXCELLENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              What We Offer
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-sans">
              Explore our wide selection of certified gemstones, holy Rudraksha, and hallmark fine jewellery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {offerings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-amber-900/15 hover:border-amber-700/40 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 group-hover:bg-amber-100/80 border border-amber-800/15 flex items-center justify-center text-[#8B5E14] transition-colors">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="text-[10px] font-serif font-semibold text-[#8B5E14] bg-amber-50 border border-amber-800/15 px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-[#1C1917] group-hover:text-[#8B5E14] transition-colors mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-900/10 flex items-center text-[11px] font-semibold text-[#8B5E14] gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}

            {/* Special Highlight Card: Authentic Documentation */}
            <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1 bg-gradient-to-br from-amber-800 to-[#734C0E] text-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-amber-200 mb-4">
                  <FileText className="w-5 h-5" />
                </div>

                <h4 className="font-serif font-bold text-base text-white mb-2">
                  Authentic Documentation
                </h4>

                <p className="text-xs text-amber-100/90 leading-relaxed font-sans">
                  We also provide authentic documentation and quality-related information wherever applicable, helping customers make informed and confident decisions.
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/15 flex items-center gap-2 text-[11px] text-amber-200">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>Lab Certified Reports Included</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. Our Commitment & The 5 Pillars of Excellence */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#8B5E14] uppercase block mb-1">
              THE 5 PILLARS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
              Our Commitment
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-sans">
              At Amrapali Jewellers Ratna Showroom, our commitment goes beyond selling jewellery. We strive to build long-term relationships with every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {commitmentPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-amber-900/15 rounded-2xl p-5 text-center flex flex-col items-center justify-between shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-100/70 border border-amber-800/20 flex items-center justify-center text-[#8B5E14] mb-3">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-base text-[#1C1917]">
                      {pillar.title}
                    </h4>
                    <span className="text-[10px] font-serif font-medium text-[#8B5E14] uppercase tracking-wider block mt-0.5">
                      {pillar.subtitle}
                    </span>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed mt-2">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="w-full mt-4 pt-3 border-t border-amber-900/10 flex justify-center">
                    <span className="text-[10px] font-mono text-stone-400">Pillar 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. Signature Legacy Promise Closing Banner */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-[#1C1917] via-[#2A221B] to-[#1C1917] border border-amber-600/30 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D97706_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-3.5 py-1 rounded-full">
              <Crown className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[10px] font-serif tracking-[0.25em] text-amber-300 uppercase font-semibold">
                OUR TIMELESS PROMISE
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
              Your Trust. Our Legacy.
            </h3>

            <p className="text-sm sm:text-base text-amber-100/90 font-serif italic max-w-2xl mx-auto leading-relaxed">
              “Amrapali Jewellers Ratna Showroom — where every precious choice begins with trust.”
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#store-location" 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs sm:text-sm font-serif font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Visit Showroom & Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="https://wa.me/919876543210?text=Hello%20Amrapali%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20Natural%20Gemstones%20and%20Rudraksha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-serif font-semibold uppercase tracking-wider px-6 py-3 rounded-xl backdrop-blur-sm transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Consult Gemstone Expert</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
