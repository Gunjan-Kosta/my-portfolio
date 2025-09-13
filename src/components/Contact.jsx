import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "/src/index.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_23102004", // ✅ Your EmailJS Service ID
        "template_gk", // ✅ Your EmailJS Template ID
        form.current,
        "WZc1V3e83Zi1nkzlK" // ✅ Your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
      <a href="#top" className="back-to-top">
        ↑
      </a>
    </section>
  );
}

export default Contact;
