import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/inboxSlice";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function InputTodo() {
  const [task, setTask] = useState("");
  const [id, setId] = useState(1)
  const dispatch = useDispatch();
  const handleInputChange = (e: any) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    dispatch(addTodo({task, id:Math.random()}));
    setTask("")
  };
  const handleKeyDown =(e)=>{
    if(e.key ==='Enter'){
      setTask(e.target.value);
      addTask()
    }
    
  }
  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        name="todo"
        placeholder="Type..."
        className="w-[500px] p-2 px-2 rounded border-r-2 focus:ring  focus:ring-green-700 focus:outline-none drop-shadow-lg"
      />
      <button type="submit" onClick={addTask}>
      <BsFillArrowRightCircleFill className="text-green-700 text-2xl relative right-10"  />
      </button>
    </div>
  );
}

export default InputTodo;
