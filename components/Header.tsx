
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Process', href: '#process' },
    { name: 'AI Sloganizer', href: '#slogan-generator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <span className="text-2xl font-serif font-bold text-brand-dark">Aura Pens</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-gold transition-colors duration-300 font-medium">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-brand-dark text-white font-bold py-2 px-6 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 transform hover:scale-105">
          Get a Quote
        </a>
        {/* Mobile menu button would go here */}
      </div>
    </header>
  );
};

export default Header;
