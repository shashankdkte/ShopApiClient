import React, {useState,useEffect} from 'react';

import { Header, Footer } from "./Components/Layout";
import { menuItemModel } from './Intefaces';

import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);


  useEffect(() => {
    fetch("https://redmangoapi.azurewebsites.net/api/MenuItem")
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setMenuItems(data.results);
      })
  },[])
  return (
    <div className="App">
      <Header />
      MainBody
      <Footer />
    </div>
  );
}

export default App;
