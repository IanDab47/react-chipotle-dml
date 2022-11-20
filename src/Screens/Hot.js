// Components
import Window from "../Components/window/Window"
import SideBar from "../Components/sidebar/SideBar"
import ItemType from "../Components/itemtype/ItemType"
import Menu from "../Components/menu/Menu"

const hot = [
  { name: 'Brown Rice',  row: 1, col: 3, span: 2 }, 
  { name: 'White Rice',  row: 2, col: 3, span: 2 }, 
  { name: 'Black Beans', row: 3, col: 3, span: 2 }, 
  { name: 'Pinto Beans', row: 4, col: 3, span: 2 }, 
  { name: 'Chicken',     row: 3, col: 1, span: 2 }, 
  { name: 'Steak',       row: 2, col: 2, span: 1 }, 
  { name: 'Carnitas',    row: 4, col: 2, span: 1 }, 
  { name: 'Barbacoa',    row: 2, col: 1, span: 1 }, 
  { name: 'Sofritas',    row: 1, col: 2, span: 1 }, 
  { name: 'Fajitas',     row: 1, col: 1, span: 1 }, 
  { name: 'Queso',       row: 4, col: 1, span: 1 }
]

export default function Hot({ order }) {

  return (
    <main className="purple">
      <Window name={'Tortilla'} />

      <SideBar name={order.name} timePurchased={order.purch_at} expectedTime={order.expected_pickup}/>

      <ItemType item={order.type} />

      <Menu purchased={order.items} items={hot}/>
    </main>
  )
}
