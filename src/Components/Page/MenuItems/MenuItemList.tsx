import {useState,useEffect} from 'react'
import MenuItemCard from './MenuItemCard';
import { useGetMenuItemsQuery } from '../../../Apis/menuItemApi';
import { useDispatch } from "react-redux";
import { setMenuItem } from '../../../Storage/Redux/menuItemSlice';
import { menuItemModel } from '../../../Intefaces';

const MenuItemList = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMenuItemsQuery(null);
 
  useEffect(() => {
    if (!isLoading)
    {
      dispatch(setMenuItem(data.result))
    }
},[isLoading])

  if (isLoading)
  {
    return <div>Loading...</div>
    }
  return (
    <div className='row'>
      {data.result?.length > 0 && data.result.map((menuItem:menuItemModel, index: number) => (
        
        <MenuItemCard  menuItem={menuItem} key={index}/>
      ))}
    </div>
  )
}

export default MenuItemList