import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [TransNames,setTransNames]=useState([]);
 useEffect(()=>{
    if(names.length===0) return;
    let timer=setTimeout(()=>{
       setNames(names=>{
         const updated=[...names];
         const removed=updated.shift();
         setTransNames(name=>[...name,removed]);
         return updated;
       })
    },2000)
   return ()=>clearTimeout(timer);
 },[names])
  return (
    <div>
      <h3>Original Names</h3>
      
      <ul  style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul  style={{backgroundColor:"green"}}>
        {TransNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;
