import React from 'react';
import { Image as ImageIcon, Heart, MessageCircle, MoreHorizontal, Play } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard(product) {
  const { name, discount, code, image, video, id } = product;
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isSaved = isInWishlist(id || name);
  const isVideo = video || (typeof image === 'string' && (image.endsWith('.mp4') || image.includes('.mp4')));

  const handleWhatsAppEnquire = () => {
    const message = encodeURIComponent(
      `Hello Amrapali Jewellers Ratna Showroom, I would like to inquire about "${name || 'Certified Gemstone Piece'}" (Code: ${code || 'SHOWROOM-PIECE'}). Please share certification details and price.`
    );
    window.open(`https://wa.me/919412288300?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white border border-amber-800/15 rounded-3xl p-5 flex flex-col justify-between items-center text-center hover:border-[#C5A059] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out group relative min-h-[460px]">
      
      {/* Top Header Row: Brand & Three Dots Menu */}
      <div className="w-full flex items-center justify-between mb-3 text-[10px] font-serif font-bold text-[#8B5E14] tracking-widest uppercase border-b border-amber-900/10 pb-2">
        <span>AMRAPALI & CO.</span>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-1.5 rounded-full transition-all cursor-pointer ${
              isSaved ? 'bg-[#8B5E14] text-white shadow-xs scale-110' : 'bg-amber-50 text-amber-800/70 hover:bg-amber-100 hover:scale-105'
            }`}
            aria-label="Wishlist product"
            title={isSaved ? "Remove from Wishlist" : "Save to Wishlist"}
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <MoreHorizontal className="w-4 h-4 text-[#8B5E14]" />
        </div>
      </div>

      {/* Center Image/Video Container: Vertical Portrait Aspect Ratio (4/5) */}
      <div className="w-full aspect-[4/5] bg-[#FAF7F2] border border-amber-900/10 rounded-2xl overflow-hidden relative group-hover:bg-amber-50/50 transition-colors shadow-inner my-1">
        {isVideo ? (
          <video
            src={video || image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        ) : image ? (
          <img
            src={image}
            alt={name || 'Jewellery Showcase'}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-4 text-amber-800/40">
            <ImageIcon className="w-10 h-10 mb-2 text-amber-800/40 group-hover:scale-105 transition-transform stroke-[1.5]" />
            <span className="text-[9px] font-mono text-amber-800/40">Amrapali Product</span>
            <span className="text-[9px] text-amber-800/40 mt-0.5 font-mono">{code || 'AJ-1001'}</span>
          </div>
        )}

        {/* Optional Tag Ribbon */}
        {discount && (
          <div className="absolute top-3 left-3 bg-[#8B5E14]/90 backdrop-blur-md text-amber-50 text-[8px] font-serif font-bold px-2.5 py-0.5 rounded uppercase tracking-wider shadow-xs">
            ✦ {discount}
          </div>
        )}
      </div>

      {/* 3 Sparkles Diamond Accent Divider Line */}
      <div className="flex items-center justify-center gap-2 text-[#8B5E14] text-xs my-2">
        <div className="h-[1px] w-6 bg-amber-900/15" />
        <span className="text-[10px]">✦</span>
        <span className="text-sm font-bold">✦</span>
        <span className="text-[10px]">✦</span>
        <div className="h-[1px] w-6 bg-amber-900/15" />
      </div>

      {/* Typography & Cursive Script Title Block */}
      <div className="space-y-0.5 mb-3 w-full">
        <span className="text-[11px] font-serif font-bold text-[#8B5E14] tracking-[0.2em] uppercase block">
          CERTIFIED RATNA PIECE
        </span>
        <h4 className="font-serif text-sm sm:text-base text-stone-900 font-bold leading-snug line-clamp-2 group-hover:text-[#8B5E14] transition-colors py-0.5">
          {name || "Certified Vedic Gemstone"}
        </h4>
        <span className="text-[10px] font-mono text-stone-500 block pt-0.5">
          Code: {code || 'SHOWROOM-PIECE'}
        </span>
      </div>

      {/* Bottom WhatsApp Consult Button */}
      <div className="w-full">
        <button
          onClick={handleWhatsAppEnquire}
          className="w-full bg-[#FAF0E6] hover:bg-[#8B5E14] text-[#8B5E14] hover:text-white text-xs font-serif font-bold py-2.5 px-4 rounded-full flex items-center justify-center gap-2 tracking-wider transition-all duration-300 border border-amber-300/60 shadow-xs cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Inquire On WhatsApp</span>
        </button>
      </div>

    </div>
  );
}
