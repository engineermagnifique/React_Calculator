import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, multiply, divide, reset } from "./calculatorSlice";

function Calculator() {
  const value = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  return (
    <div>
      <h2>Result: {value}</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />

      <div>
        <button onClick={() => dispatch(add(input))}>+</button>
        <button onClick={() => dispatch(subtract(input))}>-</button>
        <button onClick={() => dispatch(multiply(input))}>*</button>
        <button onClick={() => dispatch(divide(input))}>/</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default Calculator;