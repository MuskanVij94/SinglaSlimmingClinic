import React from 'react';
import {Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold">Singla Slimming Clinic</span>
            </div>
            <p className="text-blue-200 mb-6">
              Transforming lives with trusted wellness solutions since 2004. Your journey to a healthier you begins here.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/singlaslimmingclinicludhiana/" target="_blank" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/singlaslimmingclinic/" target="_blank" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-choose-us" className="text-blue-200 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Ultrasound Fat Cavitation</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Personalized Diet Plans</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Body Contouring</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Skin Tightening</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Branches</h3>
            <ul className="space-y-3">
              <li className="text-blue-200">Gurgaon</li>
              <li className="text-blue-200">Ludhiana</li>
              <li className="text-blue-200">Jalandhar</li>
              <li className="text-blue-200">Firozpur</li>
              <li className="text-blue-200">Mohali</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Singla Slimming Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;