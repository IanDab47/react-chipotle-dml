// Components
import Window from "../Components/window/Window"
import SideBar from "../Components/sidebar/SideBar"
import ItemType from "../Components/itemtype/ItemType"
import Menu from "../Components/menu/Menu"

const cold = ['Medium Corn, Sour Cream, Mild Tomato, Hot Sauce, Medium Tomato, Salad Lettuce, Cheese, Guacamole, Taco Lettuce, Vinagrette']

export default function Cold() {
  return (
    <main className="blue">
      <Window name={'Salsa'}/>

      <SideBar />

      <ItemType />

      <Menu type={'cold'} items={cold}/>  
    </main>
  )
}