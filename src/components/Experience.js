// src/components/Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: "GM Ingenieros y Consultores",
      role: "Practicante de Ingeniería de Sistemas",
      logo: <img src="/Logo.png" alt="GM Ingenieros y Consultores" style={{ width: '2rem', height: '2rem', objectFit: 'contain' }} />,
      badge: "Presencial",
      duration: "3 meses y 15 días  •  Mar 2023 – Jun 2023",
      image: "/Constancia.png",
      description:
        "Agradezco siempre a la empresa por permitirme mostrar mis habilidades y desplegar el vivir en tiempo como es las funciones de mi labor en mi carrera.Curse como practicante de ingenieria de sistemas de informacion durante 3 meses y 15 dias, en el tiempo que apoye en el proyecto mibanco usando framework AngularStudio, en base de datos a SQL, y en backend el uso de Java.Aprendi AppScript con la sintaxis de Javas para proyectos usando Excel.Tambien el dominio de Frontend y posteriores proyectos de la empresa.",
      tags: ["Angular", "Java", "SQL", "AppScript", "Excel", "Frontend"],
    },
    // Agrega más experiencias aquí siguiendo el mismo formato
  ];

  return (
    <section className="experience-section" id="experiencia">
      <div className="experience-container">

        {/* Encabezado */}
        <div className="experience-header">
          <h2 className="experience-title">
            Mi <span className="highlight">Experiencia</span>
          </h2>
          <p className="experience-subtitle">Prácticas pre-profesionales</p>
        </div>

        {/* Tarjetas */}
        {experiences.map((exp, index) => (
          <div key={index} className="exp-card">

            {/* Izquierda: texto */}
            <div className="exp-card-left">
              <div>
                <div className="exp-card-header">
                  <div className="exp-company-info">
                    <div className="exp-logo">{exp.logo}</div>
                    <div>
                      <div className="exp-company-name">{exp.company}</div>
                      <div className="exp-role">{exp.role}</div>
                    </div>
                  </div>
                  <span className="exp-badge">{exp.badge}</span>
                </div>

                <div className="exp-duration">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {exp.duration}
                </div>

                <p className="exp-description">{exp.description}</p>
              </div>

              <div className="exp-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Derecha: imagen grande */}
            <div className="exp-image-wrapper">
              <img
                src={exp.image}
                alt={`Constancia ${exp.company}`}
                className="exp-image"
              />
              <div className="exp-image-overlay" />
            </div>

          </div>
        ))}
      </div>

      {/* Botón scroll */}
      <button
        className="scroll-button-down"
        onClick={() =>
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}

export default Experience;