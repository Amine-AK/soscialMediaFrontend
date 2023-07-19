import React from 'react'
import LeftItem from './LeftItem'
import RightItem from './RightItem'
import { dark_naveBar } from '../../styling'

const NavBar = () => {
  return (
    <div className={`flex fixed top-0 z-[99] flex-col justify-center items-center w-full h-14 px-4 md:px-0 shadow ${dark_naveBar}`}>
    <div className='flex justify-between md:w-4/5 w-full'>
        <LeftItem/>
        <RightItem/>
    </div>
    </div>
    
  )
}

export default NavBar