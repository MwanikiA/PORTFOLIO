import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import About from './pages/about.jsx'
import Contacts from './pages/contacts.jsx'
import Projects from './pages/projects.jsx'
import Resume from './pages/resume.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contacts',
    element: <Contacts/>
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/resume',
    element: <Resume/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
