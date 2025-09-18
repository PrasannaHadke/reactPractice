import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import UpdateUser from './Components/UpdateUser.jsx'
import User from './Components/User.jsx'
import AddUser from './Components/AddUser.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='' element={<User/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/update/:id' element={<UpdateUser/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
    <Toaster/>
  </StrictMode>,
)
