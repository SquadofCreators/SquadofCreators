import React, { useState, useEffect } from 'react';
import { RiCloseFill, RiPlayFill } from "react-icons/ri";
import errorImg from '../../assets/404-img.svg';

const VideoDialog = ({ thumbnail, videoLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup in case of unmount
    };
  }, [isOpen]);

  return (
    <div className="video-dialog flex flex-col items-center justify-center mt-16 p-4 md:p-0">
      {/* Thumbnail Placeholder */}
      <div
        className="video-thumbnail relative cursor-pointer group w-full max-w-2xl rounded-xl outline outline-indigo-600/50 outline-offset-4 overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
        onClick={handleOpen}
      >
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="w-full h-auto object-cover"
        />
        {/* Play Button */}
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"
          aria-label="Play Video"
        >
          <div className="bg-indigo-600 text-white p-3 rounded-full shadow-xl hover:bg-indigo-700 transition duration-300">
            <RiPlayFill className="w-6 h-6" />
          </div>
        </button>
      </div>

      {/* Video Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-85 flex justify-center items-center">
          <div
            className="relative rounded-xl overflow-hidden w-[90%] md:w-[60%] transform scale-95 animate-fadeIn"
          >
            {/* Close Button */}
            <button
              className="absolute z-10 top-2 right-2 text-gray-600 hover:text-gray-800 p-1 bg-white rounded-full"
              onClick={handleClose}
              aria-label="Close Video"
            >
              <RiCloseFill className="w-6 h-6" />
            </button>

            {/* Video Content */}
            {videoLink ? (
              <div className="p-1 md:p-6">
                <div className="bg-transparent rounded-lg border-2 border-white">
                  <iframe
                    className="w-full aspect-video rounded-lg shadow-lg shadow-black/30"
                    src={videoLink}
                    title="Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className="p-1 md:p-6">
                <div className="bg-transparent rounded-lg border-2 border-white bg-white p-8">
                  <div className="flex flex-col items-center justify-center p-4">
                    <img
                      src={errorImg}
                      alt="Error"
                      className="w-48 h-48 object-contain mb-4"
                    />
                    <p className="text-gray-500 text-lg text-center">
                      Sorry, the video is unavailable at the moment.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDialog;
