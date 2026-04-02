import React,{useState,useMemo, useCallback} from "react";

const Challenge2=()=>{
    const [query,setQuery]=useState('');
    const items = useMemo(() =>
        Array.from({ length: 1000 }, (_, index) => ({
        id: index,
        name: `Item ${index + 1}`,
    })),
    []);
    const handleOnchange=useCallback((e)=>{
       setQuery(e.target.value);
    },[]);
    const filterResult=useMemo(()=>{
        return items.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()));
    },[items,query])
    console.log(filterResult);
    return (
        <div>
            <input type="text" value={query} onChange={(e)=>handleOnchange(e)} placeholder="Search items..."/>
           { filterResult.map((item,index)=>(
            <div key={index}>
                <p>{item.name}</p>
            </div>
           )) }
        </div>
    )
}
export default Challenge2;