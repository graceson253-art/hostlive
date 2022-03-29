import React from 'react'

function Navbar({Filterr ,FilteredItem}) {
  return (
    <>
           {FilteredItem.map((val)=>{
               return(
            
               <button onClick={()=>Filterr(val)}>{val}</button>
               
               
          
               )
           })}
        
        </>
  )
}

export default Navbar