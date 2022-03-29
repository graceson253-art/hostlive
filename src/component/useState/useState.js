import React,{useState} from 'react'

function UseStatee() {


let number = 10

    const [first, setfirst] = useState(0);
  return (

    
    <div>
        <p>{first}</p>

        <div onClick={()=>setfirst( first + 1)}>INCR</div>



        <div onClick={()=>  (first > 0  ? setfirst(first - 1) : setfirst(0) )}>DECR</div>
    </div>
  )
}

export default UseStatee;