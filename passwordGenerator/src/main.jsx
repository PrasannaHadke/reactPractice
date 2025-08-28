import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout/Layout.jsx'
import Bg from './Components/Bg.jsx'
import PassGenerator from './PassGen1/PassGenerator.jsx'
import PassGen2 from './Layout/PassGen2.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* index route */}
      <Route index element={<Bg />} />  
      {/* child route */}
      <Route path='passgen' element={<PassGenerator />} />  
      <Route path='passgen1' element={<PassGen2/>} />  
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
