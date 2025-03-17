import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  const setActive = (obj) => {
    const pendingClass = obj.isPending ? 'pend' : ''
    const activeClass = obj.isActive ? 'active-link' : 'link'
    return `${pendingClass} ${activeClass}`
  }
  return (
    <div className="container">
      <header className="header">
        <NavLink className={setActive} to="/">
          Главная
        </NavLink>
        <NavLink className={setActive} to="/counter">
          Каунтер
        </NavLink>
        <NavLink className={setActive} to="/inputRef">
          Фокус
        </NavLink>
        <NavLink className={setActive} to="/blog">
          Блог
        </NavLink>
      </header>
      <Outlet />
      <footer className="footer">
        {' '}
        Все права защищены. Создано с помощью рук. 2025 год выпуска
      </footer>
    </div>
  )
}

export default Layout
