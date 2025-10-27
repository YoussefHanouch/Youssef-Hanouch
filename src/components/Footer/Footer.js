// Footer.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      description:
        "Full Stack Developer and Trainer specialized in Laravel and React.js. Passionate about teaching and building innovative digital solutions.",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved",
      madeWith: "Made with",
      by: "by",
    },
    de: {
      description:
        "Full-Stack-Entwickler und Trainer, spezialisiert auf Laravel und React.js. Leidenschaftlich im Unterrichten und in der Entwicklung innovativer digitaler Lösungen.",
      quickLinks: "Schnelllinks",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten",
      madeWith: "Erstellt mit",
      by: "von",
    },
    fr: {
      description:
        "Développeur Full Stack et formateur spécialisé en Laravel et React.js. Passionné par l'enseignement et la création de solutions digitales innovantes.",
      quickLinks: "Liens rapides",
      contact: "Contact",
      rights: "Tous droits réservés",
      madeWith: "Fait avec",
      by: "par",
    },
  };

  const currentContent = content[currentLanguage] || content.en;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* --- Section Présentation --- */}
          <div className="footer-section">
            <h3 className="footer-logo">Youssef Hanouch</h3>
            <p className="footer-description">{currentContent.description}</p>

            <div className="social-links">
              <a
                href="https://github.com/YoussefHanouch"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">🐙</span>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-hanouch-b55805219/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
           
            </div>
          </div>

          {/* --- Liens rapides --- */}
          <div className="footer-section">
            <h4>{currentContent.quickLinks}</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('home')}>
                  {currentLanguage === 'en'
                    ? 'Home'
                    : currentLanguage === 'de'
                    ? 'Startseite'
                    : 'Accueil'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}>
                  {currentLanguage === 'en'
                    ? 'About'
                    : currentLanguage === 'de'
                    ? 'Über Mich'
                    : 'À propos'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')}>
                  {currentLanguage === 'en'
                    ? 'Skills'
                    : currentLanguage === 'de'
                    ? 'Fähigkeiten'
                    : 'Compétences'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')}>
                  {currentLanguage === 'en'
                    ? 'Projects'
                    : currentLanguage === 'de'
                    ? 'Projekte'
                    : 'Projets'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}>
                  {currentContent.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div className="footer-section">
            <h4>{currentContent.contact}</h4>
            <div className="contact-info">
              <p>📧 youssefhanouch8@gmail.com</p>
              <p>📱 +212 618 313 352</p>
              <p>📍 Meknès, Morocco</p>
            </div>
          </div>
        </div>

        {/* --- Bas de page --- */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Youssef Hanouch. {currentContent.rights}.
            </p>
            <p>
              {currentContent.madeWith} <span className="heart">❤️</span>{' '}
              {currentContent.by} Youssef Hanouch
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
