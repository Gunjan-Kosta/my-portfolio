import React from "react";
import "/src/index.css";

function Education() {
  return (
    <section id="education" className="education-section highlight-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        {/* B.Tech */}
        <div className="edu-card">
          <h3>🎓 B.Tech, Computer Science & Engineering</h3>
          <p>
            Shri Shankaracharya Institute of Professional Management and
            Technology <em>(2023 - 2027)</em>
          </p>
          <p>
            <strong>GPA:</strong> 7.21
          </p>
        </div>

        {/* Class XII */}
        <div className="edu-card">
          <h3>🏅 Class XII (CBSE)</h3>
          <p>
            Holy Cross Senior Secondary School, Raipur <em>(2008 - 2023)</em>
          </p>
          <p>
            <strong>Score:</strong> 81.40% | Gold Medal for Academic Excellence
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
