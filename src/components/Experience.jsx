// src/components/Experience.jsx
import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "MIS Executive (E-commerce)",
      company: "Teamlease (Client – Airtel)",
      location: "Gurgaon, Haryana",
      period: "08/2024 – Present",
      responsibilities: [
        "Making a Dashboard of Pan India",
        "Data analyzing",
        "Data Manipulate"
      ]
    },
    {
      title: "MIS Executive (E-commerce)",
      company: "Everstylish.com",
      location: "Gurgaon, Haryana",
      period: "03/2023 – 08/2024",
      responsibilities: [
        "Forecasting analysis",
        "Stock Analysis",
        "Data Modeling",
        "Data Relationship"
      ]
    },
    {
      title: "MIS Executive (Textile and Fabric industries)",
      company: "Chelsea Mills LLP",
      location: "Gurgaon, Haryana",
      period: "04/2022 - 03/2023",
      responsibilities: [
        "Using Pi chart for sales efficiency",
        "Using pivot table for data analysis"
      ]
    },
    {
      title: "Data Entry Operator",
      company: "Fashion Accessories",
      location: "Gurgaon, Haryana",
      period: "07/2019 - 04/2022",
      responsibilities: [
        "Prepared Stock Analysis of beverages with precision and creativity",
        "Maintained Cut to Pack in Wfx Software",
        "Create FPO, GDI, GDN, BOM"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 className="job-title">{exp.title}</h3>
                <h4 className="company">{exp.company}</h4>
                <p className="location">{exp.location}</p>
                <p className="period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
