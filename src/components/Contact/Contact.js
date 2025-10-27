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

          <div className="flex flex-col lg:flex-row gap-10 bg-white shadow-xl rounded-3xl p-8 md:p-10">
          {/* --- Infos de contact --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {currentLanguage === 'en'
                  ? 'Contact Information'
                  : currentLanguage === 'de'
                  ? 'Kontaktinformationen'
                  : 'Informations de contact'}
              </h2>

              {[
                {
                  icon: '📧',
                  title:
                    currentLanguage === 'en'
                      ? 'Email'
                      : currentLanguage === 'de'
                      ? 'E-Mail'
                      : 'E-mail',
                  value: currentContact.email,
                },
                {
                  icon: '📱',
                  title:
                    currentLanguage === 'en'
                      ? 'Phone'
                      : currentLanguage === 'de'
                      ? 'Telefon'
                      : 'Téléphone',
                  value: currentContact.phone,
                },
                {
                  icon: '📍',
                  title:
                    currentLanguage === 'en'
                      ? 'Location'
                      : currentLanguage === 'de'
                      ? 'Standort'
                      : 'Localisation',
                  value: currentContact.address,
                },
                {
                  icon: '⏰',
                  title:
                    currentLanguage === 'en'
                      ? 'Response Time'
                      : currentLanguage === 'de'
                      ? 'Antwortzeit'
                      : 'Délai de réponse',
                  value: currentContact.responseTime,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl mb-4 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
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
          {/* <div className="contact-form-section"> */}
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
              ''
            )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
