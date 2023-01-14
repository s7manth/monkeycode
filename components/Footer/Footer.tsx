export default function Footer() {
  return (
    <div className={`bottom-area`}>
      <button onClick={() => location.reload()}>Restart</button>
      <span className="hint">
        <kbd>Enter</kbd> Go to Next Code
      </span>
      <span className="hint">
        <kbd>Esc</kbd> Reset the prompt
      </span>
    </div>
  )
}
