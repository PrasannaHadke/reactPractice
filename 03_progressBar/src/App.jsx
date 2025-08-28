import React, { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar'

function App() {
  const [value, setValue] = useState(0)
  const [success, setSuccess] = useState(false)
  useEffect(()=>{
    setInterval(()=>{
      setValue((val)=>val + 1)
    },100)
  },[])
  return (
    <div className='app'>
      <h1>Progress Bar</h1>
       <ProgressBar
       onComplete = {()=>setSuccess(true)}
       value={value}/>
       <span>{success?'Completed':"Loading!"}</span>
       </div>
   
  )
}

export default App