import React, { createContext, useContext, useState, useEffect } from 'react';

import antiqueOm from '../assets/AntiqueOm.jpeg';
import rakhi2 from '../assets/2.jpeg';
import rakhi3 from '../assets/3.jpeg';
import lionRakhi from '../assets/Lion.jpeg';
import deviRakhi from '../assets/Devi.jpeg';
import rakhi6 from '../assets/6.jpeg';
import rakhi7 from '../assets/7.jpeg';
import rakhi8 from '../assets/8.jpeg';
import rakhi9 from '../assets/9.jpeg';
import rakhi10 from '../assets/10.jpeg';
import rakhi11 from '../assets/11.jpeg';

const ProductContext = createContext();

const DEFAULT_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Antique Om Floral Silver Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R01',
    description: 'Pure 925 Sterling Silver Rakhi featuring a sacred handcrafted Antique Om motif with silk thread.',
    image: antiqueOm,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 'prod-2',
    name: 'Royal Peacock Craft Silver Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R02',
    description: 'Intricate peacock design in 925 sterling silver with artisanal meenakari detailing.',
    image: rakhi2,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 'prod-3',
    name: '925 Pure Silver Divine Ganesha Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R03',
    description: 'Auspicious Lord Ganesha motif carved in solid 925 pure silver.',
    image: rakhi3,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 'prod-4',
    name: 'Royal Lion Pure Silver Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R04',
    description: 'Regal Simha (Lion) motif in pure 925 sterling silver representing strength and protection.',
    image: lionRakhi,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'prod-5',
    name: 'Divine Devi Pure Silver Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R05',
    description: 'Goddess Lakshmi/Devi motif handcrafted in 925 pure sterling silver.',
    image: deviRakhi,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'prod-6',
    name: 'Sterling Silver Filigree Designer Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R06',
    description: 'Hand-woven fine silver filigree wire craft Rakhi with protective rhodium polish.',
    image: rakhi6,
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'prod-7',
    name: 'Handcrafted Silver Thread Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R07',
    description: 'Pure silver centerpiece accented with premium organic silk thread.',
    image: rakhi7,
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'prod-8',
    name: 'Designer Floral Silver Lumba Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R08',
    description: 'Exquisite silver floral Lumba designed for Bhabhi, decorated with silver beads.',
    image: rakhi8,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'prod-9',
    name: 'Royal Heritage Silver Kundan Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R09',
    description: 'Kundan gemstone setting in 925 silver for royal Indian celebrations.',
    image: rakhi9,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: false,
  },
  {
    id: 'prod-10',
    name: 'Pure Silver Royal Pattern Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R10',
    description: 'Royal medallion motif carved in 925 pure silver.',
    image: rakhi10,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: false,
  },
  {
    id: 'prod-11',
    name: 'Artisanal Silver Beaded Designer Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R11',
    description: 'Hand-beaded 925 sterling silver masterpiece crafted by Ratna Showroom artisans.',
    image: rakhi11,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: false,
  },
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('amrapali_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (err) {
      console.error('Failed to load products from localStorage', err);
    }
    return DEFAULT_PRODUCTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('amrapali_products', JSON.stringify(products));
    } catch (err) {
      console.error('Failed to save products to localStorage', err);
    }
  }, [products]);

  const addProduct = (newProd) => {
    const item = {
      id: `prod-${Date.now()}`,
      name: newProd.name || 'Untitled Product',
      category: newProd.category || 'Silver Collection',
      discount: newProd.discount || 'SHOWROOM EXCLUSIVE',
      code: newProd.code || `AJ-SKU-${Math.floor(100 + Math.random() * 900)}`,
      description: newProd.description || 'Exclusive handcrafted piece from Amrapali Jewellers Ratna Showroom.',
      image: newProd.image || antiqueOm,
      isFeatured: newProd.isFeatured ?? true,
      isNewArrival: newProd.isNewArrival ?? true,
      isBestSeller: newProd.isBestSeller ?? false,
    };
    setProducts((prev) => [item, ...prev]);
  };

  const updateProduct = (id, updatedData) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const resetCatalog = () => {
    setProducts(DEFAULT_PRODUCTS);
    localStorage.removeItem('amrapali_products');
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        resetCatalog,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
