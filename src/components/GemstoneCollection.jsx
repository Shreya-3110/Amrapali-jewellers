import React from 'react';
import HorizontalCollection from './HorizontalCollection';

import emeraldNecklace from '../assets/emerald_necklace.png';
import rubyChoker from '../assets/ruby_choker.png';
import gemstonesCat from '../assets/gemstones_cat.png';
import bridalCat from '../assets/bridal_cat.png';
import diamondCat from '../assets/diamond_cat.png';

export default function GemstoneCollection() {
  const gemstoneItems = [
    { name: "Royal Colombian Emerald & Diamond Halo Necklace", image: emeraldNecklace, discount: "UNHEATED NATURAL", code: "GEM-401" },
    { name: "Burmese Pigeon Blood Ruby Choker Set", image: rubyChoker, discount: "RARE CERTIFIED", code: "GEM-402" },
    { name: "Navratna Celestial 9-Gemstone Gold Pendant", image: gemstonesCat, discount: "SACRED HERITAGE", code: "GEM-403" },
    { name: "Zambian Emerald & Polki Bridal Haar", image: bridalCat, discount: "SHOWROOM EXCLUSIVE", code: "GEM-404" },
    { name: "Royal Blue Sapphire Solitaire Cocktail Ring", image: diamondCat, discount: "CERTIFIED 4.2CT", code: "GEM-405" },
  ];

  return (
    <HorizontalCollection
      id="gemstone"
      badge="PRECIOUS GEMSTONE ATELIER"
      title="Precious Gemstone Collection"
      subtitle="Certified natural Emeralds, Burmese Rubies, and Navratna heritage pieces set in fine 22KT gold"
      items={gemstoneItems}
    />
  );
}
