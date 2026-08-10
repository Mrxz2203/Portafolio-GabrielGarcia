// src/components/About.js
import React from 'react';
import { Laptop, Mail, Palette, Coffee, Smartphone, Rocket, Lightbulb, Target } from 'lucide-react';
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
              Egresado de la carrera de Ingeniería de Sistemas 
              Computacionales, curse en la Universidad
              Peruana de Ciencias Aplicadas, durante los periodos entre 2021 y 2026.
            </p>
            <p>
              Tengo conocimiento intermedio en el dominio de Lenguajes 
              como Python, C# y JavaScript.
              En cuanto se refiere a Base de datos, domino temas
              avanzados del SQL Lite y SQL Server. 
            </p>
            <p>
              Soy desarrollador de sitios webs en HTML usando Angular 
              Studio, React, Vue en desarrollo de aplicaciones web y movil.
              Asimismo, poseo experiencia como practicante preprofesional de Ingenieria 
              de Sistemas
              en la empresa GM Ingenierios y Consultores SAC.
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
            <Laptop className="icon icon-1" />
            <Mail className="icon icon-2" />
            <Palette className="icon icon-3" />
            <Coffee className="icon icon-4" />
            <Smartphone className="icon icon-5" />
            <Rocket className="icon icon-6" />
            <Lightbulb className="icon icon-7" />
            <Target className="icon icon-8" />
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