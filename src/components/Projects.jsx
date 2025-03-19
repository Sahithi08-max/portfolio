// Projects.jsx
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Academic Advising Platform",
      description:
        "Developed a Spring Boot-based platform for academic advising, enabling seamless interactions between students and advisors.",
      techStack: "Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, MySQL, React.js, RESTful API"
      
    },
    {
      title: "Idea Portal",
      description:
        "A platform for managing user-submitted ideas with role-based access control and approval workflows. Designed the login page, implemented idea submission, approval processes, and developed features to track idea statuses.",
      techStack: "Java, Spring Boot, MySQL, HTML/CSS, React.js, Redux, OAuth2, JWT Authentication"
      
    },
    {
      title: "Event Management and ticketing system",
      description:
        "An event management platform allowing users to create, book, and manage events. Implemented APIs for event registration, payment integration, ticket generation, and role-based access for organizers and attendees, with QR-based check-in support. ",
      techStack: "Java, Spring Security, Role Based Access, Docker, AWS"
    },
    {
      title: "AI-Powered personalised learning platform",
      description:
        "A Spring Boot and React-based e-learning system that personalizes content recommendations based on AI-driven student learning patterns. Developed APIs for course management, student performance tracking, and adaptive quizzes, integrating ML models for dynamic curriculum suggestions. ",
      techStack: "Spring Boot, Hibernate, MySQL, React.js, Kubernetes, RESTful API, AWS EC2, RDS"
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-heading">My Work & Projects</h2>
      <div className="projects-timeline">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
