// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Mi Portafolio</h1>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#acerca">Acerca de mí</a>
        <a href="#contacto">Contáctame</a>
      </nav>
    </header>
  );
}

export default Navbar;