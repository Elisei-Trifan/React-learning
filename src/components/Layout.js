import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className="header">
        <Link to="/"> Главная </Link>
        <Link to="/counter"> Каунтер </Link>
        <Link to="/inputRef"> Введите значение </Link>
      </header>
      <Outlet />
      <footer> 2025 </footer>
    </>
  )
}

export default Layout
