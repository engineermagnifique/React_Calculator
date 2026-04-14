import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../components/features/todoSlice";
import { useState } from "react";

const ToDoApps=()=>{
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

   return (
    <div>
        <h2>Todo App</h2>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}>
             Add
        </button>

    <ul>
       {todos.map((todo, index) => (
         <li key={index}>
          {todo}
          <button onClick={() => dispatch(removeTodo(index))}>
           X
       </button>
    </li>
   ))}
   </ul>
</div>
   )
}
export default ToDoApps