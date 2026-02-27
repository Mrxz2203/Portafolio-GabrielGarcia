// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Trabajo Grupal - Colaboracion",
      image: "/Mirai.png",
      link: "https://mirai-inc-ihc.github.io/LandingPageDS/public/"
    },
    {
      title: " Cartas San Valentin - Frontend",
      image: "/Kiseki.png", 
      link: "https://kiseki-green-gab.vercel.app/"
    },
    {
      title: "Proyecto  Arsenal - Frontend",
      image: "/Arsenal.png", 
      link: "https://arsenal-front.vercel.app/"
    }
  ];

  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-container">
        <h2 className="projects-title">Mis proyectos personales</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              key={index} 
              className="project-card"
              target={project.link !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="view-project">Ver proyecto →</span>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;