import React from 'react'

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((a) => a + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <p> Прошло {seconds} секунд </p>
    </div>
  )
}

export default Timer
