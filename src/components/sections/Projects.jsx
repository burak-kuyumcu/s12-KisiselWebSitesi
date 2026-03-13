import { useLanguage } from '../context/LanguageContext';
import projects from '../../data/projects.json';
import '../../styles/Projects.css';

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title">{t.projectsTitle}</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <h3>{language === 'tr' ? project.titleTr : project.titleEn}</h3>
                <p>
                  {language === 'tr'
                    ? project.descriptionTr
                    : project.descriptionEn}
                </p>

                <div className="project-tags">
                  {project.tags?.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {t.github}
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Demo →
                  </a>
                </div>
              </div>

              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={language === 'tr' ? project.titleTr : project.titleEn}
                  className="project-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}