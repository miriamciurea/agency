import styles from './Slider.module.css';
import React, { useEffect, useState, useRef } from 'react';

const Slider: React.FC = () => {
  const items = [
    { text: "DESIGN", img: "public/images/1.png" },
    { text: "DEVELOP", img: "public/images/2.png" },
    { text: "DEPLOY", img: "public/images/3.png" },
    { text: "TRANSFORM", img: "public/images/4.png" },
    { text: "MANAGE", img: "public/images/5.png" },
  ];

  // Duplicate the items for seamless looping
  const sliderItems = [...items, ...items];


  const sliderRef = useRef<HTMLUListElement>(null);
  const [scrollPosition] = useState(0);
  const [, setDirection] = useState(1); // 1 for left, -1 for right


  // Effect to change direction based on scroll
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setDirection(1); // Scroll down, move to the left
      } else {
        setDirection(-1); // Scroll up, move to the right
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.sliderContainer} animate__animated animate__fadeInUp`}>
      <div className={styles.highwayBarrier}>

        <ul ref={sliderRef} className={styles.highwayLane} style={{ transform: `translateX(${scrollPosition}px)` }}>
          {sliderItems.map((item, index) => (
            <li key={index} className={`${styles.highwayCar} text-[11rem]
                                        md:text-[17rem]`}>
              <div className=" object-contain w-[100px] h-[100px]
                              md:w-[200px] md:h-[200px]"
              style = {{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
              >
              </div>
              <div>{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
