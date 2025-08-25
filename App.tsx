
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Customization from './components/Customization';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import SloganGenerator from './components/SloganGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <Header />
      <main>
        <Hero />
        <Products />
        <Customization />
        <Process />
        <SloganGenerator />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
