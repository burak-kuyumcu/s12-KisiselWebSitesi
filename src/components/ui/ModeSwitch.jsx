import '../../styles/ModeSwitch.css';

export default function ModeSwitch({ darkMode, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className={`theme-switch ${darkMode ? 'active' : ''}`}>
        <span className="theme-switch-knob"></span>
      </span>
      <span className="theme-toggle-label">
        {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
      </span>
    </button>
  );
}