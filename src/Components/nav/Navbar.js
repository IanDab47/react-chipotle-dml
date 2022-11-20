// React
import { useState } from "react"

// Styles
import "./styles.css"

export default function Navbar({ screen, setScreen }) {
  const [active, setActive] = useState()

  // Handler
  const handleClick = (e) => {
    console.log(e.target)
    // Toggle between screen
    if(active) active.classList.remove('active')
    e.target.classList.add('active')
    setActive(e.target)

    // Change screen
    setScreen(e.target.value)
  }

  return (
    <nav className="navbar">
      <p className='' onClick={handleClick} value='hot'>Hot</p>
      <p className='' onClick={handleClick} value='cold'>Cold</p>
      <p className='' onClick={handleClick} value='bag'>Bag</p>
    </nav>
  )
}
