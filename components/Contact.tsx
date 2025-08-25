
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you shortly.");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-dark">Start Your Project</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Ready to create a lasting impression? Fill out the form below to receive a custom quote.
          </p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="max-w-2xl mx-auto bg-brand-light p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" id="company" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details</label>
              <textarea id="message" rows={5} required placeholder="Tell us about your needs: pen model, quantity, customization, etc." className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-brand-dark text-white font-bold py-3 px-6 rounded-md hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
                Request a Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
