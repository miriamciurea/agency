import React, { useEffect, useState } from 'react';
import styles from './PortfolioSection.module.css';
import one from '../../../public/images/1.png';
import two from '../../../public/images/2.png';
import three from '../../../public/images/3.png';
import four from '../../../public/images/4.png';
import five from '../../../public/images/5.png';
import six from '../../../public/images/6.png';
import seven from '../../../public/images/7.png';
import eight from '../../../public/images/8.png';

// Use provided Unsplash URLs to create an alternating pattern
const unsplashImages = [
  one,
  two,
  four,
  three,
  five,
  eight,
  seven,
  six,
];

// Create a list of 12 images alternating between the two URLs
const projectImages = Array(8)
  .fill(null)
  .map((_, index) => unsplashImages[index]);

const PortfolioSection: React.FC = () => {
  // State variables to track the scroll position
  const [scrollY, setScrollY] = useState(0);

    // Function to handle mouse movement
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>, button: HTMLElement) => {
      const { clientX, clientY } = e;
      const rect = button.getBoundingClientRect();
      const buttonX = rect.left + rect.width / 2;
      const buttonY = rect.top + rect.height / 2;

      // Use smaller movement delta for a more subtle effect
      const deltaX = (clientX - buttonX) / 2; // Adjusted for a more subtle effect
      const deltaY = (clientY - buttonY) / 2;

      button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    // Reset button position when mouse leaves
    const handleMouseLeave = (button: HTMLElement) => {
      // button.style.transform = 'translate(0, 0)';
      button.style.transition = 'transform 0.2s ease-out'; // Smooth reset
      button.style.transform = 'translate(0, 0)';
    };

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
      {/* <h1 className={`${styles.portfolioTitle} sectionTitle`}>more work button</h1>
       */}

      <div className="flex justify-center">
        <div className={styles.button}
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
          MORE WORK
        </div>
      </div>

      <div className={styles.scrollContainer}>
        <div
          className={`${styles.row} ${styles.topRow}`}
          style={{ transform: firstRowTransform }}
        >
          {projectImages.slice(0, 4).map((image, index) => (
            <div key={index}
            className={styles.projectItem}
            style ={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover"
            }} >
            </div>
          ))}
        </div>

        {/* Bottom Row with dynamic transform */}
        <div
          className={styles.row}
          style={{ transform: secondRowTransform }}
        >
          {projectImages.slice(4).map((image, index) => (
            <div key={index}
            className={styles.projectItem}
            style ={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover"
            }} >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
