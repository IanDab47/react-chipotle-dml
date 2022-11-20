// Styles
import "./styles.css"

export default function Menu({ type, items }) {
  const itemList = items.map(item => {
    return (
      <div key={`food_${item.name}`} className="menu-item" style={{'--row': item.row, '--col': item.col, '--span': item.span}}>
        <p>{item.name}</p>
      </div>
    )
  })

  return (
    <section className={`menu-container ${type}`}>
      {itemList}
    </section>
  )
}
