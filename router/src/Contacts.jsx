import React, { useEffect, useState } from 'react'

function Contacts() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <h1
        style={{
          backgroundColor: 'green',
          width: `${count * 5}px`, // multiplied to make it more visible
          transition: 'width 0.5s ease-out'
        }}
      >
        {count}
      </h1>
    </div>
  )
}

export default Contacts
