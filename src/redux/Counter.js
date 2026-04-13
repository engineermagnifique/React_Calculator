import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount } from "../components/features/counterSlice";

function Counting(){
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>

      <button style={{backgroundColor:'blue', padding:'20px',marginLeft:'10px',marginRight:'10px'}} onClick={()=>dispatch(increment())}>+</button>
      <button style={{backgroundColor:'blue', padding:'20px',marginLeft:'10px',marginRight:'10px'}} onClick={()=>dispatch(decrement())}>-</button>
      <button style={{backgroundColor:'blue', padding:'20px',marginLeft:'10px',marginRight:'10px'}} onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}
export default Counting;

