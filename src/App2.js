import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App2.css'
import TodoRoot from './components/Todo/TodoRoot'
import Counter from './components/Counter'
import InputRef from './components/InputRef'

const App2 = () => {
  return (
    <div className="App2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoRoot />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/inputRef" element={<InputRef />} />
          <Route path="*" element={<h1>NotFoundPage</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App2
