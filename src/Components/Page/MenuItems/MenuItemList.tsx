import {useState,useEffect} from 'react'
import MenuItemCard from './MenuItemCard';
const MenuItemList = () => {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("https://redmangoapi.azurewebsites.net/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      })
  },[])
  return (
    <div className='row'>
      {menuItems.length > 0 && menuItems.map((menuItem, index) => (
        
        <MenuItemCard  menuItem={menuItem} key={index}/>
      ))}
    </div>
  )
}

export default MenuItemList