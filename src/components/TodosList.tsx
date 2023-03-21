import React, { ChangeEvent, useState } from "react";
import { v4 } from "uuid";
import { BiCheck, BiPencil } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/inboxSlice";

function TodosList({ todo, handleChecked }: any) {
  // console.log(todo);
  
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [update, setUpdate] = useState('')
    const handleUpdate = (e:Event) =>{
      setShow(true)
    }
const sendUpdateToRedux = (todo) =>{
  dispatch(updateTodo({id:todo.id, task:update}))
  
}
  // const [checked, setChecked] = useState(false);
  const date = new Date();

  const currentMinute = date.getMinutes().toString();
  const currenHour = date.getHours().toString();
  const currentDay = date.getDate().toString();
  const currentMonth = date.getMonth() + 1;

const passChangeToRedux = (e) =>{
  setUpdate(e.target.value)

}

  return (
    <>
    <div className="flex flex-col justify-center shadow-md w-[400px] list-none mt-3">
      <li className="font-serif mt-1 pl-2 p-3  animate-[pulse_1s_0s]  hover:bg-slate-100">
        {todo.task}
        <BiCheck
          className="absolute text-2xl ml-[351px] mt-[-24px] text-green-700 cursor-pointer"
          onClick={() => handleChecked(todo)}
          />
        <BiPencil className="absolute text-1xl ml-[325px] mt-[-19px] text-green-700 cursor-pointer"
        onClick={handleUpdate} />
      </li>
      <div className="font-serif mt-1 pl-2  hover:bg-slate-100">
        <hr />
        {`Created: at ${currentMinute}:${currenHour} on ${currentDay}/${currentMonth.toString()}`}
      </div>
    {show && 
    <>
    <input className="bg-green-100" value={update} type='text' onChange={passChangeToRedux}/>
    <BsFillArrowRightCircleFill onClick={()=>sendUpdateToRedux(todo)} className="text-green-700 text-2xl relative right-10"  />
    </>
    }
    </div>
    </>
  );
}

export default TodosList;
