import React, { useState } from 'react'

function Bgchanger() {
    const [color , setColor] = useState('pink')
  return (

    <div style={{width: "100vw" , height: "100vh" ,backgroundColor: color  }}>
        <button onClick={()=>(setColor('red'))}>Red</button>
        <button  onClick={()=>(setColor('yellow'))}>Yellow</button>
        <button  onClick={()=>(setColor('green'))} >Green</button>
        <button  onClick={()=>(setColor('blue'))}>Blue</button>
        <button  onClick={()=>(setColor('brown'))}>Brown</button>
    </div>
  )
}

export default Bgchanger