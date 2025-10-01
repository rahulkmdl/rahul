// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <a href="#home">
            <h2>Rahul Mandal</h2>
          </a>
        </div>
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
