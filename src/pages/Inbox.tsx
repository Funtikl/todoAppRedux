import React, { useState } from 'react'
import InputTodo from '../components/InputTodo'
import Navbar from '../components/Navbar'



function Inbox() {
  const [task, setTask] = useState()
 
  return (
<div>
  <InputTodo />
</div>
  )
}

export default Inbox