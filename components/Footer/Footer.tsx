export default function Footer() {
  return (
    <>
    <div style={{ color: 'white', marginBottom: '-5px', marginTop: '-10px', cursor: 'pointer' }} onClick={() => location.reload()}>
        <h2>
        <i className="fas fa-redo-alt" title="Refresh"></i>
        </h2>
    </div>
    <div className={`bottom-area`}>
      <div className="hint">
        <kbd>Enter</kbd> Go to Next Code
      </div>
      <div className="hint">
        <kbd>Esc</kbd> Reset the prompt
      </div>
    </div>
    </>
    
  )
}
