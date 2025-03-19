import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; // Import CSS file

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Get all sections

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold for better section visibility
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar">
      {/* Profile Image */}
      <img src="/profile-s.jpeg" alt="Durga Sahithi" className="profile-image" />

      {/* Profile Name */}
      <h1 className="profile-name">Durga Sahithi</h1>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`nav-item ${activeSection === "about" ? "active" : ""}`}
          >
            <i className="fas fa-user"></i> About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={`nav-item ${activeSection === "skills" ? "active" : ""}`}
          >
            <i className="fas fa-code"></i> Skills
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className={`nav-item ${activeSection === "experience" ? "active" : ""}`}
          >
            <i className="fas fa-briefcase"></i> Experience
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
          >
            <i className="fa fa-tasks"></i> Projects
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className={`nav-item ${activeSection === "education" ? "active" : ""}`}
          >
            <i className="fas fa-graduation-cap"></i> Education
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
          >
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
