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
      name: "Vocational Training on Flutter Development",
      file: "images/vt.jpg",
      detail:
        "Completed a vocational training program focused on Flutter app development.",
    },
    {
      name: "Web Development Course - Udemy",
      file: "images/Web Dev Certificate.jpg",
      detail:
        "Comprehensive Udemy course on full-stack web development covering HTML, CSS, JavaScript, React, Node.js, and databases.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="certifications">
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "2.5rem",
            fontWeight: "700",
          }}
        >
          Certifications
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-card"
              onClick={() => toggleExpand(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
                {cert.name}
              </h3>
              <p
                style={{
                  color: "var(--text-alt)",
                  fontSize: "0.95rem",
                  flex: 1,
                }}
              >
                {cert.detail}
              </p>

              <div
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.9rem",
                  color: "var(--primary)",
                }}
              >
                {expandedIndex === index
                  ? "Click to close"
                  : "Click to view certificate"}
              </div>

              {expandedIndex === index && (
                <div style={{ marginTop: "1rem" }}>
                  <img
                    src={cert.file}
                    alt={cert.name}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: "1px solid var(--card-border)",
                    }}
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
