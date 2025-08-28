import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes
} from 'react-router-dom';

import App from './App.jsx';
import Layout from './Layout.jsx';
import Contacts from './Contacts.jsx';
import SignIn from './SignIn.jsx';
import Login from './Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/login' element={<Login/>}/>
    </Route >
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
