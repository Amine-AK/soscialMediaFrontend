import React from 'react'
import AccountSeting from './AccountSeting'
import Tools from './Tools'
import Gress from './Gress'
import {dark_sideBare} from '../../styling'
const LeftSideBar = () => {
  return (
    <div className={`lg:flex  lg:visible hidden flex-col px-2  w-1/5 border-r ${dark_sideBare}`}>
        <AccountSeting 
            itemClass='flex group'
            iconClass='text-xl w-7 h-7 text-blue-950 group-hover:text-blue-700' 
            listClass=' cursor-pointer flex flex-col gap-2  text-sm' 
            titleClass='text-sm font-bold'
        />
        <Tools
            itemClass='flex group'
            iconClass='text-xl  w-7 h-7 text-blue-950 group-hover:text-blue-700' 
            listClass=' cursor-pointer flex flex-col gap-2  text-sm' 
            titleClass='text-sm font-bold'
        />
        <Gress
            itemClass='flex group'
            iconClass='text-xl  w-7 h-7 text-blue-950 group-hover:text-blue-700' 
            listClass=' cursor-pointer flex flex-col gap-2  text-sm' 
            titleClass='text-sm font-bold'
        />
    </div>
  )
}

export default LeftSideBar