import React from 'react'
import { RiArrowLeftLine } from "react-icons/ri";
import ErrorImg from '../assets/404-img.svg';

function NotFound() {
  return (
    <section>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src={ErrorImg} alt="404 Error" className="w-64 h-64 mb-8" />
            <p className="text-lg text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                <RiArrowLeftLine className="inline-block mr-2" />
                Back to Home
            </a>
        </div>
    </section>
  )
}

export default NotFound