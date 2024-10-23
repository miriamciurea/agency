import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// URLs for Unsplash images (replace SVGs)
const unsplashImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520583457224-aee11bad5112?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

// Step data with Unsplash image URLs
const steps = [
  {
    number: '01',
    title: 'Research and Design',
    description: 'This involves understanding your needs to create tailored solutions. We build Figma designs that combine functionality and visual appeal for an exceptional user experience.',
    imageUrl: unsplashImages[0],
  },
  {
    number: '02',
    title: 'Domain Services',
    description: 'We turn designs into functional websites. We build robust, scalable applications using the latest technologies, ensuring seamless performance and reliability.',
    imageUrl: unsplashImages[1],
  },
  {
    number: '03',
    title: 'Fix Services',
    description: 'In this stage we help you secure your online presence by registering and managing your domain names. We ensure your website is easily accessible and aligns with your brand.',
    imageUrl: unsplashImages[2],
  },
  {
    number: '04',
    title: 'Development and Support',
    description: 'We ensure your website runs smoothly and stays up-to-date. We provide ongoing assistance, performance monitoring, and updates to keep your site secure and efficient.',
    imageUrl: unsplashImages[3],
  },
];

const StepComponent: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    };
    checkIfTouchDevice();
    window.addEventListener('resize', checkIfTouchDevice);

    return () => {
      window.removeEventListener('resize', checkIfTouchDevice);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#EDEDED' }}>
      <h1 className="text-center text-4xl font-bold mb-12 z-100 pt-9">
        Our Website Creation Process
      </h1>

      {/* Steps */}
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="step-container flex flex-col md:flex-row w-full max-w-7xl mb-16 shadow-lg p-8 relative group z-10"
          style={{ backgroundColor: '#EDEDED' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={isTouchDevice ? {} : { scale: 1.05 }}
          whileTap={isTouchDevice ? { scale: 1.05 } : {}}
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

          {/* Step Image (Filter removed) */}
          <motion.div
            className="w-full md:w-1/3 flex items-center justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0 }}
          >
            <img
              src={step.imageUrl}
              alt={step.title}
              className="w-[200px] h-[200px] object-cover transition-all duration-500"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepComponent;
