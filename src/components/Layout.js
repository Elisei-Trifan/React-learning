import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  const setActive = ({ isActive }) => `link ${isActive ? 'active-link' : ''}`
  return (
    <>
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
      </header>
      <Outlet />
      <footer> 2025 </footer>
    </>
  )
}

export default Layout
