import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomBadge from '../CustomBadge';
import { MdGroups } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";

import teamData from '../../data/TeamData'
import { Link } from 'react-router-dom';

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides on larger screens for better use of space
    slidesToScroll: 1, // Scroll one slide at a time for better navigation
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440, // Desktop view with larger screens
        settings: {
          slidesToShow: 3, // Show 3 slides for balanced layout
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
    <div id='team' className="slider-container max-w-screen-lg w-5/6 mx-auto py-20">

        <div className='flex flex-col items-center justify-center'>
            <CustomBadge 
            icon={<MdGroups className="text-indigo-600"/>} 
            text="Our Experts" 
            />

            <h1 className="px-4 text-lg md:leading-snug md:text-5xl font-bold text-center text-gray-800">
                Meet the <span className="text-indigo-600">Minds</span> <br />
                behind our projects
            </h1>
            {/* <p className="max-w-xl text-center text-sm leading-relaxed md:text-lg text-gray-400 mt-4">
                We are a group of highly skilled professionals committed to delivering exceptional results through innovation, collaboration, and passion.
            </p> */}
        </div>

        <Slider {...settings} className=''>
            {teamData.map((member) => (
            <div
                key={member.id}
                className="!max-w-[90%] !flex flex-col items-center justify-center p-6 border rounded-lg shadow-md ml-4"
            >
                <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border border-indigo-600"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
            </div>
            ))}
        </Slider>

    </div>
    <Link
        to="/our-team"
        className="flex items-center justify-center gap-2 mt-8 px-4 py-2 text-indigo-600 hover:text-white border hover:bg-indigo-600 border-indigo-600 rounded-full transition-colors duration-300"
    >
        Our Team <RiArrowRightLine/>
    </Link>
    </>
  );
}

export default Team;
