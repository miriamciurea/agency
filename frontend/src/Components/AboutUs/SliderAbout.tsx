import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import styles from './SliderAbout.module.css';

const AboutSlider: React.FC = () => {
  const items = [
    { text: "Collaborate", img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { text: "Innovative", img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { text: "Solutions", img: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { text: "Design", img: "https://images.unsplash.com/photo-1520583457224-aee11bad5112?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { text: "Support", img: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const sliderRef = useRef<HTMLUListElement>(null);
  const baseX = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set visible when in the viewport
          } else {
            setIsVisible(false); // Set invisible when out of the viewport
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the slider is in view
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useAnimationFrame(() => {
    if (isVisible) {
      baseX.set(baseX.get() - 1); // Move left continuously when visible
    }
  });

  return (
    <div className={`${styles.sliderContainer} animate__animated animate__fadeInUp`}>
      <div className={styles.highwayBarrier}>
        <motion.ul ref={sliderRef} className={`${styles.highwayLane} text-[11rem] md:[17rem]`} style={{ x: baseX }}>
          {items.map((item, index) => (
            <li key={index} className={styles.highwayCar}>
              <div
                className="w-[200px] h-[200px] object-contain"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
              ></div>
              <div>{item.text}</div>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default AboutSlider;
