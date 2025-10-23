// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useLanguage } from './components/contexts/LanguageContext';
import Certificates from './components/Certificates/Certificates';

function App() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="App">
      <Header />
      <br></br>
      <Hero currentLanguage={currentLanguage} />
      <About currentLanguage={currentLanguage} />
      <Skills currentLanguage={currentLanguage} />
      <Projects currentLanguage={currentLanguage} />
      <Education currentLanguage={currentLanguage} />
      <Certificates currentLanguage={currentLanguage} />
      <Contact currentLanguage={currentLanguage} />
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
}

export default App;