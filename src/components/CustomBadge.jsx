import React from "react";

const CustomBadge = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center my-8">
        <div className="bg-white text-sm md:text-lg text-gray-600 border border-gray-500/20 px-4 py-2 shadow-md rounded-full flex items-center">
            {icon}
            <span className="ml-2">{text}</span>
        </div>
    </div>
  );
};

export default CustomBadge;
