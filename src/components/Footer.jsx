import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Gunjan Kosta | All Rights Reserved</p>

      <div className="footer-socials">
        <a
          href="https://github.com/Gunjan-Kosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/gunjan-kosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
