import '../../styles/ModeSwitch.css';

export default function ModeSwitch({ darkMode, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      <span className={`theme-switch ${darkMode ? 'active' : ''}`}>
        <span className="theme-switch-knob"></span>
      </span>

      <span className="theme-toggle-label">
        {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
      </span>
    </button>
  );
}