import React from 'react';
import { useInView } from '../hooks/useInView';
import { Zap, Utensils, HeartPulse, Heart } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  imageUrl, 
  index 
}: { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any, 
  title: string, 
  description: string, 
  imageUrl: string,
  index: number
}) => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const delay = index * 200;
  
  return (
    <div 
      ref={ref} 
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center rounded-full mb-4">
          <Icon className="text-blue-600 dark:text-blue-300 h-6 w-6" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  
  const services = [
    {
      icon: Heart,
      title: 'Treatment at Root Cause', 
      description: 'We treat obesity at its root cause resulting in sustainable weight loss & improving overall health by right diagonsis of blood reports',
      imageUrl: 'https://images.pexels.com/photos/5069436/pexels-photo-5069436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: Zap,
      title: 'Advanced Slimming Technologies',
      description: 'Utilizing advanced ultrasound technology to naturally break down fat cells without pain or invasive procedures.',
      imageUrl: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: Utensils,
      title: 'Personalized Diet Plans',
      description: 'Tailored nutritional guidance to complement your slimming treatments and support long-term wellness goals.',
      imageUrl: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: HeartPulse,
      title: 'Body Contouring',
      description: 'Non-surgical methods to shape and tone your body, targeting specific areas for a more defined silhouette.',
      imageUrl: 'images/Body.jpg'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Wellness Solutions
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            At Singla Slimming Clinic, we offer a range of non-invasive treatments designed to help you 
            achieve your weight management and wellness goals safely and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;