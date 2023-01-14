import React, { useState } from 'react';

interface Props {
  theme: string;
  setTheme: (newTheme: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (newLanguage: string) => void;
  selectedTime: number;
  setSelectedTime: (newTime: number) => void;
}

const Header: React.FC<Props> = ({ theme, setTheme, selectedLanguage, setSelectedLanguage, selectedTime, setSelectedTime }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(Number(event.target.value));
  };

  return (
    <header className={`header ${theme}`}>
      <div className="header-logo" style={{ color: 'white'}}>
        <h1>MonkeyCode</h1>
      </div>
      <div className="header-settings" style={{ color: 'white'}}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-cog"></i>
        </button>
        {isOpen && (
          <div className="header-settings-dropdown" style={{ color: 'white'}}>
            <label>
              Theme:
              <select value={theme} onChange={handleThemeChange} style={{ color: 'white'}}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
            <label>
              Language:
              <select value={selectedLanguage} onChange={handleLanguageChange} style={{ color: 'white'}}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="c++">C++</option>
              </select>
            </label>
            <label>
              Time:
              <select value={selectedTime} onChange={handleTimeChange} style={{ color: 'white'}}>
                <option value={15}>15 seconds</option>
                <option value={30}>30 seconds</option>
                <option value={45}>45 seconds</option>
                <option value={60}>60 seconds</option>
              </select>
            </label>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
