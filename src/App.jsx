import { useState,useContext } from 'react'
import {Login,Regester,Home,Profile} from './pages'
import NavBar from './components/navbare/NavBar'
import LeftSideBar from './components/leftbar/LeftSideBar'
import RightSideBar from './components/rightbar/RightSideBar'
import React,{ ReactNode }  from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

function App() {
  

  const currentUser = true
  const ProtectRout = ({children,url,curent}) =>{
      if (currentUser && !curent) {
        console.clear()
        console.log(' current user : ' + currentUser)
          return children
      } if (!currentUser && curent) {
        return children
      }
      return <Navigate to={url} />
    }
    
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
      element: (
        <ProtectRout url='/login' curent={false}>
          <Layout />
        </ProtectRout>),
        children: [
          { path: "/", element: (
          <>
              <Home />
          </>
            ) },
          { 
            path: "/profile/:id?", 
            element: <Profile /> 
          },
        ],
    },
    { 
      path: "/regester",
      element:
        (<ProtectRout url={'/'} curent={true}>
          <Regester />
        </ProtectRout> )
    },
    { 
      path: "/login",
      element:
        (<ProtectRout url={'/'}  curent={true}>
          <Login />
        </ProtectRout> )
     },
  ]);

  return (
    <RouterProvider router={router} />
      
  );

}

export default App
