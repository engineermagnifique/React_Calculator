import { Trash2 , CirclePlus} from "lucide-react";
import { useState } from "react";

const ToDoApp = () => {
   const [addNewTask,setAddNewTak]=useState('');
   const [todos, setToDos] = useState([
    { id: 1, text: "IAmHere", completed: false },
    { id: 2, text: "reactjsexample.com", completed: false },
    {
      id: 3,
      text: "A To do app developed using to consolidate your knowledge about React",
      completed: true,
    },
  ]);
  const AddTask=(id,task)=>{
   let newTak={
    id:id,
    text:task,
    completed:false,
   }
   setToDos(first=>[...first,newTak]);
    setAddNewTak('');
  }

  const toggleToDo = (id) => {
  setToDos((prev) =>
    prev.map((todo) =>todo.id === id ? { ...todo, completed: !todo.completed }: todo
    )
  );
 };
 const handleDeleteTask=(id)=>{
  setToDos((prev)=>prev.filter((todo)=>todo.id!==id));
 }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
      <h1 className="text-[70px] md:text-[110px] font-bold text-gray-300 mb-12">
        todos
      </h1>
      <div className="w-full max-w-2xl mb-10">
        <div className="flex items-center bg-white rounded-full shadow-md px-6 py-4">
          <input
            type="text"
            placeholder="Add todo..."
            className="flex-1 outline-none text-lg"
            value={addNewTask}
            onChange={(e)=>setAddNewTak(e.target.value)}
          />

          <button className="text-teal-500 hover:scale-110 transition"
           onClick={()=>AddTask((todos.at(-1)?.id || 0)+1,addNewTask)}
           >
            <CirclePlus size={24} />
          </button>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm divide-y">
        { todos.map((todo)=>(
        <div key={todo.id} className="flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            <input 
            type="checkbox" 
            className="w-5 h-5" 
            checked={todo.completed}
            onChange={()=>toggleToDo(todo.id)}
            />
            <span className={`${todo.completed? 'line-through text-lg':'text-lg'} text-gray-700`}>{todo.text}</span>
          </div>

          <button onClick={()=>handleDeleteTask(todo.id)} className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-red-500 hover:bg-gray-200">
            <Trash2 size={20} />
          </button>
        </div>
        ))}
      </div>

    </div>
  );
};

export default ToDoApp;