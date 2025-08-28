import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiProvider from './contextApi/ApiProvider'
import Post from './component/Post'
import AnotherPost from './component/AnotherPost'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ApiProvider>
    <Post/>
    {/* <AnotherPost/> */}
   </ApiProvider>
  )
}

export default App
