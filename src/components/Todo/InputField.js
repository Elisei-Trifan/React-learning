import React from 'react'

const InputField = ({ text, setText, setTodos, addTodo }) => {
  return (
    <label>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      ></input>
      <button className="" onClick={addTodo}>
        Добавить задачу
      </button>
      <button onClick={() => setTodos([])}>Удалить все задачи</button>
    </label>
  )
}

export default InputField
