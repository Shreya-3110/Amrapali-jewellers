import React from 'react';
import { Truck, PackageCheck, RefreshCw, Crown, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const trustFeatures = [
    {
      icon: Truck,
      title: "Free Insured Shipping",
      subtitle: "100% Insured Delivery Across India",
    },
    {
      icon: PackageCheck,
      title: "Easy 15 Day Returns",
      subtitle: "Hassle-Free Return Policy",
    },
    {
      icon: RefreshCw,
      title: "Lifetime Exchange",
      subtitle: "Guaranteed Buyback & Upgrade",
    },
    {
      icon: Crown,
      title: "100% BIS Hallmarked",
      subtitle: "22KT Gold & 925 Pure Silver",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      subtitle: "Encrypted Transactions",
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] pb-6">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* Floating White Assurance Card Container */}
        <div className="bg-white border border-amber-800/15 rounded-2xl p-4 sm:p-6 shadow-md grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-amber-900/10">
          {trustFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 justify-center text-center md:text-left px-2 pt-3 md:pt-0"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-700/20 flex items-center justify-center text-[#8B5E14] shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-bold text-[#1C1917] leading-tight">
                    {feat.title}
                  </h4>
                  <span className="text-[10px] text-stone-500 font-sans block mt-0.5">
                    {feat.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
