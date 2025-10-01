// src/components/Skills.jsx
import React from 'react'
import './Skills.css'

const Skills = () => {
  const technicalSkills = [
    "Advanced Excel",
    "Pivot Table",
    "Pi Chart",
    "Macro",
    "Data Modeling",
    "Power Query",
    "Microsoft Office",
    "Software Implementation"
  ]

  const softSkills = [
    "Time Management",
    "Data Analysis",
    "Business Intelligence",
    "Problem Solving",
    "Communication"
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Professional Skills</h3>
            <div className="skill-tags">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
