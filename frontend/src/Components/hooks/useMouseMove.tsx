// import { useEffect } from 'react';

// const useMouseMove = (containerRef: React.RefObject<HTMLElement>, childRef: React.RefObject<HTMLElement>) => {
//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       if (containerRef.current && childRef.current) {
//         const { clientX, clientY } = event;
//         const { left, top, width, height } = containerRef.current.getBoundingClientRect();

//         // Calculate position relative to the container
//         const x = clientX - left;
//         const y = clientY - top;

//         // Apply stronger transformations based on mouse position within the container
//         const moveX = (x / width - 0.5) * 30; // Increased for more effect
//         const moveY = (y / height - 0.5) * 30;

//         // Apply the transformation to the child (button) element
//         childRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
//       }
//     };


//     if (containerRef.current) {
//       containerRef.current.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeEventListener('mousemove', handleMouseMove);
//       }
//     };
//   }, [containerRef, childRef]);
// };

// export default useMouseMove;


import { useEffect } from 'react';

const useMouseMove = (containerRef: React.RefObject<HTMLElement>, childRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (childRef.current) {
        const button = childRef.current;
        const { clientX, clientY } = e;
        const rect = button.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        // Use smaller movement delta for a more subtle effect
        const deltaX = Math.min(Math.max((clientX - buttonX) / 5, -10), 10);
        const deltaY = Math.min(Math.max((clientY - buttonY) / 5, -10), 10);

        button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (childRef.current) {
        const button = childRef.current;
        button.style.transition = 'transform 0.2s ease-out'; // Smooth reset
        button.style.transform = 'translate(0, 0)';
      }
    };

    if (containerRef.current) {
      const container = containerRef.current;
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (containerRef.current) {
        const container = containerRef.current;
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [containerRef, childRef]);
};

export default useMouseMove;
