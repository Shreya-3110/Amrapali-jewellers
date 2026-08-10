import React, { createContext, useContext, useState, useEffect } from 'react';

// Images
import ratnaImg from '../assets/Ratna.jpeg';
import img2R from '../assets/2R.jpeg';
import img3R from '../assets/3R.jpeg';
import img4R from '../assets/4R.jpeg';
import img5R from '../assets/5R.jpeg';
import img6R from '../assets/6R.jpeg';
import img7R from '../assets/7R.jpeg';
import img8R from '../assets/8R.jpeg';
import img9R from '../assets/9R.jpeg';
import img10R from '../assets/10R.jpeg';

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

// Videos
import video11 from '../assets/11R.mp4';
import video12 from '../assets/12R.mp4';
import video13 from '../assets/13R.mp4';
import video14 from '../assets/14r.mp4';

const ProductContext = createContext();

const DEFAULT_PRODUCTS = [
  // --- 1. NEWLY ADDED REAL HEALING GEMSTONES & CRYSTAL BRACELETS ---
  {
    id: 'gem-real-1',
    name: 'Pure Natural Sphatik (Clear Quartz) Aura Balancing Bracelet',
    category: 'Bracelets',
    discount: 'NATURAL SPHATIK',
    code: 'RAT-SPH-01',
    description: 'High-clarity natural Sphatik (Quartz) gemstone beads resting on pure silk for cooling planetary energy and meditation focus.',
    image: ratnaImg,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-real-2',
    name: 'Natural White Moonstone & Selenite Crystal Bracelet',
    category: 'Bracelets',
    discount: 'CHANDRA GRAHA',
    code: 'RAT-MON-02',
    description: 'Luminous natural White Moonstone gemstone beads for emotional balance, mental peace, and lunar blessings.',
    image: img2R,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-real-3',
    name: '7 Chakra Navratna Multi-Gemstone Bracelet with Amethyst Geode',
    category: 'Bracelets',
    discount: '7 CHAKRA BALANCE',
    code: 'RAT-CHK-03',
    description: 'Supreme 7-Chakra balancing gemstone bracelet featuring Amethyst, Carnelian, Jade, Turquoise, and Lapis Lazuli on raw geode.',
    image: img3R,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-real-4',
    name: 'Golden Sunstone & Carnelian Vitality Solar Plexus Bracelet',
    category: 'Bracelets',
    discount: 'SURYA ENERGY',
    code: 'RAT-SUN-04',
    description: 'Radiant orange-gold Sunstone and Carnelian beads providing warmth, self-confidence, vitality, and solar power.',
    image: img4R,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 'gem-real-5',
    name: 'Authentic Tibetan Turquoise (Firoza) Protection Bracelet',
    category: 'Bracelets',
    discount: 'NATURAL FIROZA',
    code: 'RAT-TRQ-05',
    description: 'Natural sky-blue Turquoise beads with matrix webbing for travel protection, Guru-Brihaspati blessings, and good fortune.',
    image: img5R,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-real-6',
    name: 'Vedic Navratna & Multi-Energy Healing Stones Bracelet',
    category: 'Bracelets',
    discount: 'NAVRATNA ENERGY',
    code: 'RAT-NAV-06',
    description: 'Hand-selected natural planetary healing stones harmonizing all 9 Grahas for overall well-being and prosperity.',
    image: img6R,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 'gem-real-7',
    name: 'Natural Green Fluorite & Jade Heart Chakra Abundance Bracelet',
    category: 'Bracelets',
    discount: 'HEART CHAKRA',
    code: 'RAT-FLU-07',
    description: 'Translucent Green Fluorite beads resting in an abalone shell for stress relief, mental clarity, and wealth magnetism.',
    image: img7R,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-real-8',
    name: 'Matte Black Onyx & Tourmaline Evil-Eye Shield Bracelet with Pyrite',
    category: 'Bracelets',
    discount: 'SHANI & RAHU SHIELD',
    code: 'RAT-ONX-08',
    description: 'Matte Black Onyx beads wrapped around golden Pyrite cluster for warding off Nazar (evil eye), negativity, and fear.',
    image: img8R,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-real-9',
    name: 'Royal Lapis Lazuli & Golden Pyrite Inclusions Bracelet',
    category: 'Bracelets',
    discount: 'THIRD EYE CHAKRA',
    code: 'RAT-LAP-09',
    description: 'Deep royal blue celestial Lapis Lazuli beads with natural shimmering golden pyrite flecks for wisdom and truth.',
    image: img9R,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'gem-real-10',
    name: '7 Chakra Volcanic Lava Stone Grounding & Diffuser Bracelet',
    category: 'Bracelets',
    discount: 'LAVA & PYRITE',
    code: 'RAT-LAV-10',
    description: 'Porous volcanic lava beads paired with 7 Chakra crystals for aromatherapy essential oil diffusion and Muladhara grounding.',
    image: img10R,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },

  // --- 2. PRECIOUS VEDIC GEMSTONES (RATNAS) ---
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

  // --- 3. SACRED RUDRAKSHA ---
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
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('amrapali_products_v3');
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
      localStorage.setItem('amrapali_products_v3', JSON.stringify(products));
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
    localStorage.removeItem('amrapali_products_v3');
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
