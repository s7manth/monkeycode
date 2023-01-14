import { useState } from 'react'
import Countdown from '../components/Countdown/Countdown'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TypingGameDemo from '../components/TypingEditor/TypingEditor'
import { CODES, CPP_CODES } from '../data/demo'
import styles from '../styles/Home.module.scss'

const App = () => {
  const [curCodeIdx, setCurCodeIdx] = useState(0)

  const handleCompletion = () => {
    setCurCodeIdx((idx) => (idx + 1) % 2)
  }

  return (
    <div className={styles.container}>
      <Header
        theme={''}
        setTheme={function (newTheme: string): void {
          throw new Error('Function not implemented.')
        }}
        selectedLanguage={''}
        setSelectedLanguage={function (newLanguage: string): void {
          throw new Error('Function not implemented.')
        }}
        selectedTime={0}
        setSelectedTime={function (newTime: number): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Countdown />
      <TypingGameDemo
        title={CODES[curCodeIdx].title}
        code={CODES[curCodeIdx].code.trimStart()}
        handleChange={handleCompletion}
      />
      <Footer />
    </div>
  )
}

export default App
