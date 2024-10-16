// import { useEffect, useState } from "react";
// import styles from "./Statement.module.css"; // Import the CSS module

// const Statement = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [circleInitialTop, setCircleInitialTop] = useState(0);
//   const [circleContainerHeight, setCircleContainerHeight] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     const circle = document.getElementById("moving-circle");
//     const circleContainer = document.getElementById("circle-container");
//     if (circle && circleContainer) {
//       // Save the initial top position of the circle
//       setCircleInitialTop(circle.getBoundingClientRect().top);
//       // Save the height of the circle container
//       setCircleContainerHeight(circleContainer.clientHeight);
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Calculate the translation value, limiting it within the container's boundaries
//   const translateYValue = Math.max(
//     0, // Minimum value to keep the circle within the top boundary
//     Math.min(scrollY - circleInitialTop, circleContainerHeight - 150) // Maximum value to keep circle within the bottom boundary
//   );

//   return (
//     <div className={styles.statementContainer}>
//       <div className={styles.textSection}>
//         <h1 className={`${styles.statementTitle} animate__animated animate__fadeInUp`}>
//           At MoonCode, we’re all about results.<br />
//           Need more <span className={styles.italic}>product sales</span>,{" "}
//           <span className={styles.italic}>subscribers</span>,{" "}
//           <span className={styles.italic}>app downloads</span>, or{" "}
//           <span className={styles.italic}>brand awareness</span>? Whether it's
//           attracting <span className={styles.highlight}>new</span> customers or
//           generating <span className={styles.highlight}>quality</span> leads,
//           we’ll create digital solutions to{" "}
//           <span className={styles.emphasis}>drive your business forward.</span>
//         </h1>
//       </div>
//       <div id="circle-container" className={styles.circleContainer}>
//         <div
//           id="moving-circle"
//           className={styles.movingCircle}
//           style={{
//             transform: `translateY(${translateYValue}px)`,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Statement;


import { useEffect, useState, useRef } from "react";
import styles from "./Statement.module.css"; // Import the CSS module

const Statement = () => {
  const [allRowsVisible, setAllRowsVisible] = useState(false); // Track if any row is visible
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]); // Ref for each row

  const textLines = [
    <>
      At MoonCode, we’re all about results.
    </>,
    <>
      Need more <span className={styles.italic}>product sales</span>,{" "}
      <span className={styles.italic}>subscribers</span>,{" "}
      <span className={styles.italic}>app downloads</span>, or{" "}
      <span className={styles.italic}>brand awareness</span>?
      Whether it's attracting <span className={styles.highlight}>new</span>{" "}
    </>,
    <>
      customers or generating <span className={styles.highlight}>quality</span>{" "}
      leads,
    </>,
    <>
      we’ll create digital solutions to{" "}
      <span className={styles.emphasis}>drive your business forward.</span>
    </>,
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    let visibleCount = 0;

    rowRefs.current.forEach((row, _index) => {
      if (!row) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleCount += 1;
            setAllRowsVisible(true);
          } else {
            visibleCount -= 1;
            if (visibleCount === 0) {
              setAllRowsVisible(false); // Only hide when all rows are out of view
            }
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the row is visible
      );

      observer.observe(row);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className={styles.statementContainer}>
      <div
        className={styles.textSection}
        style={{
          opacity: allRowsVisible ? 1 : 0, // Hide the entire text when all rows are not visible
          transition: "opacity 0.5s ease",
        }}
      >
        {textLines.map((line, index) => (
          <div
            key={index}
            ref={(el) => (rowRefs.current[index] = el)}
            className={`${styles.statementRow} animate__animated ${
              allRowsVisible ? "animate__fadeInUp" : ""
            }`}
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <h1 className={styles.statementTitle}>{line}</h1>
          </div>
        ))}
      </div>
      <div id="circle-container" className={styles.circleContainer}>
        <div />
      </div>
    </div>
  );
};

export default Statement;
