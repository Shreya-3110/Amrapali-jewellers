import React from 'react';
import HorizontalCollection from './HorizontalCollection';

import rakhi7 from '../assets/7.jpeg';
import rakhi8 from '../assets/8.jpeg';
import rakhi9 from '../assets/9.jpeg';
import rakhi10 from '../assets/10.jpeg';
import rakhi11 from '../assets/11.jpeg';

export default function DiamondCollection() {
  const diamondItems = [
    { name: "Solitaire Engagement Ring in Platinum", image: rakhi7, discount: "EF-VVS CERTIFIED", code: "DMD-201" },
    { name: "Diamond Drop Dangle Earrings", image: rakhi8, discount: "CERTIFIED", code: "DMD-202" },
    { name: "Brilliant Diamond Tennis Bracelet", image: rakhi9, discount: "CERTIFIED", code: "DMD-203" },
    { name: "Diamond & Emerald Halo Necklace", image: rakhi10, discount: "EXCLUSIVE", code: "DMD-204" },
    { name: "Cluster Diamond Nose Pin", image: rakhi11, discount: "BESTSELLER", code: "DMD-205" },
  ];

  return (
    <HorizontalCollection
      id="diamond"
      badge="SPARKLING DIAMOND SHOWCASE"
      title="Diamond Jewellery Collection"
      subtitle="VVS-EF certified diamonds with precision cut and eternal luster — Price on Request"
      items={diamondItems}
    />
  );
}
