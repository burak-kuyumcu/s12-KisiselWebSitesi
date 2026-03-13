import { useLanguage } from '../context/LanguageContext';
import '../../styles/LanguageSwitch.css';

export default function LanguageSwitch() {
  const { toggleLanguage, t, language } = useLanguage();

  return (
    <button
      className="language-link"
      onClick={toggleLanguage}
      type="button"
      aria-label={language === 'en' ? 'Switch language to Turkish' : 'Switch language to English'}
    >
      {t.switchLanguage}
    </button>
  );
}