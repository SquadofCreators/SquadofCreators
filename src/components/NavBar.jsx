import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMoonFill, RiSunFill, RiMenuFill, RiCloseFill } from "react-icons/ri";
import logo from '../assets/Logo.svg';
import { navbarLinks } from "../data/NavbarData";

const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
        if (isMobileMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-10 md:flex md:justify-center md:shadow-md px-2 md:px-0 bg-white">
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-6 lg:px-8 m-2 md:m-0 bg-white md:bg-transparent shadow-md md:shadow-none border md:border-none rounded-full md:rounded-none">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <img 
                src={logo} alt=""
                className="w-6 h-w-6"
            />
            <a href="/" className="text-xl md:text-2xl font-extrabold text-indigo-600">
                Team SoC
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">

            {navbarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="text-gray-500 hover:text-indigo-600 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-in6text-indigo-600/90"
              to="/contact-us"
            >
              Get Started
            </Link>

            {/* <button onClick={toggleDarkMode} className="text-xl p-2 rounded-full focus:outline-none text-gray-600">
              {isDarkMode ? <RiMoonFill/> : <RiSunFill/>}
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-xl text-gray-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <RiCloseFill /> : <RiMenuFill />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-2 border-gray-400/30 rounded-lg m-1 bg-white shadow-lg transition-transform duration-300">
            <div className="px-2 py-8 sm:px-3 flex flex-col items-center justify-center gap-4 transition-all duration-300">
              {navbarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className="text-gray-500 hover:text-indigo-600 font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <button
                className="px-4 py-2 mt-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                onClick={() => alert("Contact Form Placeholder")}
              >
                Get Started
              </button>
                
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
