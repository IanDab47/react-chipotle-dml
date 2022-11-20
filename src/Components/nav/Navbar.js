// Styles
import "./styles.css"

export default function Navbar({ setScreen }) {
  return (
    <nav className="navbar">
      <p onClick={e => setScreen('hot')}>Hot</p>
      <p onClick={e => setScreen('cold')}>Cold</p>
      <p onClick={e => setScreen('bag')}>Bag</p>
    </nav>
  )
}
