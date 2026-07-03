import React from 'react';
import '../styles/index.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section container">
      <h2 className="section-title text-center">Experiencia Profesional</h2>
      
      <div className="experience-timeline">
        
        {/* Tarjeta Freelance */}
        <div className="experience-card-wrapper">
          <div className="experience-glow"></div>
          <div className="experience-card">
            <h3>DESARROLLADOR WEB FREELANCE</h3>
            <span className="experience-date">2024 - Actualidad</span>
            <p>
              Desarrollo e implementación de aplicaciones web, landing pages y plataformas e-commerce a medida utilizando principalmente React, además de integraciones específicas de gestión de contenido en WordPress. Optimización de rendimiento, despliegue de arquitecturas y soporte técnico directo a clientes.
            </p>
          </div>
        </div>

        {/* Tarjeta Soporte Técnico */}
        <div className="experience-card-wrapper">
          <div className="experience-glow"></div>
          <div className="experience-card">
            <h3>MESA DE AYUDA & SOPORTE TÉCNICO - CAJA SOCIAL DE SAN LUIS</h3>
            <span className="experience-date">Feb 2023 - Actualidad</span>
            <p>
              Atención a usuarios y resolución de incidentes de hardware y software. Soporte técnico general y mesa de ayuda directa para la plataforma Billetera Activa San Luis, incluyendo la capacitación a usuarios. Además, desarrollo e implementación de un sistema interno a medida para optimizar procesos de la institución.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}