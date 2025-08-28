import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Counter from './components/Counter.jsx'
import BackgroundChanger from './components/BackgroundChanger.jsx'
import Calculator from './components/Calculator.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element = {<Calculator/>}/>
      <Route path='/counter' element = {<Counter/>}/>
      <Route path='/backgroundChanger' element = {<BackgroundChanger/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
