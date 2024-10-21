import React from 'react';
import andreiImage from '../../assets/andrei.png';
import serbanImage from '../../assets/serban.jpeg';
import miriamImage from '../../assets/miriam.jpeg';

// Online icon imports
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Using react-icons

interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedIn: string;
  github: string;
  email: string;
  imageUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Andrei',
    role: 'UX|UI Designer',
    description: 'Specializes in user interface and experience design.',
    imageUrl: andreiImage,
    linkedIn: 'https://linkedin.com/in/andrei',
    github: 'https://github.com/andrei',
    email: 'andrei@example.com',
  },
  {
    name: 'Serban',
    role: 'Full-stack Developer',
    description: 'Expert in building scalable web applications.',
    imageUrl: serbanImage,
    linkedIn: 'https://linkedin.com/in/serban',
    github: 'https://github.com/serban',
    email: 'serban@example.com',
  },
  {
    name: 'Miriam',
    role: 'Lead Developer',
    description: 'Oversees development and architecture.',
    imageUrl: miriamImage,
    linkedIn: 'https://linkedin.com/in/miriam',
    github: 'https://github.com/miriam',
    email: 'miriam@example.com',
  },
];

const MeetTheTeam: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: '#EDEDED' }}>
      <h2 className="text-5xl font-bold mb-16 text-center" style={{ fontFamily: 'Orbitron', color: '#333' }}>
        Meet the Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-member-card flex flex-col items-center relative group shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            style={{ height: '500px' }} // Increased height for the card
          >
            {/* Full-width Image with fixed height */}
            <div className="w-full h-96 overflow-hidden">
              <img
                src={member.imageUrl || 'https://via.placeholder.com/300'}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </div>

            {/* Thin Grey Line */}
            <div className="w-full border-t border-gray-300 mt-2"></div>

            {/* Name and Role */}
            <div className="w-full flex justify-between px-6 py-2" style={{ marginBottom: '0' }}>
              <p className="text-sm font-semibold" style={{ fontFamily: 'Orbitron', color: '#333' }}>
                {member.name}
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Space Grotesk' }}>
                {member.role}
              </p>
            </div>

            {/* Hover Overlay with Description and Icons */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
              <p className="mb-4 text-lg px-4">{member.description}</p>
              {/* Social Links */}
              <div className="flex space-x-6 justify-center mt-4">
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaLinkedin className="fa-2x" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaGithub className="fa-2x" />
                </a>
                <a href={`mailto:${member.email}`} className="hover:text-gray-400">
                  <FaEnvelope className="fa-2x" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
