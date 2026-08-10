import React, { useState, useEffect } from 'react';
import { ProductProvider } from './context/ProductContext';
import { WishlistProvider } from './context/WishlistContext';
import AdminCMS from './components/AdminCMS';
import WishlistDrawer from './components/WishlistDrawer';
import FreeGemsRecommendationModal from './components/FreeGemsRecommendationModal';
import FloatingGemsRecommendationBadge from './components/FloatingGemsRecommendationBadge';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ShopByCategory from './components/ShopByCategory';
import FluidPromoBanner from './components/FluidPromoBanner';
import FeaturedCollections from './components/FeaturedCollections';
import GemstoneCollection from './components/GemstoneCollection';
import GoldSilverDiamondCollage from './components/GoldSilverDiamondCollage';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import SilverCollection from './components/SilverCollection';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import Newsletter from './components/Newsletter';
import StoreLocation from './components/StoreLocation';
import Footer from './components/Footer';

export default function App() {
  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);

  // Keyboard shortcut Ctrl + Shift + A to trigger Admin CMS modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsCMSOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ProductProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-[#FAF7F2] font-sans text-slate-800 flex flex-col relative">
          
          {/* Admin CMS Modal */}
          <AdminCMS isOpen={isCMSOpen} onClose={() => setIsCMSOpen(false)} />

          {/* Wishlist Drawer */}
          <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />

          {/* Free Vedic Gemstone Recommendation Modal */}
          <FreeGemsRecommendationModal 
            isOpen={isRecommendationOpen} 
            onClose={() => setIsRecommendationOpen(false)} 
          />

          {/* Floating Side Badge (Matches "फ्री जन्मपत्री / GEMS" badge in reference photo) */}
          <FloatingGemsRecommendationBadge 
            onOpenModal={() => setIsRecommendationOpen(true)} 
          />

          {/* 1. Top Announcement Bar */}
          <AnnouncementBar />

          {/* 2. Header */}
          <Header 
            onOpenWishlist={() => setIsWishlistOpen(true)}
          />

          {/* 3. Navigation Bar */}
          <Navbar 
            onOpenRecommendation={() => setIsRecommendationOpen(true)}
          />

          {/* Main Content Area */}
          <main className="flex-1">
            {/* 4. Hero Banner Slider */}
            <HeroSlider />

            {/* 5. Floating Trust Assurance Bar (Directly below Hero) */}
            <WhyChooseUs />

            {/* 6. Shop By 7 Ratna & Gemstone Categories (Exact Reference Layout) */}
            <ShopByCategory 
              onOpenRecommendation={() => setIsRecommendationOpen(true)}
            />

            {/* 7. Ultra-Minimalist Editorial Collection Showcase (The Navaratna Drops, Temple Arch Cuff, The Polki Solitaire) */}
            <FeaturedCollections />

            {/* 8. Wavy Fluid Organic Promo Showcase Section */}
            <FluidPromoBanner />

            {/* 9. Precious Gemstone & Vedic Ratna Collection (Primary Focus) */}
            <GemstoneCollection 
              onOpenRecommendation={() => setIsRecommendationOpen(true)}
            />

            {/* 10. Gold, Silver & Diamond Showroom Collage Section (Showroom Walk-in Feature) */}
            <GoldSilverDiamondCollage />

            {/* 11. New Arrivals */}
            <NewArrivals />

            {/* 12. Best Sellers */}
            <BestSellers />

            {/* 13. Silver Rakhi & Puja Collection */}
            <SilverCollection />

            {/* 14. About Amrapali Jewellers Ratna Showroom (Legacy, Founder, Offerings & Pillars) */}
            <AboutUs />

            {/* 15. Customer Testimonials */}
            <Testimonials />

            {/* 16. Instagram Gallery */}
            <InstagramGallery />

            {/* 17. Newsletter Subscription */}
            <Newsletter />

            {/* 18. Store Location */}
            <StoreLocation />
          </main>

          {/* 19. Footer */}
          <Footer onOpenCMS={() => setIsCMSOpen(true)} />
        </div>
      </WishlistProvider>
    </ProductProvider>
  );
}
