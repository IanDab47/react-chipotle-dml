// Components
import Window from "../Components/window/Window"
import SideBar from "../Components/sidebar/SideBar"
import ItemType from "../Components/itemtype/ItemType"
import Menu from "../Components/menu/Menu"

const cold = [
  { name: 'Medium Corn',   row: 4, col: 4, span: 1 }, 
  { name: 'Sour Cream',    row: 4, col: 3, span: 1 }, 
  { name: 'Mild Tomato',   row: 3, col: 3, span: 2 }, 
  { name: 'Hot Red',       row: 2, col: 4, span: 1 }, 
  { name: 'Medium Green',  row: 2, col: 3, span: 1 }, 
  { name: 'Salad Lettuce', row: 1, col: 3, span: 3 }, 
  { name: 'Cheese',        row: 4, col: 1, span: 2 }, 
  { name: 'Guacamole',     row: 3, col: 1, span: 2 }, 
  { name: 'Taco Lettuce',  row: 2, col: 1, span: 2 }, 
  { name: 'Vinagrette',    row: 1, col: 1, span: 2 },
]

export default function Cold() { 
  return (
    <main className="blue">
      <Window name={'Salsa'}/>

      <SideBar />

      <ItemType item={'Burrito'} />

      <Menu type={'cold'} purchased={['Mild Tomato', 'Medium Green', 'Sour Cream', 'Cheese']} items={cold}/>  
    </main>
  )
}