import React from "react";
import "/src/index.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* About Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I’m <span className="highlight">Gunjan Kosta</span>, a passionate{" "}
            <b>Front-end Web Developer</b> who loves building interactive,
            scalable, and user-friendly web & mobile applications.
          </p>
          <p>
            With a strong foundation in front-end technologies, I enjoy creating
            modern solutions that bring ideas to life. I’m also open to
            freelance opportunities where I can collaborate and grow.
          </p>

          {/* Highlight Badges */}
          <div className="about-highlights">
            <span className="highlight-badge">💻 Front-end Web Developer</span>
            <span className="highlight-badge">🚀 Problem Solver</span>
            <span className="highlight-badge">🤝 Freelancer</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
