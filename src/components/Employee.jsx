import React, { useState, useEffect } from 'react';
import useFetch from '../components/hooks/useFetch';

function Employees(){
  const [data,loading,error]=useFetch('https://dummy.restapiexample.com/api/v1/employees');
  console.log(data);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>; 
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele) => (
        <p>{ele.employee_name}</p>
      ))}
    </div>
  );
}

export default Employees;
