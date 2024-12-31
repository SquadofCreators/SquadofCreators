import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegFileAlt } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';

import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

function Careers() {
    
    const breadcrumbs = [
        { label: 'Home', link: '/', current: false },
        { label: 'Careers', link: null, current: true },
      ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <PageHeader 
        title="Join Our Team" description="Be Part of a Dynamic and Innovative Future" breadcrumbs={breadcrumbs}/>

      <div className="max-w-screen-lg mx-auto px-4 py-12">
        <p className="text-lg text-center text-gray-600 mb-16">
          Explore exciting opportunities with us, whether you're looking for internships or full-time positions. 
          We are constantly looking for talented and passionate individuals to join our Squad of Creators!
        </p>

        {/* Internships Section */}
        <section id="internships" className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Internships</h2>
          <p className="text-lg text-gray-600 mb-6">
            We offer hands-on internship programs where you can work on real-world projects and gain experience in various domains.
          </p>
          
          <div className="space-y-6">
            {/* Internship Opportunities */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Web Development Intern</h3>
              <p className="text-gray-600 mb-4">
                Work with our talented web development team and help build dynamic websites using the latest technologies.
              </p>
              <div className="flex items-center justify-between">
                <Link to="/apply" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
                  Apply Now <RiExternalLinkLine />
                </Link>
                <a
                  href="https://example.com/internship-details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 flex items-center gap-2"
                >
                  View Details <FaRegFileAlt />
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">AI & Machine Learning Intern</h3>
              <p className="text-gray-600 mb-4">
                Work alongside our AI experts and contribute to cutting-edge machine learning projects.
              </p>
              <div className="flex items-center justify-between">
                <Link to="/apply" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
                  Apply Now <RiExternalLinkLine />
                </Link>
                <a
                  href="https://example.com/internship-details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 flex items-center gap-2"
                >
                  View Details <FaRegFileAlt />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section id="job-openings" className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Job Openings</h2>
          <p className="text-lg text-gray-600 mb-6">
            We're looking for talented professionals to join our team in various roles. If you're passionate about innovation, apply now!
          </p>

          <div className="space-y-6">
            {/* Full-Time Job Opportunities */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Full Stack Developer</h3>
              <p className="text-gray-600 mb-4">
                Join our tech team and help build end-to-end solutions for our web applications.
              </p>
              <div className="flex items-center justify-between">
                <Link to="/apply" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
                  Apply Now <RiExternalLinkLine />
                </Link>
                <a
                  href="https://example.com/job-details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 flex items-center gap-2"
                >
                  View Details <FaRegFileAlt />
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">AI Engineer</h3>
              <p className="text-gray-600 mb-4">
                Be a part of our AI team and help build intelligent systems that solve real-world problems.
              </p>
              <div className="flex items-center justify-between">
                <Link to="/apply" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
                  Apply Now <RiExternalLinkLine />
                </Link>
                <a
                  href="https://example.com/job-details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-500 flex items-center gap-2"
                >
                  View Details <FaRegFileAlt />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section id="apply" className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Apply?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you are excited about joining our dynamic team, we would love to hear from you! Choose a position that fits your skills, and submit your application today.
          </p>
          <Link
            to="/apply"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </section>
        
      </div>

      <Footer />
    </div>
  );
}

export default Careers;
