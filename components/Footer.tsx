
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400">
      <div className="container mx-auto px-6 py-8 text-center">
        <a href="#" className="flex items-center justify-center space-x-2 mb-4">
            <svg className="w-8 h-8 text-brand-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span className="text-2xl font-serif font-bold text-white">Aura Pens</span>
        </a>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aura Pens. All Rights Reserved.
        </p>
        <p className="text-xs mt-1">Crafting Legacies, One Pen at a Time.</p>
      </div>
    </footer>
  );
};

export default Footer;
