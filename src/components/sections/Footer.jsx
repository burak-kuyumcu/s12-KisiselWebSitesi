import { useLanguage } from '../context/LanguageContext';
import footer from '../../data/footer.json';
import '../../styles/Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer section">
      <div className="container footer-grid">
        <h2>
          {t.footerTitle1}
          <br />
          {t.footerTitle2}
        </h2>

        <div className="footer-links">
          <a href={footer.github} target="_blank" rel="noreferrer">
            {t.github}
          </a>
          <a href={footer.blog} target="_blank" rel="noreferrer">
            {t.blog}
          </a>
          <a href={footer.linkedin} target="_blank" rel="noreferrer">
            {t.linkedin}
          </a>
          <a href={`mailto:${footer.email}`}>{t.email}</a>
        </div>
      </div>
    </footer>
  );
}