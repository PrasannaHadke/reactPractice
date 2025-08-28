import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'

function PassGenerator() {
    const [password, setPassword] = useState("")
    const [number , numAllowed] = useState(false)
    const [char, charAllowed] = useState(false)
    const [length , setLength] = useState(8)
    const passwordGenerator = useCallback(()=>{
        let pass = ''
        let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (char) letter += "~!@#$%^&*()_"
        if (number) letter += '1234567890'

        for (let i = 0; i < length; i++) {
           let index = Math.floor(Math.random() * letter.length)
            pass += letter.charAt(index)

        }
        setPassword(pass)

    },[length,char, number, setPassword])

    useEffect(()=>{
        passwordGenerator()
    },[length,charAllowed,numAllowed,passwordGenerator])
  return (
    <div>
        <input type="text"
        value={password} 
        readOnly/>
        <br />
       <input type="range" 
       min={8}
       max={50}
       value={length}
       onChange={(e)=> setLength(e.target.value)} />
       <p>{length}</p>

        <input type="checkbox"
        defaultChecked = {number}
        onChange={ ()=>{
            numAllowed( (prev) => !prev)
        }}  />
        <label>Number</label>
        <input type="checkbox"
        defaultChecked = {char}
        onChange={ ()=>{
            charAllowed( (prev) => !prev)
        }}  />
        <label>Charcter Allowed</label>
    </div>
  )
}

export default PassGenerator