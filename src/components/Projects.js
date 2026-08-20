import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const projects = [
   {
  title: "Shimbaru",
  image: "/Shimbaru.png",
  link: "https://shimbaru-project.vercel.app/",
  description: "Landing page para restaurante de cocina peruana-nikkei, con galería de categorías, menú destacado y reservas vía WhatsApp."
},
{
  title: "HelpTask",
  image: "/HelpTask.png",
  link: "https://proyecto-task.vercel.app/",
  description: "Gestor de tareas estilo Kanban con autenticación simulada, tablero interactivo y CRUD local en React."
},
{
  title: "Filmi",
  image: "/Filmi.png",
  link: "https://proyecto-filmi.vercel.app/",
  description: "App de música Bollywood en Angular que consume la API de iTunes, con favoritos y cuenta de usuario."
},
{
  title: "Gamevent",
  image: "/gamevent.png",
  link: "https://proyecto-gamevent.vercel.app/",
  description: "Landing page en Astro para empresa de eventos privados, con portafolio de trabajos y contacto por WhatsApp."
},
{
    title: "Landing Page Arsenal",
    image: "/Arsenal.png",
    link: "https://arsenal0311.vercel.app/",
    description: "Proyecto inspirado en un landing page para Arsenal como hincha del club." 
  },
{
  title: "V-COGNI",
  image: "/vcogni.png",
  link: "https://vcogni.vercel.app/",
  description: "Sistema que identifica estilos cognitivos (visual/verbal) mediante seguimiento ocular con webcam."
}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const visibleCount = 3;

  const handleNext = () => {
     setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
     setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Calcula los 3 proyectos visibles a partir del índice actual (con wrap circular)
  const visibleProjects = Array.from({ length: Math.min(visibleCount, projects.length) }, (_, i) => 
    projects[(currentIndex + i) % projects.length]
  );

  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-container">

        <h2 className="projects-title">
          Mis <span className="highlight">Proyectos</span>
        </h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow arrow-left" onClick={handlePrev} aria-label="Proyecto anterior">
            ‹
          </button>

          <div className={`projects-grid slide-${direction}`} key={currentIndex}>
            {visibleProjects.map((project, i) => (
              <a
                href={project.link}
                key={`${currentIndex}-${i}`}
                className="project-card"
                target="_blank"
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
                <p className="project-description">{project.description}</p>
              </a>
            ))}
          </div>

          <button className="carousel-arrow arrow-right" onClick={handleNext} aria-label="Siguiente proyecto">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;