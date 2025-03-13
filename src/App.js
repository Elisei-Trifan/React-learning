import React from 'react'
import './App.css'
import Button from './components/Button'
import Form from './components/Form'
import ThemedComponent from './components/ThemedComponent'
import ThemeProvider from './components/ThemeProvider'

function App() {
  const [count, setCount] = React.useState(0)
  const [text, setText] = React.useState('Привет')
  const [visible, setVisible] = React.useState(true)

  function handleClick(e) {
    e.preventDefault()
    setCount(count + 1)
    setText(`Кнопка нажата ${count + 1}  раз`)
  }

  function showText() {
    setVisible(!visible)
  }

  const arr = [1, 2, 3, 4, 5]

  return (
    <div className="App">
      {/* <Button count={count} handleClick={handleClick} />
      <Button count={count} handleClick={handleClick} />
      <p>{text} </p>
      <button onClick={showText}> {visible ? 'Скрыть' : 'Показать'}</button>
      {visible && <p>Скрываемый и показываемый текст</p>}
      {arr.map((item) => (
        <li className="list" key={item}>
          {item}
        </li>
      ))}
      <Form /> */}
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </div>
  )
}

export default App
