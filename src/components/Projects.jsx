import React from "react";

function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Random Number Guessing Game</h3>
          <p>
            Interactive console game providing hints while guessing a random
            number.
          </p>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal website showcasing resume, projects, and contact info.</p>
        </div>
        <div className="project-card">
          <h3>Calculator Website</h3>
          <p>Web-based calculator app with clean UI.</p>
        </div>
        <div className="project-card">
          <h3>Food Menu</h3>
          <p>
            Responsive food menu website with categories like Main Course,
            Chinese, Beverages, Desserts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
