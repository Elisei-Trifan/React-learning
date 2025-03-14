import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './index.css'
// import App from './App'
import App2 from './App2'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
)
