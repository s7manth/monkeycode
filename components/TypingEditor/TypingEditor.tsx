import React from 'react'
import useTypingGame from 'react-typing-game-hook'
import { CORRECT_CHAR, INIT_CODE_COLOUR } from './constants'

interface TypingGameDemoProps {
  title: string
  code: string
  handleChange: any
}

const TypingGameDemo = ({ title, code, handleChange }: TypingGameDemoProps) => {
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
  } = useTypingGame(code)

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

  return (
    <div>
      <p>Click on the text below and start typing (esc to reset)</p>
      <div
        className="typing-editor"
        onKeyDown={(e) => {
          handleKey(e.key)
          e.preventDefault()
        }}
        tabIndex={0}
      >
        <h1>{title}</h1>
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

      <pre>
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
      </pre>
    </div>
  )
}

export default TypingGameDemo
