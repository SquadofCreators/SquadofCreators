import React, { useState, useEffect } from "react";
import { RiMoonFill, RiSunFill, RiMenuFill, RiCloseFill } from "react-icons/ri";
import logo from '../assets/Logo.svg';
import { navbarLinks } from "../data/NavbarData";
import { Link as Scroll } from 'react-scroll';
import { Link } from "react-router-dom";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false); // For Resources dropdown

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

    // Dropdown Handler
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Link OnClick Handler
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-10 md:flex md:justify-center md:shadow-md px-2 md:px-0 bg-transparent md:bg-white">
            <div className="max-w-7xl w-full mx-auto px-5 sm:px-6 lg:px-8 m-2 md:m-0 bg-white md:bg-transparent shadow-md md:shadow-none border md:border-none rounded-full md:rounded-none">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-3">
                        <img src={logo} alt="" className="w-6 h-w-6" />
                        <Link to="/" className="text-xl md:text-2xl font-extrabold text-indigo-600">
                            Team SoC
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navbarLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.subLinks ? (
                                    <>
                                        {/* Open Dropdown while hovering the link and also keep it while enterin in the dropdown */}

                                        <span
                                            className="flex items-center justify-center gap-1 text-gray-500 hover:text-indigo-600 font-medium cursor-pointer"
                                            onMouseEnter={toggleDropdown}                                          
                                        >
                                            {link.name} {isDropdownOpen ? <RiArrowUpSLine className="text-xl mt-1"/> : <RiArrowDownSLine  className="text-xl mt-1"/>}
                                        </span>
                                        {/* Dropdown */}
                                        {isDropdownOpen && (
                                            <div 
                                              className="absolute top-full -left-4 bg-white border shadow-lg rounded-lg mt-2 px-4 py-2 z-20"
                                              onMouseEnter={() => setDropdownOpen(true)}  
                                              onMouseLeave={() => setDropdownOpen(false)}                                          
                                            >
                                                {link.subLinks.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        to={subLink.link}
                                                        className="block px-4 py-2 text-gray-600 hover:text-indigo-600"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Scroll
                                        to={link.link}
                                        className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer"
                                    >
                                        {link.name}
                                    </Scroll>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Us Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-600/90 cursor-pointer"
                            to="/contact-us"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-2xl mr-1 text-gray-600 focus:outline-none"
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
                            <div key={link.name} className="w-full flex flex-col items-center justify-center">
                                {link.subLinks ? (
                                    <>
                                        <span
                                            onClick={toggleDropdown}
                                            className="flex items-center justify-center gap-1 ml-4 text-center text-gray-500 hover:text-indigo-600 font-medium cursor-pointer"
                                        >
                                            {link.name} {isDropdownOpen ? <RiArrowUpSLine className="text-xl"/> : <RiArrowDownSLine  className="text-xl"/>}
                                        </span>
                                        {isDropdownOpen && (
                                            <div className="w-full mt-2 flex flex-col items-center justify-center py-2 border rounded-lg bg-white shadow-lg">
                                                {link.subLinks.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        to={subLink.link}
                                                        className="block px-4 py-2 text-gray-600 hover:text-indigo-600"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Scroll
                                        to={link.link}
                                        onClick={handleLinkClick}
                                        className="text-gray-500 hover:text-indigo-600 font-medium"
                                    >
                                        {link.name}
                                    </Scroll>
                                )}
                            </div>
                        ))}

                        <Link
                            className="px-4 py-2 mt-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                            to="/contact-us"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
