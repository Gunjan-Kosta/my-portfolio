import React, { useState } from "react";
import "/src/index.css";

function Certifications() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const certifications = [
    {
      name: "Deloitte Australia Technology Job Simulation - Jul 2025",
      file: "images/deloitte.jpg",
      detail:
        "Simulation program by Deloitte Australia to test technology skills in a real-world scenario.",
    },
    {
      name: "Cambridge Upskill English Certificate - Mar 2025",
      file: "images/eng1.jpg",
      detail:
        "Certificate showcasing proficiency in English language and communication skills.",
    },
    {
      name: "Fundamentals of Cybersecurity (Zscaler) - Apr 2025",
      file: "images/zscaler.jpg",
      detail:
        "Basic cybersecurity concepts and best practices learned through Zscaler training.",
    },
    {
      name: "Java (Basics) - HackerRank | Mar 2025",
      file: "images/Java(Basics).jpg",
      detail:
        "Basic Java programming skills validated by HackerRank assessment.",
    },
    {
      name: "SQL (Basics) - HackerRank | Mar 2025",
      file: "images/sql(basic).jpg",
      detail:
        "SQL querying skills from basic to intermediate, verified by HackerRank.",
    },
    {
      name: "SQL (Intermediate) - HackerRank | Mar 2025",
      file: "images/sql(intermediate).jpg",
      detail:
        "SQL querying skills from basic to intermediate, verified by HackerRank.",
    },
    {
      name: "Vocational Training on Flutter Development - Completion Certificate",
      file: "images/vt.jpg",
      detail:
        "Completed a vocational training program focused on Flutter app development.",
    },
    {
      name: "Web Development Course - Udemy | Completion Certificate",
      file: "images/Web Dev Certificate.jpg",
      detail:
        "Comprehensive Udemy course on full-stack web development covering HTML, CSS, JavaScript, React, Node.js, and databases.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="certifications" className="certifications-section-wrapper">
      <div className="certifications-box">
        <h2>Certifications</h2>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-card ${
                expandedIndex === index ? "expanded" : ""
              }`}
              onClick={() => toggleExpand(index)}
            >
              <h3>{cert.name}</h3>
              <p className="cert-detail">{cert.detail}</p>

              {expandedIndex === index && (
                <div className="certificate-viewer">
                  <img
                    src={cert.file}
                    alt={cert.name}
                    className="certificate-image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
