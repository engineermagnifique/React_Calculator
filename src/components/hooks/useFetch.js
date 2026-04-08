import React, { useEffect, useState } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null)
    
     const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error); 
        setLoading(false);
      }
    };
    useEffect(()=>{
        fetchData();
    },[url]);
    return [data,loading,error];
}

export default useFetch