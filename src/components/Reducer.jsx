import React, { useState,useReducer } from 'react';

const reducer=(state,action)=>{
 switch(action.type){
    case 'increment':
        return state +1;
    case 'decrement':
        if(state>0)
          return state-1;
        return 0;
    default:
        return state;
 }
}
function Counter() {
  const [count, setCount] = useReducer(reducer,0);
  
  const increment = () =>{
    setCount({type:'increment'});
  }
  const decrement = () => {
    setCount({type:'decrement'});
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
