import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import PageHeader from "../components/PageHeader"
import { MdDelete } from "react-icons/md";
import { RiCheckboxCircleLine, RiArrowLeftSLine } from "react-icons/ri";
import Footer from "../components/Footer";

const GrowWithUs = () => {

    // Scroll to the top of the page when the component mounts
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // breeadcrumb links
    const breadcrumbs = [
        { label: 'Home', link: '/', current: false },
        { label: 'Collaboration', link: null, current: true },
      ];

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        portfolio: "",
        linkedIn: "",
        skills: "",
        availability: "",
        location: "",
        whyCollaborate: "",
        termsAccepted: false,
        resume: null,
    });

  const formFields = [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "Your email address", required: true },
    { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "Your mobile number", required: true },
    { name: "portfolio", label: "Portfolio/Website", type: "url", placeholder: "Your portfolio URL (optional)" },
    { name: "linkedIn", label: "LinkedIn Profile", type: "url", placeholder: "Your LinkedIn profile URL", required: true },
    { name: "skills", label: "Skills/Expertise", type: "text", placeholder: "e.g., Web Development, AI/ML", required: true },
    { name: "availability", label: "Availability", type: "select", options: ["", "Full-Time", "Part-Time", "Freelance"], required: true },
    { name: "location", label: "Location", type: "text", placeholder: "Your current city", required: true },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value });
  };

  const handleDeleteResume = () => {
    setFormData({ ...formData, resume: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setFormData({
            fullName: "",
            email: "",
            mobile: "",
            portfolio: "",
            linkedIn: "",
            skills: "",
            availability: "",
            location: "",
            whyCollaborate: "",
            termsAccepted: false,
            resume: null,
        });
    };

  return (
    <>
        {/* Header Section */}
        <PageHeader title="Grow with Us" description="Unlock Your Potential and Shape the Future Together" breadcrumbs={breadcrumbs} />

        <div className="min-h-screen flex justify-center items-center bg-gray-100/30">
            <div className=" px-8 py-16 max-w-xl w-full">
                <form onSubmit={handleSubmit}>
                {/* Dynamically Render Form Fields */}
                {formFields.map((field) => (
                    <div key={field.name} className="mb-4 mt-6 flex flex-col items-start gap-2">
                    <label className="block text-gray-700 ml-2">{field.label}</label>
                    {field.type === "select" ? (
                        <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        required={field.required}
                        >
                        {field.options.map((option, idx) => (
                            <option key={idx} value={option}>
                            {option || "Select availability"}
                            </option>
                        ))}
                        </select>
                    ) : (
                        <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        placeholder={field.placeholder}
                        required={field.required}
                        />
                    )}
                    </div>
                ))}

                {/* Why Collaborate */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Why do you want to collaborate?</label>
                    <textarea
                    name="whyCollaborate"
                    value={formData.whyCollaborate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    rows="3"
                    placeholder="Your motivation or interest"
                    />
                </div>

                {/* Resume Upload */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Resume/CV</label>
                    {formData.resume ? (
                    <div className="w-full md:w-[60%] h-12 border border-gray-300 rounded-lg flex items-center justify-between px-4">
                        <span className="text-gray-600 truncate">{formData.resume.name}</span>
                        <button
                        type="button"
                        onClick={handleDeleteResume}
                        className="bg-red-600 text-white rounded-full w-6 h-6 p-1 flex items-center justify-center"
                        >
                            <MdDelete className="text-white" />
                        </button>
                    </div>
                    ) : (
                    <input
                        type="file"
                        name="resume"
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        accept=".pdf,.doc,.docx"
                        required
                    />
                    )}
                </div>

                {/* Terms and Conditions */}
                <div className="mb-4 flex items-center justify-center mt-10 gap-2">
                    <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="mr-2 mt-1"
                    required
                    />
                    <label for="termsAccepted" className="text-gray-700">
                    I agree to the <Link to="/grow-with-us-tc" className="text-indigo-600 underline">terms and conditions</Link>.
                    </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                    <button
                    type="submit"
                    disabled={!formData.termsAccepted}
                    className={`px-6 py-2 rounded-lg ${
                        formData.termsAccepted
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    } transition`}
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>

        </div>
        
        {/* Footer Section */}
        <Footer />
    
        {
            // Modal
            isModalOpen && (
                <CustomModal
                    icon={<RiCheckboxCircleLine className="text-green-500" />}
                    title="Request Submitted"
                    message="Your collaboration request has been submitted successfully."
                    primaryBtn={{
                        label: "Close",
                        onClick: () => handleModalClose(),
                    }}
                />
            )
        }
    </>
  );
};

export default GrowWithUs;
