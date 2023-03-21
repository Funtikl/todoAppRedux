import Navbar from "./components/Navbar";
import Router from "./pages/Router";
import TodosList from "./components/TodosList";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./features/inboxSlice";
import { v4 } from "uuid";
import Completed from "./components/Completed";
import { BiInfoCircle } from "react-icons/bi";

export default function App() {
  const todos = useSelector((state: any) => state.todo.todos);
  const done = useSelector((state: any) => state.todo.done);
  const dispatch = useDispatch();
console.log(todos);


  const handleChecked = (item: any) => {
    dispatch(deleteTodo(item));
  };

  return (
    <>
      <Navbar />
      <Router />
    { todos[0]?.id===0?<h3 className="flex justify-center mt-10 ">Please add task<BiInfoCircle className="absolute ml-36 text-xl text-green-700"/></h3>: <div className="flex flex-col items-center justify-center mb-10">
        {todos.map((todo) => {
          // console.log(item.todo)
          return (
            <TodosList todo={todo} key={v4()} handleChecked={handleChecked} />
          );
        })}
      </div>}
<hr />
      <div className="flex flex-col mt-5 items-center justify-center">
        {done.map((task) => {
          return <Completed completed={task} key={v4()} />;
        })}
      </div>
    </>
  );
}
