import React, { useState } from 'react';

const ProjectInfoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    deadline: '',
    budget: ''
  });

  // Open the modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log('Project Info Submitted:', formData);
    handleCloseModal();
  };

  return (
    <div>
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 h-full w-full flex justify-center items-center transition-transform duration-300">
          <div className="bg-white p-8 w-5/6 md:w-3/6 rounded-lg shadow-lg overflow-scroll md:overflow-hidden">
            
            {/* Modal Content */}
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Project Information</h2>
            <p className="text-xs md:text-base text-gray-400 mb-4">Fill in the details about your project to get started.</p>

            {/* Project Information Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="projectName" className="block text-gray-700 text-xs md:text-lg">Project Name</label>
                <input 
                  type="text" 
                  id="projectName" 
                  name="projectName" 
                  value={formData.projectName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2" 
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-xs md:text-lg">Project Description</label>
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2 resize-none" 
                  rows="4"
                  required
                />
              </div>
              {/* <div className="mb-4">
                <label htmlFor="deadline" className="block text-gray-700 text-xs md:text-lg">Deadline</label>
                <input 
                  type="date" 
                  id="deadline" 
                  name="deadline" 
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2" 
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="budget" className="block text-gray-700 text-xs md:text-lg">Budget</label>
                <input 
                  type="number" 
                  id="budget" 
                  name="budget" 
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2" 
                  required
                />
              </div> */}
              <div className="text-center flex items-center justify-center gap-6 mt-8">
                <button 
                  type="submit" 
                  className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  Submit
                </button>
                
                <button 
                  type="button" 
                  className="text-gray-500 py-2 px-6 border border-gray-300 rounded-full transition duration-300"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>                
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default ProjectInfoModal;
