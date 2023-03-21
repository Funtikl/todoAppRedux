import React, { ChangeEvent, useState } from "react";
import { v4 } from "uuid";
import { BiCheck, BiPencil } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/inboxSlice";

interface Props{
  todo:{task:any},
  handleChecked:(item:any)=>void
}

function TodosList({ todo, handleChecked }: Props) {
  // console.log(todo);

  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);
  const [update, setUpdate] = useState<string>("");


  const handleUpdate = (e: React.MouseEvent):void => {
    setShow(true);
  };
  const sendUpdateToRedux = (todo:any) => {
    dispatch(updateTodo({ id: todo.id, task: update }));
  };
  // const [checked, setChecked] = useState(false);
  const date = new Date();

  const currentMinute = date.getMinutes().toString();
  const currenHour = date.getHours().toString();
  const currentDay = date.getDate().toString();
  const currentMonth = date.getMonth() + 1;

  const passChangeToState = (e:ChangeEvent<HTMLInputElement>):void => {
    setUpdate(e.currentTarget.value );
  };

  return (
    <>
      <div className="flex flex-col justify-center shadow-md w-[400px] list-none mt-3">
        <li className="font-serif mt-1 pl-2 p-3  animate-[pulse_1s_0s]  hover:bg-slate-100">
          {todo.task}
          <BiCheck
            className="absolute text-2xl ml-[351px] mt-[-24px] text-green-700 cursor-pointer"
            onClick={() => handleChecked(todo)}
          />
          <BiPencil
            className="absolute text-1xl ml-[325px] mt-[-19px] text-green-700 cursor-pointer"
            onClick={handleUpdate}
          />
        </li>
        <div className="font-serif mt-1 pl-2  hover:bg-slate-100">
          <hr />
          {`Created: at ${currentMinute}:${currenHour} on ${currentDay}/${currentMonth.toString()}`}
        </div>
        {show && (
          <>
            <input
              className="bg-green-100"
              value={update}
              type="text"
              onChange={passChangeToState}
            />
            <BsFillArrowRightCircleFill
              onClick={() => sendUpdateToRedux(todo)}
              className="text-green-700 text-2xl relative right-10"
            />
          </>
        )}
      </div>
    </>
  );
}

export default TodosList;
