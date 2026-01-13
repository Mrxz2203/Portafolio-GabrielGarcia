// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        {/* Parte izquierda - Texto */}
        <div className="text-content">
          <h2 className="name">
            <span className="first-name">Jarold</span> Gabriel
          </h2>
          <h2 className="name">
            <span className="first-name">García</span> Cartagena
          </h2>
          
          <div className="buttons">
            <button className="btn-primary">Experiencia</button>
            <a href="/CV- gabriel.pdf" download className="btn-secondary">
              Descargar CV 📥
            </a>
          </div>
        </div>

        {/* Parte derecha - Foto */}
        <div className="image-content">
          <div className="profile-card">
            <img src="/perfil.jpg" alt="Jarold Gabriel García" className="profile-img" />
            <div className="tech-badges">
              <span className="badge">Desarrollador Web</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de scroll animado */}
      <button className="scroll-button" onClick={scrollToNext}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </section>
  );
}

export default Hero;