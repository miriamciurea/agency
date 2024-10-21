import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Research and design',
    description: 'This involves understanding your needs to create tailored solutions. We build Figma designs that combine functionality and visual appeal for an exceptional user experience.',
  },
  {
    number: '02',
    title: 'Domain services',
    description: 'We turn designs into functional websites. We build robust, scalable applications using the latest technologies, ensuring seamless performance and reliability.',
  },
  {
    number: '03',
    title: 'Domain services',
    description: 'In this stage we help you secure your online presence by registering and managing your domain names. We ensure your website is easily accessible and aligns with your brand.',
  },
  {
    number: '04',
    title: 'Maintenance and support',
    description: 'We ensure your website runs smoothly and stays up-to-date. We provide ongoing assistance, performance monitoring, and updates to keep your site secure and efficient.',
  },
];

const animationUrl = 'https://lottie.host/fa54b301-01df-44d1-8718-8af8fb14ea4f/pzxkdk9iRR.json';

const StepComponent: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#EDEDED' }}>
      <h1 className="text-center text-4xl font-bold mb-12 z-10">
        Our Website Creation Process
      </h1>

      {/* Floating Shapes for the Background */}
      <motion.div
        className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50"
        style={{ top: '10%', left: '10%' }}
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }} // Floating animation
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="absolute w-16 h-16 bg-red-300 rounded-full opacity-50"
        style={{ top: '70%', left: '80%' }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="absolute w-20 h-20 bg-green-300 rounded-full opacity-50"
        style={{ top: '40%', left: '50%' }}
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      {/* Steps */}
      {steps.map((step: Step, index: number) => (
        <motion.div
          key={index}
          className="step-container flex flex-col md:flex-row w-full max-w-7xl mb-16 shadow-lg p-8"
          style={{ backgroundColor: '#EDEDED' }} // Matching div background to the page background
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
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

          <motion.div
            className="w-full md:w-1/3 flex items-center justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Player
              autoplay
              loop={false}
              src={animationUrl}
              style={{ height: '200px', width: '200px' }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepComponent;
