// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <h1 className="logo">Mi Portafolio</h1>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#acerca">Acerca de mí</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contacto">Contáctame</a>
      </nav>
    </header>
  );
}

export default Navbar;