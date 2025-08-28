
import { useState } from 'react'
import explorer from '../data/data'
import Folder from '../components/Folder'
function App() {
 const [ explorerData, setexplorerData]= useState(explorer)
  return (
    <>
    <Folder explorer={explorerData}/>
    </>
  )
}

export default App
