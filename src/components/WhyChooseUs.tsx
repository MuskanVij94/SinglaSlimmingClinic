import React from 'react';
import { useInView } from '../hooks/useInView';
import { CheckCircle, Award, Users, LineChart } from 'lucide-react';

const TestimonialCard = ({ quote, name, result, image, delay }: { quote: string, name: string, result: string, image: string, delay: number }) => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-600 italic mb-4">{quote}</p>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-blue-600 text-sm">{result}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`flex gap-4 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full">
          <Icon className="text-blue-600 h-6 w-6" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  
  const features = [
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Notable success stories, including clients losing 15 kg in 1 month and 95 kg in 13 months.'
    },
    {
      icon: Award,
      title: 'State-of-the-Art Technology',
      description: 'Employing the latest equipment for optimal results in a safe, controlled environment.'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Led by Dr. Anju Singla, our professionals are dedicated to your well-being and success.'
    },
    {
      icon: LineChart,
      title: 'Customized Programs',
      description: 'Each treatment plan is tailored to individual needs and goals for maximum effectiveness.'
    }
  ];
  
  const testimonials = [
    {
      quote: "I lost 11kg in just one month with Singla Slimming Clinic's personalized program. Life-changing!",
      name: "Priya Sharma",
      result: "Lost 11kg in 1 month",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "After struggling for years, I finally found success. The team's support made all the difference.",
      name: "Rajiv Mehta",
      result: "Lost 45kg in 13 months",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Not only did I lose weight, but I gained confidence and energy. Their holistic approach works!",
      name: "Ananya Patel",
      result: "Lost 18kg in 3 months",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Commitment to Your Success
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            With nearly two decades of experience and thousands of success stories, Singla Slimming Clinic 
            has established itself as a leader in non-invasive weight management solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 200}
              />
            ))}
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  result={testimonial.result}
                  image={testimonial.image}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;