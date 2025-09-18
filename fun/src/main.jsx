import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Counter from './Components/Counter.jsx'
import Bgchanger from './Components/Bgchanger.jsx'
import PasswordGenerator from './Components/PasswordGenerator.jsx'
import { UserContextProvider } from './ContextApi/UserContext.jsx'
import Login from './ContextApi/Login.jsx'
import Profile from './ContextApi/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={
      <UserContextProvider>

        <Layout />
      </UserContextProvider>
    }>

      <Route path="" element={<Counter />} />
      <Route path="/login" element={<Login />} />
      <Route path='/bgChanger' element={<Bgchanger />} />
      <Route path='/passgen' element={<PasswordGenerator />} />
      <Route path='/profile' element={<Profile/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
