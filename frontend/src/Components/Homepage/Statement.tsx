import React, { useEffect, useState } from 'react';

const Statement: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [circleInitialTop, setCircleInitialTop] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const circle = document.getElementById('moving-circle');
    if (circle) {
      // Save the initial top position of the circle
      setCircleInitialTop(circle.getBoundingClientRect().top);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-8">
      <div className="w-7/12 text-[#3A3A3A]">
        <h1 className="font-radley text-[45px] leading-[1.5]">
          At MoonCode, we’re all about results.<br />
          Need more <span className="italic">product sales</span>, <span className="italic">subscribers</span>, <span className="italic">app downloads</span>, or <span className="italic">brand awareness</span>?
          Whether it's attracting <span className="text-[#6AB4FF]">new</span> customers or generating <span className="text-[#6AB4FF]">quality</span> leads, we’ll create digital solutions
          to <span className="text-[#FF6A6A]">drive your business forward.</span>
        </h1>
      </div>
      <div className="relative w-3/12 flex justify-center items-center text-[#3A3A3A]">
        <div
          id="moving-circle"
          className="w-[150px] h-[150px] rounded-full bg-red-500 transition-transform duration-300"
          style={{
            transform: `translateY(${scrollY - circleInitialTop}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Statement;
