import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Timeline: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-40% 0px' }); // Trigger when 40% is in view

    return (
        <div className="relative bg-gray-100 py-10">
            {/* Timeline Background Line */}
            <div className="absolute inset-0 z-0">
                <div className="border-l-4 h-full" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} />
            </div>

            <div className="relative z-10 px-[10%]" ref={ref}>
                {/* Milestone 1: End of 2023 */}
                <motion.div
                    className="flex justify-start items-center mb-3"
                    initial={{ opacity: 0, x: -50 }} // Start from the left
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Reveal from the left
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-4 rounded-lg shadow-md w-[455px]  border-2">
                        <h3 className="text-[2rem] uppercase font-normal text-[var(--pink)] mb-[25px]">End of 2023: Growth</h3>
                        <p className="text-[1.1rem]">
                            Our team expanded, allowing us to take on more diverse projects and clients.
                        </p>
                    </div>
                </motion.div>

                {/* Milestone 2: 2023 */}
                <motion.div
                    className="flex justify-end items-center mb-3"
                    initial={{ opacity: 0, x: 50 }} // Start from the right
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Reveal from the right
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-4 rounded-lg shadow-md w-[455px]  border-2">
                        <h3 className="text-[2rem] uppercase font-normal text-[var(--pink)] mb-[25px]">2023: Humble Beginnings</h3>
                        <p className="text-[1.1rem]">
                            We built our first few websites, laying the foundation for our agency.
                        </p>
                    </div>
                </motion.div>

                {/* Milestone 3: 2024 */}
                <motion.div
                    className="flex justify-start items-center mb-3"
                    initial={{ opacity: 0, x: -50 }} // Start from the left
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Reveal from the left
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-4 rounded-lg shadow-md w-[455px]  border-2">
                        <h3 className="text-[2rem] uppercase font-normal text-[var(--pink)] mb-[25px]">2024: Expanding Team</h3>
                        <p className="text-[1.1rem]">
                            We welcomed two more team members, enhancing our capabilities and project offerings.
                        </p>
                    </div>
                </motion.div>

                {/* Milestone 4: New Projects */}
                <motion.div
                    className="flex justify-end items-center mb-3"
                    initial={{ opacity: 0, x: 50 }} // Start from the right
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Reveal from the right
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-4 rounded-lg shadow-md w-[455px]  border-2">
                        <h3 className="text-[2rem] uppercase font-normal text-[var(--pink)] mb-[25px]">2024: New Projects</h3>
                        <p className="text-[1.1rem]">
                            We began taking on larger projects, expanding our client base significantly.
                        </p>
                    </div>
                </motion.div>

                {/* Milestone 5: Future Goals */}
                <motion.div
                    className="flex justify-start items-center mb-3"
                    initial={{ opacity: 0, x: -50 }} // Start from the left
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Reveal from the left
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-4 rounded-lg shadow-md w-[455px]  border-2">
                        <h3 className="text-[2rem] uppercase font-normal text-[var(--pink)] mb-[25px]">2024: Future Goals</h3>
                        <p className="text-[1.1rem]">
                            We aim to launch new services and enhance our technological capabilities.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Timeline;
