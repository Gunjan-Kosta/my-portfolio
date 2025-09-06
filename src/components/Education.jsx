import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import "/src/index.css";

function Education() {
  return (
    <section id="education" className="education-section highlight-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        {/* B.Tech */}
        <div className="edu-card">
          <h3>
            <FaGraduationCap className="edu-icon" /> B.Tech, Computer Science &
            Engineering
          </h3>
          <p className="edu-institute">
            Shri Shankaracharya Institute of Professional Management and
            Technology
          </p>
          <p className="edu-duration">2023 – 2027</p>
          <p>
            <strong>GPA:</strong> 7.21
          </p>
        </div>

        {/* Class XII */}
        <div className="edu-card">
          <h3>
            <HiOutlineBuildingLibrary className="edu-icon" /> Class XII (CBSE)
          </h3>
          <p className="edu-institute">
            Holy Cross Senior Secondary School, Raipur
          </p>
          <p className="edu-duration">2008 – 2023</p>
          <p>
            <strong>Score:</strong> 81.40% | Gold Medal for Academic Excellence
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
