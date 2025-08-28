import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from '../components/layout/Layout.jsx'
import Counter from '../components/Counter.jsx'
import BackgroundColor from '../components/BackgroundColor.jsx'
import FetchApiProps from '../components/FetchApiProps.jsx'
import { RouterProvider,createBrowserRouter, Route ,createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path= 'counter' element={<Counter />} />
      <Route path='background-color' element={<BackgroundColor />} />
      <Route path='fetch-api-props' element={<FetchApiProps />} />
      <Route path='*' element={<h1>404 Not Found</h1>}
      />
        
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
