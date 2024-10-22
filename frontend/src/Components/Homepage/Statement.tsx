// import { useEffect, useState, useRef } from "react";
// import styles from "./Statement.module.css";
// import { useVisibilityAnimation } from '../hooks/useVisibilityAnimation';

// const Statement = () => {
//   const [allRowsVisible, setAllRowsVisible] = useState(false); // Track if any row is visible
//   const rowRefs = useRef<Array<HTMLDivElement | null>>([]); // Ref for each row

//   const textLines = [
//     <>
//       At MoonCode, we’re all about results.
//     </>,
//     <>
//       Need more <span className={styles.italic}>product sales</span>,{" "}
//       <span className={styles.italic}>subscribers</span>,{" "}
//       <span className={styles.italic}>app downloads</span>, or{" "}
//       <span className={styles.italic}>brand awareness</span>?
//     </>,
//     <>
//       Whether it's attracting <span className={styles.highlight}>new</span>{" "}customers or generating
//       <span className={styles.highlight}>quality</span>{" "}
//       leads,
//     </>,
//     <>
//       we’ll create digital solutions to{" "}
//       <span className={styles.emphasis}>drive your business forward.</span>
//     </>,
//   ];

//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];
//     let visibleCount = 0;

//     rowRefs.current.map((row, index) => {
//       if (!row) return;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             visibleCount += 1;
//             setAllRowsVisible(true);
//           } else {
//             visibleCount -= 1;
//             if (visibleCount === 0) {
//               setAllRowsVisible(false); // Only hide when all rows are out of view
//             }
//           }
//         },
//         { threshold: 0.5 } // Trigger when 50% of the row is visible
//       );

//       observer.observe(row);
//       observers.push(observer);
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   const { elementRef, isVisible } = useVisibilityAnimation('animate__fadeInRight', 0.1);

//   return (
//     <div className={styles.statementContainer}>
//       <div
//         className={styles.textSection}
//         style={{
//           opacity: allRowsVisible ? 1 : 0, // Hide the entire text when all rows are not visible
//           transition: "opacity 0.5s ease",
//         }}
//       >
//         {textLines.map((line, index) => (
//           <div
//             key={index}
//             ref={(el) => (rowRefs.current[index] = el)}
//             className={`${styles.statementRow} animate__animated ${
//               allRowsVisible ? "animate__fadeInUp" : ""
//             }`}
//             style={{
//               animationDelay: `${index * 0.3}s`,
//             }}
//           >
//             <h1 className={styles.statementTitle}>{line}</h1>
//           </div>
//         ))}
//       </div>
//       <div id="circle-container"
//       ref={elementRef}
//       className = {`${styles.circleContainer} ${
//         isVisible ? 'animate__animated animate__fadeInRight' : 'opacity-0'
//       }`}
//       >
//         <div />
//       </div>
//     </div>
//   );
// };

// export default Statement;


// import { useRef } from "react";
import styles from "./Statement.module.css";
import { useVisibilityAnimation } from '../hooks/useVisibilityAnimation';

const Statement = () => {
  // The text lines that will be animated
  const textLines = [
    <>
      At MoonCode, we’re all about results.
    </>,
    <>
      Need more <span className={styles.italic}>product sales</span>,{" "}
      <span className={styles.italic}>subscribers</span>,{" "}
      <span className={styles.italic}>app downloads</span>, or{" "}
      <span className={styles.italic}>brand awareness</span>?
    </>,
    <>
      Whether it's attracting <span className={styles.highlight}>new</span>{" "}
      customers or generating <span className={styles.highlight}>quality</span>{" "}
      leads,
    </>,
    <>
      we’ll create digital solutions to{" "}
      <span className={styles.emphasis}>drive your business forward.</span>
    </>,
  ];

  // Hook for animating the circle image when visible
  const { elementRef: circleRef, isVisible: isCircleVisible } = useVisibilityAnimation('animate__fadeInRight', 0.1);

  return (
    <div className={styles.statementContainer}>
      {/* Text Section */}
      <div className={styles.textSection}>
        {textLines.map((line, index) => {
          // Use the useVisibilityAnimation hook for each row
          const { elementRef: rowRef, isVisible: isRowVisible } = useVisibilityAnimation("animate__fadeInUp", 0.5);

          return (
            <div
              key={index}
              ref={rowRef} // Apply hook to each row
              className={`${styles.statementRow} animate__animated ${
                isRowVisible ? "animate__fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }} // Staggered delay for effect
            >
              <h1 className={styles.statementTitle}>{line}</h1>
            </div>
          );
        })}
      </div>

      {/* Circle section with visibility animation */}
      <div
        id="circle-container"
        ref={circleRef} // Use hook for the circle visibility
        className={`${styles.circleContainer} ${
          isCircleVisible ? "animate__animated animate__fadeInRight" : "opacity-0"
        }`}
      >
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Statement;
