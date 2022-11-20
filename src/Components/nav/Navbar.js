// React
import { useState } from "react"

// Styles
import "./styles.css"

export default function Navbar({ setScreen }) {
  const [active, setActive] = useState()

  // Handler
  const handleClick = (e, newScreen) => {
    // Toggle between screen
    if(active) active.classList.remove('active')
    e.target.classList.add('active')
    setActive(e.target)

    // Change screen
    setScreen(newScreen)
  }

  return (
    <nav className="navbar">
      <div onClick={e => handleClick(e, 'hot')} value='hot'>Hot</div>
      <div onClick={e => handleClick(e, 'cold')} value='cold'>Cold</div>
      <div onClick={e => handleClick(e, 'bag')} value='bag'>Bag</div>
    </nav>
  )
}
