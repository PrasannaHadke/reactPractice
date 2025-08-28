import React, { useState } from "react";
import Property from "./Property";

function Counter() {
  const [count, setCount] = useState(0);

  let obj = {
    name: 'prasanna',
    age: 26,
    college : 'DAIMSR'
  }

  const increment = () => count < 20 && setCount((prev) => prev + 1);
  const decrement = () => count > 0 && setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-72 text-center">
        {/* Display */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{count}</h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 disabled:opacity-50"
            disabled={count === 0}
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 disabled:opacity-50"
            disabled={count === 20}
          >
            Increment
          </button>
        </div>

        {/* Reset */}
        <button
          onClick={reset}
          className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500"
        >
          Reset
        </button>
      </div>
      <Property obj = {obj}/>
    </div>
  );
}

export default Counter;
