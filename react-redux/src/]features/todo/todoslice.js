import {createSlice , nanoid} from '@reduxjs/toolkit'

const initalstate = {
    todos:[{id:1, text:'Hello'}]
}


export const todoState = createSlice({
    name : 'todo',
    initalstate,
    reducers:{
        addtodo: (state,action) => {
            const todo = {
                  id:nanoid(),
                  text: action.payload
            }
            state.todos.push(todo)
        } ,
        removetodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addtodo , removetodo} = todoSlice.action

export default todoSlice.reducers