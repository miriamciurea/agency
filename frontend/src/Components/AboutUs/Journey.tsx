import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// URLs for Unsplash images (replace SVGs)
const unsplashImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

// Step data with Unsplash image URLs
const steps = [
  {
    number: '01',
    title: 'Research and Strategy',
    description: 'We start by understanding your business and vision, crafting tailored strategies that lead to effective solutions. Whether it’s a presentation website, online store, or something more complex, we ensure that every project is built to achieve your goals and create impact.',
    imageUrl: unsplashImages[0],
  },
  {
    number: '02',
    title: 'Domain and Infrastructure',
    description: 'From securing domains to setting up robust hosting, we handle all aspects of getting your website live. Our team ensures seamless performance, reliability, and scalability, making sure your site runs smoothly across both web and mobile platforms.',
    imageUrl: unsplashImages[1],
  },
  {
    number: '03',
    title: 'Custom Development',
    description: 'No two projects are the same, and we specialize in building websites that meet unique needs. From simple presentation sites to feature-rich online stores or web-oriented applications, we develop high-performance solutions that are both functional and future-proof.',
    imageUrl: unsplashImages[2],
  },
  {
    number: '04',
    title: 'Ongoing Support and Growth',
    description: 'Our services don’t end at launch. We provide continuous support and updates to help your site grow alongside your business. Whether it’s adding new features, improving performance, or ensuring security, we’re here to support your evolving needs.',
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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-center text-4xl font-[300] mb-12 z-100 pt-9">
      OUR WEBSITE CREATION PROCESS
      </h1>

      {/* Steps */}
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="step-container flex flex-col md:flex-row w-full max-w-7xl mb-16 shadow-lg p-8 relative group z-10 bg-white"
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
            <span className="text-3xl font-bold font-crazy">{step.number}</span>
            <h2 className="mt-4 mb-4 text-[2rem] uppercase font-normal text-[var(--pink)]">{step.title}</h2>
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
