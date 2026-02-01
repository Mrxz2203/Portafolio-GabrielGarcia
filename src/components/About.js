// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="acerca">
      <div className="about-container">
        {/* Contenido de texto */}
        <div className="about-content">
          <h2 className="about-title">
            Acerca de <span className="highlight">mí</span>
          </h2>
          
          <div className="about-text">
            <p>
              Estudiante de la carrera de Ingeniería de Sistemas 
              Computacionales que cursa el 9vo ciclo en la Universidad 
              Peruana de Ciencias Aplicadas, perteneciente al tercio 
              superior de mi facultad.
            </p>
            <p>
              Tengo conocimiento intermedio en el dominio de Lenguajes 
              como Python, C#, Java y Visual Code.
              En el aspecto de Base de datos, domino temas
              avanzados del SQL Lite, Microsoft SQl y SQL Server. 
            </p>
            <p>
              Soy desarrollador de sitios webs en HTML usando Angular 
              Studio, React, como ideas de aportaciones en proyectos grupales.
              Asimismo, poseo experiencia como practicante de mi carrera
              en las empresas de Gm Ingenierios y Consultores como Devdatep.
            </p>
            <p>
              Por otro lado cuento con habilidades de liderazgo, 
              proactividad y perseverancia para las situaciones laborales 
              como sistemáticas en las que me encuentro. Por ello, estoy 
              buscando oportunidades en un entorno laboral dinámico y 
              enriquecedor que permita desarrollarme para ser un gran 
              profesional.
            </p>
          </div>
        </div>

        {/* Ilustración */}
        <div className="about-illustration">
          <div className="illustration-wrapper">
            <img 
              src="/Desarrollador.png" 
              alt="Desarrollador trabajando" 
              className="developer-img"
            />
          </div>
          
          {/* Iconos decorativos flotantes */}
          <div className="floating-icons">
            <span className="icon icon-1">💻</span>
            <span className="icon icon-2">📧</span>
            <span className="icon icon-3">🎨</span>
            <span className="icon icon-4">☕</span>
            <span className="icon icon-5">📱</span>
            <span className="icon icon-6">🚀</span>
            <span className="icon icon-7">💡</span>
            <span className="icon icon-8">🎯</span>
          </div>
        </div>
      </div>

      {/* Botón de scroll hacia abajo */}
      <button className="scroll-button-down" onClick={() => window.scrollTo({top: window.innerHeight * 2, behavior: 'smooth'})}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}

export default About;