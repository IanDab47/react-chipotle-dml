// Components
import Window from "../Components/window/Window"
import SideBar from "../Components/sidebar/SideBar"
import ItemType from "../Components/itemtype/ItemType"
import Menu from "../Components/menu/Menu"

const hot = ['Brown Rice', 'White Rice', 'Black Beans', 'Pinto Beans', 'Steak', 'Chicken', 'Barbacoa', 'Carnitas', 'Sofritas', 'Fajitas', 'Queso']

export default function Hot() {
  return (
    <main className="blue">
      <Window name={'Tortilla'}/>

      <SideBar />

      <ItemType />

      <Menu type={'hot'} items={hot}/>  
    </main>
  )
}
