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
  //const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleTimeChange = (newTime: number) => {
    setSelectedTime(newTime);
  };

  return (
    <header className={`header ${theme}`}>
      <div className="header-logo" style={{ color: 'white'}}>
        <h1>MonkeyCode</h1>
      </div>
      <div className="header-settings" style={{ color: 'white'}}>
          <div className="header-settings-dropdown" style={{ color: 'white'}}>
            <label>
              Language:
              <select value={selectedLanguage} onChange={handleLanguageChange} style={{ color: 'white'}}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="c++">C++</option>
              </select>
            </label>
          <div className="header-settings-label time-options" style={{ color: 'white'}}>
              Time:
              <button className={`time-option ${selectedTime === 15 ? 'active' : ''}`} onClick={() => handleTimeChange(15)}>15s</button>
              <button className={`time-option ${selectedTime === 30 ? 'active' : ''}`} onClick={() => handleTimeChange(30)}>30s</button>
              <button className={`time-option ${selectedTime === 45 ? 'active' : ''}`} onClick={() => handleTimeChange(45)}>45s</button>
              <button className={`time-option ${selectedTime === 60 ? 'active' : ''}`} onClick={() => handleTimeChange(60)}>60s</button>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
