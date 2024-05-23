import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [color, setColor] = useState("red")

  const arr = ["red", "yellow", "blue", "green"]

  return (

    <div className={`w-screen h-screen duration-200 relative flex justify-center `}
      style={{ backgroundColor: color }}
    >

      <div className='px-6 py-4 bg-slate-400 absolute bottom-6 w-[50%] rounded-full flex justify-center items-center'>
        <div className='flex gap-6 justify-center items-center'>
          {
            arr.map((text) => (
              <button key={text} className={`px-4 py-2 rounded-full text-white`}
                style={{ backgroundColor: text, color: text === "yellow" ? "black" : "white" }}
                onClick={() => setColor(text)} >
                {text}
              </button>
            ))
          }
        </div>
      </div>

    </div>

  )
}

export default App
