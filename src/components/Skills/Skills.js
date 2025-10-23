import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    de: {
      title: "Meine Fähigkeiten",
      subtitle: "Technologien und Werkzeuge, die ich beherrsche",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Werkzeuge",
        cms: "CMS"
      },
      levels: {
        beginner: "Anfänger",
        intermediate: "Fortgeschritten",
        advanced: "Experte"
      }
    },
    en: {
      title: "My Skills",
      subtitle: "Technologies and tools I work with",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
        cms: "CMS"
      },
      levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced"
      }
    }
  };

  const skillsData = [
    // Frontend
    { name: "HTML5", category: "frontend", level: 95, icon: "🌐", color: "#E34F26" },
    { name: "CSS3", category: "frontend", level: 90, icon: "🎨", color: "#1572B6" },
    { name: "JavaScript", category: "frontend", level: 85, icon: "⚡", color: "#F7DF1E" },
    { name: "React.js", category: "frontend", level: 80, icon: "⚛️", color: "#61DAFB" },
    { name: "Bootstrap", category: "frontend", level: 85, icon: "🔷", color: "#7952B3" },
    { name: "Tailwind CSS", category: "frontend", level: 75, icon: "💨", color: "#06B6D4" },
    
    // Backend
    { name: "PHP", category: "backend", level: 75, icon: "🐘", color: "#777BB4" },
    { name: "Laravel", category: "backend", level: 70, icon: "🔶", color: "#FF2D20" },
    { name: "Python", category: "backend", level: 65, icon: "🐍", color: "#3776AB" },
    { name: "MySQL", category: "backend", level: 80, icon: "🗄️", color: "#4479A1" },
    { name: "NoSQL", category: "backend", level: 60, icon: "📊", color: "#47A248" },
    
    // Tools
    { name: "Git", category: "tools", level: 85, icon: "📌", color: "#F05032" },
    
    // CMS
    { name: "WordPress", category: "cms", level: 75, icon: "💠", color: "#21759B" }
  ];

  const categories = [
    { id: "frontend", name: content[currentLanguage].categories.frontend, icon: "💻" },
    { id: "backend", name: content[currentLanguage].categories.backend, icon: "🛠️" },
    { id: "tools", name: content[currentLanguage].categories.tools, icon: "🧰" },
    { id: "cms", name: content[currentLanguage].categories.cms, icon: "📱" }
  ];

  const getLevelText = (level) => {
    if (level >= 80) return content[currentLanguage].levels.advanced;
    if (level >= 60) return content[currentLanguage].levels.intermediate;
    return content[currentLanguage].levels.beginner;
  };

return (
  <section id="skills" className="skills">
    <div className="skills-container">
      <div className="skills-header">
        <h2 className="skills-title">{content[currentLanguage].title}</h2>
        <p className="skills-subtitle">{content[currentLanguage].subtitle}</p>
        <div className="skills-divider"></div>
      </div>

      <div className="skills-cards">
        {skillsData.map(skill => (
          <div key={skill.name} className="skill-card" style={{ borderColor: skill.color }}>
            <div className="skill-card-header">
              <span className="skill-card-icon" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="skill-card-name">{skill.name}</span>
            </div>
            <div className="skill-card-progress">
              <div
                className="skill-card-bar"
                style={{
                  width: `${skill.level}%`,
                  background: skill.color,
                }}
              ></div>
            </div>
            <div className="skill-card-footer">
              <span className="skill-card-level">{getLevelText(skill.level)}</span>
              <span className="skill-card-percent">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Skills;