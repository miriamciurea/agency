import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import the local SVGs
import QuarterMoon from '../../assets/quarter.svg';
import ThreeMoon from '../../assets/three.svg';
import FullMoon from '../../assets/full.svg';
import DomainImage from '../../assets/domain.svg';
import FixImage from '../../assets/fix.svg';
import ResearchImage from '../../assets/research.svg';
import DevImage from '../../assets/dev.svg';

const steps = [
  {
    number: '01',
    title: 'Research and design',
    description: 'This involves understanding your needs to create tailored solutions. We build Figma designs that combine functionality and visual appeal for an exceptional user experience.',
    imageUrl: ResearchImage,
  },
  {
    number: '02',
    title: 'Domain services',
    description: 'We turn designs into functional websites. We build robust, scalable applications using the latest technologies, ensuring seamless performance and reliability.',
    imageUrl: DomainImage,
  },
  {
    number: '03',
    title: 'Fix Services',
    description: 'In this stage we help you secure your online presence by registering and managing your domain names. We ensure your website is easily accessible and aligns with your brand.',
    imageUrl: FixImage,
  },
  {
    number: '04',
    title: 'Development and support',
    description: 'We ensure your website runs smoothly and stays up-to-date. We provide ongoing assistance, performance monitoring, and updates to keep your site secure and efficient.',
    imageUrl: DevImage,
  },
];

// Component for displaying moon phases with scroll-triggered sliding effect
const MoonPhase = ({ src, top, left }: { src: string; top: string; left: string }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <motion.img
      src={src}
      alt="moon phase"
      className="absolute opacity-50 z-[110]" // Moon is behind
      style={{ top, left, width: '100px', height: '100px', y }}
    />
  );
};

const StepComponent: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    };
    checkIfTouchDevice(); // Check on component mount
    window.addEventListener('resize', checkIfTouchDevice); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', checkIfTouchDevice); // Cleanup event listener
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center " style={{ backgroundColor: '#EDEDED' }}>
      <h1 className="text-center text-4xl font-bold mb-12 z-100 pt-9">
        Our Website Creation Process
      </h1>

      {/* Moon Phases with scroll-triggered sliding effect */}
      <MoonPhase src={QuarterMoon} top="18%" left="20%" /> {/* Quarter Moon */}
      <MoonPhase src={ThreeMoon} top="45%" left="40%" /> {/* Two-thirds Moon */}
      <MoonPhase src={FullMoon} top="63%" left="60%" /> {/* Full Moon */}

      {/* Steps */}
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="step-container flex flex-col md:flex-row w-full max-w-7xl mb-16 shadow-lg p-8 relative group z-10" // Adjust z-index to ensure divs are on top
          style={{ backgroundColor: '#EDEDED' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          // Apply hover for web and tap for touch devices
          whileHover={isTouchDevice ? {} : { scale: 1.05 }} // Scale only on web
          whileTap={isTouchDevice ? { scale: 1.05 } : {}} // Tap scale for touch devices
        >
          {/* Step Content */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-3xl font-bold text-gray-400">{step.number}</span>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-4">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>

          {/* Step Image with Hover Effect */}
          <motion.div
            className="w-full md:w-1/3 flex items-center justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0 }}
          >
            <img
              src={step.imageUrl}
              alt={step.title}
              className="w-48 h-48 object-contain grayscale opacity-100 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" // Use group-hover for hover effect
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepComponent;
