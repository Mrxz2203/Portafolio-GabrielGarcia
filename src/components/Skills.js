// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  const categories = [
    {
      name: "Frontend",
      icon: <i className="devicon-react-original colored" style={{ fontSize: '1.6rem' }}></i>,
      skills: [
        { name: "React",      emoji: "⚛️",  level: "Intermedio", pct: 65 },
        { name: "Angular",    emoji: "🅰️",  level: "Intermedio", pct: 65 },
        { name: "HTML / CSS", emoji: "🎨",  level: "Avanzado",   pct: 80 },
      ],
    },
    {
      name: "Backend",
      icon: <i className="devicon-python-plain colored" style={{ fontSize: '1.6rem' }}></i>,
      skills: [
        { name: "Java",   emoji: "☕", level: "Intermedio", pct: 60 },
        { name: "Python", emoji: "🐍", level: "Intermedio", pct: 65 },
        { name: "C#",     emoji: "💠", level: "Intermedio", pct: 55 },
      ],
    },
    {
      name: "Base de Datos",
      icon: <img src="/pgadmin.png" alt="pgadmin" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      skills: [
        { name: "SQL Server", emoji: "🛢️", level: "Avanzado",   pct: 80 },
        { name: "MySQL",      emoji: "🐬", level: "Intermedio", pct: 65 },
        { name: "SQLite",     emoji: "📦", level: "Avanzado",   pct: 75 },
      ],
    },
    {
      name: "Herramientas",
      icon: <img src="/excel.png" alt="excel" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      skills: [
        { name: "Excel",      emoji: "📊", level: "Avanzado",   pct: 80 },
        { name: "AppScript",  emoji: "📜", level: "Intermedio", pct: 60 },
      ],
    },
    {
      name: "Habilidades Blandas",
      icon: <img src="/developer.png" alt="developer" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      skills: [
        { name: "Liderazgo",         emoji: "🎯", level: "Desarrollado", pct: 85 },
        { name: "Trabajo en equipo", emoji: "👥", level: "Desarrollado", pct: 90 },
        { name: "Proactividad",      emoji: "🚀", level: "Desarrollado", pct: 85 },
      ],
    },
  ];

  return (
    <section className="skills-section" id="habilidades">
      <div className="skills-container">

        {/* Encabezado */}
        <div className="skills-header">
          <h2 className="skills-title">
            Mis <span className="highlight">Habilidades</span>
          </h2>
          <p className="skills-subtitle">Tecnologías y competencias</p>
        </div>

        {/* Grid de categorías */}
        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <div key={ci} className="skill-category">

              {/* Cabecera */}
              <div className="category-header">
                <div className="category-icon">{cat.icon}</div>
                <span className="category-name">{cat.name}</span>
                <span className="category-count">{cat.skills.length}</span>
              </div>

              {/* Lista */}
              <div className="skill-list">
                {cat.skills.map((sk, si) => (
                  <div key={si} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">
                        <span className="skill-emoji">{sk.emoji}</span>
                        {sk.name}
                      </span>
                      <span className="skill-level">{sk.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${sk.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Botón scroll */}
      <button
        className="scroll-button-down"
        onClick={() =>
          document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}

export default Skills;