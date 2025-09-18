import React, { useCallback, useEffect, useState } from 'react'

function PasswordGenerator() {
    const [length ,setLength] = useState(8)
    const [charAllowed , setCharAllowed] = useState(false)
    const [numAllowed , setNumAllowed] = useState(false)
    const [password , setPassword] = useState("")

    const passwordGenerator = useCallback(()=>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(charAllowed) str += "~!@#$%^&*()_+"
        if(numAllowed) str += "0123456789"
        let pass = ""
        for (let i = 0; i < length; i++) {
           const index = Math.floor(Math.random() * str.length)
           pass += str.charAt(index) 
        }
        
        setPassword(pass)
    },[length , charAllowed , numAllowed , setPassword])
    console.log(password);
    useEffect(()=>{
        passwordGenerator()
    },[length , charAllowed , numAllowed ])
  return (
    <div>
    <h1>PasswordGenerator</h1>
    <div>
        <input type="text"
        value={password}
        disabled
        />
        <input type="range" 
        value={length}
        min={8}
        max={50}
        onChange={(e)=> setLength(Number(e.target.value))}/>
        <label >{length}</label>
        <br />
        <label >Number:</label>
        <input type="checkbox"
        onChange={()=> setNumAllowed( prev => !prev)} 
         />
        <label >Character:</label>
        <input type="checkbox"
        onChange={()=> setCharAllowed( prev => !prev)} 
         />
         
         <button onClick={passwordGenerator}>Genreate Password</button>
    </div>
    </div>
  )
}

export default PasswordGenerator