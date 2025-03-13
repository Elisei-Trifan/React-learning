import React from 'react'
import { ThemeContext } from '../components/ThemeProvider'

const ThemedComponent = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <p>Текущая тема: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Переключить тему
      </button>
    </div>
  )
}

export default ThemedComponent
