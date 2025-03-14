import React from 'react'
import './App2.css'
import TodoList from './components/Todo/TodoList'
import InputField from './components/Todo/InputField'

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
      <InputField
        addTodo={addTodo}
        setTodos={setTodos}
        setText={setText}
        text={text}
      />

      <TodoList
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default App2
