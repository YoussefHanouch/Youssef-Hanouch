// src/components/Certificates/Certificates.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Certificates.css';

const Certificates = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    de: {
      title: "Zertifikate",
      subtitle: "Meine erworbenen Qualifikationen",
      view: "Ansehen"
    },
    en: {
      title: "Certificates",
      subtitle: "My earned qualifications",
      view: "View"
    }
  };

  const certificatesData = [
    {
      id: 1,
      name: { en: "Digital Communication Training", de: "Schulung in digitaler Kommunikation" },
      organization: { en: "Anapec & EFET", de: "Anapec & EFET" },
      date: { en: "Mar 2024", de: "März 2024" },
      image: "https://images.pexels.com/photos/6651190/pexels-photo-6651190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 2,
      name: { en: "Full Stack Digital Development Diploma", de: "Full-Stack Digitalentwicklung Diplom" },
      organization: { en: "OFPPT", de: "OFPPT" },
      date: { en: "2023", de: "2023" },
      image: "https://images.pexels.com/photos/6651190/pexels-photo-6651190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 3,
      name: { en: "Baccalaureate in Physical Sciences", de: "Abitur in Physikalischen Wissenschaften" },
      organization: { en: "Lycée El Kindy", de: "Lycée El Kindy" },
      date: { en: "2021", de: "2021" },
      image: "https://images.pexels.com/photos/6651190/pexels-photo-6651190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    }
  ];

  const getLocalizedValue = (value) => {
    if (typeof value === 'object' && value !== null) {
      return value[currentLanguage] || value.en || '';
    }
    return value;
  };

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <div className="certificates-header">
          <h2>{content[currentLanguage].title}</h2>
          <p>{content[currentLanguage].subtitle}</p>
        </div>

        <div className="certificates-grid">
          {certificatesData.map(cert => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-info">
                <h3>{getLocalizedValue(cert.name)}</h3>
                <p>{getLocalizedValue(cert.organization)}</p>
                <span>{getLocalizedValue(cert.date)}</span>
                {/* {cert.link && <a href={cert.link} target="_blank" rel="noopener noreferrer">{content[currentLanguage].view}</a>} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;