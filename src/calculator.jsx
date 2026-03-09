// Ca.jsx
import { useState } from "react";
import CalButton from "./components/Button";

const CalCulator=()=> {
  const [value,setValue]=useState('');
  const [firstValue,setFirstValue]=useState();
  const [secondValue,setSecondValue]=useState();
  const [operation,setOperation]=useState();

  const AddValue=(val)=>{
    if(value==='SYNTAX ERROR' || value===0){
      setValue(val);
    } else {
      setValue(value+val);
    }
    
  }
  const AddOperation=(val)=>{
    setFirstValue(value);
    console.log(value);
    setValue('');
    setOperation(val);
    console.log(firstValue,operation);
  }
  const Calculate=()=>{
    const second=value;
    console.log(secondValue,second);
    console.log(operation);
    setValue('');
      switch(operation){
        case '+':
          setValue(parseFloat(firstValue)+parseFloat(second));
          break;
        case '-':
          setValue(parseFloat(firstValue)-parseFloat(second));
          break;
        case 'x':
          setValue(parseFloat(firstValue)*parseFloat(second));
          break;
        case '÷':
          setValue(parseFloat(firstValue)/parseFloat(second));
          break;
        case '%':
          setValue(parseFloat(firstValue)%parseFloat(second));
          break;
        default:
          setValue(firstValue);
      }
    console.log(firstValue,secondValue,operation);
  }
  const Clear=()=>{
    setValue(0);
    setFirstValue('');
    setSecondValue('');
    setOperation('');
  }
  const ChangeOperation=()=>{
    if(value>0){
      setValue(`${-value}`);
    } else {
      setValue(`${value}`);
    }
  }
  return (
    <div className="flex items-center  md:p-10 justify-center">
      <div className="flex h-screen md:h-auto flex-col w-4/4 p-9 md:p-10 md:w-2/4 items-center justify-center bg-gray-400">
        <div className="bg-gray-400 w-full">
          <input 
           className="py-4 px-1 text-right font-semibold text-2xl w-full bg-gray-400 text-black outline-none" 
           type="text"
           value={value} 
           onChange={(e)=>setValue(e.target.value)}
           readOnly={true}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row gap-1">
            <CalButton prop="AC" onPress={Clear}/>
            <CalButton prop="+/-" onPress={ChangeOperation}/>
            <CalButton prop="%" onPress={AddValue}/>
            <CalButton prop="÷" color="blue-900" onPress={AddOperation}/>
          </div>
          <div className="flex flex-row gap-1">
            <CalButton prop="7" onPress={AddValue}/>
            <CalButton prop="8" onPress={AddValue}/>
            <CalButton prop="9" onPress={AddValue}/>
            <CalButton prop="x" color="blue-900" onPress={AddOperation}/>
          </div>
          <div className="flex flex-row gap-1">
            <CalButton prop="4" onPress={AddValue}/>
            <CalButton prop="5" onPress={AddValue}/>
            <CalButton prop="6" onPress={AddValue}/>
            <CalButton prop="-" color="blue-900" onPress={AddOperation}/>
          </div>
          <div className="flex flex-row gap-1">
            <CalButton prop="1" onPress={AddValue}/>
            <CalButton prop="2" onPress={AddValue}/>
            <CalButton prop="3" onPress={AddValue}/>
            <CalButton prop="+" color="blue-900" onPress={AddOperation}/>
          </div>
          <div className="grid grid-cols-4 gap-1 w-full">
            <CalButton prop="0" role="zero" className="col-span-2 w-full" onPress={AddValue}/>
            <CalButton prop="." className="w-full" onPress={AddValue}/>
            <CalButton prop="=" color="blue-900" className="w-full" onPress={Calculate}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CalCulator;