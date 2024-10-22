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
            <li key={index} className={styles.highwayCar}>
              <div className="w-[200px] h-[200px] object-contain"
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

// import React, { useEffect, useState } from 'react';
// import styles from './Slider.module.css';

// const Slider: React.FC = () => {
//   const items = [
//     { text: "DESIGN", img: "public/images/1.png" },
//     { text: "DEVELOP", img: "public/images/2.png" },
//     { text: "DEPLOY", img: "public/images/3.png" },
//     { text: "TRANSFORM", img: "public/images/4.png" },
//     { text: "MANAGE", img: "public/images/5.png" },
//   ];

//   const sliderItems = [...items, ...items]; // Duplicate items for seamless loop
//   const [isReversed, setIsReversed] = useState(false); // Control direction of scroll

//   // Effect to change direction based on scroll
//   useEffect(() => {
//     let lastScrollTop = 0;

//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;

//       if (scrollTop > lastScrollTop) {
//         setIsReversed(false); // Scrolling down, use normal scroll (left)
//       } else {
//         setIsReversed(true); // Scrolling up, reverse the scroll (right)
//       }

//       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={styles.sliderContainer}>
//       <div className={styles.highwayBarrier}>
//         <ul
//           className={`${styles.highwayLane} ${isReversed ? styles.reverse : ''}`}
//         >
//           {sliderItems.map((item, index) => (
//             <li key={index} className={styles.highwayCar}>
//               <div
//                 className="w-[200px] h-[200px] object-contain"
//                 style={{
//                   backgroundImage: `url(${item.img})`,
//                   backgroundSize: "contain",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                 }}
//               ></div>
//               <div>{item.text}</div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Slider;
