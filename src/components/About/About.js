import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    de: {
      title: "Über Mich",
      description: `
        Ich bin Youssef Hanouch, ein motivierter angehender Fachinformatiker in der Fachrichtung Anwendungsentwicklung. 
        Meine Schwerpunkte liegen in der Webentwicklung mit React, Laravel und modernen Technologien. 
        Zielorientiert, lernbereit und offen für neue Herausforderungen.
      `,
      passionTitle: "💻 Leidenschaft",
      passionText: "Webentwicklung & kreative Lösungen.",
      goalsTitle: "🎯 Ziele",
      goalsText: "Als Fachinformatiker wachsen und praxisnahe Projekte umsetzen."
    },
    en: {
      title: "About Me",
      description: `
        I'm Youssef Hanouch, a motivated future IT Specialist in Application Development. 
        My main focus is web development with React, Laravel, and modern technologies. 
        Goal-driven, eager to learn, and open to new challenges.
      `,
      passionTitle: "💻 Passion",
      passionText: "Web development & creative solutions.",
      goalsTitle: "🎯 Goals", 
      goalsText: "Grow as an IT specialist and deliver real-world projects."
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
      <center>  <h2 className="about-title">{content[currentLanguage].title} <div className="about-divider"></div></h2>
       
        </center>
      

        <p className="about-description">
          {content[currentLanguage].description}
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>{content[currentLanguage].passionTitle}</h3>
            <p>{content[currentLanguage].passionText}</p>
          </div>

          <div className="highlight-card">
            <h3>{content[currentLanguage].goalsTitle}</h3>
            <p>{content[currentLanguage].goalsText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
