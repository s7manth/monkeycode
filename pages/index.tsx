import { useState } from 'react'
import TypingGameDemo from '../components/TypingEditor/TypingEditor'
import { CODES, code_title, demo_cpp_code } from '../data/demo'

const App = () => {
  const [curCodeIdx, setCurCodeIdx] = useState(0)

  const handleCompletion = () => {
    setCurCodeIdx((idx) => (idx + 1) % 2)
  }

  return (
    <TypingGameDemo {...CODES[curCodeIdx]} handleChange={handleCompletion} />
  )
}

export default App
