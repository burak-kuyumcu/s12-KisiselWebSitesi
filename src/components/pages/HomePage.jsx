import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Profile from '../sections/Profile';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer';
import ModeSwitch from '../ui/ModeSwitch';
import LanguageSwitch from '../ui/LanguageSwitch';
import PageDecorations from '../ui/PageDecorations';
import { useLanguage } from '../context/LanguageContext';

import '../../styles/HomePage.css';

export default function HomePage({ darkMode, toggleTheme }) {
 
  return (
    <div className={darkMode ? 'home-page dark' : 'home-page light'}>
      <PageDecorations />

      <div className="page-content">
        <header className="top-controls" aria-label="Theme and language controls">
          <ModeSwitch darkMode={darkMode} toggleTheme={toggleTheme} />
          <span className="controls-divider" aria-hidden="true">
            |
          </span>
          <LanguageSwitch />
        </header>
        <main>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </main>

        <Footer />
      </div>
    </div>
  );
}