import React from "react";
import "/src/index.css";

function Experience() {
  return (
    <section id="experience" className="highlighted-section">
      <div className="experience-card">
        <h2>Work Experience</h2>

        <div className="timeline">
          {/* Cognifyz Technologies */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>💼 Cognifyz Technologies</h3>
              <p>
                <em>C/C++ Programmer Intern | Mar 2025 - Apr 2025</em>
              </p>
              <ul>
                <li>Worked on logic-based programming tasks in C/C++.</li>
                <li>
                  Improved system performance and efficiency through optimized
                  solutions.
                </li>
              </ul>
            </div>
          </div>

          {/* Deloitte */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>🏢 Deloitte</h3>
              <p>
                <em>Technology Virtual Internship | Jun 2025 - Jul 2025</em>
              </p>
              <ul>
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
      </div>
    </section>
  );
}

export default Experience;
