import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css';

const Slider: React.FC = () => {
  const words = ["Design.", "Develop.", "Deploy.", "Transform.", "Manage."]; // Words with "." after each
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / maxScrollHeight;

      // Calculate the offset based on the scroll percent
      const offset = scrollPercent * 200; // Adjust multiplier as needed for movement intensity
      setScrollPosition(offset);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {/* Render words dynamically, equally spaced to cover the full width */}
      {words.map((word, index) => (
        <div
          key={index}
          className={styles.sliderText}
          style={{
            transform: `translateX(-${scrollPosition}%)`,
            color: '#FF6B6B', // Apply the desired color
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default Slider;
