import { useLanguage } from '../context/LanguageContext';
import '../../styles/LanguageSwitch.css';

export default function LanguageSwitch() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <button className="language-link" onClick={toggleLanguage}>
      {t.switchLanguage}
    </button>
  );
}