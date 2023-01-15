import { count } from 'console'
import React, { useEffect, useState } from 'react'
import styles from './Countdown.module.scss'

interface CountDownProps {
  initialTime: number
  hasStarted: boolean
  setHasEnded: any
  zenMode: boolean
}

const Countdown = ({
  initialTime,
  hasStarted,
  setHasEnded,
  zenMode
}: CountDownProps) => {
  const [countdown, setCountdown] = useState(initialTime)
  const [isCounting, setIsCounting] = useState(false)
  const [zm, setZm] = useState(zenMode);

  useEffect(() => {
    setCountdown(initialTime)
  }, [initialTime])

  const startCountdown = () => {
    if (countdown === 0 || isCounting || zm) return
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

  useEffect(() => {
    setZm(zenMode);
  }, [zenMode]);

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
      <div className="countdown_timer" style={{ color: `${zm ? "#333437" : ""}` }}>{countdown}</div>
    </div>
  )
}

export default Countdown
