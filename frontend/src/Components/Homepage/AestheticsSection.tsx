import React, { useRef } from 'react';
import styles from './AestheticsSection.module.css';
import { FaPaintBrush, FaPalette, FaVectorSquare, FaShapes, FaMagic, FaImage } from 'react-icons/fa';

const AestheticsSection: React.FC = () => {
  // Use a ref to access the title element directly
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Function to handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (titleRef.current) {
      const { clientX, clientY } = e;
      const rect = titleRef.current.getBoundingClientRect();
      const titleX = rect.left + rect.width / 2;
      const titleY = rect.top + rect.height / 2;

      const deltaX = (clientX - titleX) / 1; // Adjust for movement sensitivity
      const deltaY = (clientY - titleY) / 1; // Adjust for movement sensitivity

      // Apply the transformation to the title element
      titleRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };

  // Function to reset the title position on mouse leave
  const handleMouseLeave = () => {
    if (titleRef.current) {
      titleRef.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <div className={styles.aestheticsSectionContainer}>
      {/* Red Title with hover effect */}
      <h1
        className={styles.aestheticsTitle}
        ref={titleRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        What kind of aesthetics?
      </h1>

      {/* Circles with Icons */}
      <div className={styles.iconsContainer}>
        <div className={styles.iconCircle}>
          <FaPaintBrush className={styles.icon} />
        </div>
        <div className={styles.iconCircle}>
          <FaPalette className={styles.icon} />
        </div>
        <div className={styles.iconCircle}>
          <FaVectorSquare className={styles.icon} />
        </div>
        <div className={styles.iconCircle}>
          <FaShapes className={styles.icon} />
        </div>
        <div className={styles.iconCircle}>
          <FaMagic className={styles.icon} />
        </div>
        <div className={styles.iconCircle}>
          <FaImage className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default AestheticsSection;
