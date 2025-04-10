import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">Fake News DNA</h2>
          <p>Empowering users to distinguish truth from misinformation.</p>
        </div>

        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fake News DNA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
