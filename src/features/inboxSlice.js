import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   todos:['Todo 1', 'Todo 2']
  }
  
  export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
           state.todos.push(action.payload)
        }
    }
  })

  export const { addTodo } = todoSlice.actions;
  export default todoSlice.reducer;