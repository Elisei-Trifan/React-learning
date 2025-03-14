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

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const toggleTodoCompleted = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id !== id) return item

        return {
          ...item,
          completed: !item.completed,
        }
      })
    )
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
        <button onClick={() => setTodos([])}>Удалить все задачи</button>
      </label>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTodoCompleted(item.id)}
            />
            <span> {item.text} </span>
            <span
              className="delete"
              onClick={() => {
                removeTodo(item.id)
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App2
