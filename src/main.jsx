import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Login,Regester} from './pages'
import './index.css'
import './assent/storys.css'
//import './assent/emojiStyle.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/regester",
    element: <Regester/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);*/
{/*<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>*/}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App/>
</React.StrictMode>

  )
