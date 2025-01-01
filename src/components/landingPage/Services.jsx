import React from 'react'
import CustomBadge from '../CustomBadge'
import ServiceCard from '../ServiceCard';
import { PiShootingStarFill } from "react-icons/pi";

import { servicesData } from '../../data/ServicesData'

function Services() {

  return (
    <section id='services' className='max-w-screen-lg w-5/6 flex flex-col items-center justify-center py-6 md:py-20'>
      <div className='flex flex-col items-center justify-center'> 
        <CustomBadge
            icon={<PiShootingStarFill className="text-indigo-600"/>}
            text="Designed for the Future"
        />

        <h1 className="px-4 text-lg md:leading-snug md:text-5xl font-bold text-center text-gray-800">
          Transform Your <span className="text-indigo-600">Ideas</span> <br />
          into Reality
        </h1>

        <p className="max-w-xl text-center text-sm leading-relaxed md:text-lg text-gray-400 mt-4">
          We are a team of passionate individuals who are dedicated to creating innovative solutions that solve real-world problems.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3 md:px-0 items-center justify-center">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
      
        ))}
      </div>
    </section>
  )
}

export default Services