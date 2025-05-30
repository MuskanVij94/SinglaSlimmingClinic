import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-lg py-2' 
          : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
           <a href="#home" className="flex items-center group">
      <img 
        src="images/logo.png" // Replace with your actual logo path
        alt="Singla Slimming Clinic Logo"
        className="h-11 w-auto transition-transform duration-300:scale-105"
      />
    </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`font-medium transition-all duration-300 hover:text-blue-400 ${
                  scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}

            {/* <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button> */}

            <a 
              href="#contact" 
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              Book Consultation
            </a>
          </div>
          
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled 
                  ? 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden bg-white dark:bg-gray-900 shadow-lg`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {['Home', 'About', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block bg-blue-600 dark:bg-blue-500 text-white py-2.5 px-6 rounded-full text-center font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;