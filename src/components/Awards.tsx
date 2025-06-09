import React from 'react';
import { useInView } from '../hooks/useInView';

const awards = [
  '/images/IMG-20250609-WA0001.jpg',
  '/images/IMG-20250609-WA0003.jpg',
//   '/images/IMG-20250609-WA0004.jpg',
  '/images/IMG-20250609-WA0005.jpg',
  '/images/IMG-20250609-WA0006.jpg',
  '/images/IMG-20250609-WA0007.jpg',
  '/images/IMG-20250609-WA0008.jpg',
  '/images/IMG-20250609-WA0009.jpg',
  '/images/IMG-20250609-WA0010.jpg',
  '/images/IMG-20250609-WA0011.jpg',
  // Add more paths as needed
];

const Awards = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Achievements
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Awards & Recognitions
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Celebrating milestones of trust, excellence, and service in health and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-5 px-5 ">
          {awards.map((src, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={src}
                alt={`Award ${index + 1}`}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
