import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Profile from '../sections/Profile';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer';
import ModeSwitch from '../ui/ModeSwitch';
import PageDecorations from '../ui/PageDecorations';

import '../../styles/HomePage.css';

export default function HomePage({ darkMode, toggleTheme }) {
  return (
    <div className={darkMode ? 'home-page dark' : 'home-page light'}>
      <PageDecorations />

      <div className="page-content">
        <ModeSwitch darkMode={darkMode} toggleTheme={toggleTheme} />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}