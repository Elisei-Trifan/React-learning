import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodos, addTodo, setText } from '../../redux/slices/todoSlice'

const InputField = () => {
  const dispatch = useDispatch()

  const setTodos = () => {
    dispatch(clearTodos())
  }

  const text = useSelector((state) => state.todos.text)

  return (
    <div>
      <h1> Todo List</h1>
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            dispatch(setText(e.target.value))
          }}
        ></input>
        <button className="" onClick={() => dispatch(addTodo())}>
          Добавить задачу
        </button>
        <button onClick={() => setTodos([])}>Удалить все задачи</button>
      </label>
    </div>
  )
}

export default InputField
