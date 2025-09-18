import React, { useState } from 'react'

function Counter() {
    const [count , setCount] = useState(0)
    const increment = function(){
        if (count < 20 ) {
            setCount( (prev) => prev + 1)
        }
    }

    const decrement = function(){
        if (count > 0) {
            setCount( (prev)=> prev - 1)
        }
    }
  return (
    <div>
        <button onClick={decrement} disabled = {count === 0}>-</button>
        <p>{count}</p>
        <button onClick={increment} disabled = {count === 20}>+</button>

    </div>
  )
}

export default Counter