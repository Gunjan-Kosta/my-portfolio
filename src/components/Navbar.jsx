import React, { useState } from "react";
import "/src/index.css"; // make sure you have styles (I'll give below)

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">GUNJAN KOSTA</div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>

      {/* Menu links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
