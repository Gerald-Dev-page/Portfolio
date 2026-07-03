import React from 'react';
import '../styles/index.css';

export default function Hero() {
  return (
    <section className="hero-section container" id="hero">
      <div className="hero-content text-center">
        <h1 className="hero-title">
          Construyendo <span className="text-highlight-cyan">experiencias</span><br className="hide-mobile" />
          <span className="show-mobile"> </span>
          que marcan la <span className="text-highlight-pink">diferencia.</span>
        </h1>

        <p className="hero-subtitle">
          ¡Hola! Soy Lorenzo, Desarrollador de Software
        </p>
      </div>
    </section>
  );
}