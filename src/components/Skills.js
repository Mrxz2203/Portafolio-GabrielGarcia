// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  const categories = [
    {
      name: "Frontend",
      icon: <img src="/frontend.png" alt="frontend" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      skills: [
        { 
    name: "React", 
    icon: <img src="/react.png" alt="react" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
  { 
    name: "Angular", 
    icon: <img src="/angular.png" alt="angular" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
    { 
    name: "HTML/CSS", 
    icon: <img src="/html.png" alt="html" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },    

      ],
    },
    {
      name: "Backend",
      icon: <img src="/backend.png" alt="backend" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      skills: [
     // Backend
{ 
  name: "Java", 
  icon: <img src="/java.png" alt="java" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
  level: "Intermedio", 
  pct: 65 
},
{ 
  name: "Python", 
  icon: <img src="/python.png" alt="python" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
  level: "Intermedio", 
  pct: 65 
},
{ 
  name: "C#", 
  icon: <img src="/c.png" alt="c-sharp" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
  level: "Intermedio", 
  pct: 65 
},
      ],
    },
    {
      name: "Base de Datos",
      icon: <img src="/pgadmin.png" alt="pgadmin" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      skills: [
       { 
    name: "SQL Server", 
    icon: <img src="/server.png" alt="sql-server" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
        { 
    name: "MySQL", 
    icon: <img src="/mysql.png" alt="mysql" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
      ],
    },
    {
      name: "Herramientas de Microsoft Office",
      icon: <img src="/office.png" alt="office" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      skills: [
        { 
    name: "Excel", 
    icon: <img src="/excel.png" alt="excel" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
       { 
    name: "Word", 
    icon: <img src="/word.png" alt="word" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
  { 
    name: "PowerPoint", 
    icon: <img src="/powerpoint.png" alt="powerpoint" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
  { 
    name: "AppScript", 
    icon: <img src="/script.png" alt="appscript" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
      ],
    },
    {
      name: "Habilidades Blandas",
      icon: <img src="/developer.png" alt="developer" style={{ width: '1.7rem', height: '1.7rem', objectFit: 'contain' }} />,
      skills: [
       { 
    name: "Liderazgo", 
    icon: <img src="/liderazgo.png" alt="liderazgo" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
        { 
    name: "Trabajo en Equipo", 
    icon: <img src="/equipo.png" alt="trabajo-en-equipo" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
        { 
    name: "Proactividad", 
    icon: <img src="/proactividad.png" alt="proactividad" style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain' }} />, 
    level: "Intermedio", 
    pct: 65 
  },
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
                         <span className="skill-emoji">{sk.icon}</span>
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