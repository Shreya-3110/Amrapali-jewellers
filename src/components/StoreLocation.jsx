import React from 'react';
import { MapPin, Clock, Phone, Navigation, Building, Calendar, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

export default function StoreLocation() {
  const showroomAddress = "10 No. market, Galaxy Apartment, Main Road, beside Manohar Dairy, E-3, Arera Colony, Bhopal, Madhya Pradesh 462016";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Amrapali Jewellers Galaxy Apartment 10 No Market beside Manohar Dairy Arera Colony Bhopal")}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent("Galaxy Apartment, 10 No. market, beside Manohar Dairy, E-3, Arera Colony, Bhopal, Madhya Pradesh 462016")}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const handleBookVisit = () => {
    const text = encodeURIComponent(
      `Namaste Amrapali Jewellers Ratna Showroom! 🏛️\n\nI would like to book a private consultation at your Bhopal Showroom:\nAddress: 10 No. market, Galaxy Apartment, beside Manohar Dairy, E-3, Arera Colony, Bhopal.\n\nPlease share available time slots.`
    );
    window.open(`https://wa.me/919412288300?text=${text}`, '_blank');
  };

  return (
    <section id="store-location" className="w-full py-16 bg-white border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-amber-900/15 text-center sm:text-left gap-4">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#8B5E14] uppercase">
                FLAGSHIP BOUTIQUE & RATNA ATELIER
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] px-2 py-0.5 bg-amber-500/15 text-[#8B5E14] font-serif rounded-full font-bold">
                <Sparkles className="w-2.5 h-2.5" />
                Bhopal (M.P.)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#1C1917]">
              Visit Amrapali Jewellers Ratna Showroom
            </h2>
          </div>

          <button 
            onClick={handleBookVisit}
            className="text-xs font-serif font-bold uppercase tracking-wider text-[#8B5E14] hover:text-white bg-amber-50 hover:bg-[#8B5E14] border border-amber-800/30 px-5 py-2.5 rounded-xl transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Showroom Appointment →</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-amber-800/20 rounded-3xl overflow-hidden shadow-md flex flex-col min-h-[380px]">
            <div className="w-full flex-1 relative min-h-[300px]">
              <iframe
                title="Amrapali Jewellers Bhopal Showroom Location Map"
                src={mapEmbedUrl}
                className="w-full h-full min-h-[320px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="p-4 bg-[#FAF7F2] border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-700 font-serif">
                <MapPin className="w-4 h-4 text-[#8B5E14] shrink-0" />
                <span className="line-clamp-1">10 No. Market, Beside Manohar Dairy, Arera Colony, Bhopal</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8B5E14] hover:bg-[#724B0D] text-white font-serif font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 uppercase tracking-wider shadow-xs transition-colors shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Right: Detailed Showroom Address & Information */}
          <div className="lg:col-span-5 bg-[#FAF7F2] border border-amber-800/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
            
            {/* Address Header */}
            <div>
              <div className="flex items-center gap-2 text-[#1C1917] font-serif font-medium text-xl mb-2">
                <Building className="w-5 h-5 text-[#8B5E14]" />
                <h3>Flagship Boutique Address</h3>
              </div>
              
              <div className="bg-white border border-amber-900/15 rounded-2xl p-4 shadow-2xs space-y-1.5">
                <p className="text-xs sm:text-sm font-serif font-bold text-[#1C1917] leading-snug">
                  Amrapali Jewellers Ratna Showroom
                </p>
                <p className="text-xs text-stone-700 font-serif leading-relaxed">
                  10 No. market, Galaxy Apartment, Main Road, beside Manohar Dairy, E-3, Arera Colony, Bhopal, Madhya Pradesh 462016
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] text-[#8B5E14] font-serif font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Landmark: Beside Manohar Dairy, 10 No. Market</span>
                </div>
              </div>
            </div>

            {/* Working Hours & Contact Numbers */}
            <div className="border-t border-amber-900/10 pt-4 space-y-3.5 text-xs text-stone-700 font-serif">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8B5E14] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#1C1917] block">Showroom Timings</span>
                  <span>Monday - Sunday: 10:30 AM - 8:30 PM</span>
                  <span className="block text-[11px] text-stone-500 mt-0.5">(Open 7 days a week & on all auspicious festivals)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#8B5E14] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#1C1917] block">Direct Consultation & Appointments</span>
                  <a href="tel:+919412288300" className="hover:text-[#8B5E14] font-medium">+91 94122 88300</a> / <a href="tel:18001234567" className="hover:text-[#8B5E14]">1800-123-4567 (Toll Free)</a>
                </div>
              </div>
            </div>

            {/* In-Store Amenities */}
            <div className="border-t border-amber-900/10 pt-4">
              <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-[#8B5E14] block mb-2">
                In-Store Showroom Amenities:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-serif">
                <span className="bg-white border border-amber-800/15 text-stone-800 px-2.5 py-1 rounded-lg font-medium shadow-2xs">Gemstone Testing Lab</span>
                <span className="bg-white border border-amber-800/15 text-stone-800 px-2.5 py-1 rounded-lg font-medium shadow-2xs">Kundli & Astrologer Consultation</span>
                <span className="bg-white border border-amber-800/15 text-stone-800 px-2.5 py-1 rounded-lg font-medium shadow-2xs">Custom Gold/Silver Karigari</span>
                <span className="bg-white border border-amber-800/15 text-stone-800 px-2.5 py-1 rounded-lg font-medium shadow-2xs">Valet Parking Available</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={handleBookVisit}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-serif font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat On WhatsApp For Showroom Directions</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
