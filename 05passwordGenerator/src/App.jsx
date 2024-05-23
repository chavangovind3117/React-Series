import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789"
    if (symbols) str += "`~!@#$%^&*()-_=+[{]}\|'<.>/? "

    for (let i = 1; i <= length; i++) {

      let index = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(index);
    }

    setPassword(pass);

  }, [length, numbers, symbols, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, symbols, setPassword, passwordGenerator])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className='bg-gray-600 text-white h-screen'>
        <h1 className="text-3xl pt-3 mx-auto text-center font-bold underline">
          password Generator
        </h1>

        <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-3 my-12 text-orange-500 bg-gray-700'>
          <div className='flex shadow rounded-lg overflow-hidden my-8'>

            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 mx-2 px-3 my-3  rounded-md'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />

            <button
              onClick={copyToClipboard}
              className='outline-none rounded-full bg-blue-500 text-white m-2 flex justify-center items-center hover:bg-blue-600 '
            >
              <p className='px-2 -mt-1'>copy</p>
            </button>

          </div>
          <div className='flex text-sm gap-x-2'>
            {/* length bar */}
            <div className='flex items-center gap-x-1'>
              <input
                type='range'
                min={6}
                max={24}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length: {length}</label>
            </div>
            {/* Numbers checkbox */}
            <div>
              <input
                type='checkbox'
                defaultChecked={numbers}
                id='numberInput'
                onChange={() => setNumbers((prev) => !prev)}
              />
              <label htmlFor='numberInput'> Numbers</label>
            </div>
            {/* Symbols checkbox */}
            <div>
              <input
                type='checkbox'
                defaultChecked={symbols}
                id='symbolInput'
                onChange={() => setNumbers((prev) => !prev)}
              />
              <label htmlFor='symbolInput'> Symbols</label>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
