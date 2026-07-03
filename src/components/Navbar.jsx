import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../styles/index.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activa la clase 'scrolled' si el usuario baja más de 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { href: '#about', label: 'Acerca de mi' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#experience', label: 'Trabajos' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    // Se añade la clase 'scrolled' dinámicamente al <header>
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#top" className="navbar-logo">
          <img src={logo} alt="Gerald.dev Logo" />
        </a>

        <nav className={`navbar-links font-semibold ${isOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-item" 
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}