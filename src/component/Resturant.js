import React, { useState } from 'react';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import Menu from './ResturantApi';


function Resturant() {
  const [Menuu, setMenu] = useState(Menu);



  const FilteredBtn = [
    ...new Set(Menu.map((val) => {
      return val.disp;


    })), "all"]

  const [FilteredItem, setFilteredItem] = useState(FilteredBtn);


  console.log(FilteredBtn);


  const Filterr = (item) => {
    if (item === "all") {
      setMenu(Menu)

    } else {
      const updatedItem = Menu.filter((val) => {

        return val.disp === item;
      })


      setMenu(updatedItem);
    }




  }



  return (
    <div>

      <Navbar Filterr={Filterr} FilteredItem={FilteredItem} />


      <MenuCard Menuu={Menuu} FilteredItem={FilteredItem} />
    </div>
  )
}

export default Resturant