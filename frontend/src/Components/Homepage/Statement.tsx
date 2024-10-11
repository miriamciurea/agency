import { useEffect, useState } from "react";
import styles from "./Statement.module.css"; // Import the CSS module

const Statement = () => {
  const [scrollY, setScrollY] = useState(0);
  const [circleInitialTop, setCircleInitialTop] = useState(0);
  const [circleContainerHeight, setCircleContainerHeight] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const circle = document.getElementById("moving-circle");
    const circleContainer = document.getElementById("circle-container");
    if (circle && circleContainer) {
      // Save the initial top position of the circle
      setCircleInitialTop(circle.getBoundingClientRect().top);
      // Save the height of the circle container
      setCircleContainerHeight(circleContainer.clientHeight);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the translation value, limiting it within the container's boundaries
  const translateYValue = Math.max(
    0, // Minimum value to keep the circle within the top boundary
    Math.min(scrollY - circleInitialTop, circleContainerHeight - 150) // Maximum value to keep circle within the bottom boundary
  );

  return (
    <div className={styles.statementContainer}>
      <div className={styles.textSection}>
        <h1 className={styles.statementTitle}>
          At MoonCode, we’re all about results.<br />
          Need more <span className={styles.italic}>product sales</span>,{" "}
          <span className={styles.italic}>subscribers</span>,{" "}
          <span className={styles.italic}>app downloads</span>, or{" "}
          <span className={styles.italic}>brand awareness</span>? Whether it's
          attracting <span className={styles.highlight}>new</span> customers or
          generating <span className={styles.highlight}>quality</span> leads,
          we’ll create digital solutions to{" "}
          <span className={styles.emphasis}>drive your business forward.</span>
        </h1>
      </div>
      <div id="circle-container" className={styles.circleContainer}>
        <div
          id="moving-circle"
          className={styles.movingCircle}
          style={{
            transform: `translateY(${translateYValue}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Statement;
