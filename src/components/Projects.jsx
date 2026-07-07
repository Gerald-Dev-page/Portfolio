import React from 'react';
import '../styles/index.css';

export default function Projects() {
  const mainProjects = [
    {
      id: 1,
      title: "",
      logo: "proyectos/data-logo.png", 
      category: "SaaS / Producto Propio",
      desc: "Sistema de Gestión Integral All-in-One que centraliza la operación, administración y finanzas de un negocio. Transforma el caos de planillas en un flujo de trabajo automatizado, permitiendo control total y decisiones basadas en datos reales.",
      img: "proyectos/Demo-Saas.webp",
      link: "https://demo-saas.geralddev.com.ar/"
    },
    {
      id: 2,
      title: "PROCLUB APP",
      category: "Plataforma Web / Agencia",
      desc: "Sitio web desarrollado en WordPress para brindar una plataforma atractiva y simple de administrar para el gimnasio. Incluye sistema de turnos y gestión de usuarios de manera orgánica.",
      img: "proyectos/Pro-Club.webp",
      link: "https://proclub-app.com.ar/"
    },
    {
      id: 3,
      title: "ANIMOR E-COMMERCE",
      category: "Tienda Online / Agencia",
      desc: "Desarrollo de un catálogo digital interactivo de indumentaria que funciona como e-commerce completo, con gestión avanzada de productos, carrito de compras y optimización UX.",
      img: "proyectos/animor.webp",
      link: "https://animor.com.ar/"
    },
    {
      id: 4,
      title: "TRANSPORTE DON ROQUE",
      category: "Landing Page / Agencia",
      desc: "Landing corporativa moderna y optimizada para servicios institucionales. Diseñada bajo un enfoque estricto de captación de clientes y alta presencia digital.",
      img: "proyectos/Transporte.webp",
      link: "https://transportedonroque.ar/"
    },
    {
      id: 5,
      title: "AGUA VITAL",
      category: "Landing Page / Integración Data",
      desc: "Plataforma web institucional que actúa como presentación corporativa y se integra directamente con el sistema Data. Combina una interfaz optimizada con control avanzado para la gestión de distribución.",
      img: "proyectos/Agua-vital.webp",
      link: "https://agua.geralddev.com.ar/"
    }
  ];

  const academicProjects = [
    { name: "Inmobiliaria", type: "GITHUB", link: "https://github.com/Lorenzo-77/InmobiliariaLorenzo" },
    { name: "Fotaza", type: "GITHUB", link: "https://github.com/Lorenzo-77/Fotaza" },
    { name: "Apk Asistencia", type: "GITHUB", link: "https://github.com/Lorenzo-77/Apk-asistencia" }
  ];

  return (
    <section className="projects-section container" id="projects">
      <h2 className="section-title text-center">Trabajos y Desarrollos</h2>
      
      {/* Grilla Principal en Zig-Zag */}
      <div className="projects-wrapper">
        {mainProjects.map((proj) => (
          <div key={proj.id} className="project-row">
            <div className="project-visual">
              <img src={`${import.meta.env.BASE_URL}${proj.img}`} alt={`Mockup de ${proj.title}`} loading="lazy" />
            </div>
            
            <div className="project-info">
              <span className="project-category">{proj.category}</span>
              
              {/* Si el proyecto incluye logo, lo renderiza arriba del título */}
              {proj.logo ? (
                <div className="project-brand-header">
                  <img src={`${import.meta.env.BASE_URL}${proj.logo}`} alt="Logo del producto" className="project-brand-logo" />
                  <h3 className="project-title">{proj.title}</h3>
                </div>
              ) : (
                <h3 className="project-title">{proj.title}</h3>
              )}

              <p className="project-desc">{proj.desc}</p>
              
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                VER TRABAJO →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Sección Académica Mejorada con Tarjetas Independientes */}
      <div className="academic-section">
        <h3 className="academic-main-title text-center">Proyectos Académicos</h3>
        <p className="academic-main-subtitle text-center text-muted">
          Desarrollos lógicos y académicos realizados durante la tecnicatura de desarrollo de software.
        </p>

        <div className="minor-projects-grid">
          {academicProjects.map((academic, index) => (
            <div key={index} className="minor-card card--glow">
              <div className="minor-card-icon">📁</div>
              <h4 className="minor-card-title">{academic.name}</h4>
              <a 
                href={academic.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="minor-link"
              >
                {academic.type} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}