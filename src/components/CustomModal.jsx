import React from "react";

const CustomModal = ({ 
    icon, 
    title, 
    message, 
    primaryBtn, 
    secondaryBtn
}) => {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-65 z-50">
      <div className="bg-white rounded-lg shadow-lg px-6 py-6 md:py-10 w-4/5 md:w-2/5">
        {/* Icon */}
        {icon && (
          <div className="flex justify-center mb-4">
            <div className="text-7xl">{icon}</div>
          </div>
        )}

        {/* Title */}
        {title && (
          <h2 className="text-xl font-bold text-center mb-2 text-gray-800">
            {title}
          </h2>
        )}

        {/* Message */}
        {message && (
          <p className="text-center text-gray-600 mb-6">
            {message}
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-center space-x-4 md:mt-10">
            {primaryBtn && (
                <button
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    onClick={primaryBtn.onClick}
                >
                    {primaryBtn.label}
                </button>
            )}

            {secondaryBtn && (
                <button
                className="px-6 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400"
                onClick={secondaryBtn.onClick}
                >
                {secondaryBtn.label}
                </button>
            )}  
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
