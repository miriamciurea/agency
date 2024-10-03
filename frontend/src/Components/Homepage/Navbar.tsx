import React from 'react';
import styles from './Navbar.module.css'; // Assuming you're using a CSS module

const Navbar = () => {
    // Function to handle mouse movement
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>, button: HTMLElement) => {
        const { clientX, clientY } = e;
        const rect = button.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        const deltaX = (clientX - buttonX) / 1; // Adjusted for a further movement effect
        const deltaY = (clientY - buttonY) / 1; // Adjusted for a further movement effect

        button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    // Function to reset the button position
    const handleMouseLeave = (button: HTMLElement) => {
        button.style.transform = 'translate(0, 0)';
    };

    return (
        <nav className={`bg-[#EDEDED]`}>
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <div className={styles.logo}>
                    <a href="#" className="text-2xl font-semibold text-black">MoonCode</a>
                </div>
                <ul className={`${styles.navLinks} flex space-x-4`}>
                    <li>
                        <a
                            href="#home"
                            className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`} // Slight color change on hover
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`} // Slight color change on hover
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`} // Slight color change on hover
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`} // Slight color change on hover
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
