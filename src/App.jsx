import { useState } from 'react'
import {Login,Regester,Home,Profile} from './pages'
import NavBar from './components/navbare/NavBar'
import LeftSideBar from './components/leftbar/LeftSideBar'
import RightSideBar from './components/rightbar/RightSideBar'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";


function App() {
  function Layout() {
    return (
      <>
        <NavBar/>
        <div className='  flex justify-between items-start gap-4 p-0 mt-16 lg:px-2 md:px-4 mx-auto lg:w-[90%] w-full '>
          <LeftSideBar/>
          <Outlet/>
          <RightSideBar/>
        </div>
      </> 
    );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },{
          path: "/profile/:id",
          element: <Profile/>,
        }
      ]
    },{
      path: "/regester",
      element: <Regester/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
