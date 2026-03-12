import skills from '../../data/skills.json';
import '../../styles/Skills.css';

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}