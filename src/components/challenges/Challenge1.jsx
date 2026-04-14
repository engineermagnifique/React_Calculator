/*
Build a component that:

- Renders a list of 1000 items (dummy data).
- Has a text input for filtering items.
- Optimize performance using *useMemo* (for filtering) and *useCallback* (for event handlers).
aat-yhxs-nnc
*/

import React, { useCallback, useMemo,useState } from "react";

const Challenges1=()=>{
    const [search,setSearch]=useState('');
    let items=useMemo(()=>{
      return Array.from({length:1000},(_,i)=>`Item ${i+1}`);
    },[])
    
    const handleSearch=useCallback((e)=>{
      setSearch(e.target.value);
    },[]);

    const filteredResults= useMemo(()=>{
      return items.filter((item)=>item.toLowerCase().includes(search.toLowerCase()));
    },[items,search])

    console.log('Results',filteredResults);

    return(
      <div>
        <input 
         type="text" 
         value={search}
         placeholder="Search item"
         onChange={(e)=>handleSearch(e)}
         />
         {
          filteredResults.map((item,index)=>(
            <div key={index}>
              <p>{item}</p>
            </div>
          ))
         }
      </div>
    )
}
export default Challenges1;