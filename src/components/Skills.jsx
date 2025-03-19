// Skills.jsx


import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-heading">My Technical Arsenal</h2>
      <div className="skills-grid">
        {/* Left Column */}
        <div className="skills-column">
          <div className="skill-item">
            <span>💻</span>
            <strong>Programming Languages:</strong>
            <p>Java, Python, SQL</p>
          </div>
          <div className="skill-item">
            <span>🎨</span>
            <strong>Front End Technologies:</strong>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>
          <div className="skill-item">
            <span>🗄️</span>
            <strong>Database:</strong>
            <p>MySQL, MongoDB</p>
          </div>
          <div className="skill-item">
            <span>📦</span>
            <strong>Frameworks:</strong>
            <p>Spring Boot, Hibernate, Angular</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="skills-column">
          <div className="skill-item">
            <span>🔌</span>
            <strong>API:</strong>
            <p>REST API, GraphQL</p>
          </div>
          <div className="skill-item">
            <span>⚙️</span>
            <strong>Tools and Utilities:</strong>
            <p>GitHub, Postman, JIRA, Docker</p>
          </div>
          <div className="skill-item">
            <span>☁️</span>
            <strong>Cloud Technologies:</strong>
            <p>AWS, Azure, GCP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

