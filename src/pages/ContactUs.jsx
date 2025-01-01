import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

import { contactUsData } from '../data/ContactUsData';

const ContactUs = () => {

    // Scroll to the top of the page when the component mounts
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", link: "/" },
        { label: "Contact Us", link: null },
    ];

  return (
    <div className="bg-gray-50 text-gray-800">
        {/* Header Section */}
        <PageHeader title="Contact Us" description="Get in touch with us for any inquiries or feedback." breadcrumbs={breadcrumbs} />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Contact Form */}
            <div className="w-full lg:w-2/4 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-600"
                    placeholder="John Doe"
                    required
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-600"
                    placeholder="you@example.com"
                    required
                />
                </div>
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-600"
                    placeholder="Your message..."
                    required
                ></textarea>
                </div>
                <div>
                <button
                    type="submit"
                    className="w-max bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
                >
                    Send Message
                </button>
                </div>
            </form>
            </div>

            {/* Contact Details and Map */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Contact Details */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
                <div className="space-y-4">
                    {
                        contactUsData.map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <span className="text-indigo-600">{item.icon}</span>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Google Map (or Placeholder) */}
            <div className="bg-white shadow-md rounded-lg">
                <iframe
                    src={contactUsData[2].link}
                    className="w-full h-64 rounded-lg"
                    allowFullScreen=""
                    loading="lazy"
                    title="Location"
                ></iframe>
            </div>
            </div>
        </div>
        </div>

        {/* Footer Section */}
        <Footer />
    </div>
  );
};

export default ContactUs;
