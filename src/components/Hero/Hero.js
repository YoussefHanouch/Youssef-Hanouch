import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ currentLanguage }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const content = {
    de: {
      greeting: "Hallo, ich bin",
      name: "Youssef Hanouch",
      title: "Fachinformatiker – Anwendungsentwicklung (in Ausbildung)",
      description: "Ich bin ein motivierter Auszubildender als Fachinformatiker für Anwendungsentwicklung. Meine Stärken liegen in der Webentwicklung mit modernen Technologien und darin, effiziente Lösungen für komplexe Probleme umzusetzen.",
      cvButton: "Lebenslauf herunterladen",
      projectsButton: "Meine Projekte"
    },
    en: {
      greeting: "Hello, I'm",
      name: "Youssef Hanouch",
      title: "IT Specialist – Application Development (Trainee)",
      description: "I am a motivated trainee as an IT specialist in application development. My strengths lie in web development with modern technologies and in creating efficient solutions for complex problems.",
      cvButton: "Download CV",
      projectsButton: "View Projects"
    }
  };

  // Typing effect for the title
 useEffect(() => {
  const text = content[currentLanguage].title;
  let index = -1;

  if (isTyping) {
    setDisplayText(''); // Réinitialise avant chaque cycle

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsTyping(false), 2000); // Pause avant de recommencer
      }
    }, 50);

    return () => clearInterval(interval);
  } else {
    // Redémarre l'effet après la pause
    const restart = setTimeout(() => setIsTyping(true), 2000);
    return () => clearTimeout(restart);
  }
}, [currentLanguage, isTyping]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1xI5Vb4RoCtsx_fDkBwdWucrP8NcYA4_Y';
  link.download = 'Lebenslauf_Hanouch_Youssef.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <h2 className="hero-greeting">{content[currentLanguage].greeting}</h2>
            <h1 className="hero-name">{content[currentLanguage].name}</h1>
            <div className="hero-title">
              <span className="typewriter">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">{content[currentLanguage].description}</p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={downloadCV}>
                <span className="btn-icon">📄</span>
                {content[currentLanguage].cvButton}
              </button>
              <button className="btn btn-secondary" onClick={scrollToProjects}>
                <span className="btn-icon">🚀</span>
                {content[currentLanguage].projectsButton}
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img
                src="./images/ysf.jpg" 
                alt="Portrait of Youssef Hanouch"
                className="profile-image"
              />
              <div className="image-border"></div>
              <div className="image-overlay"></div>
              <div className="image-dots"></div>
              
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>{currentLanguage === 'en' ? 'Scroll down' : 'Scrollen Sie nach unten'}</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
