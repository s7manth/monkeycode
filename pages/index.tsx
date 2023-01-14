import { maxHeaderSize } from 'http'
import React from 'react'
import useTypingGame from 'react-typing-game-hook'
import { demo_cpp_code } from '../data/demo'

const TypingGameDemo = () => {
  const text = demo_cpp_code
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
    actions: { insertTyping, resetTyping, deleteTyping, setCurrIndex },
  } = useTypingGame(text)

  const handleKey = (key: any) => {
    if (key === 'Escape') {
      resetTyping()
    } else if (key === 'Backspace') {
      deleteTyping(false)
    } else if (key.length === 1) {
      insertTyping(key)
    } else if (key === 'Enter') {
      insertTyping(key)
      if (text[currIndex + 1] === '\n') {
        let newCurrIndex = currIndex + 1
        while (text[newCurrIndex] == ' ' || text[newCurrIndex] == '\n') {
          newCurrIndex++
          insertTyping(text[newCurrIndex])
        }
        deleteTyping(false)
      }
    }
  }

  return (
    <div>
      <h1>React Typing Game Hook Demo</h1>
      <p>Click on the text below and start typing (esc to reset)</p>
      <code
        className="typing-test"
        onKeyDown={(e) => {
          handleKey(e.key)
          e.preventDefault()
        }}
        tabIndex={0}
      >
        <pre>
          {text.split('').map((char: string, index: number) => {
            let state = charsState[index]
            let color = state === 0 ? 'black' : state === 1 ? 'green' : 'red'
            return (
              <span
                key={char + index}
                style={{
                  color: color,
                  display: `${char == '\n' ? 'block' : ''}`,
                }}
                className={currIndex + 1 === index ? 'curr-letter' : ''}
              >
                {char}
              </span>
            )
          })}
        </pre>
      </code>

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
