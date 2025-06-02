import React, { useState } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-2 w-64 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Contact Us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-2">Call us for a free consultation:</p>
            <a 
              href="tel:+918146300892" 
              className="text-blue-600 font-semibold text-lg block"
            >
              +91 81463 00892
            </a>
          </div>
          
          <a 
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 w-full block text-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}

   

      {/* Phone toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-135' : 'bg-blue-600 hover:bg-blue-700 animate-pulse'
        }`}
      >
        <Phone className="h-6 w-6 text-white" />
      </button>
         {/* WhatsApp button */}
      <a
        href="https://wa.me/918146300892"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-green-500 hover:bg-green-600 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default FloatingContact;
