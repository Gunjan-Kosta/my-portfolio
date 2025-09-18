import React from "react";
import "/src/index.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Profile Image */}
        <img
          src="./public/images/profile.jpg"
          alt="My Profile"
          className="hero-pic"
        />

        <h1>
          Hello, I'm <span className="highlight">GUNJAN KOSTA</span>
        </h1>
        <h2>A Passionate Full-Stack Developer</h2>
        <p className="hero-subtext">
          I love building modern, interactive, and user-friendly web & mobile
          apps.
        </p>

        {/* Freelance Availability Line */}
        <p className="freelance-line">
          📢 I am open to freelance opportunities. Let’s build something amazing
          together!
        </p>

        {/* Scroll Down Gesture */}
        <div className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Home;
