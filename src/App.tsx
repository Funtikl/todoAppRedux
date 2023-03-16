import Navbar from "./components/Navbar"
import Router from "./pages/Router"
import TodosList from "./components/TodosList"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from "./features/inboxSlice";


export default function App() {
// const [todos, setTodos] = useState(todoList)
const todos = useSelector((state:string) => state.todo.todos);
const dispatch = useDispatch();


  const handleChecked = (deleteTodo:any) =>{
    return 
  }

  return (
<>
<Navbar/>
    <Router />
    <div className="mt-10">

    {todos.map((todo:string)=>{
      return <TodosList todo={todo}  key={todo}  handleChecked={handleChecked} />
    })}
    </div>
    
</>
  )
}