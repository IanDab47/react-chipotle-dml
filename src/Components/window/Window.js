// Utils
import { time } from "../../utils/time";

// Styles
// import { useEffect } from "react"
import "./styles.css"

export default function Window({ name }) {
  let { hours, minutes, AMPM } = time()
  let tickingColon = ':'
  
  // TODO: ADD REAL-TIME TIME DISPLAY
  // TODO: ADD TICKING COLON FUNCTIONALITY
  setInterval(() => {
    tickingColon = tickingColon === ':' ? ' ' : ':'
  }, 500)

  return (
    <div className="window">
      <p>{hours.toString().padStart(2, '0')}{tickingColon}{minutes.toString().padStart(2, '0')} {AMPM}</p>
      <p>{name} Station</p>
    </div>
  )
}
