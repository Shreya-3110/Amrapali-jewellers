import React from 'react';
import { MapPin, Clock, Phone, Navigation, Building } from 'lucide-react';

export default function StoreLocation() {
  return (
    <section id="store-location" className="w-full py-10 bg-white border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-3 border-b border-amber-900/15 text-center sm:text-left gap-2">
          <div>
            <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#8B5E14] uppercase">FLAGSHIP EXPERIENCE</span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] mt-0.5">
              Amrapali Jewellers Ratna Showroom
            </h2>
          </div>
          <a href="#" className="text-xs font-serif font-bold uppercase tracking-wider text-[#8B5E14] hover:text-[#734C0E] border border-amber-800/20 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors">
            Book VIP Lounge Appointment →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Embedded Map Wireframe Placeholder */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border-2 border-dashed border-amber-800/20 rounded-2xl min-h-[320px] sm:min-h-[380px] flex flex-col items-center justify-center p-6 text-stone-500 text-center">
            <div className="w-14 h-14 rounded-full bg-amber-100/80 border border-amber-700/30 flex items-center justify-center mb-3 text-[#8B5E14]">
              <MapPin className="w-7 h-7 stroke-[1.75]" />
            </div>
            <span className="text-sm font-serif font-bold uppercase tracking-wider text-[#1C1917]">
              Ratna Showroom Location Map Placeholder
            </span>
            <p className="text-xs text-stone-500 mt-1 max-w-sm">
              [Embedded iFrame Map Location for Amrapali Jewellers Ratna Showroom will render here]
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button className="bg-[#8B5E14] hover:bg-[#734C0E] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 uppercase tracking-wider shadow-xs">
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </button>
            </div>
          </div>

          {/* Store Details */}
          <div className="lg:col-span-5 bg-[#FAF7F2] border border-amber-800/15 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-[#1C1917] font-serif font-bold text-xl mb-1">
                <Building className="w-5 h-5 text-[#8B5E14]" />
                <h3>Ratna Showroom Boutique</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mt-2 font-sans">
                Main Showroom Building, Inner Circle, Connaught Place, New Delhi - 110001
              </p>
            </div>

            <div className="border-t border-amber-900/10 pt-4 space-y-3 text-xs text-stone-700">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8B5E14] mt-0.5" />
                <div>
                  <span className="font-serif font-bold text-[#1C1917] block">Working Hours</span>
                  <span>Monday - Sunday: 10:30 AM - 8:30 PM</span>
                  <span className="block text-[11px] text-stone-500 mt-0.5">(Open on all festivals & Sundays)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Phone className="w-4 h-4 text-[#8B5E14] mt-0.5" />
                <div>
                  <span className="font-serif font-bold text-[#1C1917] block">Showroom Direct Contact</span>
                  <span>+91 11 2341 5678 / +91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* In-Store Amenities */}
            <div className="border-t border-amber-900/10 pt-4">
              <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-[#8B5E14] block mb-2">
                Showroom Amenities:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <span className="bg-white border border-amber-800/15 text-stone-700 px-2.5 py-1 rounded-md font-medium">Valet Parking</span>
                <span className="bg-white border border-amber-800/15 text-stone-700 px-2.5 py-1 rounded-md font-medium">VIP Bridal Suite</span>
                <span className="bg-white border border-amber-800/15 text-stone-700 px-2.5 py-1 rounded-md font-medium">Custom Design Studio</span>
                <span className="bg-white border border-amber-800/15 text-stone-700 px-2.5 py-1 rounded-md font-medium">Old Gold Exchange</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
