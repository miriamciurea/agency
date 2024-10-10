import React from 'react';
import styles from './Footer.module.css'; // We'll create this CSS file next

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className={styles.about}>
          <h4>About MoonCode</h4>
          <p>MoonCode is a web development agency that specializes in building innovative and user-centric web solutions.</p>
        </div>
        <div className={styles.links}>
          <h4>Explore</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: contact@mooncode.com</p>
          <p>Phone: +40 712 345 678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
