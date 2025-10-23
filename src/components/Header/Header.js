// src/components/Header/Header.jsx
import React, { useState } from 'react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();

  const navigationItems = [
    { id: 'home', en: 'Home', de: 'Startseite' },
    { id: 'about', en: 'About', de: 'Über Mich' },
    { id: 'skills', en: 'Skills', de: 'Fähigkeiten' },
    { id: 'projects', en: 'Projects', de: 'Projekte' },
    { id: 'education', en: 'Education', de: 'Bildung' },
      { id: 'certificates', en: 'Certificates', de: 'Zertifikate' },
    { id: 'contact', en: 'Contact', de: 'Kontakt' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
    <div className="logo">
  <span className="logo-text">Youssef Hanouch</span>
  <span className="logo-subtitle">
    {currentLanguage === 'en' ? 'Developer & Trainer' : 'Entwickler & Trainer'}
  </span>
</div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {currentLanguage === 'en' ? item.en : item.de}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <LanguageToggle 
            currentLanguage={currentLanguage} 
            onLanguageChange={changeLanguage} 
          />
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;