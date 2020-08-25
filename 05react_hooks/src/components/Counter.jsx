import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("")

  useEffect(() => {
    console.log('effect')
    document.title = counter
  }, [counter])

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>Counter App</h1>
      { counter } <br />
      <button onClick={increment}>Incrementer</button>
      <button onClick={decrement}>Decrementer</button>
      <br />
      <input value={name} onChange={ (e) => setName(e.target.value) }/><br />
      {name}
    </div>
  )
}

export default Counter
