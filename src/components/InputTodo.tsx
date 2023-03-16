import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/inboxSlice";

function InputTodo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e: any) => {
    // dispatch(e.target.value)
    setTask(e.target.value);
  };

  const addTask = () => {
    dispatch(task);
  };

  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        onChange={handleInputChange}
        name="todo"
        placeholder="Type..."
        className="w-[500px] p-2 px-2 rounded border-r-2 focus:ring  focus:ring-green-700 focus:outline-none drop-shadow-lg"
      />
      <button type="submit" onClick={addTask}>
        +
      </button>
    </div>
  );
}

export default InputTodo;
