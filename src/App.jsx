import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import logoImg from "./assets/logo.png"; // Tu logo desde assets
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; 
import "./styles/index.css"; 

function App() {
  // Inicializa en false para que la pantalla esté bloqueada al inicio en cualquier dispositivo
  const [isUnlocked, setIsUnlocked] = useState(false); 
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handleUnlock = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => console.error("Error en la reproducción de audio:", err));
    }
    
    setIsFading(true);
    
    setTimeout(() => {
      setIsUnlocked(true);
      setIsFading(false);
    }, 1500);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Audio en bucle */}
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}gala.mp3`} preload="auto" loop />

      {/* Pantalla de bloqueo de entrada (PC y Mobile) */}
      {!isUnlocked && (
        <div className={`mobile-unlock-overlay ${isFading ? 'fade-out-epic' : ''}`}>
          <div className="unlock-content">
            <button className="unlock-btn btn-pulse" onClick={handleUnlock} aria-label="Ingresar al portfolio">
              <img src={logoImg} alt="Logo Gerald Dev" className="unlock-logo" />
            </button>
          </div>
        </div>
      )}

      {/* Contenido principal visible tras el desbloqueo */}
      {(isUnlocked || isFading) && (
        <div className={`app-main-content ${isFading ? 'scale-in-epic' : ''}`}>
          <Navbar />
          <main>
            <div id="hero"><Hero /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
          </main>

          {/* Botón flotante de control de audio */}
          <button 
            className="audio-toggle-btn" 
            onClick={toggleMute} 
            aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
          >
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </button>
        </div>
      )}
    </>
  );
}

export default App;