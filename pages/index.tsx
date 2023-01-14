import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import TypingGameDemo from '../components/TypingEditor/TypingEditor'
import { CPP_CODES } from '../data/demo'
import styles from '../styles/Home.module.scss'

const App = () => {
  const [curCodeIdx, setCurCodeIdx] = useState(0)

  const handleCompletion = () => {
    setCurCodeIdx((idx) => (idx + 1) % 2)
  }

  return (
    <div className={styles.container}>
      <TypingGameDemo
        {...CPP_CODES[curCodeIdx]}
        handleChange={handleCompletion}
      />
      <Footer />
    </div>
  )
}

export default App
