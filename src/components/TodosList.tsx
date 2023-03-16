import React, { ChangeEvent, useState } from "react";
import { v4 } from "uuid";
import { BiCheck } from "react-icons/bi";

function TodosList({ todo, handleChecked }: any) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col shadow-md w-[400px] ml-[520px] list-none mt-3">
      <li className="font-serif mt-1 pl-2 p-3  hover:bg-slate-100">
        {todo}
        <BiCheck className="absolute ml-[351px] mt-[-24px] text-green-700 cursor-pointer"  onClick={()=>handleChecked(todo)}/>
      </li>
    </div>
  );
}

export default TodosList;
