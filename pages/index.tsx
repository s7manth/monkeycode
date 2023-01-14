import { useEffect, useState } from 'react'
import Countdown from '../components/Countdown/Countdown'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TypingGameDemo from '../components/TypingEditor/TypingEditor'
import { CODES } from '../data/demo'
import styles from '../styles/Home.module.scss'
import Stats from '../components/Stats/Stats';


const App = () => {
  const [curCodeIdx, setCurCodeIdx] = useState(0)
  const [currLanguage, setCurrLanguage] = useState("Python");
  const [currTime, setCurrTime] = useState(15);
  const [currTheme, setCurrTheme] = useState("mkbhd");
  const [codes, setCodes] = useState(CODES);

  useEffect(() => {
    let filteredCodes = CODES.filter(obj => obj.language == currLanguage);
    filteredCodes.sort(() => Math.random() - 0.5);
    setCodes(filteredCodes);
  }, [currLanguage]);

  const handleCompletion = () => {
    setCurCodeIdx((idx) => (idx + 1) % CODES.length)
  }

  const handleChangeLanguage = (language: string) => {
    setCurrLanguage(language);
  };

  const handleChangeTime = (time: number) => {
    setCurrTime(time);
  };

  const handleChangeTheme = (theme: string) => {
    setCurrTheme(theme);
  };

  return (
    <div className={styles.container}>
      <Header
        currTheme={currTheme}
        setCurrTheme={handleChangeTheme}
        currLanguage={currLanguage}
        setCurrLanguage={handleChangeLanguage}
        currTime={currTime}
        setCurrTime={handleChangeTime}
      />
      <Countdown />
      {codes &&
        <TypingGameDemo
          title={codes[curCodeIdx].title}
          code={codes[curCodeIdx].code.trim()}
          handleChange={handleCompletion}
        />
      }
      <Footer />
    </div>
  )
}

export default App
