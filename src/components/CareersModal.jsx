import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function CareersModal({ data, onClose }) {
  // Focus on the modal when it opens
  useEffect(() => {
    const modalElement = document.getElementById('careers-modal');
    if (modalElement) modalElement.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out"
      role="dialog"
      aria-modal="true"
      id="careers-modal"
      tabIndex="-1"
    >
      <div className="bg-white flex flex-col justify-center gap-4 rounded-lg shadow-lg p-6 max-w-lg w-11/12 md:w-full transform transition-transform duration-300 scale-100 sm:scale-110">

        {/* Modal Header */}
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">{data.title}</h2>

        {/* Modal Content */}
        <div className="text-gray-700 space-y-4">
          <p>{data.description}</p>
          <p>
            <strong>Location:</strong> {data.location}
          </p>
          <p>
            <strong>Duration:</strong> {data.duration}
          </p>
          <p>
            <strong>Stipend:</strong> {data.stipend || 'Unpaid'}
          </p>
          <p>
            <strong>Skills:</strong> {data.skills.join(', ')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href={data.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Apply Now
          </a>
          <button
            onClick={onClose}
            className="text-gray-600 border px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CareersModal;
