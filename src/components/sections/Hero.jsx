import hero from '../../data/hero.json';
import '../../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-greeting">{hero.greeting}</p>

        <h1 className="hero-title">
          <span className="highlight">{hero.name}</span> {hero.title}
        </h1>

        <p className="hero-description">{hero.description}</p>

        <div className="hero-socials">
          <span>in</span>
          <span>⚫</span>
        </div>

        <p className="hero-status">{hero.status}</p>
        <p className="hero-email">Invite me to join your team → {hero.email}</p>
      </div>

      <div className="hero-right">
        <div className="hero-image-bg"></div>
        <img className="hero-image" src={hero.image} alt="Burak portrait" />
      </div>
    </section>
  );
}