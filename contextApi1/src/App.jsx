import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiProvider from './ContextApi/ApiProvider'
import Data from './Components/Data'

function App() {

  return (
   <ApiProvider>
    <Data/>
   </ApiProvider>
  )
}

export default App
