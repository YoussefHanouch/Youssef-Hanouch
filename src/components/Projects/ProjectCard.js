// src/components/Projects/ProjectCard.jsx
import React, { useState } from 'react';
import './Projects.css';

const ProjectCard = ({ project, currentLanguage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getLocalizedValue = (value) => {
    if (typeof value === 'object' && value !== null) {
      return value[currentLanguage] || value.en || '';
    }
    return value;
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="project-card">
        <div className="project-image">
          <img 
            src={project.image} 
            alt={getLocalizedValue(project.title)} 
          />
          <div className="project-overlay">
            {/* <button className="view-details-btn" onClick={openModal}>
              {currentLanguage === 'en' ? 'View Details' : 'Details anzeigen'}
            </button> */}
            <div className="project-links">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="GitHub Repository"
                >
                  <span className="link-icon">📂</span>
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="Live Demo"
                >
                  <span className="link-icon">🌐</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">{getLocalizedValue(project.title)}</h3>
          <p className="project-description">
            {getLocalizedValue(project.description)}
          </p>
          
          <div className="project-technologies">
            {project.technologies?.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal pour les détails du projet */}
      {isModalOpen && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{getLocalizedValue(project.title)}</h2>
              <div className="modal-technologies">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={project.image} 
                  alt={getLocalizedValue(project.title)} 
                />
              </div>

              <div className="modal-details">
                <div className="detail-section">
                  <h3>{currentLanguage === 'en' ? 'Description' : 'Beschreibung'}</h3>
                  <p>{getLocalizedValue(project.description)}</p>
                </div>

                {project.challenges && (
                  <div className="detail-section">
                    <h3>{currentLanguage === 'en' ? 'Challenges' : 'Herausforderungen'}</h3>
                    <p>{getLocalizedValue(project.challenges)}</p>
                  </div>
                )}

                {project.solutions && (
                  <div className="detail-section">
                    <h3>{currentLanguage === 'en' ? 'Solutions' : 'Lösungen'}</h3>
                    <p>{getLocalizedValue(project.solutions)}</p>
                  </div>
                )}

                <div className="modal-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-link-btn"
                    >
                      <span className="btn-icon">📂</span>
                      GitHub Repository
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-link-btn primary"
                    >
                      <span className="btn-icon">🌐</span>
                      {currentLanguage === 'en' ? 'Live Demo' : 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-overlay" onClick={closeModal}></div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;