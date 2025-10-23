// ContactForm.jsx
import React, { useState } from 'react';
import './Contact.css';

const ContactForm = ({ currentLanguage, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formLabels = {
    en: {
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address'
    },
    de: {
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
      required: 'Dieses Feld ist erforderlich',
      invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    }
  };

  const currentLabels = formLabels[currentLanguage];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = currentLabels.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = currentLabels.required;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = currentLabels.invalidEmail;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = currentLabels.required;
    }

    if (!formData.message.trim()) {
      newErrors.message = currentLabels.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit(formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{currentLabels.name} *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
          placeholder={currentLanguage === 'en' ? 'Enter your full name' : 'Geben Sie Ihren vollständigen Namen ein'}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">{currentLabels.email} *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          placeholder={currentLanguage === 'en' ? 'Enter your email address' : 'Geben Sie Ihre E-Mail-Adresse ein'}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="subject">{currentLabels.subject} *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? 'error' : ''}
          placeholder={currentLanguage === 'en' ? 'Enter the subject' : 'Geben Sie den Betreff ein'}
        />
        {errors.subject && <span className="error-message">{errors.subject}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">{currentLabels.message} *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
          placeholder={currentLanguage === 'en' ? 'Enter your message...' : 'Geben Sie Ihre Nachricht ein...'}
        ></textarea>
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={isLoading}
      >
        {isLoading ? (
          <>{currentLanguage === 'en' ? 'Sending...' : 'Wird gesendet...'}</>
        ) : (
          currentLabels.submit
        )}
      </button>
    </form>
  );
};

export default ContactForm;