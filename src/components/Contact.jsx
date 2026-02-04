import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "/src/index.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_23102004",
        "template_gk",
        form.current,
        "WZc1V3e83Zi1nkzlK",
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send: " + error.text);
        },
      );
  };

  return (
    <section
      id="contact"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 2rem",
      }}
    >
      <div
        className="contact-container"
        style={{
          width: "100%",
          maxWidth: "1200px", // ✅ Wider width
          background: "var(--card-bg)",
          backdropFilter: "blur(16px)",
          border: "1px solid var(--card-border)",
          borderRadius: "24px",
          padding: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Left Side: Info */}
        <div className="contact-info">
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              fontWeight: "700",
            }}
          >
            Let's Connect
          </h2>
          <p
            style={{
              color: "var(--text-alt)",
              fontSize: "1.1rem",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}
          >
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open!
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  padding: "0.8rem",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  color: "var(--primary)",
                }}
              >
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--text-alt)" }}>
                  Email
                </h4>
                <a
                  href="mailto:gunjankosta32@gmail.com"
                  style={{ fontSize: "1.1rem", fontWeight: "600" }}
                >
                  gunjankosta32@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <a
                href="https://linkedin.com/in/gunjan-kosta"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "1rem",
                  background: "rgba(99, 102, 241, 0.1)",
                  color: "#6366f1",
                  borderRadius: "12px",
                  transition: "0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-3px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Gunjan-Kosta"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "1rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "var(--text-color)",
                  borderRadius: "12px",
                  transition: "0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-3px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper">
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  color: "var(--text-alt)",
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                style={{
                  width: "100%",
                  background: "rgba(0,0,0,0.2)",
                  border: "1px solid var(--card-border)",
                  padding: "1rem",
                  borderRadius: "8px",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  color: "var(--text-alt)",
                }}
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                style={{
                  width: "100%",
                  background: "rgba(0,0,0,0.2)",
                  border: "1px solid var(--card-border)",
                  padding: "1rem",
                  borderRadius: "8px",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  color: "var(--text-alt)",
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Hello, I'd like to talk about..."
                rows="5"
                required
                style={{
                  width: "100%",
                  background: "rgba(0,0,0,0.2)",
                  border: "1px solid var(--card-border)",
                  padding: "1rem",
                  borderRadius: "8px",
                  color: "white",
                  resize: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: "1rem",
                background: "var(--accent-gradient)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
