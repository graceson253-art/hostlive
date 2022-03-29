import React from 'react';
import '../component/Resturant.css';

function MenuCard({ Menuu }) {

  return (

    <>

      {Menuu.map((val) => {
         const {id , image , disp, cost }  = val;
        return (
          <>
            <div key={id} className='MainCont'>
              <div className='img'>
           <img src={image} alt="" srcset="" />
              </div>
              <p>{disp}</p>
              <p>{cost}</p>

            </div>
          </>
        )
      })}



    </>
  )
}

export default MenuCard