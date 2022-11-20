// Utils
import { time } from "../../utils/time";

// Styles
import { useEffect } from "react"
import "./styles.css"

export default function Window({ name }) {
  let { hours, minutes, AMPM } = time()
  let tickingColon = ':'
  
  setInterval(() => {
    const newTime = time()
  }, 1000)

  setInterval(() => {
    tickingColon = tickingColon === ':' ? ' ' : ':'
  }, 500)

  return (
    <div className="window">
      <p>{hours.toString().padStart(2, '0')}{tickingColon}{minutes.toString().padStart(2, '0')}{AMPM}</p>
      <p>{name} Station</p>
    </div>
  )
}
