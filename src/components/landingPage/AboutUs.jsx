import React from 'react'
import { Link } from 'react-router-dom'
import CustomBadge from '../CustomBadge'
import { FaUserAstronaut } from "react-icons/fa";
import { MdOutlineTimeline } from "react-icons/md";

function AboutUs() {
  return (
    <section id='aboutUs' className='max-w-screen-lg w-5/6 flex flex-col items-center justify-center py-6 md:py-20'>
        <div className='flex flex-col items-center justify-center'> 
            
            <h1 className="px-4 text-3xl md:leading-snug md:text-5xl font-bold text-center text-gray-800">
                Empowering the <span className="text-indigo-600">Future </span> <br className='hidden md:block'/>
                of Innovation
            </h1>

        </div>

        {/* Vision and Mission Grid */}
        <div className='flex flex-col items-center justify-center gap-8 border border-gray-300 px-2 md:px-8 py-6 md:py-12 mt-8 rounded-xl shadow-md'>
            <p className="max-w-xl text-center text-sm md:text-lg text-gray-400">
                We are a forward-thinking company dedicated to transforming ideas into reality through innovation and technology
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* Vision */}
                <div className="flex flex-col items-center justify-center gap-4 px-2">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">Vision</h2>
                    <p className="text-gray-400 text-sm leading-relaxed md:text-lg text-center">
                        "To be a global leader in tech innovation, pushing the boundaries of what’s possible and helping our clients lead with confidence in the digital age. 
                        We envision a future where our solutions shape industries, drive progress, and create a more connected, sustainable world."
                    </p>
                </div>

                {/* Mission */}
                <div className="flex flex-col items-center justify-center gap-4 px-2">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">Mission</h2>
                    <p className="text-gray-400 text-sm leading-relaxed md:text-lg text-center">
                        "Our mission is to provide cutting-edge technology solutions that streamline business operations and foster growth, creating lasting impact in the industries we serve.
                        We strive to revolutionize how businesses operate by delivering sustainable, efficient, and scalable solutions."
                    </p>
                </div>
            </div>
            
            <Link to="/about-us" className="flex items-center justify-center w-max mt-2 md:mt-4 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full px-6 py-3 text-sm md:text-lg font-semibold transition-colors duration-300">
                Our Story <MdOutlineTimeline className="ml-2" />
            </Link>
        </div>

    </section>
  )
}

export default AboutUs