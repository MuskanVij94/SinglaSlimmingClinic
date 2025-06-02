import React from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContactItem = ({ icon: Icon, title, details, link }: { icon: any, title: string, details: string, link:string }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0">
        <Icon className="text-blue-600 h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-gray-600 hover:text-blue-600 underline transition-colors duration-200"
          >
            {details}
          </a>
        ) : (
          <p className="text-gray-600">{details}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Contact Us
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Visit Our New Gurgaon Branch
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            Experience the transformation you've been waiting for. Join the Singla Slimming Clinic family 
            and embark on your journey to a healthier, happier you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <ContactItem 
                  icon={MapPin}
                  title="Location"
                  details="E 5/16, DLF Phase I, Sector 26, Gurgaon 122002" link={''}                />
                <ContactItem 
                  icon={Phone} 
                  title="Phone" 
                  details="+91 81463 00892"
                  link="tel:+918146300892"
                />
                <ContactItem 
                  icon={Mail} 
                  title="Email" 
                  details="singlaslimmingclinic@gmail.com"
                  link="mailto:singlaslimmingclinic@gmail.com"
                />
                <ContactItem 
                  icon={Clock}
                  title="Working Hours"
                  details="Mon - Sat: 9:00 AM - 7:00 PM" link={''}                />
              </div>
              
            </div>
          </div>
            
          <div className={`h-[450px] rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3507.451193941261!2d77.09764477549474!3d28.465955675756103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI3JzU3LjQiTiA3N8KwMDYnMDAuOCJF!5e0!3m2!1sen!2sin!4v1748844404722!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;