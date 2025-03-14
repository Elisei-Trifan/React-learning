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
        text: state.text,
        completed: false,
      })
      state.text = ''
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id)
    },
    toggleTodoCompleted(state, action) {
      state.todos = state.todos.map((item) => {
        if (item.id !== action.payload.id) return item
        return {
          ...item,
          completed: !item.completed,
        }
      })
    },
    clearTodos(state, action) {
      state.todos = []
    },
    setText(state, action) {
      state.text = action.payload
    },
  },
})

export const { addTodo, removeTodo, toggleTodoCompleted, clearTodos, setText } =
  todoSlice.actions
export default todoSlice.reducer
