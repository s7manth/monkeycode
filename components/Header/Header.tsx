import React, { useState } from 'react'
import styles from './Header.module.scss'

interface Props {
  currTheme: string
  setCurrTheme: (newTheme: string) => void
  currLanguage: string
  setCurrLanguage: (newLanguage: string) => void
  currTime: number
  setCurrTime: (newTime: number) => void
  zenMode: boolean
  setZenMode: (zenMode: boolean) => void
}

const Header: React.FC<Props> = ({
  currTheme,
  currTime,
  setCurrLanguage,
  setCurrTheme,
  setCurrTime,
  currLanguage,
  zenMode, 
  setZenMode
}) => {
  //const [isOpen, setIsOpen] = useState(false);
  const time_options = [15, 30, 45, 60]
  const language_options = ['Python', 'CPP', 'Java', 'TS', 'Rust', 'Go']

  const handleLanguageChange = (newLanguage: string) => {
    setCurrLanguage(newLanguage)
  }

  const handleTimeChange = (newTime: number) => {
    setCurrTime(newTime)
  }

  const activateZenMode = (zm: boolean) => {
    setZenMode(!zm);
  }

  return (
    <header className={`header ${currTheme}`}>
      <div className={styles.logoparent} onClick={() => location.reload()}>
        <div className="header-logo" style={{ color: 'white' }}>
          <h2>
            <i className="fas fa-keyboard color-icon"></i> HumanCode
          </h2>
        </div>
      </div>
      <div className={styles.header_settings} style={{ color: 'white' }}>
        <div className={styles.labels} style={{ color: 'white' }}>
            <span className={`time-option ${
                zenMode ? 'active' : ''
              }`} onClick={() => activateZenMode(zenMode)}>
              Zen
            </span>
        </div>
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
