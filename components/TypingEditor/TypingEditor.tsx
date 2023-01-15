import React, { useEffect, useState } from 'react'

import useTypingGame from 'react-typing-game-hook'
import { CORRECT_CHAR, INIT_CODE_COLOUR } from './constants'
import Stats from '../Stats/Stats'

interface TypingGameDemoProps {
  title: string
  code: string
  handleChange: any
  isBlur: boolean
  setIsBlur: any
  hasEnded: boolean
  setAccuracyData: any
  setCorrectCharsTyped: any
  setErrorCharsTyped: any
  setHasEnded: any
  zenMode: boolean
}

//let isBlur = true

const TypingGameDemo = ({
  title,
  code,
  handleChange,
  isBlur,
  setIsBlur,
  hasEnded,
  setAccuracyData,
  setCorrectCharsTyped,
  setErrorCharsTyped,
  setHasEnded,
  zenMode,
}: TypingGameDemoProps) => {
  useEffect(() => {
    const element = document.getElementsByClassName('curr-letter')[0]
    element?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  })
  const [prevCorrect, setPrevCorrect] = useState(0)
  const [curCorrectTyped, setCurCorrectTyped] = useState(0)
  const [curErrorTyped, setCurErrorTyped] = useState(0)
  const [curCorrectTypedList, setCurCorrectTypedList] = useState<number[]>([])
  const [curErrorTypedList, setCurErrorTypedlist] = useState<number[]>([])

  let has_completed = false

  const {
    states: {
      charsState,
      length,
      currIndex,
      currChar,
      correctChar,
      errorChar,
      phase,
      startTime,
      endTime,
    },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(code, { skipCurrentWordOnSpace: false })

  const [accuracy, setAccuracy] = useState(0.0)
  const [zm, setZm] = useState(zenMode)

  useEffect(() => {
    setZm(zenMode)
  }, [zenMode])

  useEffect(() => {
    setAccuracy((curCorrectTyped * 100) / (curErrorTyped + curCorrectTyped))
  }, [correctChar, errorChar])

  useEffect(() => {
    console.log(phase, prevCorrect, correctChar)
    if (phase != 0) {
      setCurCorrectTyped((cur) => cur + correctChar - prevCorrect)
    } else {
      setCurCorrectTyped((cur) => cur)
    }
  }, [correctChar])

  useEffect(() => {
    if (phase != 0) {
      setCurErrorTyped((cur) => cur + 1)
    }
  }, [errorChar])

  const [accuracyList, setAccuracyList] = useState<number[]>([])

  useEffect(() => {
    console.log(isBlur, hasEnded)
    if (!isBlur && !hasEnded) {
      const intervalId = setInterval(() => {
        setCurCorrectTypedList([...curCorrectTypedList, curCorrectTyped])
        setCurErrorTypedlist([...curErrorTypedList, curErrorTyped])
        if (!isNaN(accuracy)) {
          setAccuracyList([...accuracyList, accuracy])
        } else {
          setAccuracyList([...accuracyList, 100])
        }
      }, 1000)

      console.log(accuracyList)
      console.log(curCorrectTypedList)
      console.log(curErrorTypedList)
      setAccuracyData(accuracyList)
      setCorrectCharsTyped(curCorrectTypedList)
      setErrorCharsTyped(curErrorTypedList)

      return () => clearInterval(intervalId)
    }
    if (hasEnded) {
      setAccuracyData(accuracyList)
    }
  }, [isBlur, hasEnded, accuracyList])

  const handleClick = () => {
    setIsBlur(false)
  }

  useEffect(() => {
    const refreshButton = document.getElementById('refresh-button')
    if (refreshButton)
      refreshButton.addEventListener('click', () => {
        resetTyping()
      })
  }, [])

  const handleKey = (key: any) => {
    setPrevCorrect(correctChar)
    if (key === 'Escape') {
      resetTyping()
    } else if (key === 'Backspace') {
      deleteTyping(false)
    } else if (key.length === 1) {
      insertTyping(key)
    } else if (key === 'Enter') {
      if (phase === 2) {
        handleChange()
      }
      insertTyping(key)
      if (code[currIndex + 1] === '\n') {
        let newCurrIndex = currIndex + 1
        while (code[newCurrIndex] == ' ' || code[newCurrIndex] == '\n') {
          newCurrIndex++
          insertTyping(code[newCurrIndex])
        }
        deleteTyping(false)
      }
    } else if (key === 'Tab') {
      for (var i = 0; i < 4; i++) {
        insertTyping(' ')
      }
    }
    console.log(correctChar)
  }
  return (
    <div className="page_head">
      {isBlur && (
        <p className="blurred_click" onClick={() => setIsBlur(false)}>
          <i className="fas fa-mouse-pointer"></i> Click anywhere to focus
        </p>
      )}
      {has_completed && <Stats />}
      {!has_completed && (
        <div
          className={isBlur ? 'blur' : undefined}
          onClick={() => setIsBlur(false)}
          style={{ cursor: 'pointer' }}
        >
          <h1 className="editor_title">{title}</h1>
          <div
            className="typing-editor"
            onKeyDown={(e) => {
              console.log(e, 'lalalal', zm)
              if (e.shiftKey && e.key === 'Enter' && zm) {
                setHasEnded(true)
              }
              handleKey(e.key)

              e.preventDefault()
            }}
            tabIndex={0}
          >
            <pre>
              {code.split('').map((char: string, index: number) => {
                let state = charsState[index]
                let color =
                  state === 0
                    ? INIT_CODE_COLOUR
                    : state === 1
                    ? CORRECT_CHAR
                    : 'red'

                return (
                  <span
                    key={char + index}
                    style={{
                      color: color,
                    }}
                    className={`${char == '\n' ? `ret-` : ''}${
                      currIndex + 1 === index ? 'curr-letter' : ''
                    } `}
                  >
                    {char == ' ' && color == 'red' ? '␣' : char}
                  </span>
                )
              })}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default TypingGameDemo
