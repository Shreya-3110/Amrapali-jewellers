import React from 'react';
import { Star, User, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ananya Sharma",
      location: "New Delhi",
      rating: 5,
      review: "Purchased my bridal set from Amrapali Jewellers Ratna Showroom. The hallmarking transparency and intricate gold craftsmanship exceeded all expectations!"
    },
    {
      name: "Rajesh & Priya Verma",
      location: "Mumbai",
      rating: 5,
      review: "The solitaire ring certification was very clear. The lifetime exchange promise gave us complete confidence while buying."
    },
    {
      name: "Meenakshi Sundaram",
      location: "Chennai",
      rating: 5,
      review: "Insured doorstep delivery and beautiful packaging. Their silver collection thalis and antique bangles are top-notch quality."
    }
  ];

  return (
    <section className="w-full py-10 bg-[#FAF7F2] border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#8B5E14] uppercase">VOICES OF TRUST</span>
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#1C1917] mt-0.5">
            Customer Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-serif italic">
            Real experiences from patrons of Amrapali Jewellers Ratna Showroom
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-amber-800/15 rounded-2xl p-6 flex flex-col justify-between hover:border-[#C5A059] hover:shadow-md transition-all relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-800/10" />
              
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-[#C5A059] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-6 font-serif">
                  "{item.review}"
                </p>
              </div>

              {/* Customer Avatar & Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-amber-900/10">
                <div className="w-9 h-9 rounded-full bg-amber-100/70 border border-amber-700/30 flex items-center justify-center text-[#8B5E14]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-bold text-[#1C1917]">{item.name}</h4>
                  <span className="text-[10px] text-stone-500 font-sans">{item.location} • Verified Buyer</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
