import { useState } from 'react';
import HomePage from './components/pages/HomePage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  return <HomePage darkMode={darkMode} toggleTheme={toggleTheme} />;
}

export default App;