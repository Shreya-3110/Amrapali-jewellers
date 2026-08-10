import React from 'react';
import { 
  Camera, 
  Globe, 
  Share2, 
  Video, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award,
  ChevronRight,
  Lock
} from 'lucide-react';
import AmrapaliLogo from './AmrapaliLogo';

export default function Footer({ onOpenCMS }) {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 text-xs">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-slate-800">
        
        {/* Column 1: About Us & Logo */}
        <div className="lg:col-span-1 space-y-4">
          <AmrapaliLogo variant="light" />

          <p className="text-slate-400 leading-relaxed text-[11px] pt-1">
            <strong className="text-slate-200">Amrapali Jewellers Ratna Showroom (Est. 1998)</strong> — A Legacy of Trust, Purity & Expertise under the leadership of Founder & MD Mr. Sumant Kumar Soni. Specialists in Natural Certified Gemstones, Rudraksha, and Hallmarked Fine Jewellery.
          </p>
          {/* Social Media Links */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Connect With Us</span>
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors" aria-label="Instagram">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors" aria-label="Facebook">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors" aria-label="Twitter">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors" aria-label="Youtube">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Customer Service */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            Customer Service
          </h4>
          <ul className="space-y-2 text-slate-400">
            {['15-Day Return Policy', 'Free Insured Shipping', 'Track Your Order', 'Lifetime Exchange & Buyback', 'Jewellery Care Guide', 'Gold Rate Calculator', 'FAQ & Help Center'].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            Brand & Story
          </h4>
          <ul className="space-y-2 text-slate-400">
            {[
              { name: 'Our Legacy & Brand Story', href: '#about-us' },
              { name: 'Founder: Mr. Sumant Kumar Soni', href: '#about-us' },
              { name: 'Our 5 Commitment Pillars', href: '#about-us' },
              { name: 'Certified Gemstone Guidance', href: '#about-us' },
              { name: 'BIS Hallmark Certification', href: '#about-us' },
              { name: 'Ratna Showroom Boutique', href: '#store-location' },
              { name: 'Custom Karigari Design Studio', href: '#about-us' },
            ].map((linkObj, idx) => (
              <li key={idx}>
                <a href={linkObj.href} className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{linkObj.name}</span>
                </a>
              </li>
            ))}

            {/* Admin CMS Trigger Link */}
            <li className="pt-1">
              <button
                onClick={onOpenCMS}
                className="hover:text-amber-400 text-amber-500/90 font-semibold flex items-center gap-1.5 transition-colors group text-xs"
                title="Open Product & Catalog Management CMS (Ctrl+Shift+A)"
              >
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span>Showroom Admin CMS</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Collections */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            What We Offer
          </h4>
          <ul className="space-y-2 text-slate-400">
            {[
              'Natural & Certified Gemstones',
              'Rudraksha & Rudraksha Malas',
              'Gold Jewellery – 18KT & 22KT',
              'IGI Certified Diamond Jewellery',
              '925 Sterling Silver Jewellery',
              'Freshwater Pearl Jewellery',
              'Custom Jewellery & Gemstone Designs'
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#about-us" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Contact Details */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            Contact Details
          </h4>
          <div className="space-y-3 text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span>Ratna Showroom: 10 No. market, Galaxy Apartment, Main Road, beside Manohar Dairy, E-3, Arera Colony, Bhopal, Madhya Pradesh 462016</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-500" />
              <span>Toll Free: 1800-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-500" />
              <span>care@amrapalijewellry.com</span>
            </div>
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Customer Care Hours</span>
              <span>Mon - Sat: 9:30 AM to 7:00 PM</span>
            </div>
          </div>
        </div>

      </div>

      {/* Payment Methods & Certifications Bar */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
        
        {/* Payment Placeholders */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          <span className="text-[10px] uppercase font-bold text-slate-500 mr-2">100% Secure Payments:</span>
          {['VISA', 'MasterCard', 'UPI / GPay', 'Net Banking', 'EMI Available', 'Cash On Delivery'].map((pay, pIdx) => (
            <span key={pIdx} className="bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300 px-2.5 py-1 rounded">
              {pay}
            </span>
          ))}
        </div>

        {/* Hallmark Badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>BIS Hallmarked Gold</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1 text-[11px]">
            <Award className="w-4 h-4 text-slate-400" />
            <span>IGI Certified Diamonds</span>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <div>
          © {new Date().getFullYear()} Amrapali Jewellers Ratna Showroom. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms & Conditions</a>
          <button 
            onClick={onOpenCMS}
            className="hover:text-slate-300 flex items-center gap-1 transition-colors text-[10px] text-slate-600 hover:text-amber-400"
            title="Showroom Staff Catalog Management CMS (Ctrl+Shift+A)"
          >
            <Lock className="w-3 h-3" />
            <span>Staff Portal (CMS)</span>
          </button>
        </div>
      </div>

    </footer>
  );
}
