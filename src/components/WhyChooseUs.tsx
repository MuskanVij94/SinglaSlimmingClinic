import React from 'react';
import { useInView } from '../hooks/useInView';
import { CheckCircle, Award, Users, LineChart } from 'lucide-react';

const TestimonialCard = ({ quote, name, result, image, delay }: { quote: string, name: string, result: string, image: string, delay: number }) => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-1000 ease-out text-center w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={image}
        alt={name}
        className="w-50 h-41 mx-auto rounded-xl object-cover mb-4"
      />
      <p className="text-gray-600 italic mb-4">{quote}</p>
      <p className="font-bold text-gray-900">{name}</p>
      <p className="text-blue-600 text-sm">{result}</p>
    </div>
  );
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FeatureItem = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex gap-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
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
      title: 'Doctor-led Treatments',
      description: 'Treatments supervised by doctors using advanced technology.'
    },
    {
      icon: LineChart,
      title: 'Customized Plans',
      description: 'Plans tailored to your body, goals, and lifestyle.'
    },
    {
      icon: Users,
      title: '24x7 CMR Support',
      description: 'Continuous support from your Care Manager Representative (CMR).'
    },
    {
      icon: Award,
      title: 'Safe & Non-Invasive',
      description: 'Methods that are medically safe and non-invasive with real results.'
    },
    {
      icon: CheckCircle,
      title: 'Holistic Health Focus',
      description: 'Treating root medical issues with focus on your overall well-being.'
    },
    // {
    //   icon: CheckCircle,
    //   title: 'Proven Track Record',
    //   description: 'Notable success stories, including clients losing 15 kg in 1 month and 95 kg in 13 months.'
    // },
    // {
    //   icon: Award,
    //   title: 'State-of-the-Art Technology',
    //   description: 'Employing the latest equipment for optimal results in a safe, controlled environment.'
    // },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Led by Dr. Anju Singla, our professionals are dedicated to your well-being and success.'
    },
    // {
    //   icon: LineChart,
    //   title: 'Customized Programs',
    //   description: 'Each treatment plan is tailored to individual needs and goals for maximum effectiveness.'
    // }
  ];

  const testimonials = [
    {
      quote:
        "Maine har tareeka azmaaya, par asli farq tab aaya jab maine obesity doctor (Dr. Anju Singla) se ilaaj liya—ab wazan vaapas nahi badha.",
      name: "Mr. Jatin (49 years)",
      result: "Before / After Transformation",
      image: "images/2.png"
    },
    {
      quote:
        "I lost 20 kgs in 2 months & had homemade food – kanak ki chapati, fruits and milk (7–9 meals in a day) & haven’t gained weight after losing it. My migraine, cholesterol, fatty liver and swelling are gone.",
      name: "Mrs. Mandeep Kaur (50 years)",
      result: "Lost 20kgs in 2 months",
      image: "images/1.png"
    },
    {
      quote:
        "I lost 15kgs in 1 month, 25kgs in 2 months, 36kgs in 3 months & 70kgs in 7 months with the help of slimming technology & my skin stayed completely tight, zero sag.",
      name: "Mr. Chirag Seda (22 years, Student)",
      result: "Lost 36kgs in 3 months",
      image: "images/3.png"
    }
  ];


  return (
    <section id="why-choose-us" className="py-20 bg-blue-50 py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

        <div className="space-y-24">
          {/* Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          {/* Testimonials Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
    </section>
  );
};

export default WhyChooseUs;