import { useEffect, useRef, useState } from 'react';

export const useVisibilityAnimation = (
  animationClass: string, // Animation class (e.g., 'animate__fadeInUp')
  threshold: number = 0.1 // Visibility threshold
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Apply animation when the element is visible
        } else {
          setIsVisible(false); // Remove animation when the element is not visible
        }
      },
      {
        threshold, // How much of the element must be visible before triggering
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible, animationClass };
};
