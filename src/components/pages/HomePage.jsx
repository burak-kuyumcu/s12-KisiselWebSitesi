import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Profile from '../sections/Profile';
import Footer from '../sections/Footer';
import ModeSwitch from '../ui/ModeSwitch';
import PageDecorations from '../ui/PageDecorations';
import '../../styles/HomePage.css';

export default function HomePage({ darkMode, toggleTheme }) {
  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <ModeSwitch darkMode={darkMode} toggleTheme={toggleTheme} />
      <PageDecorations />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Profile />
      </main>

      <Footer />
    </div>
  );
}