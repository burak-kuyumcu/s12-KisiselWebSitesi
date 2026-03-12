import projects from '../../data/projects.json';

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      {Array.isArray(projects) &&
        projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div>
              {Array.isArray(project.tags) &&
                project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
            </div>
          </div>
        ))}
    </section>
  );
}