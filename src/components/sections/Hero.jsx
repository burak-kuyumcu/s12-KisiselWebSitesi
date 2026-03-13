import { useLanguage } from '../context/LanguageContext';
import hero from '../../data/hero.json';
import '../../styles/Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-left">
          <p className="hero-greeting">{t.heroGreeting}</p>

          <h1 className="hero-title">
            <span className="highlight">{t.heroName}</span> {t.heroTitle}
          </h1>

          <p className="hero-description">{t.heroDescription}</p>

          <div className="hero-socials">
            <a href={hero.linkedin} target="_blank" rel="noreferrer">
              {t.linkedin}
            </a>
            <a href={hero.github} target="_blank" rel="noreferrer">
              {t.github}
            </a>
          </div>

          <p className="hero-status">{t.heroStatus}</p>
          <p className="hero-email">
            {t.heroInvite} {hero.email}
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-image-bg"></div>
          <img className="hero-image" src={hero.image} alt={hero.alt} />
        </div>
      </div>
    </section>
  );
}