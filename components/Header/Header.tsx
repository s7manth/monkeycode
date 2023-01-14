import React, { useState } from 'react'

interface Props {
  theme: string
  setTheme: (newTheme: string) => void
  selectedLanguage: string
  setSelectedLanguage: (newLanguage: string) => void
  selectedTime: number
  setSelectedTime: (newTime: number) => void
}

const Header: React.FC<Props> = ({ theme, setTheme }) => {
  //const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(15)
  const [selectedLanguage, setSelectedLanguage] = useState('Python')

  const time_options = [15, 30, 45, 60]
  const language_options = ['Python', 'CPP', 'Java', 'TS', 'Rust', 'Go']

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value)
  }

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage)
  }

  const handleTimeChange = (newTime: number) => {
    setSelectedTime(newTime)
  }

  return (
    <header className={`header ${theme}`}>
      <div className="header-logo" style={{ color: 'white' }}>
        <h2>
          <i className="fas fa-keyboard"></i> MonkeyCode
        </h2>
      </div>
      <div className="header-settings" style={{ color: 'white' }}>
        <div
          className="header-settings-label time-options"
          style={{ color: 'white' }}
        >
          {language_options.map((language) => (
            <span
              key={language}
              className={`time-option ${
                selectedLanguage === language ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              {language}
            </span>
          ))}
        </div>

        <div
          className="header-settings-label time-options"
          style={{ color: 'white' }}
        >
          {time_options.map((time) => (
            <span
              className={`time-option ${selectedTime === time ? 'active' : ''}`}
              onClick={() => handleTimeChange(time)}
            >
              {time}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
