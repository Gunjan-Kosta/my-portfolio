import React from "react";
import "/src/index.css";

function Experience() {
  return (
    <section id="experience" className="highlighted-section">
      <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "2.5rem",
            fontWeight: "700",
          }}
        >
          Work Experience
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Omnexia Technology */}
          <div className="experience-card">
            <h3>💻 Omnexia Technology</h3>
            <p style={{ color: "var(--text-alt)", marginBottom: "1rem" }}>
              <em>Frontend Intern | Dec 2025 - Present</em>
            </p>
            <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
              <li>
                Currently working as a Frontend Intern, contributing to the
                development of responsive web interfaces.
              </li>
              <li>
                Gaining hands-on experience with modern React practices and
                component-based architecture.
              </li>
              <li>
                Collaborating with the team to implement new features and
                optimize user experience.
              </li>
            </ul>
          </div>

          {/* Cognifyz Technologies */}
          <div className="experience-card">
            <h3>💼 Cognifyz Technologies</h3>
            <p style={{ color: "var(--text-alt)", marginBottom: "1rem" }}>
              <em>C/C++ Programmer Intern | Mar 2025 - Apr 2025</em>
            </p>
            <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
              <li>Worked on logic-based programming tasks in C/C++.</li>
              <li>
                Improved system performance and efficiency through optimized
                solutions.
              </li>
            </ul>
          </div>

          {/* Deloitte */}
          <div className="experience-card">
            <h3>🏢 Deloitte</h3>
            <p style={{ color: "var(--text-alt)", marginBottom: "1rem" }}>
              <em>Technology Virtual Internship | Jun 2025 - Jul 2025</em>
            </p>
            <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
              <li>
                Completed modules on programming, data structures, and Python.
              </li>
              <li>
                Learned agile development, SDLC practices, and end-to-end
                testing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
