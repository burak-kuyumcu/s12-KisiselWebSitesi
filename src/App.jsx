import { useEffect, useState } from 'react';
import HomePage from './components/pages/HomePage';

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

  return <HomePage darkMode={darkMode} toggleTheme={toggleTheme} />;
}

export default App;