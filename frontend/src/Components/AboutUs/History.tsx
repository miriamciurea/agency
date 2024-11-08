import React from 'react';
import { motion } from 'framer-motion';

const History: React.FC = () => {
  return (
    <motion.div
      className="mt-8 px-8 py-8 max-w-4xl mx-auto text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <p className="text-2xl leading-relaxed mb-4 font-extrabold">
        Based in <span className="font-bold">Bucharest, Romania</span>, we proudly serve clients across <span className="underline">Europe</span>. Our mission is simple: to offer tailored solutions that elevate your business in a constantly evolving digital landscape.
      </p>

      <p className="text-2xl leading-relaxed mb-4 font-extrabold">
        Although we started our journey building websites, our experience and expertise have grown rapidly. We now bring comprehensive solutions designed to meet the specific needs of each client. We’re passionate about delivering quality and results that speak for themselves.
      </p>

      <p className="text-2xl leading-relaxed font-extrabold">
        Driven by a <span className="italic">customer-first</span> approach, we work relentlessly to ensure your business thrives. Whether you're an emerging company or a well-established brand, we aim to create solutions that make a lasting impact.
      </p>
    </motion.div>
  );
};

export default History;
