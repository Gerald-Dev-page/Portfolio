import React from 'react';
import '../styles/index.css';

export default function Skills() {
  const skills = [
    // Frontend
    { name: "HTML", icon: "html5/html5-original.svg" },
    { name: "CSS", icon: "css3/css3-original.svg" },
    { name: "Angular", icon: "angularjs/angularjs-original.svg" },
    { name: "React", icon: "react/react-original.svg" },
    
    // Backend
    { name: "C# / .NET", icon: "csharp/csharp-original.svg" },
    { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
    { name: "Python", icon: "python/python-original.svg" },
    
    // Bases de Datos
    { name: "MySQL", icon: "mysql/mysql-original-wordmark.svg" },
    { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
    
    // Herramientas
    { name: "Git", icon: "git/git-original.svg" },
    { name: "REST APIs", icon: "json/json-original.svg" }
  ];

  return (
    <section className="skills-section container" id="skills">
      <h2 className="section-title text-center">Habilidades</h2>
      
      <div className="skills-icon-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <img 
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`} 
              alt={`${skill.name} logo`} 
              className="skill-icon"
            />
            <span className="skill-name font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}