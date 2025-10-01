// src/components/Hero.jsx
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Rahul Mandal</h1>
          <h2 className="hero-subtitle">Data Analyst & MIS Executive</h2>
          <p className="hero-description">
            Thorough and meticulous Data Analyst passionate about helping businesses succeed. 
            Former small business owner with strong technical skills rooted in substantial 
            training as an engineer.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#experience" className="btn-secondary">View Experience</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <img src="/dp.jpg" alt="Profile" className="profile-image" />
            {/* <span>RM</span> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
