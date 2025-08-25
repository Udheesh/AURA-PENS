
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center text-white">
      <div className="absolute inset-0 bg-black overflow-hidden">
        <img src="https://picsum.photos/id/122/1920/1280" alt="Premium pens on a dark background" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="relative container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight shadow-text">
          Elevate Your Brand with Every Stroke
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          We provide exquisite, fully customizable pens for businesses that value quality and craftsmanship. Leave a lasting impression with a writing instrument that speaks volumes.
        </p>
        <a 
          href="#products" 
          className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Discover Our Collection
        </a>
      </div>
    </section>
  );
};

export default Hero;
