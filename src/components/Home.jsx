import React from "react";
import "/src/index.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Profile Image */}
        <img src="images/profile.jpg" alt="profile-pic" className="hero-pic" />

        <h1>
          Hello, I'm <span className="highlight">GUNJAN KOSTA</span>
        </h1>
        <h2 className="hero-role">I am a Passionate Frontend Web Developer</h2>
        <p className="hero-subtext">
          I love building modern, interactive, and user-friendly web & mobile
          apps.
        </p>

        {/* Freelance Availability Line */}
        <p className="freelance-line">
          📢 I am open to freelance opportunities. Let’s build something amazing
          together!
        </p>
      </div>
    </section>
  );
}

export default Home;
