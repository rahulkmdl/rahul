// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Feel free to reach out for data analysis opportunities or
              collaborations.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:rahulkumardbg756@gmail.com">
                  rahulkumardbg756@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href="tel:+917759857290">
                  <span>7759857290</span>
                </a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Gurgaon, Haryana</span>
              </div>
              <div className="contact-item">
                <strong>Languages:</strong>
                <span>Hindi, English</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
