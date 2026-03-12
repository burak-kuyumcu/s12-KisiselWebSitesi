import '../../styles/ModeSwitch.css';

export default function ModeSwitch({ darkMode, toggleTheme }) {
  return (
    <div className="mode-switch">
      <button onClick={toggleTheme} className="mode-btn">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}