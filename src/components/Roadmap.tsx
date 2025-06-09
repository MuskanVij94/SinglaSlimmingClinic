import React from 'react';
import { useInView } from '../hooks/useInView';

const roadmapData = [
  {
    year: '2003',
    city: 'Firozpur',
    description: 'Opened our first clinic by the name of Singla Beauty and Slimming Clinic.',
    imageUrl: '/images/Ferozepur.jpg',
  },
  {
    year: '2017',
    city: 'Ludhiana',
    description: 'We embarked on our journey with a vision for growth and expansion.',
    imageUrl: '/images/ludhiana.jpg',
  },
  {
    year: '2022',
    city: 'Jalandhar',
    description: 'Announced the opening of another clinic in Jalandhar.',
    imageUrl: '/images/Jalandhar.webp',
  },
  {
    year: '2023',
    city: 'Mohali',
    description: 'Mohali became our next stop in transforming lives.',
    imageUrl: '/images/Mohali.jpg',
  },
  {
    year: '2023',
    city: 'Zirakpur',
    description: 'New clinic. Same mission. Zirakpur now transformed with us.',
    imageUrl: '/images/zirakpur.jpg',
  },
  {
    year: '2024',
    city: 'Amritsar',
    description: 'We expanded due to overwhelming love from Punjab.',
    imageUrl: '/images/amritsar.jpeg',
  },
  {
    year: '2025',
    city: 'Gurugram',
    description: 'Major leap in bringing advanced weight-loss to NCR.',
    imageUrl: '/images/gurgaon.jpg',
  },
  {
    year: '2025',
    city: 'Delhi NCR',
    description: 'Expanded to transform more lives in the capital region.',
    imageUrl: '/images/Delhi.jpg',
  },
];

const Roadmap = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            SSC Journey
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Roadmap
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A timeline of growth, trust, and transformation across regions.
          </p>
        </div>

        {/* <div className="space-y-16">
          {roadmapData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="md:w-1/3 w-full">
                <img
                  src={item.imageUrl}
                  alt={`${item.year} ${item.city}`}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full text-left">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {item.year} {item.city.toUpperCase()}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="max-w-5xl mx-auto px-4 space-y-16">
  {roadmapData.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col md:flex-row ${
        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
      } items-center gap-6`}
    >
      {/* Image - 4 cols on medium screens */}
      <div className="w-full md:w-1/3">
        <img
          src={item.imageUrl}
          alt={`${item.year} ${item.city}`}
          className="rounded border border-gray-200 w-full h-48 object-cover"
        />
      </div>

      {/* Text - 8 cols on medium screens */}
      <div className="w-full md:w-2/3">
        <h3 className="text-blue-600 font-bold text-lg">
          {item.year} {item.city.toUpperCase()}
        </h3>
        <p className="text-gray-700 mt-2">{item.description}</p>
        <div className="mt-2 h-1 w-20 bg-blue-500" />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Roadmap;




