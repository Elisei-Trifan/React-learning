import React from 'react'
import ReactDOM from 'react-dom'

const ModalPortal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div>
      <p>Это модальное окно</p>
      <button onClick={onClose}>Закрыть модальное окно</button>
    </div>,
    document.getElementById('root-portal')
  )
}

export default ModalPortal
