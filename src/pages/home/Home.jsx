import React from "react";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Info Section */}
      <div className="info-section">
        <h1>Hi, I'm Nika!</h1>
        <p>
          I'm a Next.js Developer based in Georgia with a passion for creative
          design, problem-solving, and building amazing web applications. I love
          learning and constantly improving my skills.
        </p>
      </div>

{/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Me</h2>
        <p>
          <strong>Email:</strong> nikoloz@gmail.com
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/tsirdo8"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/tsirdo8
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +995-123-456-789
        </p>
      </div>
    </div>
  );
};

export default Home;
