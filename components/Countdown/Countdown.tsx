import React, { useState } from 'react'
import styles from './Countdown.module.scss'

const Countdown: React.FC = () => {
  const [countdown, setCountdown] = useState(2)
  const [isCounting, setIsCounting] = useState(false)

  const startCountdown = () => {
    if (countdown === 0 || isCounting) return
    setIsCounting(true)
    setTimeout(() => {
      setCountdown((c) => {
        if (c === 0) {
          setIsCounting(false)
          return c
        }
        return c - 1
      })
      startCountdown()
    }, 1000)
  }

  const stopCountdown = () => {
    setIsCounting(false)
  }

  return (
    <div className={styles.container}>
      <div className="countdown_timer">{countdown}</div>
      <button onClick={startCountdown}>Start Countdown</button>
      <button onClick={stopCountdown}>Stop Countdown</button>
    </div>
  )
}

export default Countdown
