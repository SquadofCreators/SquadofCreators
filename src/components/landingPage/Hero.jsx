import React, {useState, useEffect} from "react";
import { RiCircleFill, RiSparkling2Fill } from "react-icons/ri";
import VideoDialog from "./VideoDialog";
import CustomBadge from "../CustomBadge";
import { RiCloseFill } from "react-icons/ri";
import heroVideoData from "../../data/HeroData";
import { Link } from "react-router-dom";

const Hero = () => {

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
    handleCloseModal();
    setFormData({
      projectName: '',
      description: '',
      deadline: '',
      budget: ''
    })
  };

  useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);
  
  return (
    <section id="home" className="bg-gradient-to-br from-indigo-50/20 to-indigo-100 w-full h-vh py-16 md:pt-28 pb-14 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        
        <CustomBadge 
          icon={<RiSparkling2Fill className="text-indigo-600"/>} 
          text="AI-Powered Tech" 
        />

        <h1 className="px-4 text-2xl md:leading-snug md:text-5xl font-bold text-center text-gray-800">
          Innovate with <span className="text-indigo-600">Intelligence,</span> <br />
          Build with Technology
        </h1>

        <p className="max-w-xl text-center text-sm leading-relaxed md:text-lg text-gray-400 mt-4">
          Harness the power of Artificial Intelligence and Machine Learning to create transformative technology. 
          Build smarter, faster, and more efficiently with Squad of Creators.
        </p>
        
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            className="w-max px-6 py-3 text-sm md:text-lg bg-indigo-600 text-white border-2 rounded-full hover:bg-indigo-600/90 hover:shadow-md transition-colors duration-300"
            onClick={handleOpenModal}
          >
            Get Started
          </button>

          <Link 
            to="/grow-with-us"
            className="w-max px-6 py-3 text-sm md:text-lg bg-white text-gray-600 border-2 hover:border-indigo-600 rounded-full hover:shadow-md transition-colors duration-300"
          >
            Grow with Us
          </Link>
          
        </div>
      </div>  

      <VideoDialog 
        thumbnail={heroVideoData.thumbnail}
        videoLink={heroVideoData.link}
      />
      
      {/* Modal */}
      {isOpen && (
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
                  className="text-gray-500 py-2 px-6 border rounded-full transition duration-300"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>                
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
