import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Header from './Comps/Header/header.jsx'
import { createBrowserRouter } from 'react-router'
import Error from './Comps/Misc/Error.jsx'
import Contact from './Comps/Misc/Contact.jsx'
import { IndividualCountry } from './Comps//Individual/individualCountry.jsx'
import About from './Comps/Misc/About.jsx'


const router = createBrowserRouter([
  const [changeToggle, setChangeToggle]=useState(localStorage.getItem("theme"))
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/home",
        element: <App/>
      },
    ]
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path: "/country/:country",
    element: <IndividualCountry/>
  },
  {
    path: "/contact",
    element: <Contact/>,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Header theme={[changeToggle, setChangeToggle]}/>
    <RouterProvider router={router} context={[changeToggle, setChangeToggle]}/>
    </>
  </StrictMode>
)
