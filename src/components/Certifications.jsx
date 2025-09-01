import React from "react";
import "/src/index.css"; // make sure CSS is imported

function Certifications() {
  const certifications = [
    {
      name: "Deloitte Australia Technology Job Simulation - Jul 2025",
      file: "/certificates/deloitte.pdf",
      detail:
        "Simulation program by Deloitte Australia to test technology skills in a real-world scenario.",
    },
    {
      name: "Cambridge Upskill English Certificate - Mar 2025",
      file: "/certificates/cambridge.pdf",
      detail:
        "Certificate showcasing proficiency in English language and communication skills.",
    },
    {
      name: "Fundamentals of Cybersecurity (Zscaler) - Apr 2025",
      file: "/certificates/zscaler.pdf",
      detail:
        "Basic cybersecurity concepts and best practices learned through Zscaler training.",
    },
    {
      name: "Java (Basics) - HackerRank | Mar 2025",
      file: "/certificates/java.pdf",
      detail:
        "Basic Java programming skills validated by HackerRank assessment.",
    },
    {
      name: "SQL (Basics & Intermediate) - HackerRank | Mar 2025",
      file: "/certificates/sql.pdf",
      detail:
        "SQL querying skills from basic to intermediate, verified by HackerRank.",
    },
    {
      name: "Vocational Training on Flutter Development - Completion Certificate",
      file: "/certificates/flutter-vocational.pdf",
      detail:
        "Completed a vocational training program focused on Flutter app development.",
    },
  ];

  return (
    <section id="certifications" className="certifications-section-wrapper">
      <div className="certifications-box">
        <h2>Certifications</h2>
        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <h3>{cert.name}</h3>
              <p className="cert-detail">{cert.detail}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
