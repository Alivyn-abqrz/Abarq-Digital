import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../img/logo.png';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Check local storage for dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true'); // Set state based on saved preference
    }
  }, []);

  // Update class on document element and save preference to local storage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Save to local storage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Save to local storage
    }
  }, [darkMode]);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full top-0 py-4 transition duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex text-2xl font-bold text-gray-800 dark:text-gray-100">
            <img src={logo} alt='logo' className='w-9' />
            Abarq Digital
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 dark:text-gray-100 focus:outline-none mr-2"
          >
            {isOpen ? '✖' : '☰'} {/* Hamburger icon */}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <ScrollLink to="home" smooth={true} duration={500} className={`hover:text-green-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className={`hover:text-green-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            About
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className={`hover:text-green-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Services
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className={`hover:text-green-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Contact
          </ScrollLink>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-green-500 text-slate-800 px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="mr-2" /> {/* Sun icon when in dark mode, Moon icon otherwise */}
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mt-2 rounded-lg`}>
          <div className="flex flex-col space-y-2 px-6 py-4">
            <ScrollLink to="home" smooth={true} duration={500} className={`hover:text-green-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className={`hover:text-green-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              About
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} className={`hover:text-green-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Services
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className={`hover:text-green-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              Contact
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
