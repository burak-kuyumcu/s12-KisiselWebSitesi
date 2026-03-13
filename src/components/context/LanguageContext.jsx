import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from '../../data/translations';
import { sendLanguageSelection } from '../../services/api';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  const [apiStatus, setApiStatus] = useState('idle');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'tr' : 'en'));
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    async function postLanguageSelection() {
      try {
        setApiStatus('loading');

        const data = await sendLanguageSelection({
          selectedLanguage: language,
          project: 'portfolio',
          createdAt: new Date().toISOString(),
        });

        console.log('MockAPI response:', data);
        setApiStatus('success');
      } catch (error) {
        console.error('MockAPI error:', error);
        setApiStatus('error');
      }
    }

    postLanguageSelection();
  }, [language]);

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
      apiStatus,
    };
  }, [language, apiStatus]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}