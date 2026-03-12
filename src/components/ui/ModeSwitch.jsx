import '../../styles/ModeSwitch.css';

export default function ModeSwitch({ darkMode, toggleTheme }) {
  return (
    <div className="mode-switch">
      <button className="mode-button" onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}