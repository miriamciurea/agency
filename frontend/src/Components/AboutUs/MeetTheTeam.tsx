import React from 'react';
import andreiImage from '../../assets/andrei.png';
import serbanImage from '../../assets/serban.jpeg';
import miriamImage from '../../assets/miriam.jpeg';

interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string; // URL for images
}

const teamMembers: TeamMember[] = [
  {
    name: 'Andrei',
    role: 'UX|UI Designer',
    imageUrl: andreiImage, // Imported image
  },
  {
    name: 'Serban',
    role: 'Full-stack developer',
    imageUrl: serbanImage, // Imported image
  },
  {
    name: 'Miriam',
    role: 'Lead developer',
    imageUrl: miriamImage, // Imported image
  },
];

const MeetTheTeam: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ backgroundColor: '#EDEDED' }}>
      <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Orbitron', color: '#333' }}>
        Meet the Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-member-card flex flex-col items-center"
          >
            {/* Full-width Image Placeholder */}
            <div className="w-full overflow-hidden">
              <img
                src={member.imageUrl || 'https://via.placeholder.com/300'}
                alt={member.name}
                className="w-full max-h-80 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>

            {/* Name and Role */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold" style={{ fontFamily: 'Orbitron', color: '#333' }}>
                {member.name}
              </h3>
              <p className="text-md text-gray-600" style={{ fontFamily: 'Space Grotesk' }}>
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
