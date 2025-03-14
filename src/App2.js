import React from 'react'
import './App2.css'
import TodoList from './components/Todo/TodoList'
import InputField from './components/Todo/InputField'

const App2 = () => {
  return (
    <div className="App2">
      <InputField />
      <TodoList />
    </div>
  )
}

export default App2
