import { count } from 'console'
import React, { useEffect, useState } from 'react'
import styles from './Countdown.module.scss'

interface CountDownProps {
  initialTime: number
  hasStarted: boolean
  setHasEnded: any
}

const Countdown = ({
  initialTime,
  hasStarted,
  setHasEnded,
}: CountDownProps) => {
  const [countdown, setCountdown] = useState(initialTime)
  const [isCounting, setIsCounting] = useState(false)

  useEffect(() => {
    setCountdown(initialTime)
  }, [initialTime])

  const startCountdown = () => {
    if (countdown === 0 || isCounting) return
    setIsCounting(true)
    setTimeout(() => {
      setCountdown((c) => {
        if (c === 0) {
          setIsCounting(false)
          setHasEnded(true)
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

  useEffect(() => {
    if (hasStarted) {
      startCountdown()
    }
  }, [hasStarted])
  return (
    <div className={styles.container}>
      <div className="countdown_timer">{countdown}</div>
    </div>
  )
}

export default Countdown
