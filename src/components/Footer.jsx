import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import  { socialMediaLinks, solutionsLinks, contactLinks, companyLinks } from '../data/FooterData';
import { servicesData } from '../data/ServicesData';

function Footer() {
  // Scroll to top when a link is clicked
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center">
            <a href="#" className="text-2xl font-bold text-white">
              <img src={Logo} alt="Logo" className="w-24 h-24 mr-2" />
            </a>
            <p className="mt-4 text-gray-400 font-bold text-xl">
              Squad of Creators
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white">Solutions</h3>
            <ul className="mt-4 space-y-4">
              {servicesData.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.link}
                    className="text-gray-400/80 hover:text-indigo-500"
                    onClick={handleScrollToTop}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-4">
              {
                companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="text-gray-400/80 hover:text-indigo-500"
                      onClick={handleScrollToTop}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-4">
              {
                contactLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className="text-gray-400/80 hover:text-indigo-500"
                      onClick={handleScrollToTop}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright Section */}
        <div className="py-4 text-center text-sm flex flex-col md:flex-row items-center justify-between gap-4 md:px-4">
          <div className="order-2 md:order-1">
            © 2024 Squad of Creators. All rights reserved.
          </div>

          {/* Social Media Links */}
          <div className="order-1 md:order-2 flex gap-4">
            {
              socialMediaLinks.map((socialMedia, index) => (
                <a
                  key={index}
                  href={socialMedia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-400 hover:text-indigo-500"
                >
                  {socialMedia.icon}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
