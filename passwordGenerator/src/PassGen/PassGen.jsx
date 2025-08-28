import React, { useState, useCallback , useEffect ,useRef } from 'react'

function PassGen() {
    const [length, setLength] = useState(8)
    const [numAllowed, setnumAllowed] = useState(false)
    const [charAllowed, setcharAllowed] = useState(false)

    const [password, setPassword] = useState("")

    // useRef to store the previous password
    const passwordRef = useRef('null')
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numAllowed) str += '1234567890'
        if (charAllowed) str += '~!@#$%^&*()_+'

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char)
        }

        setPassword(pass)

    }, [length, numAllowed, charAllowed, setPassword])

    const copyPassWordToClipBoard = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,20)
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
        passwordGenerator()
    },[length, numAllowed, charAllowed , passwordGenerator])
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-2xl font-bold mb-6 text-orange-400">Password Generator</h1>

            {/* Password Box */}
            <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-4 bg-gray-800 flex items-center gap-2'>
                <input 
                    type="text"
                    value={password}  
                    className="outline-none w-full py-2 px-3 rounded bg-gray-700 text-orange-400 text-lg font-mono"
                    placeholder='password'
                    ref = {passwordRef}
                    readOnly
                />
                <button className='outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-4 py-2 rounded'
                onClick={copyPassWordToClipBoard}
                >
                    Copy
                </button>
            </div>

            {/* Controls */}
            <div className='flex flex-col gap-4 mt-6 text-sm bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-md'>
                {/* Length Range */}
                <div className='flex items-center gap-x-3'>
                    <input 
                        type="range"
                        min={6}
                        max={50}
                        value={length}
                        className='cursor-pointer w-full accent-orange-500'
                        onChange={(e) => setLength(e.target.value)}
                    />
                    <label className="text-orange-400 font-medium">Length : {length}</label>
                </div>

                {/* Numbers */}
                <div className="flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        defaultChecked={numAllowed}
                        id='numberInput'
                        className="w-4 h-4 accent-orange-500 cursor-pointer"
                        onChange={()=>{
                            setnumAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="numberInput" className="cursor-pointer">Include Numbers</label>
                </div>

                {/* Characters */}
                <div className="flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id='charInput'
                        className="w-4 h-4 accent-orange-500 cursor-pointer"
                        onChange={()=>{
                            setcharAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="charInput" className="cursor-pointer">Include Special Characters</label>
                </div>
            </div>
        </div>
    )
}

export default PassGen
