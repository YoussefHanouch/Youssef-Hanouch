// src/components/Education/Education.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Education.css';

const Education = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    de: { title: "Bildungsweg", period: "Zeitraum", institution: "Bildungseinrichtung" },
    en: { title: "Education", period: "Period", institution: "Institution" }
  };

  const educationData = [
    {
      degree: { en: "Digital Communication Training", de: "Schulung in digitaler Kommunikation" },
      institution: { en: "Anapec & EFET – Meknes", de: "Anapec & EFET – Meknes" },
      period: { en: "Dec 2023 – Mar 2024", de: "Dez. 2023 – März 2024" },
      description: {
        en: "Focused on digital communication, social media management, and online marketing.",
        de: "Schwerpunkt auf digitaler Kommunikation, Social Media Management und Online-Marketing."
      }
    },
    {
      degree: { en: "Specialized Technician Diploma in Full Stack Digital Development", de: "Techniker-Diplom in Full-Stack Digitalentwicklung" },
      institution: { en: "OFPPT – Bab Tizimi", de: "OFPPT – Bab Tizimi" },
      period: { en: "2021 – 2023", de: "2021 – 2023" },
      description: {
        en: "Front-end & back-end development, database management, and software engineering.",
        de: "Front-End & Back-End Entwicklung, Datenbankmanagement und Softwareentwicklung."
      }
    },
    {
      degree: { en: "Baccalaureate in Physical Sciences", de: "Abitur in Physikalischen Wissenschaften" },
      institution: { en: "Lycée El Kindy – Meknes", de: "Lycée El Kindy – Meknes" },
      period: { en: "2020 – 2021", de: "2020 – 2021" },
      description: {
        en: "High school diploma focused on physical sciences, math, and computer science.",
        de: "Abitur mit Schwerpunkt auf Physik, Mathematik und Informatik."
      }
    }
  ];

  const getLocalizedValue = (value) => value[currentLanguage] || value.en;

  return (
    <section id="education" className="education">
      <h2 className="education-title">{content[currentLanguage].title}</h2>
      <div className="education-list">
        {educationData.map((item, idx) => (
          <div key={idx} className="education-item">
            <h3 className="degree">{getLocalizedValue(item.degree)}</h3>
            <span className="institution">
              {getLocalizedValue(item.institution)} | {getLocalizedValue(item.period)}
            </span>
            <p className="description">{getLocalizedValue(item.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
