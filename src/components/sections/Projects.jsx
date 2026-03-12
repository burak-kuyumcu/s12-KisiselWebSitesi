import projects from '../../data/projects.json';
import '../../styles/Projects.css';

export default function Projects() {
  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags?.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View on Github
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Go to app →
                </a>
              </div>

              <div className="project-image-box">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}