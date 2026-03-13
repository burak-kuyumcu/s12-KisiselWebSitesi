import { useLanguage } from '../context/LanguageContext';
import skills from '../../data/skills.json';
import '../../styles/Skills.css';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="skills section">
      <div className="container">
        <h2 className="section-title">{t.skillsTitle}</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}