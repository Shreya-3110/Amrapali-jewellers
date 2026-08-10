import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../context/ProductContext';

export default function BestSellers() {
  const { products } = useProducts();

  const bestProducts = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="w-full py-10 bg-white border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6 pb-3 border-b border-amber-900/15">
          <div>
            <span className="text-[9px] font-serif font-bold tracking-widest text-[#8B5E14] uppercase block mb-0.5">MOST LOVED PIECES</span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
              Best Sellers
            </h2>
          </div>
          <a href="#silver" className="text-xs font-serif font-bold uppercase tracking-wider text-[#8B5E14] hover:text-[#734C0E] transition-colors">
            View All →
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestProducts.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
