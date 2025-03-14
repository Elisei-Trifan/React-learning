import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, removeTodo, toggleTodoCompleted }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggleTodoCompleted={toggleTodoCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
