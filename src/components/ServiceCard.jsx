import React from 'react'
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

function ServiceCard({
    icon,
    title,
    description,
    link,
}) {
  return (
    <div className='h-full flex flex-col items-center md:items-start justify-between p-8 border-2 border-gray-300/50 rounded-2xl shadow-md shadow-black/5'>
        <div className="flex flex-col items-center md:items-start justify-start text-center md:text-left h-full">
            <div className="flex items-center justify-center text-2xl w-16 h-16 mb-4 text-indigo-600 bg-indigo-100 rounded-lg">
                {icon}
            </div>
            <h2 className="mb-2 md:text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm md:text-base text-gray-400 leading-normal">{description}</p>
        </div>
        <Link 
            to={link}
            className="mt-6 text-indigo-600 hover:translate-x-2 transition-all duration-300"
        >
            Learn More <RiArrowRightLine className="inline-block ml-2" />
        </Link>
    </div>
  )
}

export default ServiceCard