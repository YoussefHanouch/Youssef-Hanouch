// LanguageToggle.jsx
import React from 'react';
import './Header.css';

const LanguageToggle = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="" >
      <button
        className={`language-btn ${currentLanguage === 'en' ? 'language-active' : ''}`}
        onClick={() => onLanguageChange('en')}
        aria-label="Switch to English"
        
      >
        EN
      </button>
      <span className="language-separator">|</span>
      <button
        className={`language-btn ${currentLanguage === 'de' ? 'language-active' : ''}`}
        onClick={() => onLanguageChange('de')}
        aria-label="Umschalten auf Deutsch"
      >
        DE
      </button>
    </div>
  );
};

export default LanguageToggle;