// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Education.css"; // Import the CSS file

function Education() {
  return (
    <div className="education-container">
      <h2 className="education-heading">Education</h2>

      <div className="education-timeline">
        
        {/* Master's Degree */}
        <div className="education-item">
          <div className="education-content">
            <h3 className="education-details">Master&apos;s in Computer Science</h3>
            <p className="education-institution">East Texas A&M University</p>
            <p className="education-duration">2023 - 2024</p>
          </div>
        </div>

        {/* Bachelor's Degree */}
        <div className="education-item">
          <div className="education-content">
            <h3 className="education-details">Bachelor&apos;s in Electronics and Communication</h3>
            <p className="education-institution">Giet College of Engineering</p>
            <p className="education-duration">2014 - 2018</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
