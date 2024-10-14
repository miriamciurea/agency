import React, { useEffect, useRef, useState } from 'react';

const AboutUs: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1); // Initialize scale to 1

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the proportion of the image visible in the viewport
        const scrollRatio = Math.min(1, Math.max(0, (windowHeight - rect.top) / windowHeight));

        // Smooth out the scaling changes by making the change more gradual
        const newScale = 1 + scrollRatio * 0.1; // Only allow a 10% zoom (1 to 1.1)

        // Gradually update the scale to make it smooth
        setScale(prevScale => prevScale + (newScale - prevScale) * 0.1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
      <div className="w-full text-left mb-4 md:text-left sm:text-center">
        <h2 className="font-raleway font-semibold text-[40px] mb-12 ml-12 mt-6 md:text-[32px] md:ml-36 md:mt-6 md:mb-12 sm:ml-0 sm:mt-0 sm:mb-4">
          We turn{' '}
          <span className="text-[#A1C6EA]">ideas</span> into{' '}
          <span className="text-[#FF6B6B]">exceptional</span> digital{' '}
          <span className="text-[#A1C6EA]">realities</span>
        </h2>
      </div>
      <div
        ref={imageRef}
        className="w-[85%] h-[450px] overflow-hidden flex items-center justify-center mx-auto"
        style={{ transform: `scale(${scale})`, transition: 'transform 0.1s ease-out' }} // Dynamic scale
      >
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
