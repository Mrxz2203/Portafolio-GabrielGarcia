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
      title: "Modelo Figma Discord - Diseño Web",
      image: "/Figma.png", 
      link: "https://www.figma.com/design/nSGhSUWmjXwynFwWIv9ZRJ/Devdatep-Prueba?node-id=0-1&p=f&t=F9LhK8WdM95oL7oD-0"
    },
    {
      title: "Proyecto Grupal - Arquitectura Web (Github)",
      image: "/DocSeeker.png", 
      link: "https://github.com/los-telemedicinos/landing_page_telemedicina"
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