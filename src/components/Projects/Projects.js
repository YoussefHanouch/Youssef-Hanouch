
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const { currentLanguage } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const content = {
    de: {
      title: "Meine Projekte",
      subtitle: "Eine Auswahl meiner Arbeiten und Kreationen",
      all: "Alle",
      filter: "Filtern nach",
      viewAll: "Alle anzeigen",
      loading: "Projekte werden geladen...",
      noProjects: "Keine Projekte gefunden"
    },
    en: {
      title: "My Projects",
      subtitle: "A selection of my works and posts",
      all: "All",
      filter: "Filter by",
      viewAll: "View all",
      loading: "Loading projects...",
      noProjects: "No projects found"
    }
  };

  const technologies = [
    'all', 'projects', 'posts', 'react', 'javascript', 'html', 'css', 'php', 'laravel',
    'python', 'mysql', 'wordpress', 'marketing', 'social media'
  ];

  // Données de démonstration (projets + posts Learning M3ana)
const demoProjects = [
  {
    id: 1,
    title: { en: "Learning M3ana Platform", de: "Learning M3ana Plattform" },
    description: {
      en: "Educational platform developed with Laravel for online courses and learning",
      de: "Bildungsplattform entwickelt mit Laravel für Online-Kurse und Lernen"
    },
    image: "./images/learningm3ana.png",
    technologies: ["Laravel", "Blade", "HTML", "CSS", "JavaScript", "MySQL", "Tailwind CSS", "Bootstrap", "VPS", "Contabo"],
    type: "project",
    liveUrl: "https://learningm3ana.com/"
  },
  {
    id: 2,
    title: { en: "GymBros - Gym Management", de: "GymBros - Fitnessstudio Verwaltung" },
    description: {
      en: "Gym management system for tracking members, subscriptions and payments",
      de: "Fitnessstudio Verwaltungssystem zur Verfolgung von Mitgliedern, Abonnements und Zahlungen"
    },
    image: "./images/fitness.png",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Bootstrap"],
    type: "project",
    githubUrl: "https://github.com/youssefhanouch/Projet_GymBros",
    liveUrl: "https://gymbros.infinityfree.me/"
  },
  {
    id: 3,
    title: { en: "TaskFlow - Task Management App", de: "TaskFlow - Aufgabenverwaltungs-App" },
    description: {
      en: "Modern productivity app with drag-and-drop functionality, dark mode, and advanced task organization",
      de: "Moderne Produktivitäts-App mit Drag-and-Drop-Funktionalität, Dunkelmodus und erweiterter Aufgabenorganisation"
    },
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage API", "Drag & Drop API"],
    type: "project",
    githubUrl: "https://github.com/YoussefHanouch/Task-Management-Application",
    liveUrl: "https://task-management-application-psi-five.vercel.app/"
  },
  {
    id: 4,
    title: { en: "Station Manager", de: "Station Manager" },
    description: {
      en: "Modern React.js web application for managing gas stations efficiently with intuitive UI",
      de: "Moderne React.js Webanwendung zur effizienten Verwaltung von Tankstellen mit intuitiver Benutzeroberfläche"
    },
    image: "./images/image.png",
    technologies: ["React", "Tailwind CSS", "CSS", "React Router", "Vercel"],
    type: "project",
    githubUrl: "https://github.com/YoussefHanouch/Station_Manager.git",
    liveUrl: "https://station-manager-y6n4.vercel.app/"
  },
  // {
  //   id: 5,
  //   title: { en: "Portfolio Website", de: "Portfolio Website" },
  //   description: {
  //     en: "First portfolio website with modern design and animations",
  //     de: "Erste Portfolio-Website mit modernem Design und Animationen"
  //   },
  //   image: "./images/first.png",
  //   technologies: ["JavaScript", "React", "Tailwind CSS", "CSS3", "JSX"],
  //   type: "project",
  //   // githubUrl: "https://github.com/youssefhanouch/Portfolio_Youssef_Hanouch",
  //   liveUrl: "https://youssefhanouch.github.io/Portfolio_Youssef_Hanouch/"
  // },
  {
    id: 6,
    title: { en: "Travel Agency Booking Platform", de: "Reisebüro Buchungsplattform" },
    description: {
      en: "Online booking platform built with Laravel for flights, hotels, and cars with secure authentication and payment",
      de: "Online-Buchungsplattform für Flüge, Hotels und Autos mit sicherer Authentifizierung und Zahlung"
    },
    image: "./images/travel-agency.png",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS3", "Blade", "Tailwind CSS", "Breeze"],
    type: "project",
    githubUrl: "https://github.com/YoussefHanouch/Agence-voyage.git",
    liveUrl: "https://agence-voyage.infinityfree.me"
  },
  {
    id: 7,
    title: { en: "Busma - Bus Route Finder", de: "Busma - Busrouten Finder" },
    description: {
      en: "Modern web app for searching bus routes, checking fares, and viewing trips on interactive map",
      de: "Moderne Web-App zur Suche von Busrouten, Tarifprüfung und Anzeige von Fahrten auf interaktiver Karte"
    },
    image: "./images/bus.png",
    technologies: ["React", "Laravel", "JavaScript", "CSS", "Tailwind CSS", "React Router"],
    type: "project",
    githubUrl: "https://github.com/YoussefHanouch/bus_projet_frentend",
    liveUrl: "https://bus-projet-frentend.vercel.app"
  },
  {
    id: 8,
    title: { en: "Smart Inventory Management", de: "Smart Inventar Verwaltungssystem" },
    description: {
      en: "Complete web application for managing products, issues and users with Laravel",
      de: "Vollständige Webanwendung zur Verwaltung von Produkten, Problemen und Benutzern mit Laravel"
    },
    image: "./images/smartManagement.png",
    technologies: ["PHP", "Laravel", "MySQL", "CSS3", "Tailwind CSS", "cPanel"],
    type: "project",
    githubUrl: "https://github.com/YoussefHanouch/smartstock.git",
    liveUrl: "https://smartstock.infinityfreeapp.com/"
  },
  {
    id: 9,
    title: { en: "JavaScript Calculator", de: "JavaScript Rechner" },
    description: {
      en: "JavaScript calculator performing addition, subtraction, multiplication, division, modulo and power operations",
      de: "JavaScript Rechner für Addition, Subtraktion, Multiplikation, Division, Modulo und Potenzoperationen"
    },
    image: "./images/calcule.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    type: "project",
    githubUrl: "https://github.com/youssefhanouch/calculatrice",
    liveUrl: "https://youssefhanouch.github.io/calculatrice/calcule.html"
  },
  {
    id: 10,
    title: { en: "Python Tkinter MongoDB CRUD", de: "Python Tkinter MongoDB CRUD" },
    description: {
      en: "Desktop app with full CRUD operations using MongoDB and intuitive GUI for NoSQL data management",
      de: "Desktop-App mit vollständigen CRUD-Operationen mit MongoDB und intuitiver GUI für NoSQL-Datenverwaltung"
    },
    image: "./images/tkinter-mongodb.png",
    technologies: ["Python", "Tkinter", "MongoDB", "NoSQL", "CSS", "HTML"],
    type: "project",
    githubUrl: "https://github.com/YoussefHanouch/Crud-Tkinter.git"
  },
  {
    id: 11,
    title: { en: "Online React JS Course", de: "React JS Online Kurs" },
    description: {
      en: "Online course explaining React.js concepts and modern features",
      de: "Online-Kurs zur Erklärung von React.js Konzepten und modernen Funktionen"
    },
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "Marketing", "Online Course", "Education", "Social Media"],
    type: "posts",
    liveUrl: "https://www.instagram.com/p/DOlxyLEjKa5/"
  },
  {
    id: 12,
    title: { en: "Full Stack Program Final Exam", de: "Full Stack Programm Abschlussprüfung" },
    description: {
      en: "Final exam preparation for Full Stack development program at Ofppt and Cmc",
      de: "Vorbereitung auf die Abschlussprüfung für das Full Stack Entwicklungsprogramm bei Ofppt und Cmc"
    },
    image: "./images/Laravel.png",
    technologies: ["Full Stack", "Marketing", "Online Course", "Education", "Social Media"],
    type: "posts",
    liveUrl: "https://www.instagram.com/reel/DGbKbC7IFFh/"
  },
  {
    id: 13,
    title: { en: "Laravel Framework Explanation", de: "Laravel Framework Erklärung" },
    description: {
      en: "Educational content explaining Laravel framework concepts and features",
      de: "Lehrinhalt zur Erklärung von Laravel Framework Konzepten und Funktionen"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Laravel", "Marketing", "Education", "Framework", "Social Media"],
    type: "posts",
    liveUrl: "https://www.instagram.com/p/DOrOtpODGBG/"
  },
  {
    id: 14,
    title: { en: "Cyber Security Exam Preparation", de: "Vorbereitung auf Cybersicherheit Prüfung" },
    description: {
      en: "Final exam preparation for Cyber Security training at Ofppt Cmc",
      de: "Vorbereitung auf die Abschlussprüfung für die Cybersicherheit Ausbildung bei Ofppt Cmc"
    },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Cyber Security", "Exam Preparation", "Education", "Social Media"],
    type: "posts",
    liveUrl: "https://www.instagram.com/p/DGQ-zWAIhdk/"
  },
  {
  id: 15,
  title: { en: "Culture Events", de: "Kultur Veranstaltungen" },
  description: {
    en: "Laravel web application to manage cultural events with user roles, artists management and event applications",
    de: "Laravel Webanwendung zur Verwaltung von Kulturveranstaltungen mit Benutzerrollen, Künstlerverwaltung und Veranstaltungsbewerbungen"
  },
  image: "./images/culture-events.png",
  technologies: ["Laravel", "SQL", "Authentication", "JavaScript", "Breeze", "MySQL", "Mailtrap", "Tailwind CSS", "Vercel"],
  type: "project",
  githubUrl: "https://github.com/YoussefHanouch/Culture_Events",
  liveUrl: "https://cultureevents.infinityfree.me/"
}
];

  // Charger les projets de démonstration
  useEffect(() => {
    setProjects(demoProjects);
    setFilteredProjects(demoProjects);
    setLoading(false);
  }, []);

  // Filtrer les projets/posts
  const filterProjects = (tech) => {
    setActiveFilter(tech);

    if (tech === 'all') {
      setFilteredProjects(projects);
    } else if (tech === 'projects') {
      setFilteredProjects(projects.filter(p => p.type === 'project'));
    } else if (tech === 'posts') {
      setFilteredProjects(projects.filter(p => p.type === 'posts'));
    } else {
      const filtered = projects.filter(project =>
        project.technologies?.map(t => t.toLowerCase()).includes(tech)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">{content[currentLanguage].title}</h2>
          <p className="projects-subtitle">{content[currentLanguage].subtitle}</p>
          <div className="projects-divider"></div>
        </div>

        {/* Filtres */}
        <div className="projects-filters">
          <span className="filter-label">{content[currentLanguage].filter}:</span>
          <div className="filter-buttons">
            {technologies.map(tech => (
              <button
                key={tech}
                className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
                onClick={() => filterProjects(tech)}
              >
                {tech === 'all' ? content[currentLanguage].all : tech.charAt(0).toUpperCase() + tech.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des projets/posts */}
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>{content[currentLanguage].loading}</p>
          </div>
        ) : (
          <>
            {filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {filteredProjects.map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    currentLanguage={currentLanguage}
                  />
                ))}
              </div>
            ) : (
              <div className="no-projects">
                <p>{content[currentLanguage].noProjects}</p>
                <button 
                  className="view-all-btn"
                  onClick={() => filterProjects('all')}
                >
                  {content[currentLanguage].viewAll}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
