import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai';


function Navbar() {
  return (
    <div className='flex justify-around bg-green-700 h-10 items-center text-gray-800'>
        <h1 className='font-bold flex gap-1 hover:text-white'>Todo App<AiOutlineCheck/></h1>
        <ul className='flex gap-5'>
          <li className='hover:text-white'><Link to='/'>Inbox</Link></li>
        </ul>
    </div>
  )
}

export default Navbar