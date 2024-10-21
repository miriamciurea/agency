import React, { useState } from "react";
import styles from "./WhatWeDo.module.css";

const imageMapping = {
  "Research & Design":
    "https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Development":
    "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Domain Services":
    "https://plus.unsplash.com/premium_photo-1661600114108-3179188e1ab3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-",
  "Maintenance & Support":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const descriptions = {
  "Research & Design": "We turn ideas into user-focused designs.",
  "Development": "We build fast, secure websites.",
  "Domain Services": "We manage domain registration.",
  "Maintenance & Support": "We keep your site secure and updated.",
};

const WhatWeDo: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<keyof typeof imageMapping | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (item: keyof typeof imageMapping) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    // const rect = e.currentTarget.getBoundingClientRect();
    // const offsetX = (e.clientX - rect.left - rect.width / 2) / 10;
    // const offsetY = (e.clientY - rect.top - rect.height / 2) / 10;

    // const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX;
    const offsetY = e.clientY;

    setCursorPosition({ x: offsetX, y: offsetY });
  };

  return (
    <div className={styles.whatWeDoContainer}>
      <div className={styles.textSection}>
        <h1 className={styles.sectionTitle}>WHAT WE DO</h1>
        <ul className={styles.serviceList}>
          {Object.keys(imageMapping).map((item) => (
            <li
              key={item}
              className={styles.serviceItem}
              onMouseEnter={() => handleMouseEnter(item as keyof typeof imageMapping)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <span className={styles.serviceName}>{item}</span>
              <span className={styles.serviceDescription}>
                {descriptions[item as keyof typeof descriptions]}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {hoveredItem && (
        <img
          src={imageMapping[hoveredItem]}
          alt={hoveredItem}
          className={styles.cursorImage}
          style={{
            top: cursorPosition.y + "px",
            left: cursorPosition.x + "px",
            transition: 'top 0.3s ease-out, left 0.3s ease-out',
          }}
        />
      )}
    </div>
  );
};

export default WhatWeDo;
