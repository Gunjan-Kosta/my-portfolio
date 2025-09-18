import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description:
        "A responsive portfolio with HTML, CSS and JS, showcasing my skills and basic projects.",
      live: "https://gunjan-kosta.github.io/portfolio/",
      image: "images/portfolio.jpg", // thumbnail path
    },
    {
      id: 2,
      name: "Calculator Website",
      description: "An interactive calculator website built with HTML and CSS.",
      live: "https://gunjan-kosta.github.io/Calculator/",
      image: "images/calculator.jpg",
    },
    {
      id: 3,
      name: "Food Menu",
      description:
        "A food menu application built with HTML and CSS, featuring various cuisines and dishes.",
      live: "https://gunjan-kosta.github.io/Food-Menu/",
      image: "images/foodmenu.jpg",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-thumbnail"
              />
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
