import React from "react";
import "/src/index.css";

function Skills() {
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
    <section id="skills" className="skills-section">
      <div className="skills-card">
        <h2 className="skills-title">Skills</h2>

        {/* Technical Skills */}
        <div className="skills-category">
          <h3>Technical Skills</h3>
          <div className="skills-badges">
            {technicalSkills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <div className="skills-badges">
            {softSkills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
