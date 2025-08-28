import React, { useState } from 'react'

function Bg() {
  const [color, setColor] = useState('bg-olive-600') // default background

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center ${color} transition-colors duration-500`}>
      <div className="space-x-4">
        <button 
          onClick={() => setColor('bg-red-500')} 
          className="px-4 py-2 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Red
        </button>

        <button 
          onClick={() => setColor('bg-yellow-400')} 
          className="px-4 py-2 bg-white text-yellow-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Yellow
        </button>

        <button 
          onClick={() => setColor('bg-green-500')} 
          className="px-4 py-2 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Green
        </button>

        <button 
          onClick={() => setColor('bg-blue-500')} 
          className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Blue
        </button>
      </div>
    </div>
  )
}

export default Bg
