import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="w-full py-12 bg-[#1C1917] text-amber-50 border-b border-amber-900/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-full bg-stone-900 border border-amber-700/40 mx-auto flex items-center justify-center text-[#C5A059] mb-4">
          <Mail className="w-6 h-6 stroke-[1.75]" />
        </div>

        <span className="text-[10px] font-serif font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
          AMRAPALI VIP CLUB
        </span>
        
        <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-white">
          Subscribe for Gold Alerts & Exclusive Previews
        </h2>
        <p className="text-xs sm:text-sm text-amber-200/80 mt-2 max-w-xl mx-auto leading-relaxed font-serif italic">
          Be the first to receive updates on new 22KT gold launches, private Ratna showroom previews, and daily gold rate notifications.
        </p>

        {subscribed ? (
          <div className="mt-6 bg-stone-900 border border-amber-700/40 p-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-100 font-semibold max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
            <span>Welcome to Amrapali Insiders! Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-xs sm:text-sm px-4 py-3 bg-stone-900/80 border border-amber-700/40 rounded-lg text-amber-50 placeholder-stone-400 outline-none focus:border-[#C5A059] transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#8B5E14] hover:bg-[#734C0E] text-amber-50 font-bold text-xs px-6 py-3 rounded-lg uppercase tracking-wider transition-colors shadow-md whitespace-nowrap border border-amber-400/30"
            >
              Subscribe Now
            </button>
          </form>
        )}

        <div className="mt-4 text-[11px] text-stone-400 font-sans">
          We respect your privacy. Unsubscribe anytime with 1 click.
        </div>
      </div>
    </section>
  );
}
