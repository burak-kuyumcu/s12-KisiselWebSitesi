import { useLanguage } from '../context/LanguageContext';
import footer from '../../data/footer.json';
import '../../styles/Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer section" aria-labelledby="footer-title">
      <div className="container footer-grid">
        <div className="footer-text">
          <h2 id="footer-title">
            {t.footerTitle1}
            <br />
            {t.footerTitle2}
          </h2>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <a href={footer.github} target="_blank" rel="noreferrer">
            {t.github}
          </a>

          <a href={footer.blog} target="_blank" rel="noreferrer">
            {t.blog}
          </a>

          <a href={footer.linkedin} target="_blank" rel="noreferrer">
            {t.linkedin}
          </a>

          <a href={`mailto:${footer.email}`} aria-label="Send email">
            {t.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}