import React from 'react'
import { Link } from 'react-router-dom'

import InputField from './InputField'
import TodoList from './TodoList'

const TodoRoot = () => {
  return (
    <div>
      <Link to={'/counter'}> Каунтер </Link>
      <Link to={'/inputRef'}> Введите значение </Link>
      <InputField />
      <TodoList />
    </div>
  )
}

export default TodoRoot
