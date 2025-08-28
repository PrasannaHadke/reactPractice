import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Components/Layout/Layout.jsx'
import BgChanger from './Components/BgChanger.jsx'
import Counter from './Components/Counter.jsx'
import PassGen from './Components/PassGen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element ={<BgChanger/>}/>
      <Route path='counter' element ={<Counter/>}/>
      <Route path='passgen' element={<PassGen/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router ={router}></RouterProvider>
  </StrictMode>
)
