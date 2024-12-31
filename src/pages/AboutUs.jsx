import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import AboutMainImg from '../assets/about/about-main.png';
import VideoDialog from '../components/landingPage/VideoDialog';
import AboutVideoThumbnail from '../assets/about/video-thumbnail.png';
import Team from '../components/landingPage/Team';
import Newsletter from '../components/landingPage/Newsletter';
import Footer from '../components/Footer';

import { vmvData, aboutVideoData, aboutStatsData } from '../data/AboutUsData';

const AboutUs = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "About Us", link: null },
  ];

  // State to track selected button
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Page Header */}
      <PageHeader title="About Us" description="Innovators Driven by Passion and Purpose" breadcrumbs={breadcrumbs} />

      {/* Main Content */}
      <div className="w-full mx-auto px-12 py-8 flex flex-col items-center justify-center">
        {/* Who We Are Section */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Section */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="mb-8">
              <h1 className="font-bold text-2xl mb-4">Who We Are?</h1>
              <p className="text-gray-500">
                We are a team of passionate innovators, developers, and
                designers dedicated to crafting exceptional digital experiences. At the heart of our work lies a commitment to leveraging cutting-edge technology, creativity, and collaboration to solve complex challenges and bring visions to life. With expertise spanning AI, web development, and UI/UX design, we strive to empower businesses and individuals through tailored solutions that are both impactful and transformative. At Squad of Creators, we don’t just build projects; we build partnerships, focusing on quality, trust, and a shared pursuit of excellence.
              </p>
            </div>

            {/* Vision, Mission, Values Buttons */}
            <div className="flex space-x-4 mb-6">
              {vmvData.map((data, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedIndex === index
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {data.title}
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h2 className="font-bold text-lg mb-2">
                {vmvData[selectedIndex].title}
              </h2>
              <p className="text-gray-500">{vmvData[selectedIndex].description}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 order-1 md:order-2">
            <img
              src={AboutMainImg}
              alt="About-Squad-of-Creators"
              className="w-full md:w-3/4 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Journey Video Section */}
        <div className="text-center py-10">
          <h1 className="text-xl md:text-5xl font-bold mb-4">
            Innovations Behind <span className="text-indigo-600">Our Journey</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-lg mb-6">
            Dive into our story to witness how we combine creativity, technology, and collaboration to build transformative solutions.
          </p>
          <VideoDialog thumbnail={aboutVideoData.thumbnail} videoSrc={aboutVideoData.link} />
        </div>

        {/* About Statistics */}
        <div className="w-full py-10 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg md:my-8">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
            {aboutStatsData.map((stat, index) => (
              <div
                key={index}
                className={`w-full md:w-1/4 text-center py-6 ${
                  index !== aboutStatsData.length - 1 ? "md:border-r border-gray-300" : ""
                }`}
              >
                <h2 className="text-3xl font-bold text-indigo-700">{stat.value}</h2>
                <p className="text-gray-600 mt-2">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Newsletter Subscription */}
       <Newsletter />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
