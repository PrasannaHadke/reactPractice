import React, { useState } from "react";

function BackgroundChanger() {
  const [color, setColor] = useState("bg-green-500");

  return (
    <div className={`h-screen flex flex-col items-center justify-center ${color} transition-colors duration-500`}>
      <div className="space-x-4">
        <button
          onClick={() => setColor("bg-red-500")}
          className="px-4 py-2 rounded-lg bg-white text-black shadow"
        >
          Red
        </button>
        <button
          onClick={() => setColor("bg-blue-500")}
          className="px-4 py-2 rounded-lg bg-white text-black shadow"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("bg-yellow-400")}
          className="px-4 py-2 rounded-lg bg-white text-black shadow"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("bg-amber-800")}
          className="px-4 py-2 rounded-lg bg-white text-black shadow"
        >
          Brown
        </button>
      </div>
    </div>
  );
}

export default BackgroundChanger;
