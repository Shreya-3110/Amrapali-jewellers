import React, { useState, useEffect } from 'react';
import { ProductProvider } from './context/ProductContext';
import { WishlistProvider } from './context/WishlistContext';
import AdminCMS from './components/AdminCMS';
import WishlistDrawer from './components/WishlistDrawer';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ShopByCategory from './components/ShopByCategory';
import FluidPromoBanner from './components/FluidPromoBanner';
import FeaturedCollections from './components/FeaturedCollections';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import GoldCollection from './components/GoldCollection';
import DiamondCollection from './components/DiamondCollection';
import GemstoneCollection from './components/GemstoneCollection';
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
        <div className="min-h-screen bg-[#FAF7F2] font-sans text-slate-800 flex flex-col">
          {/* Admin CMS Modal */}
          <AdminCMS isOpen={isCMSOpen} onClose={() => setIsCMSOpen(false)} />

          {/* Wishlist Drawer */}
          <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />

          {/* 1. Top Announcement Bar */}
          <AnnouncementBar />

          {/* 2. Header */}
          <Header 
            onOpenWishlist={() => setIsWishlistOpen(true)}
          />

          {/* 3. Navigation Bar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-1">
            {/* 4. Hero Banner Slider */}
            <HeroSlider />

            {/* 5. Floating Trust Assurance Bar (Directly below Hero) */}
            <WhyChooseUs />

            {/* 6. Ultra-Minimalist Editorial Collection Showcase (The Navaratna Drops, Temple Arch Cuff, The Polki Solitaire) */}
            <FeaturedCollections />

            {/* 7. Shop By Category Section */}
            <ShopByCategory />

            {/* 8. Wavy Fluid Organic Promo Showcase Section */}
            <FluidPromoBanner />

            {/* 9. New Arrivals */}
            <NewArrivals />

            {/* 10. Best Sellers */}
            <BestSellers />

            {/* 11. Gold Collection */}
            <GoldCollection />

            {/* 12. Diamond Collection */}
            <DiamondCollection />

            {/* 13. Gemstone Collection */}
            <GemstoneCollection />

            {/* 14. Silver Collection */}
            <SilverCollection />

            {/* 15. About Amrapali Jewellers Ratna Showroom (Legacy, Founder, Offerings & Pillars) */}
            <AboutUs />

            {/* 16. Customer Testimonials */}
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
