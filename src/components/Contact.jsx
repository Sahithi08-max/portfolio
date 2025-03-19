// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./Contact.css"; // Make sure you have the corresponding CSS file

const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-heading">Let&apos;s Connect</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>Phone</p>
          <p>+1 (430)-295-4381</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>Location</p>
          <p>Commerce, TX</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>Email</p>
          <p>sahithipds@gmail.com</p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sahithipds/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/Sahithi08-max" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p className="footer">© 2025 Durga Sahithi Pallapothu. All rights reserved.</p>
    </section>
  );
};

export default Contact;
