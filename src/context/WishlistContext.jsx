import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('amrapali_wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (err) {
      console.error('Failed to load wishlist from localStorage', err);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('amrapali_wishlist', JSON.stringify(wishlistItems));
    } catch (err) {
      console.error('Failed to save wishlist to localStorage', err);
    }
  }, [wishlistItems]);

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id || item.name === id);
  };

  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const itemId = product.id || product.name;
      const exists = prev.some((item) => (item.id || item.name) === itemId);
      if (exists) {
        return prev.filter((item) => (item.id || item.name) !== itemId);
      } else {
        return [{ ...product, id: itemId }, ...prev];
      }
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => (item.id || item.name) !== id));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem('amrapali_wishlist');
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
