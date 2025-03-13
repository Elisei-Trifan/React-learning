import React from 'react'

const InputRef = () => {
  const inputRef = React.useRef()

  function handleButtClick() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtClick}> Установить фокус на инпут</button>
    </div>
  )
}

export default InputRef
