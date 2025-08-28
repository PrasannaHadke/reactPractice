import React, { useCallback, useEffect, useState } from 'react'

function PassGen2() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password , setPassword] = useState('')

    const passwordGenerator = useCallback(()=>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(charAllowed) str += '~!@#$%^&*()_'
        if(numberAllowed) str += '1234567890'
        let pass = ''
        for (let i = 0; i < length; i++) {
           let index = Math.floor(Math.random() * str.length)
           pass += str.charAt(index)
        }
        setPassword(pass)
            
    },[length , numberAllowed , charAllowed , setPassword])

    useEffect(()=>{
        passwordGenerator()
    },[length , numberAllowed , charAllowed , passwordGenerator])
    console.log(password);

    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold text-orange-400 mb-6">Password Generator</h1>
        
        <input 
          type="text"
          readOnly 
          value={password}
          className="w-full max-w-md px-3 py-2 mb-4 rounded bg-gray-700 text-orange-400 font-mono text-lg outline-none"
        />

        <div className="w-full max-w-md space-y-4 bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-3">
            <input 
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e)=> setLength(Number(e.target.value))}
              className="w-full accent-orange-500 cursor-pointer"
            />
            <label className="text-orange-400 font-semibold">{length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox"
              onChange={()=> setCharAllowed( (prev) => !prev)}
              className="w-4 h-4 accent-orange-500 cursor-pointer"
            />
            <label>Include Characters</label>
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox"
              onChange={()=> setNumberAllowed( (prev) => !prev)}
              className="w-4 h-4 accent-orange-500 cursor-pointer"
            />
            <label>Include Numbers</label>
          </div>
        </div>
    </div>
  )
}

export default PassGen2
