import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../context/ProductContext';

export default function NewArrivals() {
  const { products } = useProducts();

  const newProducts = products.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <section id="new-arrivals" className="w-full py-10 bg-[#FAF7F2] border-b border-amber-900/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6 pb-3 border-b border-amber-900/15">
          <div>
            <span className="text-[9px] font-serif font-bold tracking-widest text-[#8B5E14] uppercase block mb-0.5">FRESH FROM CRAFTSMANSHIP</span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
              New Arrivals
            </h2>
          </div>
          <a href="#silver" className="text-xs font-serif font-bold uppercase tracking-wider text-[#8B5E14] hover:text-[#734C0E] transition-colors">
            View All →
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newProducts.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
