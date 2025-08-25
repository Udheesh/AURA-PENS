
import React from 'react';
import { PENS } from '../constants';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-dark">Our Collection</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Each pen is meticulously crafted to offer a superior writing experience and a premium feel.
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PENS.map((pen) => (
            <ProductCard key={pen.id} pen={pen} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
