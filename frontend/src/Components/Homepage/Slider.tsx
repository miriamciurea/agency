import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css';

const Slider: React.FC = () => {
  const words = ["Design.", "Develop.", "Deploy.", "Transform.", "Manage."];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (isInView) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / maxScrollHeight;

        // Calculate the offset based on the scroll percent and reduce intensity
        const offset = scrollPercent * 30; // Adjust multiplier as needed for movement intensity
        setScrollPosition(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);

  // Effect to detect when the slider is in the viewport
  useEffect(() => {
    const sliderElement = document.querySelector(`.${styles.sliderContainer}`);

    if (sliderElement) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { root: null, threshold: 0.2 } // Start observing when 20% of the element is visible
      );

      observer.observe(sliderElement);

      return () => observer.unobserve(sliderElement);
    }
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {/* New wrapper for all words */}
      <div
        className={styles.sliderContent}
        style={{
          transform: `translateX(calc(-${scrollPosition}% - 1vw))`, // Move the entire content block
          transition: 'transform 0.5s ease-out', // Smooth transition
        }}
      >
        {/* Render words inside the wrapper */}
        {words.map((word, index) => (
          <div key={index} className={styles.sliderText}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
