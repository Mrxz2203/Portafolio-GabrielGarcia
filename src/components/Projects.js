// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Shimbaru- Gamag ",
      image: "/Shimbaru.png",
      link: "https://shimbaru-project.vercel.app/"
    },
    {
      title: "HelpTask",
      image: "/Helptask.png", 
      link: "https://proyecto-task.vercel.app/"
    },
    {
      title: " Landing Page Arsenal",
      image: "/Arsenal.png", 
      link: "https://arsenal-front.vercel.app/"
    },
    {
      title: "Filmi",  
      image: "/Filmi.png",       
      link: "https://proyecto-filmi.vercel.app/" 
    }
  ];

  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-container">
        
<h2 className="projects-title">
  Mis <span className="highlight">Proyectos</span>
</h2>
        
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