// import React, { useState } from "react";
// import styles from "./WhatWeDo.module.css";
// // import { CiLocationArrow1 } from "react-icons/ci";

// const imageMapping = {
//   "Research & Design":
//     "https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   Development:
//     "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "Domain Services":
//     "https://plus.unsplash.com/premium_photo-1661600114108-3179188e1ab3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-",
//   "Maintenance & Support":
//     "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// };

// const WhatWeDo: React.FC = () => {
//   const [hoveredItem, setHoveredItem] = useState<keyof typeof imageMapping | null>(null); // State to track hovered item
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Handle mouse enter event
//   const handleMouseEnter = (item: keyof typeof imageMapping) => {
//     setHoveredItem(item);
//   };

//   // Handle mouse leave event
//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   // Handle mouse move event to update cursor position
//   const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
//     // Adjust position to be half the screen higher and 300px to the left
//     const offsetX = -300; // Move 300px to the left
//     const offsetY = -(window.innerHeight / 2); // Move half the screen higher

//     setCursorPosition({ x: e.clientX + offsetX, y: e.clientY + offsetY });
//   };

//   return (
//     <div className={styles.whatWeDoContainer}>
//       <div className={styles.textSection}>
//         <h1 className={styles.sectionTitle}>WHAT WE DO</h1>
//         <ul className={styles.serviceList}>
//           {Object.keys(imageMapping).map((item) => (
//             <li
//               key={item}
//               className={styles.serviceItem}
//               onMouseEnter={() => handleMouseEnter(item as keyof typeof imageMapping)}
//               onMouseLeave={handleMouseLeave}
//               onMouseMove={handleMouseMove}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.circleContainer}>
//         <div className={styles.rightCircle}>
//           <div className={styles.insideText}>
//             <p>Services</p>
//           </div>
//         </div>
//       </div>
//       {hoveredItem && (
//         <img
//           src={imageMapping[hoveredItem]}
//           alt={hoveredItem}
//           className={styles.cursorImage}
//           style={{
//             top: cursorPosition.y + "px",
//             left: cursorPosition.x + "px",
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default WhatWeDo;

// import React, { useState } from "react";
// import styles from "./WhatWeDo.module.css";

// const imageMapping = {
//   "Research & Design":
//     "https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   Development:
//     "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "Domain Services":
//     "https://plus.unsplash.com/premium_photo-1661600114108-3179188e1ab3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-",
//   "Maintenance & Support":
//     "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// };

// const WhatWeDo: React.FC = () => {
//   const [hoveredItem, setHoveredItem] = useState<keyof typeof imageMapping | null>(null); // State to track hovered item
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Handle mouse enter event
//   const handleMouseEnter = (item: keyof typeof imageMapping) => {
//     setHoveredItem(item);
//   };

//   // Handle mouse leave event
//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   // Handle mouse move event to update cursor position
//   const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const offsetX = (e.clientX - rect.left - rect.width / 2) / 10; // Adjust for limited horizontal movement
//     const offsetY = (e.clientY - rect.top - rect.height / 2) / 10; // Adjust for limited vertical movement

//     setCursorPosition({ x: offsetX, y: offsetY });
//   };



//   const handleMouseMove1 = (e: React.MouseEvent<HTMLElement>, button: HTMLElement) => {
//     const { clientX, clientY } = e;
//     const rect = button.getBoundingClientRect();
//     const buttonX = rect.left + rect.width / 2;
//     const buttonY = rect.top + rect.height / 2;

//     // Use smaller movement delta for a more subtle effect
//     const deltaX = (clientX - buttonX) / 2; // Adjusted for a more subtle effect
//     const deltaY = (clientY - buttonY) / 2;

//     button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
//   };

//   // Reset button position when mouse leaves
//   const handleMouseLeave1 = (button: HTMLElement) => {
//     // button.style.transform = 'translate(0, 0)';
//     button.style.transition = 'transform 0.2s ease-out'; // Smooth reset
//     button.style.transform = 'translate(0, 0)';
//   };

//   return (
//     <div className={styles.whatWeDoContainer}>
//       <div className={styles.textSection}>
//         <h1 className={styles.sectionTitle}>WHAT WE DO</h1>
//         <ul className={styles.serviceList}>
//           {Object.keys(imageMapping).map((item) => (
//             <li
//               key={item}
//               className={styles.serviceItem}
//               onMouseEnter={() => handleMouseEnter(item as keyof typeof imageMapping)}
//               onMouseLeave={handleMouseLeave}
//               onMouseMove={handleMouseMove}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.circleContainer}>
//         {/* Keep the circle initially on the right, but limit its movement */}
//         <div
//           className={styles.rightCircle}
//           onMouseMove1={(e) => handleMouseMove(e, e.currentTarget)}
//           onMouseLeave1={(e) => handleMouseLeave(e.currentTarget)}
//           style={{
//             transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
//             transition: 'transform 0.3s ease-out', // Smooth transition
//             right: '10%', // Keep the circle on the right side
//             top: '50%',  // Position it vertically in the middle
//             position: 'absolute',
//           }}
//         >

//           <div className={styles.insideText}>
//             <p>Services</p>
//           </div>
//         </div>
//       </div>
//       {hoveredItem && (
//         <img
//           src={imageMapping[hoveredItem]}
//           alt={hoveredItem}
//           className={styles.cursorImage}
//           style={{
//             top: cursorPosition.y + "px",
//             left: cursorPosition.x + "px",
//             transition: 'top 0.3s ease-out, left 0.3s ease-out', // Smooth transition for image movement
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default WhatWeDo;


import React, { useState } from "react";
import styles from "./WhatWeDo.module.css";

const imageMapping = {
  "Research & Design":
    "https://images.unsplash.com/photo-1674027326254-88c960d8e561?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Development:
    "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Domain Services":
    "https://plus.unsplash.com/premium_photo-1661600114108-3179188e1ab3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-",
  "Maintenance & Support":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) / 10; // Adjust for limited horizontal movement
    const offsetY = (e.clientY - rect.top - rect.height / 2) / 10; // Adjust for limited vertical movement

    setCursorPosition({ x: offsetX, y: offsetY });
  };

  // Handle mouse movement for the circle
  const handleCircleMouseMove = (e: React.MouseEvent<HTMLElement>, circle: HTMLElement) => {
    const { clientX, clientY } = e;
    const rect = circle.getBoundingClientRect();
    const circleX = rect.left + rect.width / 2;
    const circleY = rect.top + rect.height / 2;

    // Use /2 for wider movement
    const deltaX = (clientX - circleX) / 2;
    const deltaY = (clientY - circleY) / 2;

    circle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  // Reset the circle's position when the mouse leaves
  const handleCircleMouseLeave = (circle: HTMLElement) => {
    circle.style.transition = 'transform 0.3s ease-out'; // Smooth reset
    circle.style.transform = 'translate(0, 0)';
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
        <div
          className={styles.rightCircle}
          onMouseMove={(e) => handleCircleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleCircleMouseLeave(e.currentTarget)}
          style={{
            right: '25%', // Keep the circle on the right side
            top: '50%',  // Position it vertically in the middle
            position: 'absolute',
            transition: 'transform 0.3s ease-out', // Smooth transition for movement
          }}
        >
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
            transition: 'top 0.3s ease-out, left 0.3s ease-out', // Smooth transition for image movement
          }}
        />
      )}
    </div>
  );
};

export default WhatWeDo;
