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

export default function Footer() {


  return (
    <div>
      {<div className={`bottom-area`}>
        <span className="hint">
          <kbd>Enter</kbd> Go to Next Code
        </span>
      </div>}
      <button onClick={() => location.reload()}>Restart</button>
    </div>
  )

}
