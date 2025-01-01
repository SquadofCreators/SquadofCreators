import React,{useEffect} from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import teamData from '../data/TeamData';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Praveenkumar S',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    socials: {
      linkedin: 'https://linkedin.com/in/praveenkumar',
      twitter: 'https://twitter.com/praveenkumar',
      github: 'https://github.com/praveenkumar',
    },
  },
  {
    name: 'Jane Doe',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    socials: {
      linkedin: 'https://linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
      github: 'https://github.com/janedoe',
    },
  },
  {
    name: 'John Smith',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    socials: {
      linkedin: 'https://linkedin.com/in/johnsmith',
      twitter: 'https://twitter.com/johnsmith',
      github: 'https://github.com/johnsmith',
    },
  },
];

function Team() {

    // Scroll to the top of the page when the component mounts
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: 'Home', link: '/', current: false },
        { label: 'Team', link: null, current: true },
      ];

  return (

    <div>
        {/* Header Section */}
        <PageHeader title="Our Team" description="Meet the talented individuals who make it all happen." breadcrumbs={breadcrumbs}/>
        
        <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-screen-lg mx-auto px-4">
            <p className="text-lg text-center text-gray-600 mb-16">
            Behind every successful project is a team of passionate and skilled individuals. Meet the people who make it all happen!
            </p>

            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
                <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
                >
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4">
                    {member.socials.linkedin && (
                    <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    )}
                    {member.socials.email && (
                    <a
                        href={`mailto:${member.socials.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600"
                    >
                        <FaEnvelope size={20} />
                    </a>
                    )}
                    {member.socials.github && (
                    <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600"
                    >
                        <FaGithub size={20} />
                    </a>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Team;
