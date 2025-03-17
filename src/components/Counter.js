import React, { useRef, useState } from 'react'

const Counter = () => {
  const renderCount = useRef(0) // ref для хранения количества ререндеров
  const [count, setCount] = useState(0)

  renderCount.current += 1 // обновляем значение, но не ререндерим

  return (
    <div>
      <p>Кнопка нажата: {count} раз</p>
      <p>Компонент ререндерился: {renderCount.current} раз</p>
      <button
        onClick={() => {
          renderCount.current += 1
          console.log(renderCount.current)
          setCount(count + 1)
        }}
      >
        Увеличить
      </button>
    </div>
  )
}

export default Counter
