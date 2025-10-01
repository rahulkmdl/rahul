// src/components/Education.jsx
import React from 'react'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "L.N.M.U Darbhanga",
      location: "Darbhanga, Bihar",
      year: "2019"
    },
    {
      degree: "12th Grade",
      institution: "M L S M College Darbhanga",
      location: "Darbhanga, Bihar",
      year: "2016"
    },
    {
      degree: "10th Grade",
      institution: "+2 Jayanand High School",
      location: "Darbhanga, Bihar",
      year: "2014"
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="degree">{edu.degree}</h3>
              <h4 className="institution">{edu.institution}</h4>
              <p className="location">{edu.location}</p>
              <p className="year">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
