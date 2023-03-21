import React from "react";
import { BiChevronUpSquare } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addTodo, redone } from "../features/inboxSlice";

function Completed({ completed }) {
  console.log(completed);
const dispatch = useDispatch()
const redo = () =>{
  dispatch(addTodo({task:completed}))
dispatch(redone({task:completed}))
}
  return (
    <>
    <div className="flex flex-col justify-center shadow-md w-[400px] list-none mt-3">
      <li className="font-serif mt-1 pl-2 p-3 text-slate-500  animate-[pulse_1s_0s] line-through bg-slate-300">
        {completed}
        <BiChevronUpSquare className="absolute ml-[350px] mt-[-22px] text-2xl text-green-700" onClick={redo} />
      </li>

    </div>
    </>
  );
}

export default Completed;
