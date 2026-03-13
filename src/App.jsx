import { useEffect, useState } from 'react';
import HomePage from './components/pages/HomePage';
import { LanguageProvider } from './components/context/LanguageContext';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  return (
    <LanguageProvider>
      <HomePage darkMode={darkMode} toggleTheme={toggleTheme} />
    </LanguageProvider>
  );
}

export default App;