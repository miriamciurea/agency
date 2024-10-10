import React, { useState } from "react";
import styles from "./WhatWeDo.module.css"; // Import the CSS module for this section

const imageMapping = {
  "Research & Design":
    "https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Development:
    "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Domain Services":
    "https://plus.unsplash.com/premium_photo-1661600114108-3179188e1ab3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-",
  "Maintenance & Support":
    "https://plus.unsplash.com/premium_photo-1661317288719-0aa845b8c681?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const WhatWeDo: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<keyof typeof imageMapping | null>(null); // State to track hovered item
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle mouse enter event
  const handleMouseEnter = (item: keyof typeof imageMapping) => {
    setHoveredItem(item);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // Handle mouse move event to update cursor position
  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    // Adjust position to be half the screen higher and 300px to the left
    const offsetX = -300; // Move 300px to the left
    const offsetY = -(window.innerHeight / 2); // Move half the screen higher

    setCursorPosition({ x: e.clientX + offsetX, y: e.clientY + offsetY });
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
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.circleContainer}>
        <div className={styles.rightCircle}>
          <div className={styles.insideText}>
            <p>Services</p>
          </div>
        </div>
      </div>
      {hoveredItem && (
        <img
          src={imageMapping[hoveredItem]}
          alt={hoveredItem}
          className={styles.cursorImage}
          style={{
            top: cursorPosition.y + "px",
            left: cursorPosition.x + "px",
          }}
        />
      )}
    </div>
  );
};

export default WhatWeDo;
