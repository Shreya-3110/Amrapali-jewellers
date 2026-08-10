import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Compass, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle, 
  Gem, 
  Sun, 
  Moon, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import recommendationCat from '../assets/recommendation_cat_reference.png';
import gemstoneCat from '../assets/gemstone_cat_reference.png';

export default function FreeGemsRecommendationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Form, 2: Result
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    pob: '',
    rashi: 'Mesh (Aries)',
    goal: 'Career & Wealth Prosperity',
  });

  const [recommendation, setRecommendation] = useState(null);

  if (!isOpen) return null;

  const rashiData = {
    'Mesh (Aries)': {
      planet: 'Mangal (Mars)',
      primaryGem: 'Natural Red Coral (Moonga)',
      secondaryGem: 'Yellow Sapphire (Pukhraj)',
      benefits: 'Boosts courage, physical vitality, leadership, and shields from negative energy.',
      metal: 'Pure 22KT Gold or Copper / Panchdhatu',
      finger: 'Ring Finger (Right Hand)',
      day: 'Tuesday Morning (Sunrise)',
      mantra: 'Om Kram Kreem Kroum Sah Bhaumaya Namah',
      chakra: 'Manipura & Muladhara Chakra',
    },
    'Vrishabha (Taurus)': {
      planet: 'Shukra (Venus)',
      primaryGem: 'Natural Opal / White Zircon / Diamond',
      secondaryGem: 'Emerald (Panna)',
      benefits: 'Attracts luxury, artistic success, marital harmony, and immense financial stability.',
      metal: 'Pure 925 Silver or Platinum / White Gold',
      finger: 'Middle or Little Finger (Right Hand)',
      day: 'Friday Morning (Sunrise)',
      mantra: 'Om Dram Dreem Droum Sah Shukraya Namah',
      chakra: 'Anahata (Heart) Chakra',
    },
    'Mithun (Gemini)': {
      planet: 'Budh (Mercury)',
      primaryGem: 'Colombian / Zambian Emerald (Panna)',
      secondaryGem: 'Blue Sapphire (Neelam)',
      benefits: 'Sharpens intellect, business acumen, communication prowess, and financial growth.',
      metal: 'Pure 22KT Gold or Panchdhatu',
      finger: 'Little Finger (Right Hand)',
      day: 'Wednesday Morning (Sunrise)',
      mantra: 'Om Bram Breem Broum Sah Budhaya Namah',
      chakra: 'Vishuddha (Throat) Chakra',
    },
    'Kark (Cancer)': {
      planet: 'Chandra (Moon)',
      primaryGem: 'South Sea Natural Pearl (Moti)',
      secondaryGem: 'Yellow Sapphire (Pukhraj)',
      benefits: 'Brings emotional peace, stability in decision making, family harmony, and sound health.',
      metal: 'Pure 925 Sterling Silver',
      finger: 'Little Finger (Right Hand)',
      day: 'Monday Evening (Moonrise)',
      mantra: 'Om Shram Shreem Shroum Sah Chandraya Namah',
      chakra: 'Swadhisthana & Anahata Chakra',
    },
    'Simha (Leo)': {
      planet: 'Surya (Sun)',
      primaryGem: 'Burmese Ruby (Manik / Padmaraga)',
      secondaryGem: 'Yellow Sapphire (Pukhraj)',
      benefits: 'Grants royal authority, supreme leadership, fame, vitality, and paternal blessings.',
      metal: 'Pure 22KT Gold or Copper',
      finger: 'Ring Finger (Right Hand)',
      day: 'Sunday Morning (Sunrise)',
      mantra: 'Om Hram Hreem Hroum Sah Suryaya Namah',
      chakra: 'Manipura (Solar Plexus) Chakra',
    },
    'Kanya (Virgo)': {
      planet: 'Budh (Mercury)',
      primaryGem: 'Natural Certified Emerald (Panna)',
      secondaryGem: 'White Sapphire / Opal',
      benefits: 'Enhances analytical abilities, commercial ventures, academic victory, and health.',
      metal: 'Pure 22KT Gold or Panchdhatu',
      finger: 'Little Finger (Right Hand)',
      day: 'Wednesday Morning (Sunrise)',
      mantra: 'Om Bram Breem Broum Sah Budhaya Namah',
      chakra: 'Vishuddha (Throat) Chakra',
    },
    'Tula (Libra)': {
      planet: 'Shukra (Venus)',
      primaryGem: 'Natural Australian Opal / Diamond',
      secondaryGem: 'Blue Sapphire (Neelam)',
      benefits: 'Brings magnetic charm, relationship bliss, aesthetic luxury, and commercial profits.',
      metal: 'Pure 925 Sterling Silver or White Gold',
      finger: 'Middle or Little Finger (Right Hand)',
      day: 'Friday Morning (Sunrise)',
      mantra: 'Om Dram Dreem Droum Sah Shukraya Namah',
      chakra: 'Anahata Chakra',
    },
    'Vrishchik (Scorpio)': {
      planet: 'Mangal (Mars) & Ketu',
      primaryGem: 'Italian Red Coral (Moonga) / Yellow Sapphire',
      secondaryGem: 'Cat’s Eye (Lehsuniya)',
      benefits: 'Eliminates fears, bestows courage in high-stakes ventures, and ensures protective energy.',
      metal: 'Pure 22KT Gold or Copper',
      finger: 'Ring Finger (Right Hand)',
      day: 'Tuesday Morning (Sunrise)',
      mantra: 'Om Kram Kreem Kroum Sah Bhaumaya Namah',
      chakra: 'Muladhara Chakra',
    },
    'Dhanu (Sagittarius)': {
      planet: 'Brihaspati (Jupiter)',
      primaryGem: 'Ceylon Yellow Sapphire (Pukhraj)',
      secondaryGem: 'Burmese Ruby (Manik)',
      benefits: 'Brings immense wisdom, divine luck, spiritual elevation, progeny happiness, and wealth.',
      metal: 'Pure 22KT Yellow Gold or Panchdhatu',
      finger: 'Index Finger (Right Hand)',
      day: 'Thursday Morning (Sunrise)',
      mantra: 'Om Gram Greem Groum Sah Gurave Namah',
      chakra: 'Ajna (Third Eye) Chakra',
    },
    'Makar (Capricorn)': {
      planet: 'Shani (Saturn)',
      primaryGem: 'Royal Blue Sapphire (Neelam) / Amethyst',
      secondaryGem: 'Emerald (Panna)',
      benefits: 'Accelerates discipline, monumental career milestones, wealth accumulation, and shields from malefic gaze.',
      metal: 'Pure 925 Sterling Silver or White Gold / Iron',
      finger: 'Middle Finger (Right Hand)',
      day: 'Saturday Evening (Sunset)',
      mantra: 'Om Pram Preem Proum Sah Shanaishcharaya Namah',
      chakra: 'Ajna & Sahasrara Chakra',
    },
    'Kumbh (Aquarius)': {
      planet: 'Shani (Saturn)',
      primaryGem: 'Natural Ceylon Blue Sapphire (Neelam)',
      secondaryGem: 'Natural Opal',
      benefits: 'Unlocks massive visionary success, public respect, intuition, and financial windfalls.',
      metal: 'Pure 925 Sterling Silver or Platinum',
      finger: 'Middle Finger (Right Hand)',
      day: 'Saturday Evening',
      mantra: 'Om Pram Preem Proum Sah Shanaishcharaya Namah',
      chakra: 'Ajna Chakra',
    },
    'Meen (Pisces)': {
      planet: 'Brihaspati (Jupiter)',
      primaryGem: 'Certified Yellow Sapphire (Pukhraj)',
      secondaryGem: 'Natural South Sea Pearl (Moti)',
      benefits: 'Blesses with higher spiritual knowledge, financial abundance, peace of mind, and auspicious life events.',
      metal: 'Pure 22KT Yellow Gold or Panchdhatu',
      finger: 'Index Finger (Right Hand)',
      day: 'Thursday Morning (Sunrise)',
      mantra: 'Om Gram Greem Groum Sah Gurave Namah',
      chakra: 'Ajna & Crown Chakra',
    },
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const result = rashiData[formData.rashi] || rashiData['Mesh (Aries)'];
    setRecommendation(result);
    setStep(2);
  };

  const handleWhatsApp = () => {
    if (!recommendation) return;
    const text = encodeURIComponent(
      `Namaste Amrapali Jewellers Ratna Showroom! 🌟\n\nI just received my Free Astrological Gemstone Recommendation:\n- Name: ${formData.name || 'Seeker'}\n- Rashi/Zodiac: ${formData.rashi}\n- Primary Recommended Gemstone: ${recommendation.primaryGem}\n- Ruling Planet: ${recommendation.planet}\n- Life Focus: ${formData.goal}\n\nI would like to consult with Mr. Sumant Kumar Soni / Gemologist regarding availability, lab certification, and custom ring mounting.`
    );
    window.open(`https://wa.me/919412288300?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] border border-amber-800/30 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative my-auto">
        
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-[#1C1917] via-[#2A1D15] to-[#1C1917] p-5 sm:p-7 text-amber-50 border-b border-amber-600/30 overflow-hidden">
          {/* Subtle Celestial Glow in Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer z-10"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#8B5E14] flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
                VEDIC ASTROLOGY & GEMOLOGICAL CONSULTATION
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-light text-white tracking-wide">
                Free Gemstone & Janampatri Recommendation
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 max-h-[78vh] overflow-y-auto">
          {step === 1 ? (
            <div>
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-amber-50 border border-amber-800/20 rounded-2xl p-4 mb-6">
                <img 
                  src={recommendationCat} 
                  alt="Vedic Astrology" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-amber-600/40 shadow-sm shrink-0"
                />
                <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed text-center sm:text-left">
                  Enter your birth details or your Moon Sign (Rashi) to discover the authentic Vedic Ratna that aligns with your ruling planet and brings prosperity, health, and peace.
                </p>
              </div>

              <form onSubmit={handleCalculate} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-serif font-bold tracking-wider text-stone-700 uppercase mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#8B5E14]" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:border-[#8B5E14] focus:ring-2 focus:ring-[#8B5E14]/15 outline-none text-xs sm:text-sm font-serif text-stone-900"
                    />
                  </div>

                  {/* Moon Sign / Rashi */}
                  <div>
                    <label className="block text-[11px] font-serif font-bold tracking-wider text-stone-700 uppercase mb-1.5 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-[#8B5E14]" />
                      Zodiac Sign (Rashi)
                    </label>
                    <select
                      value={formData.rashi}
                      onChange={(e) => setFormData({ ...formData, rashi: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:border-[#8B5E14] focus:ring-2 focus:ring-[#8B5E14]/15 outline-none text-xs sm:text-sm font-serif text-stone-900 cursor-pointer"
                    >
                      {Object.keys(rashiData).map((r, idx) => (
                        <option key={idx} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-[11px] font-serif font-bold tracking-wider text-stone-700 uppercase mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8B5E14]" />
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:border-[#8B5E14] focus:ring-2 focus:ring-[#8B5E14]/15 outline-none text-xs sm:text-sm font-serif text-stone-900"
                    />
                  </div>

                  {/* Time of Birth */}
                  <div>
                    <label className="block text-[11px] font-serif font-bold tracking-wider text-stone-700 uppercase mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8B5E14]" />
                      Time of Birth (Optional)
                    </label>
                    <input
                      type="time"
                      value={formData.tob}
                      onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:border-[#8B5E14] focus:ring-2 focus:ring-[#8B5E14]/15 outline-none text-xs sm:text-sm font-serif text-stone-900"
                    />
                  </div>

                </div>

                {/* Primary Life Focus / Goal */}
                <div>
                  <label className="block text-[11px] font-serif font-bold tracking-wider text-stone-700 uppercase mb-1.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#8B5E14]" />
                    Primary Life Focus & Desired Blessing
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:border-[#8B5E14] focus:ring-2 focus:ring-[#8B5E14]/15 outline-none text-xs sm:text-sm font-serif text-stone-900 cursor-pointer"
                  >
                    <option value="Career & Wealth Prosperity">💼 Career Growth & Wealth Accumulation</option>
                    <option value="Health, Longevity & Energy">🌱 Health, Vitality & Mental Peace</option>
                    <option value="Marriage & Harmonious Relationship">💍 Marriage, Love & Relationship Bliss</option>
                    <option value="Academic Excellence & Focus">📚 Academic Focus, Memory & Competitive Exams</option>
                    <option value="Protection from Evil Eye & Rahu-Ketu Shanti">🛡️ Protection from Shani Sade Sati & Evil Eye</option>
                    <option value="Spiritual Elevation & Peace of Mind">📿 Spiritual Awakening & Japa Meditation</option>
                  </select>
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#8B5E14] via-[#A87928] to-[#8B5E14] hover:from-[#724B0D] hover:to-[#724B0D] text-amber-50 text-xs sm:text-sm font-serif font-bold tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Vedic Gemstone Recommendation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Guarantee assurance */}
                <div className="flex items-center justify-center gap-4 text-[10px] text-stone-500 font-serif pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8B5E14]" />
                    100% Free & Confidential
                  </span>
                  <span>•</span>
                  <span>Govt. Lab Certified Gemstones</span>
                </div>
              </form>
            </div>
          ) : (
            /* Step 2: Personalized Recommendation Result Card */
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Header Box */}
              <div className="bg-gradient-to-br from-[#1C1917] to-[#2B1E17] rounded-2xl p-5 sm:p-6 text-amber-50 border border-amber-600/30 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                  VEDIC ASTROLOGICAL RESULT FOR {formData.name ? formData.name.toUpperCase() : 'YOU'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
                  {recommendation?.primaryGem}
                </h3>
                <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-xs text-amber-200 font-serif">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ruling Planet: <strong>{recommendation?.planet}</strong></span>
                </div>
              </div>

              {/* Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                <div className="bg-white p-3.5 rounded-xl border border-amber-900/15 shadow-2xs">
                  <span className="text-[10px] font-serif font-bold text-[#8B5E14] uppercase tracking-wider block mb-0.5">
                    Recommended Metal
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-medium text-stone-800">
                    {recommendation?.metal}
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-amber-900/15 shadow-2xs">
                  <span className="text-[10px] font-serif font-bold text-[#8B5E14] uppercase tracking-wider block mb-0.5">
                    Auspicious Wearing Day & Time
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-medium text-stone-800">
                    {recommendation?.day}
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-amber-900/15 shadow-2xs">
                  <span className="text-[10px] font-serif font-bold text-[#8B5E14] uppercase tracking-wider block mb-0.5">
                    Wearing Finger
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-medium text-stone-800">
                    {recommendation?.finger}
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-amber-900/15 shadow-2xs">
                  <span className="text-[10px] font-serif font-bold text-[#8B5E14] uppercase tracking-wider block mb-0.5">
                    Secondary / Upratna
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-medium text-stone-800">
                    {recommendation?.secondaryGem}
                  </p>
                </div>

              </div>

              {/* Spiritual Significance & Benefits */}
              <div className="bg-amber-100/40 p-4 rounded-xl border border-amber-800/20">
                <span className="text-[10px] font-serif font-bold text-[#8B5E14] uppercase tracking-wider block mb-1">
                  Astrological Benefits for {formData.rashi}
                </span>
                <p className="text-xs sm:text-sm font-serif text-stone-700 leading-relaxed">
                  {recommendation?.benefits}
                </p>
                
                <div className="mt-3 pt-3 border-t border-amber-800/15">
                  <span className="text-[10px] font-serif font-bold text-[#8B5E14] uppercase tracking-wider block mb-0.5">
                    Vedic Beej Mantra (Chant 108 Times During Prana Pratishtha)
                  </span>
                  <p className="text-xs font-serif italic text-stone-800 font-medium">
                    "{recommendation?.mantra}"
                  </p>
                </div>
              </div>

              {/* Consultation & Purchase CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs sm:text-sm font-serif font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat With Amrapali Astrologer On WhatsApp</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      const elem = document.getElementById('store-location');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-50 text-xs font-serif tracking-wider uppercase transition-colors cursor-pointer text-center"
                  >
                    Book Showroom Visit
                  </button>

                  <button
                    onClick={() => setStep(1)}
                    className="py-3 px-4 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-serif tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Recalculate</span>
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
