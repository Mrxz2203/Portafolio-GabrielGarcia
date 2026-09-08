import React from 'react';
import useInView from '../hooks/useInView';
import './Footer.css';

const CONTACTS = [
  {
    label: "WhatsApp",
    value: "Contacto Personal",
    href: "https://wa.me/51992808427?text=Hola%20Gabriel%2C%20te%20escribo%20por%20una%20oportunidad%20laboral",
    type: "whatsapp",
    primary: true,
    // Llamamos a la imagen desde la carpeta public
    icon: <img src="/wsp.webp" alt="WhatsApp Icon" width="28" height="28" style={{ objectFit: 'contain' }} />
  },
  {
    label: "Gmail",
    value: "jarold.pamer@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=jarold.pamer@gmail.com&su=Oportunidad%20laboral&body=Hola%20Gabriel%2C%20te%20escribo%20respecto%20a%20una%20oportunidad%20laboral...",
    type: "email",
    primary: true,
    // Llamamos a la imagen desde la carpeta public
    icon: <img src="/gmail.webp" alt="Gmail Icon" width="28" height="28" style={{ objectFit: 'contain' }} />
  },
  {
    label: "LinkedIn",
    value: "Gabriel García",
    href: "https://www.linkedin.com/in/jarold-gabriel-garcia-cartagena-54b80b20b/",
    type: "linkedin",
    primary: false,
    // Llamamos a la imagen desde la carpeta public
    icon: <img src="/linkedin.png" alt="LinkedIn Icon" width="28" height="28" style={{ objectFit: 'contain' }} />
  },
  {
    label: "GitHub",
    value: "Mrxz2203",
    href: "https://github.com/Mrxz2203",
    type: "github",
    primary: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
];

function FooterCard({ contact, index }) {
  const [ref, inView] = useInView();

  return (
    <a
      ref={ref}
      href={contact.href}
      aria-label={`${contact.label}: ${contact.value}`}
      className={`footer-card ${contact.primary ? 'footer-card-primary' : 'footer-card-secondary'} reveal-on-scroll ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`footer-card-icon ${contact.type}`} aria-hidden="true">
        {contact.icon}
      </div>
      <span className="footer-card-label">{contact.label}</span>
      <span className="footer-card-value">{contact.value}</span>
      <span className="footer-card-arrow">Ver perfil →</span>
    </a>
  );
}

function Footer() {
  const primaryContacts = CONTACTS.filter((c) => c.primary);
  const secondaryContacts = CONTACTS.filter((c) => !c.primary);

  return (
    <footer className="footer-section" id="contacto">
      <div className="footer-container">
        {/* Encabezado */}
        <div className="footer-contact-header">
          <h2 className="footer-contact-title">
            Contácta<span className="highlight">me</span>
          </h2>
          <p className="footer-contact-subtitle">Hablemos</p>
        </div>

        <p className="footer-contact-description">
          Estoy buscando oportunidades para poder desarrollarme como Ingeniero de Sistemas de Información.
          Siempre estaré dispuesto a colaborar con el crecimiento de la empresa.
        </p>

        {/* Tarjetas de contacto */}
        <div className="footer-cards-wrapper">
          <p className="footer-cards-caption">¿Postulaciones u oportunidades laborales? Escríbeme por aquí:</p>
          <div className="footer-cards footer-cards-primary">
            {primaryContacts.map((c, i) => (
              <FooterCard key={c.label} contact={c} index={i} />
            ))}
          </div>

          <div className="footer-cards footer-cards-secondary">
            {secondaryContacts.map((c, i) => (
              <FooterCard key={c.label} contact={c} index={i} />
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider" />

        {/* Navegación inferior */}
        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <a href="#acerca">Acerca de mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
        </nav>

        <p className="footer-copy">© {new Date().getFullYear()} Jarold Gabriel García Cartagena</p>
      </div>
    </footer>
  );
}

export default Footer;