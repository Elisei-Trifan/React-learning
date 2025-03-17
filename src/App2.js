import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App2.css'
import TodoRoot from './components/Todo/TodoRoot'
import Counter from './components/Counter'
import InputRef from './components/InputRef'
import Layout from './components/Layout'
import Blog from './components/Blog'
import News1 from './components/News1'

const App2 = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])
  return (
    <div className="App2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TodoRoot />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/inputRef" element={<InputRef />} />
            <Route path="/blog" element={<Blog posts={posts} />} />
            <Route path="/blog/:id" element={<News1 posts={posts} />} />
            <Route path="*" element={<h1>NotFoundPage</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App2
