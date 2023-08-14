import React from 'react'
import { menuItemModel } from '../../../Intefaces'
interface Props {
  menuItem: menuItemModel;
}
const MenuItemCard = (props:Props) => {
  return (
    <div>{props.menuItem.name}</div>
  )
}

export default MenuItemCard