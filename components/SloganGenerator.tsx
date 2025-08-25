
import React, { useState } from 'react';
import { generateSlogans } from '../services/geminiService';
import { CheckIcon } from './IconComponents';

const SloganGenerator: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [slogans, setSlogans] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSlogans([]);

    try {
      const generated = await generateSlogans(brandName, industry);
      if (generated.length === 0) {
        setError('Could not generate slogans. Please try different keywords.');
      } else {
        setSlogans(generated);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="slogan-generator" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-dark">Find Your Perfect Tagline</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Need inspiration? Use our AI Sloganizer to generate taglines for your branded pens.
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-1">Your Brand Name</label>
              <input
                type="text"
                id="brandName"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="e.g., Apex Financial"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold transition"
                required
              />
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Your Industry</label>
              <input
                type="text"
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g., Finance, Law, Technology"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold transition"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-dark text-white font-bold py-3 px-6 rounded-md hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                'Generate Slogans'
              )}
            </button>
          </form>

          <div className="bg-gray-50 p-6 rounded-md border border-gray-200 min-h-[200px]">
            <h3 className="font-serif font-bold text-lg text-brand-dark mb-4">Generated Slogans</h3>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {slogans.length > 0 && (
              <ul className="space-y-3">
                {slogans.map((slogan, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckIcon className="w-5 h-5 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                    <span>{slogan}</span>
                  </li>
                ))}
              </ul>
            )}
            {!isLoading && slogans.length === 0 && !error && (
                <p className="text-gray-500 text-center mt-8">Your slogans will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganGenerator;
