import React, { Reducer, useReducer } from 'react'






const reducer = (state, action) => {
  if(action.type === "INCR") {
    state = state + 1;
  }

  if(state > 0 &&  action.type === "DECR"){
    state  = state - 1
  }

  return state
}


 const UseReducerr = () => { 

  


  const initialDetails = 0;
  const [state, dispatch] = useReducer(reducer, initialDetails)


  return (
    <div>
        <p> { state}</p>

        <div onClick={()=> dispatch({type : "INCR"})}>
          INCR
        </div>


        <div onClick={()=> dispatch({type : "DECR"})}>
          DECR
        </div>
    </div>
  )
}

export default UseReducerr