// import React from 'react';
// import styles from './Navbar.module.css'; // Assuming you're using a CSS module

// const Navbar = () => {
//     // Function to handle mouse movement
//     const handleMouseMove = (e: React.MouseEvent<HTMLElement>, button: HTMLElement) => {
//         const { clientX, clientY } = e;
//         const rect = button.getBoundingClientRect();
//         const buttonX = rect.left + rect.width / 2;
//         const buttonY = rect.top + rect.height / 2;

//         const deltaX = (clientX - buttonX) / 1; // Adjusted for a further movement effect
//         const deltaY = (clientY - buttonY) / 1; // Adjusted for a further movement effect

//         button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
//     };

//     // Function to reset the button position
//     const handleMouseLeave = (button: HTMLElement) => {
//         button.style.transform = 'translate(0, 0)';
//     };

//     return (
//         <nav className={`bg-[#EDEDED]`}>
//             <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
//                 <div className={styles.logo}>
//                     <a href="#" className="text-2xl font-semibold text-black">MoonCode</a>
//                 </div>
//                 <ul className={`${styles.navLinks} flex space-x-4 max-w-screen-sm:hidden`}>
//                     <li>
//                         <a
//                             href="#home"
//                             className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`} // Slight color change on hover
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//                             onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
//                         >
//                             Home
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#services"
//                             className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`} // Slight color change on hover
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//                             onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
//                         >
//                             Services
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#about"
//                             className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`} // Slight color change on hover
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//                             onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
//                         >
//                             About
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#contact"
//                             className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`} // Slight color change on hover
//                             onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
//                             onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
//                         >
//                             Contact
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { IoMoon } from 'react-icons/io5'; // Import IoMoon for the sidebar icon
import { WiMoonAltNew } from "react-icons/wi";
import styles from './Navbar.module.css'; // Assuming you're using a CSS module

const Navbar: React.FC = () => {
  // State to handle sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#EDEDED]">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className={styles.logo}>
          <a href="#" className="text-2xl font-semibold text-black">MoonCode</a>
        </div>

        {/* Navigation Links: Hidden on small screens, visible on medium screens and above */}
        <ul className={`${styles.navLinks} hidden md:flex space-x-4`}>
          <li>
            <a
              href="#home"
              className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Sidebar Toggle Button: Visible on small screens, hidden on medium screens and above */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          onClick={toggleSidebar}
        >
          <IoMoon size={28} /> {/* Semi-moon icon for the sidebar button */}
        </button>
      </div>

      {/* Sidebar for Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
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
          <li>
            <a
              href="#home"
              className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
              onClick={toggleSidebar} // Close sidebar on link click
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
              onClick={toggleSidebar} // Close sidebar on link click
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
              onClick={toggleSidebar} // Close sidebar on link click
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${styles.button} text-black px-3 py-2 rounded transition-colors duration-200 hover:text-gray-700`}
              onClick={toggleSidebar} // Close sidebar on link click
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
