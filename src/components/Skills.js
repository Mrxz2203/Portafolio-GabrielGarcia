// src/components/Skills.js
import React from 'react';
import './Skills.css';
import useInView from '../hooks/useInView';

function SkillCategory({ cat, ci }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`skill-category reveal-on-scroll ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${ci * 0.1}s` }}
    >
      <div className="category-header">
        <div className="category-icon">{cat.icon}</div>
        <span className="category-name">{cat.name}</span>
        <span className="category-count">{cat.skills.length}</span>
      </div>

      <p className="category-description">{cat.description}</p>

      <div className="skill-list">
        {cat.skills.map((sk, si) => (
          <div key={si} className="skill-pill">
            {sk.icon}
            <span className="skill-pill-name">{sk.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const categories = [
    {
      name: "Frontend",
      icon: <img src="/frontend.png" alt="frontend" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      description: "Interfaces modernas, responsivas y componentizadas.",
      skills: [
        { name: "React", icon: <img src="/react.png" alt="react" className="skill-pill-icon" /> },
        { name: "Angular", icon: <img src="/angular.png" alt="angular" className="skill-pill-icon" /> },
        { name: "HTML/CSS", icon: <img src="/html.png" alt="html" className="skill-pill-icon" /> },
      ],
    },
    {
      name: "Backend",
      icon: <img src="/backend.png" alt="backend" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      description: "Lógica de negocio, APIs y procesamiento de datos.",
      skills: [
        { name: "Java", icon: <img src="/java.png" alt="java" className="skill-pill-icon" /> },
        { name: "Python", icon: <img src="/python.png" alt="python" className="skill-pill-icon" /> },
        { name: "C#", icon: <img src="/c.png" alt="c-sharp" className="skill-pill-icon" /> },
      ],
    },
    {
      name: "Base de Datos",
      icon: <img src="/pgadmin.png" alt="pgadmin" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      description: "Diseño, consultas y administración de datos relacionales.",
      skills: [
        { name: "SQL Server", icon: <img src="/server.png" alt="sql-server" className="skill-pill-icon" /> },
        { name: "MySQL", icon: <img src="/mysql.png" alt="mysql" className="skill-pill-icon" /> },
      ],
    },
    {
      name: "Herramientas de Microsoft Office",
      icon: <img src="/office.png" alt="office" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      description: "Documentación, reportes y automatización de tareas.",
      skills: [
        { name: "Excel", icon: <img src="/excel.png" alt="excel" className="skill-pill-icon" /> },
        { name: "Word", icon: <img src="/word.png" alt="word" className="skill-pill-icon" /> },
        { name: "PowerPoint", icon: <img src="/powerpoint.png" alt="powerpoint" className="skill-pill-icon" /> },
        { name: "AppScript", icon: <img src="/script.png" alt="appscript" className="skill-pill-icon" /> },
      ],
    },
    {
      name: "Habilidades Blandas",
      icon: <img src="/developer.png" alt="developer" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      description: "Trabajo colaborativo y gestión de equipos técnicos.",
      skills: [
        { name: "Liderazgo", icon: <img src="/liderazgo.png" alt="liderazgo" className="skill-pill-icon" /> },
        { name: "Trabajo en Equipo", icon: <img src="/equipo.png" alt="trabajo-en-equipo" className="skill-pill-icon" /> },
        { name: "Proactividad", icon: <img src="/proactividad.png" alt="proactividad" className="skill-pill-icon" /> },
      ],
    },
  ];

  return (
    <section className="skills-section" id="habilidades">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">
            Mis <span className="highlight">Habilidades</span>
          </h2>
          <p className="skills-subtitle">Tecnologías y competencias</p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <SkillCategory key={ci} cat={cat} ci={ci} />
          ))}
        </div>
      </div>

      <button
        className="scroll-button-down"
        onClick={() => document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}

export default Skills;