import React, { useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { WiMoonAltNew } from "react-icons/wi";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, button: HTMLElement) => {
    const { clientX, clientY } = e;
    const rect = button.getBoundingClientRect();
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    // Use smaller movement delta for a more subtle effect
    const deltaX = (clientX - buttonX) / 2; // Adjusted for a more subtle effect
    const deltaY = (clientY - buttonY) / 2;

    button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  // Reset button position when mouse leaves
  const handleMouseLeave = (button: HTMLElement) => {
    // button.style.transform = 'translate(0, 0)';
    button.style.transition = 'transform 0.2s ease-out'; // Smooth reset
    button.style.transform = 'translate(0, 0)';
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#EDEDED] shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/" className="text-2xl font-semibold ">MoonCode</a>
        </div>

        {/* Navigation Links: Hidden on small screens, visible on medium screens and above */}
        <ul className={`${styles.navLinks} hidden md:flex space-x-6`}>
          {['HOME', 'ABOUT','SERVICES', 'CONTACT'].map((item, index) => (
            <li key={index}>
              <a
                href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className={`${styles.button} px-4 py-2 rounded transition-transform duration-200 hover:text-gray-700`}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Sidebar Toggle Button for small screens */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 z-[100]"
          onClick={toggleSidebar}
        >
          <IoMoon size={28} />
        </button>
      </div>

      {/* Sidebar for Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-[100] ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-gray-700">
            <WiMoonAltNew size={28} />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <ul className="flex flex-col space-y-4 p-4">
          {['HOME', 'SERVICES', 'ABOUT', 'CONTACT'].map((item, index) => (
            <li key={index}>
              <a
                href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className={`${styles.button} px-4 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
                onClick={toggleSidebar}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
