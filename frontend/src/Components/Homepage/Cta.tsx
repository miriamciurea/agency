import React, { useEffect, useRef, useState } from 'react';
import styles from './Cta.module.css';

const Cta: React.FC = () => {
  const [circleLeftPosition, setCircleLeftPosition] = useState(0); // Initial position of the circle from the left
  const ctaRef = useRef<HTMLDivElement>(null); // Reference to the CTA div

  // Function to handle mouse movement with a limited range for the element
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget as HTMLElement; // Use e.currentTarget directly to get the element
    const { clientX, clientY } = e;
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;

    // Calculate deltas and limit movement range to 10px
    const deltaX = Math.min(Math.max((clientX - elementX) / 5, -10), 10);
    const deltaY = Math.min(Math.max((clientY - elementY) / 5, -10), 10);

    // Apply the movement only to the hovered element
    element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  // Function to reset the element position
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget as HTMLElement; // Use e.currentTarget directly to get the element
    // Reset position to initial
    element.style.transform = 'translate(0, 0)';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect(); // Get CTA div position relative to viewport
        const windowHeight = window.innerHeight; // Get height of viewport

        // Calculate the percentage of the CTA div visible in the viewport (0 to 1)
        const visiblePercentage = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

        // Calculate new position based on visibility percentage (range: 0 to 500px)
        const newLeftPosition = visiblePercentage * 500;

        setCircleLeftPosition(newLeftPosition);
      }
    };

    // Use requestAnimationFrame to eliminate scroll delay
    const handleSmoothScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleSmoothScroll); // Listen for scroll events using requestAnimationFrame
    return () => window.removeEventListener('scroll', handleSmoothScroll); // Cleanup event listener on component unmount
  }, []);

  return (
    <div ref={ctaRef} className="relative h-[70vh] flex flex-col items-center justify-center bg-[#1e1e1e]">
      {/* Title */}
      <h2
        className="text-3xl text-white mb-8 font-[100]"
        onMouseMove={handleMouseMove} // Pass only the event
        onMouseLeave={handleMouseLeave} // Pass only the event
      >
        Are you interested?
      </h2>

      {/* Fine Horizontal Line */}
      <div className="absolute w-3/4 h-0.5 bg-gray-500 bg-opacity-50 top-1/2 transform -translate-y-1/2"></div>

      {/* Moving Circle that follows the cursor */}
      <button
        className="absolute bg-[#FF6B6B] rounded-full text-white font-bold flex items-center justify-center shadow-lg transition-transform duration-100 ease-linear"
        style={{
          width: '250px',
          height: '250px',
          left: `calc(50% - 125px + ${circleLeftPosition}px)`, // Center the circle on the line and move based on scroll
          top: `calc(50% - 125px)`, // Keep the circle vertically centered
          transform: 'translate(0, 0)', // Ensure no additional transform is applied initially
        }}
        onMouseMove={handleMouseMove} // Pass only the event
        onMouseLeave={handleMouseLeave} // Pass only the event
      >
        <span
          onMouseMove={handleMouseMove} // Apply cursor-follow effect to text
          onMouseLeave={handleMouseLeave} // Reset transform
          className="inline-block transition-transform duration-100 ease-linear font-[100] text-[1.2rem]"
        >
          CONTACT US
        </span>
      </button>

      {/* Buttons Below the Circle */}
      <div className="mt-64 flex space-x-6">
        <button
          // className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-200 relative overflow-hidden"
          onMouseMove={handleMouseMove} // Apply effect to button
          onMouseLeave={handleMouseLeave} // Reset transform
        >
          <span
            onMouseMove={handleMouseMove} // Apply cursor-follow effect to text
            onMouseLeave={handleMouseLeave} // Reset transform
            // className="inline-block transition-transform duration-100 ease-linear"
            className={styles.button}
          ><span className={styles.span}></span>
            +40 731114916
          </span>
        </button>
        <button
          // className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-200 relative overflow-hidden"
          onMouseMove={handleMouseMove} // Apply effect to button
          onMouseLeave={handleMouseLeave} // Reset transform
        >
          <span
            onMouseMove={handleMouseMove} // Apply cursor-follow effect to text
            onMouseLeave={handleMouseLeave} // Reset transform
            className="inline-block transition-transform duration-100 ease-linear"
          >
            info@mooncode.com
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
