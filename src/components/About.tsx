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
              src="/images/doctor.jpg"
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
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Singla Slimming Clinic is a wellness center specializing in non-invasive weight loss solutions. Established in 2003 by Dr. Singla, the clinic has expanded its presence across multiple cities in India like Ludhiana, Jalandhar, Mohali, Zirakpur, and Amritsar. <span className="font-bold">Now we are in Gurgaon and Delhi</span>.
            </p>

            <p className="text-blue-700 font-semibold text-lg mb-4">
              Because your body deserves a second chance.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              No gym. No medicine. Just medical science &amp; the right treatment.
            </p>

            <div className="bg-blue-100 text-blue-800 px-5 py-3 rounded-lg mb-8 font-semibold inline-block shadow-sm">
             Ready to Start Your Transformation? Talk to our experts for a Free Consultation!
            </div>

            <div className="bg-blue-50 p-5 rounded-lg mb-8 shadow-sm">
              <h4 className="text-xl md:text-2xl font-semibold text-blue-700 mb-3">
                Lose 4 - 12 kg in One Month
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Without Exercise</li>
                <li>Without Medicine</li>
                <li>Without Surgery</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-bold text-2xl mb-1">21+</div>
                <div className="text-gray-700">Years of Experience</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-bold text-2xl mb-1">9+</div>
                <div className="text-gray-700">Clinic Locations</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-bold text-2xl mb-1">132K+</div>
                <div className="text-gray-700">Satisfied Clients</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-blue-700 font-bold text-2xl mb-1">2.7 million+</div>
                <div className="text-gray-700">Kilos Lost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
