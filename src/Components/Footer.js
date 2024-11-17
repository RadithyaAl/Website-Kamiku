import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'; // Importing Instagram and YouTube icons
import '../Page_stylesheets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>Published with ❤️ by Kamiku ITB</p>
        <p>© 2024 Kamiku ITB. All rights reserved.</p>
        
        <div className="social-media-links">
          <a href="https://www.instagram.com/kamikuningan" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.youtube.com/@kamikuningan" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
          <a href="https://www.tiktok.com/@kamikuningan" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
