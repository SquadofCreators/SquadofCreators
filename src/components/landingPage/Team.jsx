import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomBadge from '../CustomBadge';
import { MdGroups } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";

import teamData from '../../data/TeamData'

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <>
    <div id='team' className="slider-container max-w-screen-lg w-5/6 mx-auto py-16">

        <div className='flex flex-col items-center justify-center'>
            <CustomBadge 
            icon={<MdGroups className="text-indigo-600"/>} 
            text="Our Experts" 
            />

            <h1 className="px-4 text-lg md:leading-snug md:text-5xl font-bold text-center text-gray-800">
                Meet the <span className="text-indigo-600">Minds</span> <br />
                behind our projects
            </h1>
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

        {/* <Slider {...settings}>
          {
            teamData.map((member, index) => (
              <div key={index} className='!flex flex-col items-center justify-center p-4 gap-4'>
                
                <div className='flex flex-col items-center justify-center gap-4 translate-y-1/2'>
                  <img src={member.image} alt={member.name} className='w-24 h-24 rounded-full object-cover border-2 border-gray-600' />
                </div>

                <div className='flex flex-col items-center justify-center w-full text-center gap-2 bg-white p-4 rounded-xl border-[1px] border-gray-600 shadow-md'>
                  <h1 className='font-bold mt-10'>{member.name}</h1>
                  <p className='text-gray-700'>
                    {member.role}
                  </p>
                </div>
              </div>
            ))
          }
        </Slider> */}

    </div>
    <Link
        to="/our-team"
        className="flex items-center justify-center gap-2 mt-4 px-4 py-2 text-indigo-600 hover:text-white border hover:bg-indigo-600 border-indigo-600 rounded-full transition-colors duration-300"
    >
        Our Team <RiArrowRightLine/>
    </Link>
    </>
  );
}

export default Team;
