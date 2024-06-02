import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// importing method - 1 --> import without creating an index file

// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'

// importing method - 2 --> import after creating an index file

import { Home, User } from './components/index.jsx'
import { About } from './components/index.jsx'
import { Contact } from './components/index.jsx'
// import GitHub from './components/GitHub/GitHub.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub.jsx'

// method/syntax of creating router using objects

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// method/syntax of creating router using elements

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      {/* <Route path='github' element={<GitHub />} /> */}
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
