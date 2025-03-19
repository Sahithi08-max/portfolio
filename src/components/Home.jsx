// Home.jsx


import "./Home.css"; // Import the CSS file

function Home() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: "url('/background1.jpg')" }}
    >
      <div className="home-content">
        <h1>Durga Sahithi</h1>
        <p>Java Full Stack Developer</p>
        
      </div>
    </div>
  );
}

export default Home;
