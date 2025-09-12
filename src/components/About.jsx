import React from "react";
import "/src/index.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        {/* About Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I’m <span className="highlight">GUNJAN KOSTA</span>, a passionate{" "}
            <b>Full-Stack Developer</b> who loves building interactive,
            scalable, and user-friendly web & mobile applications.
          </p>
          <p>
            With a strong foundation in both front-end and back-end
            technologies, I enjoy creating modern solutions that bring ideas to
            life. I’m also open to freelance opportunities where I can
            collaborate and grow.
          </p>

          {/* Highlight Badges */}
          <div className="about-highlights">
            <span className="highlight-badge">💻 Full-Stack Developer</span>
            <span className="highlight-badge">🚀 Problem Solver</span>
            <span className="highlight-badge">🤝 Freelancer</span>
          </div>

          {/* Download Resume Button */}
          <div className="resume-btn-wrapper">
            <a
              href="/resume.pdf"
              download="Gunjan_Kosta_Resume.pdf"
              className="resume-btn"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
