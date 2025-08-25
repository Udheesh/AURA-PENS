
import React from 'react';
import type { Pen } from '../types';

interface ProductCardProps {
  pen: Pen;
}

const ProductCard: React.FC<ProductCardProps> = ({ pen }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={pen.imageUrl} 
          alt={pen.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">{pen.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{pen.description}</p>
        <div className="text-xs font-semibold uppercase text-brand-gold tracking-wider">{pen.material}</div>
      </div>
    </div>
  );
};

export default ProductCard;
