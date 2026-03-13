import { useLanguage } from '../context/LanguageContext';
import projects from '../../data/projects.json';
import '../../styles/Projects.css';

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section
      className="projects section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <h2 className="section-title" id="projects-title">
          {t.projectsTitle}
        </h2>

        <div className="projects-grid">
          {projects.map((project) => {
            const title = language === 'tr' ? project.titleTr : project.titleEn;
            const description =
              language === 'tr'
                ? project.descriptionTr
                : project.descriptionEn;

            return (
              <article
                key={project.id}
                className="project-card"
                aria-labelledby={`project-title-${project.id}`}
              >
                <div>
                  <h3 id={`project-title-${project.id}`}>{title}</h3>
                  <p>{description}</p>
                  <ul
                    className="project-tags"
                    aria-label={`${title} technologies`}
                  >
                    {project.tags?.map((tag, index) => (
                      <li key={index} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <nav
                    className="project-links"
                    aria-label={`${title} project links`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${title} Github link`}
                    >
                      {t.github}
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${title} live demo link`}
                    >
                      Demo →
                    </a>
                  </nav>
                </div>

                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={`${title} screenshot`}
                    className={`project-screen project-screen-${project.id}`}
                  />

                  <img
                    src="/images/laptop-frame.png"
                    alt=""
                    aria-hidden="true"
                    className="project-laptop"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}