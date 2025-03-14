import React from 'react'
import './App2.css'

const App2 = () => {
  const [todos, setTodos] = React.useState([])
  const [text, setText] = React.useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ])
    }
    setText('')
  }

  return (
    <div className="App2">
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
      </label>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input type="checkbox" />
            <span> {item.text} </span>
            <span> &times; </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App2
