import React from 'react';
// import styles from './CompaniesSection.module.css';

// Import SVG logos (replace these with actual paths to your SVG logo files)
import aptLogo from '../../assets/Apt.png'; // Ensure the path is correct
import dnnLogo from '../../assets/DNNovation.png';

const CompaniesSection: React.FC = () => {
  // List of company logos
  // const companyLogos = [aptLogo, dnnLogo];

  return (
    <div className="flex justify-center items-center gap-[5%] p-[5%]">
      {/* Link to APT Telecommunications */}
      <a href="https://www.aptelecommunication.co.uk" target="_blank" rel="noopener noreferrer"
      className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <div
          className="h-[100px] w-[100px] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${aptLogo})`
          }}
        ></div>
      </a>

      <div className="" style={{ fontFamily: "var(--crazy)" }}>TRUSTED BY</div>

      {/* Link to DNNovation Construction */}
      <a href="https://www.dnnovationconstruction.co.uk" target="_blank" rel="noopener noreferrer"
      className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <div
          className="h-[100px] w-[100px] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${dnnLogo})`
          }}
        ></div>
      </a>
    </div>
  );
};


export default CompaniesSection;
