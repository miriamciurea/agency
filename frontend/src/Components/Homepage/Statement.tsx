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
          // eslint-disable-next-line react-hooks/rules-of-hooks
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
