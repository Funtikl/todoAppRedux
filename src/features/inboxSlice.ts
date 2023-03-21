import { createSlice } from "@reduxjs/toolkit";

const initialState =  {todos:[
  {
    id: 0,
    task: "",
  }],
  done:[]
}
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if(state.todos[0]?.id===0){
        state.todos.shift()
      }
      if(action.payload.task.length >= 2){
        // console.log(action);
       state.todos.push(action.payload)
      }
      else{
         alert('Please add task')
      }
      
    },
    deleteTodo: (state, action) => {
      
      state.todos = state.todos.filter((task) => task.id !== action.payload.id);
      state.done.push(action.payload.task)
    },
    updateTodo: (state, action) =>{
    state.todos.map((todo)=>{
      if(todo.id == action.payload.id){
        todo.task = action.payload.task 
      }
    })
    },
    redone:(state, action)=>{
      state.done = state.done.filter((todo) => todo !== action.payload.task);
    }
  },
});

export const { addTodo, deleteTodo, updateTodo, redone } = todoSlice.actions;
export default todoSlice.reducer;
