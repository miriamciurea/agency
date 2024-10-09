import React from 'react';
import styles from './CompaniesSection.module.css'; // Import the CSS module

// Import SVG logos (replace these with actual paths to your SVG logo files)
import aptLogo from '../../assets/Apt.jpeg'; // Ensure the path is correct
import dnnLogo from '../../assets/DNNovation.png';

const CompaniesSection: React.FC = () => {
  // List of company logos
  const companyLogos = [aptLogo, dnnLogo, aptLogo, dnnLogo, aptLogo, dnnLogo];

  return (
    <div className={styles.companiesSectionContainer}>
      {/* Title */}
      <h2 className={styles.sectionTitle}>Companies We've Worked With</h2>

      {/* Grid Container for Logos */}
      <div className={styles.logosGrid}>
        {companyLogos.map((logo, index) => (
          <div key={index} className={styles.logoItem}>
            <img src={logo} alt={`Company ${index + 1}`} className={styles.logoImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesSection;
