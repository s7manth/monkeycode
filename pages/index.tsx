import { useEffect, useState } from 'react'
import Countdown from '../components/Countdown/Countdown'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TypingGameDemo from '../components/TypingEditor/TypingEditor'
import { CODES } from '../data/demo'
import styles from '../styles/Home.module.scss'
import Stats from '../components/Stats/Stats'

const App = () => {
  const [curCodeIdx, setCurCodeIdx] = useState(0)
  const [currLanguage, setCurrLanguage] = useState('Python')
  const [currTime, setCurrTime] = useState(15)
  const [currTheme, setCurrTheme] = useState('mkbhd')
  const [codes, setCodes] = useState(CODES)
  const [isBlur, setIsBlur] = useState(true)
  const [hasEnded, setHasEnded] = useState(false)
  const [accuracyData, setAccuracyData] = useState<number[]>([])
  const [correctCharsTyped, setCorrectCharsTyped] = useState<number[]>([0])
  const [errorCharsTyped, setErrorCharsTyped] = useState<number[]>([0])

  const [zenMode, setZenMode] = useState<boolean>(false)

  useEffect(() => {
    let filteredCodes = CODES.filter((obj) => obj.language == currLanguage)
    filteredCodes.sort(() => Math.random() - 0.5)
    setCodes(filteredCodes)
  }, [currLanguage])

  const handleCompletion = () => {
    setCurCodeIdx((idx) => (idx + 1) % CODES.length)
  }

  const handleChangeLanguage = (language: string) => {
    setCurrLanguage(language)
  }

  const handleChangeTime = (time: number) => {
    setCurrTime(time)
  }

  const handleChangeTheme = (theme: string) => {
    setCurrTheme(theme)
  }

  return (
    <div className={styles.container}>
      <Header
        currTheme={currTheme}
        setCurrTheme={handleChangeTheme}
        currLanguage={currLanguage}
        setCurrLanguage={handleChangeLanguage}
        currTime={currTime}
        setCurrTime={handleChangeTime}
        zenMode={zenMode}
        setZenMode={setZenMode}
        isBlur={isBlur}
      />
      <div className={styles.left}>
        {!hasEnded && (
          <Countdown
            initialTime={currTime}
            hasStarted={!isBlur}
            setHasEnded={setHasEnded}
            zenMode={zenMode}
          />
        )}
        {codes && !hasEnded && (
          <TypingGameDemo
            title={codes[curCodeIdx].title}
            code={codes[curCodeIdx].code.trim()}
            handleChange={handleCompletion}
            isBlur={isBlur}
            setIsBlur={setIsBlur}
            hasEnded={hasEnded}
            setAccuracyData={setAccuracyData}
            setCorrectCharsTyped={setCorrectCharsTyped}
            setErrorCharsTyped={setErrorCharsTyped}
            setHasEnded={setHasEnded}
            zenMode={zenMode}
          />
        )}
        {hasEnded && (
          <Stats
            time={zenMode ? accuracyData.length : currTime}
            accuracy_list={accuracyData}
            correctCharsTyped={correctCharsTyped}
            errorCharsTyped={errorCharsTyped}
            language={currLanguage}
          />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App
