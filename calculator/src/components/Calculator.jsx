import React, { useState } from "react";

function Calculator() {
  const [val, setVal] = useState(0);
  const [display, setDisplay] = useState("");

  const handleClick = (digit) => {
    setVal(digit);
    setDisplay((prev) => prev + digit);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        
        {/* Display */}
        <div className="bg-gray-200 text-right text-2xl p-4 rounded-lg mb-4">
          {display || val}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {[7, 8, 9, "/",
            4, 5, 6, "*",
            1, 2, 3, "-",
            0, "C", "=", "+"
          ].map((num) => (
            <button
              key={num}
              onClick={() => {
                if (num === "C") {
                  setVal(0);
                  setDisplay("");
                } else if (num === "=") {
                  try {
                    // ⚠️ eval is unsafe, replace with mathjs later
                    setDisplay(eval(display).toString());
                  } catch {
                    setDisplay("Error");
                  }
                } else {
                  handleClick(num);
                }
              }}
              className={`p-4 text-xl rounded-lg shadow 
                ${typeof num === "number" ? "bg-gray-100 hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-600"}
              `}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
