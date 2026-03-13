import { useLanguage } from '../context/LanguageContext';
import hero from '../../data/hero.json';
import '../../styles/Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero section" id="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-left">
          <p className="hero-greeting">{t.heroGreeting}</p>

          <h1 className="hero-title" id="hero-title">
            <span className="highlight">{t.heroName}</span> {t.heroTitle}
          </h1>

          <p className="hero-description">{t.heroDescription}</p>

          <nav className="hero-socials" aria-label="Social links">
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn
            </a>

            <a
              href={hero.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Github profile"
            >
              Github
            </a>
          </nav>

          <p className="hero-status">{t.heroStatus}</p>
          <p className="hero-email">
            {t.heroInvite} {hero.email}
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-image-bg" aria-hidden="true"></div>
          <img className="hero-image" src={hero.image} alt={hero.alt} />
        </div>
      </div>
    </section>
  );
}