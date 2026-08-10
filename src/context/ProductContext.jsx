import React, { createContext, useContext, useState, useEffect } from 'react';

import gemstoneRef from '../assets/gemstone_cat_reference.png';
import rudrakshaRef from '../assets/rudraksha_cat_reference.png';
import braceletsRef from '../assets/bracelets_cat_reference.png';
import malaRef from '../assets/mala_cat_reference.png';
import ringsRef from '../assets/rings_cat_reference.png';
import crystalProductsRef from '../assets/crystal_products_cat_reference.png';
import emeraldNecklace from '../assets/emerald_necklace.png';
import rubyChoker from '../assets/ruby_choker.png';
import antiqueOm from '../assets/AntiqueOm.jpeg';
import rakhi2 from '../assets/2.jpeg';
import rakhi3 from '../assets/3.jpeg';
import lionRakhi from '../assets/Lion.jpeg';
import deviRakhi from '../assets/Devi.jpeg';
import rakhi6 from '../assets/6.jpeg';

const ProductContext = createContext();

const DEFAULT_PRODUCTS = [
  // --- 1. PRECIOUS VEDIC GEMSTONES (RATNAS) ---
  {
    id: 'gem-1',
    name: 'Certified Ceylon Yellow Sapphire (Pukhraj) 5.25 Ratti',
    category: 'Gemstone',
    discount: 'GOVT. LAB CERTIFIED',
    code: 'RAT-PUK-01',
    description: 'Unheated, untreated natural Ceylon Yellow Sapphire representing Guru Graha (Jupiter). Astrologically energized with Vedic mantras.',
    image: gemstoneRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-2',
    name: 'Natural Colombian Emerald (Panna) 4.80 Ratti',
    category: 'Gemstone',
    discount: 'IGI CERTIFIED',
    code: 'RAT-PAN-02',
    description: 'Vivid deep green unheated Colombian emerald for Budh Graha (Mercury). Enhances business acumen, memory, and speech.',
    image: emeraldNecklace,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-3',
    name: 'Royal Burmese Pigeon Blood Ruby (Manik) 3.50 Ratti',
    category: 'Gemstone',
    discount: 'RARE UNHEATED',
    code: 'RAT-MAN-03',
    description: 'Natural unheated Burmese ruby for Surya Graha (Sun). Bestows royal authority, leadership, and vitality.',
    image: rubyChoker,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'gem-4',
    name: 'Ceylon Royal Blue Sapphire (Neelam) 4.10 Ratti',
    category: 'Gemstone',
    discount: 'GOVT. CERTIFIED',
    code: 'RAT-NEE-04',
    description: 'Authentic transparent Ceylon Blue Sapphire representing Shani Dev (Saturn). Instant planetary impact and protection.',
    image: gemstoneRef,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },

  // --- 2. SACRED RUDRAKSHA ---
  {
    id: 'rud-1',
    name: 'Original 1 Mukhi Half Moon Nepali Rudraksha',
    category: 'Rudraksha',
    discount: 'AUTHENTIC NEPALI',
    code: 'RUD-01M-01',
    description: 'Sacred Ek Mukhi Rudraksha blessed by Lord Shiva. Certified genuine with laboratory x-ray verification certificate.',
    image: rudrakshaRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'rud-2',
    name: 'Nepali 1 to 14 Mukhi Sarva Siddha Mala in Silver',
    category: 'Rudraksha',
    discount: 'SARVA SIDDHA',
    code: 'RUD-SID-02',
    description: 'Supreme auspicious combination of 1 to 14 Mukhi Nepali beads strung in pure 925 sterling silver caps.',
    image: rudrakshaRef,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'rud-3',
    name: 'Sacred Gauri Shankar Rudraksha (Nepali)',
    category: 'Rudraksha',
    discount: 'MARITAL HARMONY',
    code: 'RUD-GSH-03',
    description: 'Naturally conjoined twin Rudraksha symbolizing the divine union of Shiva & Parvati. Blesses marital bliss.',
    image: rudrakshaRef,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },

  // --- 3. HEALING GEMSTONE BRACELETS ---
  {
    id: 'brc-1',
    name: 'Golden Tiger Eye Energy & Confidence Bracelet',
    category: 'Bracelets',
    discount: 'NATURAL STONE',
    code: 'BRC-TIG-01',
    description: 'Triple-grade polished Tiger Eye gemstone beads for courage, grounding energy, and solar plexus activation.',
    image: braceletsRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'brc-2',
    name: 'Rose Quartz Love & Compassion Healing Bracelet',
    category: 'Bracelets',
    discount: 'HEART CHAKRA',
    code: 'BRC-RSQ-02',
    description: 'Gentle pink Brazilian Rose Quartz beads for attracting unconditional love, harmony, and emotional healing.',
    image: braceletsRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 'brc-3',
    name: 'Lapis Lazuli Wisdom & Third-Eye Chakra Bracelet',
    category: 'Bracelets',
    discount: 'ROYAL GRADE',
    code: 'BRC-LAP-03',
    description: 'Natural deep indigo Lapis Lazuli with golden pyrite inclusions. Enhances intuition and intellectual clarity.',
    image: braceletsRef,
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },

  // --- 4. SACRED JAPA MALAS ---
  {
    id: 'mal-1',
    name: '108+1 Beads Natural Pure Sphatik (Quartz) Japa Mala',
    category: 'Mala',
    discount: 'DIAMOND CUT 8MM',
    code: 'MAL-SPH-01',
    description: 'Cooling natural quartz crystal beads for peace of mind, focus, and chanting Lakshmi/Durga mantras.',
    image: malaRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'mal-2',
    name: 'Original 5 Mukhi Nepali Rudraksha Japa Rosary (108 Beads)',
    category: 'Mala',
    discount: 'PRANA PRATISHTHA',
    code: 'MAL-RUD-02',
    description: 'Vedic sanctified 5 Mukhi Nepali Rudraksha mala tied in silk thread with auspicious tassel.',
    image: malaRef,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'mal-3',
    name: 'Sacred Red Sandalwood (Rakt Chandan) Japa Mala',
    category: 'Mala',
    discount: 'NATURAL FRAGRANCE',
    code: 'MAL-SAN-03',
    description: 'Authentic South Indian Red Sandalwood beads associated with Gayatri mantra and Mars planetary energy.',
    image: malaRef,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },

  // --- 5. ASTROLOGICAL GEMSTONE RINGS ---
  {
    id: 'rng-1',
    name: '22KT Gold Yellow Sapphire (Pukhraj) Astrological Ring',
    category: 'Rings',
    discount: 'CUSTOM KARIGARI',
    code: 'RNG-PUK-01',
    description: 'Open-back custom 22KT gold ring designed so the gemstone touches the skin as per Vedic Astrological principles.',
    image: ringsRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'rng-2',
    name: 'Pure 925 Sterling Silver Royal Blue Sapphire (Neelam) Ring',
    category: 'Rings',
    discount: '925 HALLMARK',
    code: 'RNG-NEE-02',
    description: 'Handcrafted solid 925 sterling silver ring mounted with unheated Ceylon Blue Sapphire for Shani Dev.',
    image: ringsRef,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'rng-3',
    name: 'Sacred Panchdhatu Colombian Emerald (Panna) Ring',
    category: 'Rings',
    discount: '5-METAL ALLOY',
    code: 'RNG-PAN-03',
    description: 'Traditional 5-metal astrological alloy setting crafted according to ancient Shilpa Shastra guidelines.',
    image: ringsRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },

  // --- 6. NATURAL HEALING CRYSTAL PRODUCTS ---
  {
    id: 'cry-1',
    name: 'Raw Deep Purple Amethyst Crystal Geode Cluster (500g)',
    category: 'Crystal Products',
    discount: 'NATURAL BRAZILIAN',
    code: 'CRY-AME-01',
    description: 'Magnificent deep purple raw Amethyst geode cluster for home energy purification, crown chakra healing, and calm aura.',
    image: crystalProductsRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'cry-2',
    name: 'Golden Citrine Wealth Attraction Tower Obelisk',
    category: 'Crystal Products',
    discount: 'WEALTH MAGNET',
    code: 'CRY-CIT-02',
    description: 'Faceted Golden Citrine crystal point for desk or cash counter. Radiates prosperity, luck, and positive energy.',
    image: crystalProductsRef,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'cry-3',
    name: 'Pure Clear Quartz Sacred Energy Pyramid (Vastu)',
    category: 'Crystal Products',
    discount: 'VASTU ENERGIZED',
    code: 'CRY-QUR-03',
    description: 'Hand-cut optical clear quartz pyramid for neutralizing negative electromagnetic frequencies and Vastu dosha.',
    image: crystalProductsRef,
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },

  // --- 7. PURE SILVER RAKHIS & FESTIVE COLLECTION ---
  {
    id: 'slv-1',
    name: 'Antique Om Floral Pure 925 Silver Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R01',
    description: 'Pure 925 Sterling Silver Rakhi featuring a sacred handcrafted Antique Om motif with auspicious silk thread.',
    image: antiqueOm,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'slv-2',
    name: 'Royal Peacock Craft Pure 925 Silver Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R02',
    description: 'Intricate peacock design in 925 sterling silver with artisanal detailing.',
    image: rakhi2,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'slv-3',
    name: '925 Pure Silver Divine Ganesha Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R03',
    description: 'Auspicious Lord Ganesha motif carved in solid 925 pure silver.',
    image: rakhi3,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'slv-4',
    name: 'Royal Lion Pure Silver Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R04',
    description: 'Regal Simha (Lion) motif in pure 925 sterling silver representing strength and protection.',
    image: lionRakhi,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'slv-5',
    name: 'Divine Devi Pure Silver Rakhi',
    category: 'Silver Collection',
    discount: '925 STERLING',
    code: 'SLV-R05',
    description: 'Goddess Lakshmi/Devi motif handcrafted in 925 pure sterling silver.',
    image: deviRakhi,
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'slv-6',
    name: '24KT Pure Gold Laxmi Ganesha Coin (10g)',
    category: 'Gold',
    discount: '24KT 999 PURE',
    code: 'GLD-COIN-06',
    description: '999 pure gold coin with BIS Hallmarked purity certificate for Diwali puja and auspicious gifting.',
    image: rakhi6,
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('amrapali_products_v2');
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
      localStorage.setItem('amrapali_products_v2', JSON.stringify(products));
    } catch (err) {
      console.error('Failed to save products to localStorage', err);
    }
  }, [products]);

  const addProduct = (newProd) => {
    const item = {
      id: `prod-${Date.now()}`,
      name: newProd.name || 'Untitled Product',
      category: newProd.category || 'Gemstone',
      discount: newProd.discount || 'CERTIFIED NATURAL',
      code: newProd.code || `AJ-SKU-${Math.floor(100 + Math.random() * 900)}`,
      description: newProd.description || 'Exclusive certified piece from Amrapali Jewellers Ratna Showroom.',
      image: newProd.image || gemstoneRef,
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
    localStorage.removeItem('amrapali_products_v2');
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
