
import React from 'react';
import { CUSTOMIZATION_OPTIONS } from '../constants';
import type { CustomizationOption } from '../types';


const CustomizationOptionCard: React.FC<{option: CustomizationOption}> = ({ option }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
        <div className="flex-shrink-0 bg-brand-gold/10 p-3 rounded-full">
            {option.icon}
        </div>
        <div>
            <h3 className="text-lg font-bold font-serif text-brand-dark">{option.title}</h3>
            <p className="text-gray-600 mt-1">{option.description}</p>
        </div>
    </div>
);


const Customization: React.FC = () => {
  return (
    <section id="customization" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 lg:h-full rounded-lg overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/id/450/800/1000" alt="Customized pens being crafted" className="absolute inset-0 w-full h-full object-cover"/>
                 <div className="absolute inset-0 bg-brand-dark opacity-40"></div>
            </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Unmistakably Yours</h2>
            <p className="text-gray-600 mb-8 max-w-xl">
              Our white-labeling service allows you to transform our premium pens into a unique reflection of your brand. We offer a suite of customization options to ensure your vision is perfectly realized.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CUSTOMIZATION_OPTIONS.map((option) => (
                <CustomizationOptionCard key={option.id} option={option}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
