import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MissionStatement: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-40% 0px' }); // Trigger when 40% is in view

    return (
        <div className="relative bg-gray-100">
            {/* Artistic Background with Lines */}
            <div className="absolute inset-0 z-0" style={{
                background: `
                    repeating-linear-gradient(
                        45deg,
                        rgba(0, 0, 0, 0.1),
                        rgba(0, 0, 0, 0.1) 1px,
                        transparent 1px,
                        transparent 20px
                    )
                `,
                opacity: 0.3,
            }} />

            <div className="container mx-auto relative z-10 p-6 flex justify-between items-center" ref={ref}>
                {/* Vertical Text on the left */}
                <motion.div
                    className="transform -rotate-90 text-4xl font-bold text-gray-500"
                    initial={{ opacity: 0, x: -50 }} // Start from the left
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Reveal to the center
                    transition={{ duration: 0.5 }}
                    style={{ whiteSpace: 'nowrap' }}
                >
                    OUR
                </motion.div>

                {/* Centered Content */}
                <div className="text-center">
                    {/* Button on the top left */}
                    <motion.button
                        className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md mr-4"
                        initial={{ opacity: 0, x: -50 }} // Start from the left
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Reveal to the center
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Call to Action
                    </motion.button>

                    {/* Title on the right-hand side with a small bar */}
                    <div className="flex justify-end mt-4">
                        <div className="flex flex-col items-end">
                            <div className="bg-red-500 h-1 w-16 mb-1"></div>
                            <motion.h2
                                className="text-3xl font-bold text-right"
                                style={{ color: '#FF6B6B' }}
                                initial={{ opacity: 0, x: 50 }} // Start from the right
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Reveal to the center
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Our Mission
                            </motion.h2>
                        </div>
                    </div>

                    {/* Centered Image with 75% width */}
                    <motion.img
                        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Mission"
                        className="mx-auto mt-6"
                        style={{ width: '75%', height: 'auto', objectFit: 'cover' }}
                        initial={{ opacity: 0, scale: 0.8 }} // Start from a smaller scale
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} // Scale up and fade in
                        transition={{ duration: 0.5, delay: 0.3 }}
                    />

                    {/* Mission Statement Text */}
                    <motion.p
                        className="text-lg text-center text-gray-700 mt-4"
                        initial={{ opacity: 0, y: 20 }} // Start from below
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Slide up and fade in
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        At MoonCode, we believe in harnessing the power of technology to transform ideas into reality.
                        Our mission is to provide innovative web development solutions that empower businesses to thrive
                        in the digital landscape.
                    </motion.p>
                </div>

                {/* Vertical Text on the right */}
                <motion.div
                    className="transform rotate-90 text-4xl font-bold text-gray-500"
                    initial={{ opacity: 0, x: 50 }} // Start from the right
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Reveal to the center
                    transition={{ duration: 0.5 }}
                    style={{ whiteSpace: 'nowrap' }}
                >
                    TEAM
                </motion.div>
            </div>
        </div>
    );
};

export default MissionStatement;
