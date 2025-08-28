import React, { useState } from 'react'

function BgChanger() {
  const [color, setColor] = useState('olive')

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold text-white mb-6">Background Changer</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setColor('red')}
          className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Red
        </button>
        <button
          onClick={() => setColor('blue')}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Blue
        </button>
        <button
          onClick={() => setColor('green')}
          className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Green
        </button>
        <button
          onClick={() => setColor('violet')}
          className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          Violet
        </button>
      </div>
    </div>
  )
}

export default BgChanger
