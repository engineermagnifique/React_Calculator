import React, { useState } from 'react';

function ToggleButtons() {
// these are initialColors: ['gray','gray','gray','gray','gray']
 const initialColors = Array(5).fill('gray');  
 const [buttonColors, setButtonColors] = useState(initialColors);

 const handleClick=(idx)=>{
   setButtonColors(buttonColor=>
    buttonColor.map((color,i)=> i===idx?'blue':color
   ))
 }
 
 return (
   <div>
     {initialColors.map((color, index) => (
       <button
         key={index}
         style={{ backgroundColor: buttonColors[index], padding: '10px', margin: '5px', border: 'none' }}
         onClick={() => handleClick(index)}
       >
         Button {index + 1}
       </button>
     ))}
   </div>
	);
}

export default ToggleButtons;

