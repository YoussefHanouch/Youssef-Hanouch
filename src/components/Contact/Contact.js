// ContactPage.jsx
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

const ContactPage = ({ currentLanguage }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = {
    en: {
      title: "Get In Touch",
      subtitle: "I'm always open to discussing new projects, ideas, and opportunities to collaborate.",
      phone: "+212 618 313 352",
      email: "youssefhanouch8@gmail.com",
      address: "Meknès, Morocco",
      responseTime: "I usually respond within 24 hours",
    },
    de: {
      title: "Kontakt Aufnehmen",
      subtitle: "Ich bin immer offen für neue Projekte, Ideen und Kooperationsmöglichkeiten.",
      phone: "+212 618 313 352",
      email: "youssefhanouch8@gmail.com",
      address: "Meknès, Marokko",
      responseTime: "Ich antworte in der Regel innerhalb von 24 Stunden",
    },
    fr: {
      title: "Contactez-moi",
      subtitle:
        "Je suis toujours ouvert à discuter de nouveaux projets, idées et opportunités de collaboration.",
      phone: "+212 618 313 352",
      email: "youssefhanouch8@gmail.com",
      address: "Meknès, Maroc",
      responseTime: "Je réponds généralement sous 24 heures",
    },
  };

  const currentContact = contactInfo[currentLanguage] || contactInfo.en;

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Ici, tu pourras ajouter la logique d'envoi (ex: via emailjs, backend, etc.)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact-page" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">{currentContact.title}</h1>
          <p className="contact-subtitle">{currentContact.subtitle}</p>
        </div>

        <div className="contact-content">
          {/* --- Infos de contact --- */}
          <div className="contact-info">
            <h2>
              {currentLanguage === 'en'
                ? 'Contact Information'
                : currentLanguage === 'de'
                ? 'Kontaktinformationen'
                : 'Informations de contact'}
            </h2>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>
                  {currentLanguage === 'en'
                    ? 'Email'
                    : currentLanguage === 'de'
                    ? 'E-Mail'
                    : 'E-mail'}
                </h3>
                <p>{currentContact.email}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>
                  {currentLanguage === 'en'
                    ? 'Phone'
                    : currentLanguage === 'de'
                    ? 'Telefon'
                    : 'Téléphone'}
                </h3>
                <p>{currentContact.phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>
                  {currentLanguage === 'en'
                    ? 'Location'
                    : currentLanguage === 'de'
                    ? 'Standort'
                    : 'Localisation'}
                </h3>
                <p>{currentContact.address}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div className="contact-details">
                <h3>
                  {currentLanguage === 'en'
                    ? 'Response Time'
                    : currentLanguage === 'de'
                    ? 'Antwortzeit'
                    : 'Délai de réponse'}
                </h3>
                <p>{currentContact.responseTime}</p>
              </div>
            </div>

            {/* --- Réseaux sociaux --- */}
            <div className="sociall-links">
              <div className="social-icons">
                <a
                  href="https://github.com/YoussefHanouch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sociall-link"
                >
                  <span className="social-icon">🐙</span> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/youssef-hanouch-b55805219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sociall-link"
                >
                  <span className="social-icon">💼</span> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* --- Formulaire de contact --- */}
          <div className="contact-form-section">
            {isSubmitted ? (
              <div className="success-message">
                <h3>
                  ✅{' '}
                  {currentLanguage === 'en'
                    ? 'Message Sent Successfully!'
                    : currentLanguage === 'de'
                    ? 'Nachricht erfolgreich gesendet!'
                    : 'Message envoyé avec succès !'}
                </h3>
                <p>
                  {currentLanguage === 'en'
                    ? 'Thank you for your message. I will get back to you soon.'
                    : currentLanguage === 'de'
                    ? 'Vielen Dank für Ihre Nachricht. Ich melde mich bald bei Ihnen.'
                    : 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.'}
                </p>
              </div>
            ) : (
              <ContactForm
                currentLanguage={currentLanguage}
                onSubmit={handleFormSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
