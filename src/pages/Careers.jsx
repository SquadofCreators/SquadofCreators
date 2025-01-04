import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegFileAlt } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';

import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

import { InternshipData } from '../data/CareersData';
import CareersModal from '../components/CareersModal';

function Careers() {
  
  const breadcrumbs = [
    { label: 'Home', link: '/', current: false },
    { label: 'Careers', link: null, current: true },
  ];

  const [openDetails, setOpenDetails] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);

  // Scroll to the top of the page when the component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (openDetails) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [openDetails]);

  
  // Open modal with specific data
  const handleViewDetails = (data) => {
    setSelectedData(data);
    setOpenDetails(true);
  };

  // Close modal
  const closeModal = () => {
    setOpenDetails(false);
    setSelectedData(null);
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      <PageHeader
        title="Join Our Team"
        description="Be Part of a Dynamic and Innovative Future"
        breadcrumbs={breadcrumbs}
      />

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
            {InternshipData.map((internship, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{internship.title}</h3>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/apply"
                    className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2"
                  >
                    Apply Now <RiExternalLinkLine />
                  </Link>
                  <button
                    className="text-gray-500 hover:text-gray-700 flex items-center gap-2"
                    onClick={() => handleViewDetails(internship)}
                  >
                    View Details <FaRegFileAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Apply Section */}
        <section id="apply" className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Apply?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you are excited about joining our dynamic team, we would love to hear from you! Choose a position that
            fits your skills, and submit your application today.
          </p>
          <Link
            to="/apply"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </section>
      </div>

      {/* Modal */}
      {
        openDetails && selectedData && (
          <CareersModal data={selectedData} onClose={closeModal} />
        )
      }

      <Footer />
    </div>
  );
}

export default Careers;
