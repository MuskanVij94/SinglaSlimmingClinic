import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-900/70 dark:from-black/90 dark:to-blue-900/80"></div>
        <img
          src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Doctor consulting patient"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Singla Slimming Clinic Now in Gurgaon
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              1,32,232 patients have transformed their bodies with our doctor-led, non-surgical slimming method — based on medical science.            </p>
          </div>


          <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#contact"
              className="bg-white dark:bg-blue-500 hover:bg-blue-50 dark:hover:bg-blue-600 text-blue-700 dark:text-white font-semibold py-3.5 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="bg-blue-600/20 hover:bg-blue-600/30 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-3.5 px-8 rounded-full inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-white/50"
            >
              Explore Our Services
            </a>
          </div>

          <div className={`mt-16 flex flex-wrap gap-6 transform transition-all duration-1000 delay-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <p className="text-white font-bold text-3xl">132,232</p>
              <p className="text-blue-100 text-sm">Success Stories</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <p className="text-white font-bold text-3xl">21+ Years</p>
              <p className="text-blue-100 text-sm">of Legacy</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <p className="text-white font-bold text-3xl">9+ Clinics</p>
              <p className="text-blue-100 text-sm">Across India</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <p className="text-white font-bold text-3xl">2.7 million+</p>
              <p className="text-blue-100 text-sm">Kilos Lost</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;