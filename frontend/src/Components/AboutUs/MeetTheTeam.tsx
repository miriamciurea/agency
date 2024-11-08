import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import andreiImage from '../../assets/andrei.png';
import serbanImage from '../../assets/serban.jpeg';
import miriamImage from '../../assets/miriam.jpeg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

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
    linkedIn: 'https://www.linkedin.com/in/andrei-minciuna-b44993143/',
    github: 'https://github.com/AndreiM987',
    email: 'Andrei-m98@yahoo.com',
  },
  {
    name: 'Serban',
    role: 'Full-stack Developer',
    description: 'Expert in building scalable web applications.',
    imageUrl: serbanImage,
    linkedIn: 'https://www.linkedin.com/in/serbanciurea/',
    github: 'https://github.com/serbanciurea',
    email: 'ciureaserban777@icloud.com',
  },
  {
    name: 'Miriam',
    role: 'Full stack | DevOps',
    description: 'Oversees development and architecture.',
    imageUrl: miriamImage,
    linkedIn: 'https://www.linkedin.com/in/miriam-ciurea/',
    github: 'https://github.com/miriamciurea',
    email: 'miriamciurea777@icloud.com',
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenBottom: { opacity: 0, y: 100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, x: 0, y: 0, transition: { duration: 0.8 } }
};

const MeetTheTeam: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ backgroundColor: '#EDEDED' }}>
      {/* Title */}
      <motion.h2
        className="text-[3rem] text-center"
        style={{
          color: '#333',
          y: yPosAnim,
        }}
      >
        MEET THE TEAM
      </motion.h2>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-member-card flex flex-col items-center relative group shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            style={{ height: '400px' }}
            variants={cardVariants}
            initial={
              index === 0
                ? 'hiddenLeft'
                : index === 1
                ? 'hiddenBottom'
                : 'hiddenRight'
            }
            whileInView="visible"
            exit="hidden"
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: false, amount: 0.3 }} // Trigger animation at 30% in viewport
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
              <div className="flex space-x-6 justify-center mt-4">
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" title={`${member.name}'s LinkedIn`}>
                  <FaLinkedin className="fa-2x" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" title={`${member.name}'s GitHub`}>
                  <FaGithub className="fa-2x" />
                </a>
                <a href={`mailto:${member.email}`} className="hover:text-gray-400" title={`Email ${member.name}`}>
                  <FaEnvelope className="fa-2x" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
