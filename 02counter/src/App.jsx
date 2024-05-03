import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  const increment = () => {
    // if (counter < 20)
    //   setCounter(counter + 1)

    counter < 20 && setCounter(counter = counter + 1)
  }
  const Decrement = () => {
    if (counter > 0)
      setCounter(counter - 1)
  }


  return (
    <>
      <h1>Hello govind</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={increment}>
        Incremetn
      </button>

      <button onClick={Decrement}>
        Decrement
      </button>
    </>
  )
}

export default App

// UI updation ka kam react karata he ---> So we have to use Hooks --> useState hook , useEffect hook , etc..
