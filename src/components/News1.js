import React from 'react'
import { Link, useParams } from 'react-router-dom'

const News1 = ({ posts }) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id === parseInt(id))

  return (
    <>
      <Link to="/blog"> Назад к новостям</Link>
      <div>News {id}</div>
      {post ? <h2> {post.body} </h2> : 'Пост не найден'}
    </>
  )
}

export default News1
