import React, { useState } from 'react'
import styles from './Header.module.scss'

interface Props {
  currTheme: string
  setCurrTheme: (newTheme: string) => void
  currLanguage: string
  setCurrLanguage: (newLanguage: string) => void
  currTime: number
  setCurrTime: (newTime: number) => void
}

const Header: React.FC<Props> = ({
  currTheme,
  currTime,
  setCurrLanguage,
  setCurrTheme,
  setCurrTime,
  currLanguage,
}) => {
  //const [isOpen, setIsOpen] = useState(false);
  const time_options = [15, 30, 45, 60]
  const language_options = ['Python', 'CPP', 'Java', 'TS', 'Rust', 'Go']

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrTheme(event.target.value)
  }

  const handleLanguageChange = (newLanguage: string) => {
    setCurrLanguage(newLanguage)
  }

  const handleTimeChange = (newTime: number) => {
    setCurrTime(newTime)
  }

  return (
    <header className={`header ${currTheme}`}>
      <div className="header-logo" style={{ color: 'white' }}>
        <h2>
          <i className="fas fa-keyboard color-icon"></i> HumanCode
        </h2>
      </div>
      <div className={styles.header_settings} style={{ color: 'white' }}>
        <div className={styles.labels} style={{ color: 'white' }}>
          {language_options.map((language) => (
            <span
              key={language}
              className={`time-option ${
                currLanguage === language ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              {language}
            </span>
          ))}
        </div>

        <div className={styles.labels} style={{ color: 'white' }}>
          {time_options.map((time) => (
            <span
              key={time}
              className={`time-option ${currTime === time ? 'active' : ''}`}
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
