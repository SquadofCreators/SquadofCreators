import React, { useState } from 'react';
import { FaSearch, FaRegLifeRing, FaBug, FaCogs, FaUser } from 'react-icons/fa';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

function Support() {

    // Breadcrumb links
    const breadcrumbs = [
      { label: 'Home', link: '/', current: false },
      { label: 'Support', link: null, current: true },
    ];

  // Sample FAQ data categorized
  const faqCategories = [
    {
      category: 'Account Issues',
      icon: <FaUser className="text-indigo-500 text-2xl" />,
      faqs: [
        {
          question: 'How can I reset my password?',
          answer: 'To reset your password, click on "Forgot Password" on the login page and follow the instructions sent to your email.',
        },
        {
          question: 'How do I update my profile information?',
          answer: 'You can update your profile information in the "My Account" section after logging in.',
        },
      ],
    },
    {
      category: 'Technical Support',
      icon: <FaCogs className="text-indigo-500 text-2xl" />,
      faqs: [
        {
          question: 'Why is my app not loading?',
          answer: 'Try clearing your browser cache or restarting the app. If the problem persists, contact support.',
        },
        {
          question: 'How do I report a bug?',
          answer: 'Use the "Report an Issue" form below to describe the bug and provide relevant screenshots.',
        },
      ],
    },
    {
      category: 'General Queries',
      icon: <FaRegLifeRing className="text-indigo-500 text-2xl" />,
      faqs: [
        {
          question: 'Where can I find the user guide?',
          answer: 'The user guide is available in the Help section of your account dashboard.',
        },
        {
          question: 'How do I contact customer service?',
          answer: 'You can reach us at support@squadofcreators.com or by calling +1-800-123-4567.',
        },
      ],
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on search
  const filteredFAQs = faqCategories.map((category) => ({
    ...category,
    faqs: category.faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="bg-gray-100 min-h-screen">

        {/* Header Section */}
        <PageHeader title="Support Center" description="Get help with your account, technical issues, or general queries." breadcrumbs={breadcrumbs} />

      <div className="max-w-screen-lg py-16 mx-auto px-4">

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-12">
          <FaSearch className="text-gray-400 text-lg mr-3" />
          <input
            type="text"
            className="flex-grow px-2 py-1 focus:outline-none"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFAQs.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start space-y-4"
            >
              <div className="flex items-center space-x-2">
                {category.icon}
                <h2 className="text-xl font-semibold text-gray-800">{category.category}</h2>
              </div>
              <ul className="space-y-2">
                {category.faqs.map((faq, idx) => (
                  <li key={idx}>
                    <h3 className="text-gray-800 font-medium">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Ticket Submission Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submit a Support Ticket</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Describe your issue, and our support team will get back to you.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Issue</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                placeholder="Describe your issue"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Support;
