<<<<<<< HEAD

=======
// import { useState, useEffect } from 'react'

// export default function Footer() {
//   const handleRestart = () => {
//     // Code to handle restarting here
//   }

// export default function Footer() {
//   return (
//     <div className={`bottom-area`}>
//       <button onClick={handleRestart}>Restart</button>
//       <span className="hint">
//         <kbd>Enter</kbd> Go to Next Code
//       </span>
//     </div>
//   )
// }

import { useState, useEffect } from 'react'
>>>>>>> main

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
