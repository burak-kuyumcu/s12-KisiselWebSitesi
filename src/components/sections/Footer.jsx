import footer from '../../data/footer.json';
import '../../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer-grid">
        <h2>
          {footer.titleLine1}
          <br />
          {footer.titleLine2}
        </h2>

        <div className="footer-links">
          <a href={footer.github} target="_blank" rel="noreferrer">
            Github
          </a>
          <a href={footer.blog} target="_blank" rel="noreferrer">
            Personal Blog
          </a>
          <a href={footer.linkedin} target="_blank" rel="noreferrer">
            Linkedin
          </a>
          <a href={`mailto:${footer.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}