import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  let decrement = () => {
    setCounter(counter - 1);
  };

  let increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Counter</h1>
      <div className="flex items-center gap-6">
        <button
          onClick={decrement}
          disabled={counter === 0}
          className={`px-4 py-2 text-xl rounded ${
            counter === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
        >
          −
        </button>

        <p className="text-2xl font-semibold">{counter}</p>

        <button
          onClick={increment}
          disabled={counter === 20}
          className={`px-4 py-2 text-xl rounded ${
            counter === 20
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
