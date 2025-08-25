
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold">Trusted by Industry Leaders</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
            We're proud to have partnered with brands that share our passion for quality.
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800/50 p-8 rounded-lg shadow-lg flex flex-col">
              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-lg text-brand-gold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
