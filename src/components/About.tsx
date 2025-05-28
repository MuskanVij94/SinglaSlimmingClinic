import React from 'react';

import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-white">
      <div 
        ref={ref}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
          <img 
            src="/images/anju.png"
            alt="Dr. Anju Singla" 
            className="w-full h-auto rounded-xl shadow-xl"
          />

          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Legacy of Excellence in Wellness
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded by Dr. Anju Singla, a nationally and internationally acclaimed expert in weight management, 
              Singla Slimming Clinic has empowered over 250,000 individuals on their wellness journeys.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our mission is to provide effective, safe, and personalized slimming solutions without the need for
              surgery or medication. With successful centers in Ludhiana, Jalandhar, Firozpur, and Mohali, 
              we're now bringing our 19+ years of expertise to Gurgaon.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-bold text-2xl mb-1">19+</div>
                <div className="text-gray-700">Years of Experience</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-bold text-2xl mb-1">5</div>
                <div className="text-gray-700">Clinic Locations</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-bold text-2xl mb-1">250K+</div>
                <div className="text-gray-700">Satisfied Clients</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-bold text-2xl mb-1">100%</div>
                <div className="text-gray-700">Non-Invasive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;