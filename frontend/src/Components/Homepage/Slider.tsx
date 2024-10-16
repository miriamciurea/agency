// import React, { useEffect, useState } from 'react';
// import styles from './Slider.module.css';

// const Slider: React.FC = () => {
//   const words = ["Design.", "Develop.", "Deploy.", "Transform.", "Manage."];
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isInView, setIsInView] = useState(false);

//   // Effect to handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       if (isInView) {
//         const scrollTop = window.scrollY || document.documentElement.scrollTop;
//         const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//         const scrollPercent = scrollTop / maxScrollHeight;

//         // Calculate the offset based on the scroll percent and reduce intensity
//         const offset = scrollPercent * 30; // Adjust multiplier as needed for movement intensity
//         setScrollPosition(offset);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isInView]);

//   // Effect to detect when the slider is in the viewport
//   useEffect(() => {
//     const sliderElement = document.querySelector(`.${styles.sliderContainer}`);

//     if (sliderElement) {
//       const observer = new IntersectionObserver(
//         ([entry]) => setIsInView(entry.isIntersecting),
//         { root: null, threshold: 0.2 } // Start observing when 20% of the element is visible
//       );

//       observer.observe(sliderElement);

//       return () => observer.unobserve(sliderElement);
//     }
//   }, []);

//   return (
//     <div className={styles.sliderContainer}>
//       {/* New wrapper for all words */}
//       <div
//         className={styles.sliderContent}
//         style={{
//           transform: `translateX(calc(-${scrollPosition}% - 1vw))`, // Move the entire content block
//           transition: 'transform 0.5s ease-out', // Smooth transition
//         }}
//       >
//         {/* Render words inside the wrapper */}
//         {words.map((word, index) => (
//           <div key={index} className={styles.sliderText}>
//             {word}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css';

const Slider: React.FC = () => {
  const words = ["Design.", "Develop.", "Deploy.", "Transform.", "Manage.", "Design.", "Develop.", "Deploy.", "Transform.", "Manage.", "Design.", "Develop.", "Deploy.", "Transform.", "Manage."];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [_isInView, setIsInView] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for right (moving left), -1 for left (moving right)

  // Effect to handle automatic movement
  useEffect(() => {
    const moveContinuously = () => {
      setScrollPosition((prevPosition) => prevPosition + direction * 0.003); // Slow continuous movement, adjust speed as needed
    };

    const intervalId = setInterval(moveContinuously, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, [direction]);

  // Effect to handle scroll event and reverse direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setDirection(1); // Scrolling down, move words to the left
      } else {
        setDirection(-1); // Scrolling up, move words to the right
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to detect when the slider is in the viewport
  useEffect(() => {
    const sliderElement = document.querySelector(`.${styles.sliderContainer}`);

    if (sliderElement) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { root: null, threshold: 0.1 } // Start observing when 20% of the element is visible
      );

      observer.observe(sliderElement);

      return () => observer.unobserve(sliderElement);
    }
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {/* Wrapper for all words */}
      <div
        className={styles.sliderContent}
        style={{
          transform: `translateX(${scrollPosition}%)`, // Move the entire content block based on position
          transition: 'transform 0.1s linear', // Smooth continuous movement
        }}
      >
        {/* Render words inside the wrapper, duplicating for continuous effect */}
        {[...words, ...words].map((word, index) => (
          <div key={index} className={styles.sliderText}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
