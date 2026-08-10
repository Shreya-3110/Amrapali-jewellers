import React from 'react';
import HorizontalCollection from './HorizontalCollection';
import { useProducts } from '../context/ProductContext';

export default function SilverCollection() {
  const { products } = useProducts();

  const silverItems = products.filter(
    (p) => p.category === 'Silver Collection' || p.category === 'Silver Rakhis'
  );

  return (
    <HorizontalCollection
      id="silver"
      badge="PURE 925 STERLING SILVER RAKHI SHOWCASE"
      title="Latest Silver Rakhi Collection"
      subtitle="Exclusive handcrafted pure 925 sterling silver Rakhis & Lumbas — Showroom Showcase (Price on Request)"
      items={silverItems}
    />
  );
}
