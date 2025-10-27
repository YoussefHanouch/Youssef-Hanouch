import React, { useState } from "react";

const ContactForm = ({ currentLanguage, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const formLabels = {
    en: {
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
    },
    de: {
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      subject: "Betreff",
      message: "Ihre Nachricht",
      submit: "Nachricht senden",
      required: "Dieses Feld ist erforderlich",
      invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    },
  };

  const currentLabels = formLabels[currentLanguage] || formLabels.en;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = currentLabels.required;
    if (!formData.email.trim()) newErrors.email = currentLabels.required;
    else if (!validateEmail(formData.email))
      newErrors.email = currentLabels.invalidEmail;
    if (!formData.subject.trim()) newErrors.subject = currentLabels.required;
    if (!formData.message.trim()) newErrors.message = currentLabels.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onSubmit(formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form-section  w-full max-w-lg mx-auto bg-gray-50 rounded-3xl shadow-lg p-8 flex flex-col gap-6"
    >
      {/* Nom */}
      <div className="flex flex-col ">
        <label className="text-black-700 font-semibold mb-2">{currentLabels.name} *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={currentLanguage === "en" ? "Enter your full name" : "Geben Sie Ihren vollständigen Namen ein"}
          className={`p-4 rounded-xl border transition focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none ${
            errors.name ? "border-red-400" : "border-gray-300"
          } bg-white text-gray-900 placeholder-gray-400`}
        />
        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className=" font-semibold mb-2">{currentLabels.email} *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={currentLanguage === "en" ? "Enter your email address" : "Geben Sie Ihre E-Mail-Adresse ein"}
          className={`p-4 rounded-xl border transition focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none ${
            errors.email ? "border-red-400" : "border-gray-300"
          } bg-white text-gray-900 placeholder-gray-400`}
        />
        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
      </div>

      {/* Sujet */}
      <div className="flex flex-col">
        <label className="text-black-700 font-semibold mb-2">{currentLabels.subject} *</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={currentLanguage === "en" ? "Enter the subject" : "Geben Sie den Betreff ein"}
          className={`p-4 rounded-xl border transition focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none ${
            errors.subject ? "border-red-400" : "border-gray-300"
          } bg-white text-gray-900 placeholder-gray-400`}
        />
        {errors.subject && <span className="text-red-500 text-sm mt-1">{errors.subject}</span>}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-black-700 font-semibold mb-2">{currentLabels.message} *</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder={currentLanguage === "en" ? "Enter your message..." : "Geben Sie Ihre Nachricht ein..."}
          className={`p-4 rounded-xl border transition focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none ${
            errors.message ? "border-red-400" : "border-gray-300"
          } bg-white text-gray-900 placeholder-gray-400`}
        />
        {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
      </div>

      {/* Bouton */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-xl hover:scale-105 transform transition disabled:opacity-50"
      >
        {isLoading
          ? currentLanguage === "en" ? "Sending..." : "Wird gesendet..."
          : currentLabels.submit}
      </button>
    </form>
  );
};

export default ContactForm;
