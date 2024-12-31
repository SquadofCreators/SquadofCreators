import React from 'react'
import CustomBadge from '../CustomBadge'
import { IoMdPricetag } from "react-icons/io";

function Pricing() {

    // Pricing plans Data
    const pricingData = [
        
    ];

  return (
    <section id='pricing' className='max-w-screen-lg w-5/6 flex flex-col items-center justify-center py-6 md:py-20'>
        <div className='flex flex-col items-center justify-center'>
            <CustomBadge 
            icon={<IoMdPricetag className="text-indigo-600"/>} 
            text="Transparent Pricing" 
            />

            <h1 className="px-4 text-lg md:leading-snug md:text-5xl font-bold text-center text-gray-800">
                Choose the <span className="text-indigo-600">Best Plan</span> <br />
            </h1>

            <p className="max-w-xl text-center text-sm leading-relaxed md:text-lg text-gray-400 mt-4">
                Choose a plan that fits your business goals, and get started with our easy-to-use platform.
            </p>
        </div>

        {/* Pricing Plans grid */}
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-12'>
            {/* Basic Plan */}
            <div className="flex flex-col items-center justify-between gap-4 p-4 border border-gray-300 rounded-2xl shadow-md">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className="text-2xl font-bold text-gray-800">Basic</h2>
                    <p className="text-sm text-gray-400">For small businesses</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-3xl font-bold text-gray-800">$19.99</p>
                    <p className="text-sm text-gray-400">per month</p>
                </div>
                <ul className="flex flex-col items-center justify-center gap-2">
                    <li className="text-sm text-gray-400">Basic features</li>
                    <li className="text-sm text-gray-400">Limited support</li>
                    <li className="text-sm text-gray-400">Basic analytics</li>
                </ul>
                <button className="px-6 mt-2 bg-white hover:bg-indigo-700 text-gray-600 hover:text-white border border-gray-600 py-2 rounded-full transition-all duration-300">
                    Get Started
                </button>
            </div>
        
            {/* Standard Plan */}
            <div className="flex flex-col items-center justify-between gap-4 p-4 border border-indigo-600 rounded-2xl shadow-lg scale-105">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className="text-2xl font-bold text-gray-800">Standard</h2>
                    <p className="text-sm text-gray-400">For growing businesses</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-3xl font-bold text-gray-800">$49.99</p>
                    <p className="text-sm text-gray-400">per month</p>
                </div>
                <ul className="flex flex-col items-center justify-center gap-2">
                    <li className="text-sm text-gray-400">Advanced features</li>
                    <li className="text-sm text-gray-400">Priority support</li>
                    <li className="text-sm text-gray-400">Advanced analytics</li>
                    <li className="text-sm text-gray-400">Custom branding</li>
                </ul>
                <button className="px-6 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full transition-all duration-300">
                    Get Started
                </button>
            </div>

            {/* Premium Plan */}
            <div className="flex flex-col items-center justify-between gap-4 p-4 border border-gray-300 rounded-2xl shadow-md">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className="text-2xl font-bold text-gray-800">Premium</h2>
                    <p className="text-sm text-gray-400">For enterprise-level businesses</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-3xl font-bold text-gray-800">$99.99</p>
                    <p className="text-sm text-gray-400">per month</p>
                </div>
                <ul className="flex flex-col items-center justify-center gap-2">
                    <li className="text-sm text-gray-400">All features</li>
                    <li className="text-sm text-gray-400">Priority support</li>
                    <li className="text-sm text-gray-400">Advanced analytics</li>
                    <li className="text-sm text-gray-400">Custom branding</li>
                    <li className="text-sm text-gray-400">API access</li>
                    <li className="text-sm text-gray-400">Dedicated account manager</li>
                </ul>
                <button className="px-6 mt-2 bg-white hover:bg-indigo-700 text-gray-600 hover:text-white border border-gray-600 py-2 rounded-full transition-all duration-300">
                    Get Started
                </button>
            </div>
        </div>
        
    </section>
  )
}

export default Pricing