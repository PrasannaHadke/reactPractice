import React, { useState } from 'react';

function BackgroundColor() {
  const [color, setColor] = useState('black');

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold text-white mb-6">Background Color</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setColor('red')}
          className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white"
        >
          Red
        </button>
        <button
          onClick={() => setColor('blue')}
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          Blue
        </button>
        <button
          onClick={() => setColor('green')}
          className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default BackgroundColor;
