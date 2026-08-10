import React from 'react';
import { X, Heart, Trash2, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export default function WishlistDrawer({ isOpen, onClose }) {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  if (!isOpen) return null;

  const handleWhatsAppEnquiry = (item) => {
    const message = encodeURIComponent(
      `Hello Amrapali Jewellers Ratna Showroom, I would like to inquire about "${item.name}" (Code: ${item.code || 'SHOWROOM-PIECE'}). Please share details and availability.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-xs flex justify-end">
      
      {/* Slide-Over Drawer Container */}
      <div className="bg-[#FAF7F2] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-amber-900/20 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="bg-[#1C1917] p-5 flex items-center justify-between border-b border-amber-900/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8B5E14] text-white flex items-center justify-center">
              <Heart className="w-4 h-4 text-amber-100 fill-amber-100" />
            </div>
            <div>
              <h2 className="text-base font-serif font-bold text-amber-50">
                My Saved Wishlist
              </h2>
              <span className="text-[10px] text-amber-400/80 font-mono block">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'Item' : 'Items'} Saved
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-amber-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body List */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-amber-100/70 border border-amber-700/30 flex items-center justify-center mb-4 text-[#8B5E14]">
                <Heart className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1C1917]">Your Wishlist is Empty</h3>
              <p className="text-xs text-stone-600 mt-1 max-w-xs leading-relaxed">
                Save your favorite 925 sterling silver Rakhis, Kundan sets, and gold ornaments by clicking the heart icon while browsing.
              </p>
              <button
                onClick={onClose}
                className="mt-6 bg-[#8B5E14] hover:bg-[#734C0E] text-amber-50 text-xs font-serif font-bold py-2.5 px-6 rounded-lg uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
              >
                <span>Browse Silver Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Header Action Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-amber-900/10 text-xs text-stone-500">
                <span>Saved Items</span>
                <button
                  onClick={clearWishlist}
                  className="text-[11px] text-amber-800 hover:text-red-700 font-serif underline"
                >
                  Clear All
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id || item.name}
                    className="bg-white border border-amber-900/15 rounded-xl p-3.5 flex gap-3 shadow-2xs hover:border-[#C5A059] transition-colors relative group"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 bg-[#FAF7F2] border border-amber-900/10 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-serif font-bold text-[#1C1917] truncate leading-tight">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromWishlist(item.id || item.name)}
                            className="text-stone-400 hover:text-red-600 transition-colors p-0.5"
                            title="Remove from Wishlist"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-[10px] text-amber-800 font-mono block mt-0.5">
                          {item.code || 'SHOWROOM-EXCLUSIVE'}
                        </span>

                        <span className="inline-block mt-1 text-[9px] font-semibold text-amber-900 bg-amber-100/60 px-2 py-0.5 rounded border border-amber-700/20">
                          Price Available On Request
                        </span>
                      </div>

                      {/* WhatsApp CTA */}
                      <button
                        onClick={() => handleWhatsAppEnquiry(item)}
                        className="mt-2 w-full bg-[#1C1917] hover:bg-[#8B5E14] text-amber-100 text-[11px] font-serif font-bold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                        <span>Enquire on WhatsApp</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </>
          )}

        </div>

        {/* Drawer Footer */}
        {wishlistItems.length > 0 && (
          <div className="bg-white p-4 border-t border-amber-900/10 space-y-3">
            <div className="flex items-center justify-center gap-2 text-[11px] text-amber-900/80 font-serif">
              <ShieldCheck className="w-4 h-4 text-[#8B5E14]" />
              <span>BIS Hallmarked • 100% Certified Silver & Gold</span>
            </div>

            <button
              onClick={() => {
                const names = wishlistItems.map((i) => i.name).join(', ');
                const message = encodeURIComponent(
                  `Hello Amrapali Jewellers Ratna Showroom, I would like to inquire about my saved wishlist items: ${names}. Please share price & showroom availability.`
                );
                window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
              }}
              className="w-full bg-[#8B5E14] hover:bg-[#734C0E] text-amber-50 text-xs font-serif font-bold py-3 px-4 rounded-lg uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Enquire All Saved Items ({wishlistItems.length})</span>
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
