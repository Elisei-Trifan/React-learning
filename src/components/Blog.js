import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Новости</h1>
      {posts.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <li>{post.title} </li>
        </Link>
      ))}
    </div>
  )
}

export default Blog
