import React, { useCallback, useEffect, useState } from 'react'

function PassGen() {
  const [length, setLength] = useState(8)
  const [numAllowed ,setNumAllowed] = useState(false)
  const [charAllowed ,setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += '0123456789'
    if(charAllowed) str += '~!@#$%^&*()_+-'
    let pass = ''
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length)   // ✅ fixed
      pass += str.charAt(index)
    }
    setPassword(pass) 
  },[length,numAllowed,charAllowed])

  useEffect(()=>{
    passwordGenerator()
  },[length , numAllowed , charAllowed ,passwordGenerator])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🔐 Password Generator</h1>

      {/* Password Box */}
      <div className="flex items-center gap-2 w-full max-w-md">
        <input 
          type="text" 
          disabled 
          value={password}
          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-lg font-mono"
        />
        <button 
          onClick={passwordGenerator}
          className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          Generate
        </button>
      </div>

      {/* Length Slider */}
      <div className="mt-6 w-full max-w-md">
        <label className="block mb-2 font-semibold">Password Length: {length}</label>
        <input 
          type="range"
          min={8}
          max={50}
          value={length}
          onChange={(e)=> setLength(e.target.value)}
          className="w-full cursor-pointer accent-indigo-600"
        />
      </div>

      {/* Options */}
      <div className="mt-6 flex flex-col gap-3 w-full max-w-md">
        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox"
            onChange={()=> setCharAllowed(prev => !prev)} 
            className="accent-indigo-600"
          />
          <span>Include Special Characters</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox"
            onChange={()=> setNumAllowed(prev => !prev)} 
            className="accent-indigo-600"
          />
          <span>Include Numbers</span>
        </label>
      </div>
    </div>
  )
}

export default PassGen
