import React, { useEffect, useState } from 'react';
import styles from './PortfolioSection.module.css';

// Use provided Unsplash URLs to create an alternating pattern
const unsplashImages = [
  'https://images.unsplash.com/photo-1728399195162-81451ee77a6f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1702571721508-65b390fc9c47?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

// Create a list of 12 images alternating between the two URLs
const projectImages = Array(12)
  .fill(null)
  .map((_, index) => unsplashImages[index % 2]);

const PortfolioSection: React.FC = () => {
  // State variables to track the scroll position
  const [scrollY, setScrollY] = useState(0);

  // Effect to add scroll listener and update scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the vertical scroll position
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate smaller translate values based on scroll position
  const firstRowTransform = `translateX(-${scrollY * 0.05}px)`; // Adjusted multiplier for less movement
  const secondRowTransform = `translateX(${scrollY * 0.05 }px)`; // Initial offset to start the second row from the end

  return (
    <div className={styles.portfolioSectionContainer}>
      {/* Portfolio Title */}
      <h1 className={styles.portfolioTitle}>Portfolio</h1>

      {/* Horizontal Scrollable Container */}
      <div className={styles.scrollContainer}>
        {/* Top Row with dynamic transform */}
        <div
          className={`${styles.row} ${styles.topRow}`}
          style={{ transform: firstRowTransform }}
        >
          {projectImages.slice(0, 6).map((image, index) => (
            <div key={index} className={styles.projectItem}>
              <img src={image} alt={`Project ${index + 1}`} className={styles.projectImage} />
            </div>
          ))}
        </div>

        {/* Bottom Row with dynamic transform */}
        <div
          className={styles.row}
          style={{ transform: secondRowTransform }}
        >
          {projectImages.slice(6).map((image, index) => (
            <div key={index} className={styles.projectItem}>
              <img src={image} alt={`Project ${index + 7}`} className={styles.projectImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
