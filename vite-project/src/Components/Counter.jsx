import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(prev => prev + 1)
  }
  const Decrement = () => {
    if (count > 0) {
        
        setCount(prev => prev - 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Counter App</h1>

      <div className="flex items-center gap-6">
        <button
          onClick={Decrement}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow text-white font-semibold transition"
        >
          - Decrement
        </button>

        <span className="text-2xl font-bold text-orange-400">{count}</span>

        <button
          onClick={Increment}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-lg shadow text-white font-semibold transition"
        >
          + Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
