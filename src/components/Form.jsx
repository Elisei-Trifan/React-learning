import React from 'react'

const Form = () => {
  const [text, setText] = React.useState({
    text2: '',
    email: '',
  })

  function handleChange(e) {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setText({
      [e.target.text2]: '',
      [e.target.email]: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text2"
        value={text.text2 || ''}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={text.email || ''}
        onChange={handleChange}
      />
      <button type="submit">Отправить</button>
      {/* <p>{text.email}</p> */}
    </form>
  )
}

export default Form
