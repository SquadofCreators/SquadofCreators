import React from 'react'
import { Link } from 'react-router-dom';
import { GoBellFill } from "react-icons/go";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center p-6 h-dvh bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
        <div className="text-center flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects Are Coming Soon!</h1>
            <p className="text-lg md:text-xl mb-6">
                Get ready to explore groundbreaking ideas and innovative solutions. <br />
                Sign up to be the first to know when our projects go live!
            </p>
            
            <form className="flex items-center justify-center gap-4 w-max rounded-lg bg-white p-1 shadow-md">
                <input
                    type="email"
                    placeholder="Enter your email for updates"
                    className="px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full md:w-auto"
                />
                <button
                    type="submit"
                    className="bg-gray-700 hover:bg-gray-600 transition px-4 md:px-6 py-3 rounded-lg font-semibold"
                >
                    <span className='hidden md:flex'>Notify Me</span> <GoBellFill className="flex md:hidden text-xl" />
                </button>
            </form>
            
            <div className="mt-8">
                <Link 
                    href="/" 
                    className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition font-semibold"
                >
                    Back to Home
                </Link>
            </div>
        </div>

        <p className="fixed bottom-6 mt-6 text-sm text-gray-300">
        © {new Date().getFullYear()} Squad of Creators. All rights reserved.
        </p>
    </div>
  )
}

export default Projects