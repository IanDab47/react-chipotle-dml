// Styles
import "./styles.css"

export default function Menu({ type, purchased, items }) {
  const itemList = items.map(item => {
    return (
      <div key={`food_${item.name}`} 
        className={`menu-item ${purchased.includes(item.name) ? 'purchased' : null}`} 
        style={{'--row': item.row, '--col': item.col, '--span': item.span}}
      >
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
