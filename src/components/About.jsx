import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import "/src/index.css";

function About() {
  const technicalSkills = [
    "C",
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "React",
    "Node.js",
    "SQL",
    "MySQL",
    "Flutter",
  ];

  const softSkills = ["Communication", "Leadership", "Project Management"];

  return (
    <section id="about" className="about-section">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          width: "100%",
          maxWidth: "1000px",
          alignItems: "center",
        }}
      >
        {/* OLD ABOUT CARD */}
        <div className="about-card" style={{ width: "100%" }}>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I’m <span className="highlight">GUNJAN KOSTA</span>, a passionate{" "}
              <b>Frontend Web Developer</b> who loves building interactive,
              scalable, and user-friendly web & mobile applications.
            </p>
            <p>
              With a strong foundation in both front-end and back-end
              technologies, I enjoy creating modern solutions that bring ideas
              to life. I’m also open to freelance opportunities where I can
              collaborate and grow.
            </p>

            <div className="about-highlights">
              <span className="highlight-badge">💻 Frontend Web Developer</span>
              <span className="highlight-badge">🚀 Problem Solver</span>
              <span className="highlight-badge">🤝 Freelancer</span>
            </div>

            <div className="resume-btn-wrapper">
              <a
                href="images/GUNJAN KOSTA Resume.pdf"
                download="Gunjan_Kosta_Resume.pdf"
                className="resume-btn"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div style={{ width: "100%" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1.5rem",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Skills
          </h2>

          <div
            className="about-card"
            style={{ width: "100%", textAlign: "left" }}
          >
            <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
              Technical Skills
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
                marginBottom: "2rem",
              }}
            >
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>

            <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
              Soft Skills
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div style={{ width: "100%" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1.5rem",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Education
          </h2>

          <div
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {/* B.Tech */}
            <div className="card">
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                <FaGraduationCap style={{ color: "var(--primary)" }} /> B.Tech,
                CSE
              </h3>
              <p style={{ color: "var(--text-alt)", fontSize: "0.9rem" }}>
                Shri Shankaracharya Institute of Professional Management and
                Technology
              </p>
              <p style={{ fontWeight: "600", margin: "0.5rem 0" }}>
                2023 – 2027
              </p>
              <p>
                <strong>GPA:</strong> 7.21
              </p>
            </div>

            {/* Class XII */}
            <div className="card">
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "0.5rem",
                }}
              >
                <HiOutlineBuildingLibrary style={{ color: "var(--primary)" }} />{" "}
                Class XII (CBSE)
              </h3>
              <p style={{ color: "var(--text-alt)", fontSize: "0.9rem" }}>
                Holy Cross Senior Secondary School, Raipur
              </p>
              <p style={{ fontWeight: "600", margin: "0.5rem 0" }}>
                2008 – 2023
              </p>
              <p>
                <strong>Score:</strong> 81.40% | Gold Medal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
