import React from 'react';
import HorizontalCollection from './HorizontalCollection';

import antiqueOm from '../assets/AntiqueOm.jpeg';
import rakhi2 from '../assets/2.jpeg';
import rakhi3 from '../assets/3.jpeg';
import lionRakhi from '../assets/Lion.jpeg';
import deviRakhi from '../assets/Devi.jpeg';
import rakhi6 from '../assets/6.jpeg';

export default function GoldCollection() {
  const goldItems = [
    { name: "22KT BIS Hallmarked Gold Kada", image: antiqueOm, discount: "GOLD 22KT", code: "GLD-101" },
    { name: "Traditional Gold Jhumka Earrings", image: rakhi2, discount: "GOLD 22KT", code: "GLD-102" },
    { name: "Layered Gold Rani Haar Necklace", image: rakhi3, discount: "GOLD 22KT", code: "GLD-103" },
    { name: "Royal Lion Motif Gold Pendant", image: lionRakhi, discount: "GOLD 22KT", code: "GLD-104" },
    { name: "Divine Devi Motif Gold Pendant", image: deviRakhi, discount: "GOLD 22KT", code: "GLD-105" },
    { name: "24KT Pure Laxmi Gold Coin", image: rakhi6, discount: "24KT PURE", code: "GLD-106" },
  ];

  return (
    <HorizontalCollection
      id="gold"
      badge="PURE 22KT & 24KT GOLD SHOWCASE"
      title="Gold Jewellery Collection"
      subtitle="Certified gold ornaments styled for heritage grace and modern luxury — Price on Request"
      items={goldItems}
    />
  );
}
