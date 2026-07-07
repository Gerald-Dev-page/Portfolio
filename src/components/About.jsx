import React from 'react';
import profileImg from '../assets/Yo.png';
import '../styles/index.css';

export default function About() {
  return (
    <section className="about-section container" id="about">
      {/* Título visible solo en Mobile, arriba de la imagen */}
      <h2 className="about-title font-bold show-mobile-title">Acerca de mi</h2>

      <div className="about-grid">
        <div className="about-image-wrapper">
          <img
            src={profileImg}
            alt="Lorenzo Muñoz - Full Stack Developer"
            className="about-image"
          />
        </div>

        <div className="about-content">
          {/* Título visible solo en PC, alineado con el texto */}
          <h2 className="about-title font-bold hide-mobile-title">Acerca de mi</h2>

          <p className="about-text font-regular">
            Soy un estudiante avanzado de la Tecnicatura en Desarrollo de Software en la Universidad de la Punta.
            Me especializo en el desarrollo Full Stack, enfocado en la construcción de arquitecturas escalables,
            integración de APIs y diseño de bases de datos relacionales y no relacionales. Me destaco por mi
            pensamiento analítico y mi rigor técnico para transformar requerimientos complejos en software
            eficiente y seguro. Mi objetivo es aportar valor técnico en equipos de desarrollo estructurados.
          </p>

          <div className="about-actions">
            {/* Botón de CV destacado con efecto */}
            <a
              href={`${import.meta.env.BASE_URL}CV - Lorenzo Muñoz.pdf`}
              download
              className="btn btn-primary btn-pulse"
            >
              Descargar CV
            </a>
            <a
              href="https://linkedin.com/in/lorennzo-mu07/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}