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
  const { apiStatus } = useLanguage();

  return (
    <div className={darkMode ? 'home-page dark' : 'home-page light'}>
      <PageDecorations />

      <div className="page-content">
        <div className="top-controls">
          <LanguageSwitch />
          <ModeSwitch darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>

        <div className="api-status">
          {apiStatus === 'loading' && <span>Dil bilgisi gönderiliyor...</span>}
          {apiStatus === 'success' && <span>API bağlantısı başarılı</span>}
          {apiStatus === 'error' && <span>API bağlantı hatası</span>}
        </div>

        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}