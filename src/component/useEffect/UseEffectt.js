import React,{useState,useEffect} from 'react';


function UseEffectt() {

    const [first, setfirst] = useState(0);


    useEffect(() => {
     document.title = `Chats(${first})`
    
     
    });
    


  return (
    <div>


<p>{first}</p>

<div onClick={()=>setfirst( first + 1)}>INCR</div>



<div onClick={()=>  (first > 0  ? setfirst(first - 1) : setfirst(0) )}>DECR</div>
    </div>


    
  )
}

export default UseEffectt