import React, { useEffect, useState } from 'react'
import useTypingGame from 'react-typing-game-hook'
import { CORRECT_CHAR, INIT_CODE_COLOUR } from './constants'

interface TypingGameDemoProps {
  title: string
  code: string
  handleChange: any
}

//let isBlur = true

const TypingGameDemo = ({ title, code, handleChange }: TypingGameDemoProps) => {
  const [isBlur, setIsBlur] = useState(true)
  useEffect(() => {
    const element = document.getElementsByClassName('curr-letter')[0]
    console.log(element)
    element?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  })

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

  useEffect(() => {
    setAccuracy((correctChar * 100) / (correctChar + errorChar))
  }, [correctChar, errorChar])

  const [accuracyList, setAccuracyList] = useState<number[]>([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAccuracyList([...accuracyList, accuracy])
    }, 1000)

    console.log(accuracyList)

    return () => clearInterval(intervalId)
  }, [accuracyList])

  const handleClick = () => {
    setIsBlur(false)
  }

  const handleKey = (key: any) => {
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
    }
  }

  //const blurred_text = {<p>Click on the text below and start typing<\p>}
  //if

  return (
    <div className="page_head">
      {isBlur && (
        <p className="blurred_click blue-color bold-text large-font">
          Click or press any key to focus (esc to reset)
        </p>
      )}
      <div
        className={isBlur ? 'blur' : undefined}
        onClick={() => setIsBlur(false)}
      >
        <h1 className="editor_title">{title}</h1>
        <div
          className="typing-editor"
          onKeyDown={(e) => {
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
                    display: `${char == '\n' ? '' : ''}`,
                  }}
                  className={currIndex + 1 === index ? 'curr-letter' : ''}
                >
                  {char}
                </span>
              )
            })}
          </pre>
        </div>
      </div>

      {/* <pre>
        {JSON.stringify(
          {
            startTime,
            endTime,
            length,
            currIndex,
            currChar,
            correctChar,
            errorChar,
            phase,
          },
          null,
          2,
        )}
      </pre> */}
      <div>
        Metrics:
        <span>Accuracy: {accuracy ? accuracy.toFixed(2) : 0.0} %</span>
      </div>
    </div>
  )
}

export default TypingGameDemo
