import React from 'react'
import { Link } from 'react-router-dom'

import InputField from './InputField'
import TodoList from './TodoList'

const TodoRoot = () => {
  return (
    <div>
      <InputField />
      <TodoList />
    </div>
  )
}

export default TodoRoot
