import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import IdealWeight from './components/IdealWeight';
import Awards from './components/Awards';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Awards/>
        <Services />
        <Roadmap />
        <WhyChooseUs />
        <IdealWeight />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;