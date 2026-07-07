import React, { useState } from 'react';
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import '../styles/index.css';

export default function Contact() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Activa la notificación (overlay) en la interfaz
    setShowNotification(true);

    // Oculta la notificación después de 8 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 8000);
  };

  return (
    <footer className="contact-section container" id="contact">
      <div className="contact-grid">
        
        {/* Columna Izquierda: Información y Redes */}
        <div className="contact-info-wrapper">
          <h2 className="contact-main-title font-bold">Contacto</h2>
          
          <a href="mailto:lorenzo.geraldo.munoz@gmail.com" className="email-pill">
            <SiGmail color="#ea4335" size={20} />
            <span>lorenzo.geraldo.munoz@gmail.com</span>
          </a>

          <div className="social-row">
            <a href="https://www.instagram.com/gerald.devv/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com/Lorenzo-77" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://wa.me/5492664952528" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://linkedin.com/in/lorennzo-mu07/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <form className="contact-form-ui" onSubmit={handleSubmit}>
          
          {/* Los inputs siguen igual */}
          <div className="form-group-ui">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Nombre completo" required />
          </div>
          
          <div className="form-group-ui">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="example@email.com" required />
          </div>

          <div className="form-group-ui">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn-submit-white font-bold">
            ENVIAR
          </button>

          {/* OVERLAY DE NOTIFICACIÓN (Cubre todo el formulario) */}
          {showNotification && (
            <div className="form-overlay-msg">
              <div className="overlay-content">
                <p>El sistema de mensajería automatizada se encuentra en mantenimiento.</p>
                <br />
                <p>Para garantizar una respuesta formal, le agradeceré canalizar su consulta escribiendo a{' '}
                  <a 
                    href="mailto:lorenzo.geraldo.munoz@gmail.com" 
                    className="overlay-link"
                  >
                    lorenzo.geraldo.munoz@gmail.com
                  </a>.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>

      <div className="footer-copyright">
        <p>© 2026 all rights reserved.</p>
      </div>
    </footer>
  );
}