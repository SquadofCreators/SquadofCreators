import React from 'react';

function CareersModal({ data }) {
  return (
    <div className="bg-white flex flex-col justify-center gap-2 rounded-lg shadow-lg p-6 max-w-lg w-5/6 md:w-full">
      <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
      <p className="mb-4">{data.description}</p>
      <p className="mb-4">Location: {data.location}</p>
      <p className="mb-4">Duration: {data.duration}</p>
      <p className="mb-4">Stipend: {data.stipend || 'Unpaid'}</p>
      <p className="mb-4">Skills: {data.skills.join(', ')}</p>

      <div className='flex items-center justify-center mt-4'>
        <a
            href={data.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white  w-max px-4 py-2 rounded-md hover:bg-indigo-700"
        >
            Apply Now
        </a>
      </div>
    </div>
  );
}

export default CareersModal;
