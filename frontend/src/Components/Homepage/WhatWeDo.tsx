import React, { useState } from "react";
import styles from "./WhatWeDo.module.css";

const imageMapping = {
  "Research & Design":
    "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Development":
    "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Domain Services":
    "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Maintenance&Support":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwY29kaW5nfGVufDB8MHwwfHx8Mg%3D%3D",
};

const descriptions = {
  "Research & Design": "We turn ideas into user-focused designs.",
  "Development": "We build fast, secure websites.",
  "Domain Services": "We manage domain registration.",
  "Maintenance&Support": "We keep your site secure and updated.",
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
    <div className={`${styles.whatWeDoContainer} cursor-none`}>
      <div className={styles.textSection}>
        <h1 className={styles.sectionTitle}>WHAT WE DO</h1>
        <ul className={styles.serviceList}>
          {Object.keys(imageMapping).map((item) => (
            <a href="/services" style = {{cursor: "none"}}>
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
            </a>
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
