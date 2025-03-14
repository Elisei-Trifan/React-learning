import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  text: '',
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },
    removeTodo() {},
    toggleTodoCompleted() {},
  },
})

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions
export default todoSlice.reducer
