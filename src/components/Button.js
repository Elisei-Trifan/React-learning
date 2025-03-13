import React from 'react'

const Button = ({ count, handleClick }) => {
  return (
    <button className="btn" onClick={handleClick}>
      Нажата {count} раз
    </button>
  )
}

export default Button
