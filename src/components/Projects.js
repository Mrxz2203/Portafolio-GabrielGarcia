import React, { useState } from 'react';
import './Projects.css';
import useInView from '../hooks/useInView';

const projects = [
  {
    id: "shimbaru",
    title: "Shimbaru",
    image: "/Shimbaru.png",
    link: "https://shimbaru-project.vercel.app/",
    description: "Landing page para restaurante de cocina peruana-nikkei, con galería de categorías, menú destacado y reservas vía WhatsApp."
  },
  {
    id: "helptask",
    title: "HelpTask",
    image: "/HelpTask.png",
    link: "https://proyecto-task.vercel.app/",
    description: "Gestor de tareas estilo Kanban con autenticación simulada, tablero interactivo y CRUD local en React."
  },
  {
    id: "filmi",
    title: "Filmi",
    image: "/Filmi.png",
    link: "https://proyecto-filmi.vercel.app/",
    description: "App de música Bollywood en Angular que consume la API de iTunes, con favoritos y cuenta de usuario."
  },
  {
    id: "gamevent",
    title: "Gamevent",
    image: "/gamevent.png",
    link: "https://proyecto-gamevent.vercel.app/",
    description: "Landing page en Astro para empresa de eventos privados, con portafolio de trabajos y contacto por WhatsApp."
  },
  {
    id: "arsenal",
    title: "Landing Page Arsenal",
    image: "/Arsenal.png",
    link: "https://arsenal0311.vercel.app/",
    description: "Proyecto inspirado en un landing page para Arsenal como hincha del club." 
  },
  {
    id: "vcogni",
    title: "V-COGNI",
    image: "/vcogni.png",
    link: "https://vcogni.vercel.app/",
    description: "Sistema que identifica estilos cognitivos (visual/verbal) mediante seguimiento ocular con webcam."
  }
];

// Componente fuera de Projects
function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();

  return (
    <a
      ref={ref}
      href={project.link}
      className={`project-card reveal-on-scroll ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-overlay">
          <span className="view-project">Ver proyecto →</span>
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </a>
  );
}

function Projects() {
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

  const visibleProjects = Array.from(
    { length: Math.min(visibleCount, projects.length) }, 
    (_, i) => projects[(currentIndex + i) % projects.length]
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

          <div className={`projects-grid slide-${direction}`} key={currentIndex} aria-live="polite">
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
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