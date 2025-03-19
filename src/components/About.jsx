import "./About.css"; // Import the CSS file

function About() {
  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sahithi_Resume.pdf"; // Update with the actual path of your resume
    link.download = "Sahithi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      {/* Left Side - Introduction */}
      <div className="about-text">
        <h2>Hey Hi!! Meet Sahithi</h2>
        <p>
          I&apos;m <strong>Durga Sahithi</strong>, with experience in designing and building scalable, secure, and user-friendly applications. 
          I’m passionate about exploring and implementing cutting-edge technologies to solve complex challenges and deliver impactful solutions.
        </p>
        <p>
          Beyond coding, I’m driven by the opportunity to learn, adapt, 
          and embrace emerging technologies. I take pride in leveraging my technical and problem-solving skills to make a difference.
        </p>

        {/* Resume Download Button */}
        <button className="resume-button" onClick={handleResumeDownload}>
          📄 Grab my Resume
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="about-image">
        <img src="/profile-big.JPG" alt="Durga Sahithi" />
      </div>
    </div>
  );
}

export default About;
