import React, { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import {HiMoon, HiOutlineHome, HiOutlineMoon} from 'react-icons/hi'
import {AiOutlineAppstore, AiOutlineSearch,AiOutlineMenu} from 'react-icons/ai'
import {BsSun} from 'react-icons/bs'


const LeftItem = () => {
  const fontSize = {
    icons : 'sm:text-xl hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer',
    inputs: '',
    text :'',
    logo:'sm:text-2xl',
    h1:'sm:text-2xl',
    h2:'',
    m_small_no:'hidden md:flex',
    m_small_yes:'md:flex hidden',
  }
  const [themeName,setThemeName] = useState('light')
  const [menuStat,setMenuStat] = useState('open')

  const changeTheme = (e:React.MouseEvent<HTMLLIElement>) =>{
    setThemeName(themeName == 'light'?"dark":'light')
    document.body.className = themeName
    console.log(themeName)
  }
  const handlMenu = (e:React.MouseEvent<HTMLLIElement>) =>{
    setMenuStat(menuStat == 'open'?"close":'open')
    document.body.className = themeName
    console.log(themeName)
  }



  return (
    <div className='flex gap-2 justify-start items-center w-3/5'>
        <div className='w-1/5' id="logo">
            <Link to='/'>
                <h1 className={`${fontSize.logo} font-bold`}>Logo</h1>
            </Link>
        </div>
        <ul className='w-1/5 max-h-max'>
          <li onClick={handlMenu} className='text-xl w-7 h-7 md:hidden flex items-center justify-center rounded-full'>
            <AiOutlineMenu className={`${fontSize.icons}`}/>
          </li>
          <li className={`${fontSize.m_small_yes}`}>
            <ul className='flex justify-between w-full max-h-max'>
              <li>
                <HiOutlineHome className={`${fontSize.icons} `} />
              </li>
              <li key={themeName} onClick={changeTheme}>
                <HiOutlineMoon className={`${fontSize.icons}`}/>
                <BsSun className='hidden'/>
              </li>
              <li>
                <AiOutlineAppstore className={`${fontSize.icons}`}/>
              </li>
            </ul>
          </li>
        </ul>
        
        <form className='w-3/5 ' action="">
          <div className='w-full flex sm:border border-none rounded-lg dark:bg-gray-700'>
            <AiOutlineSearch className={`${fontSize.icons} w-1/5 h-7 border-r-2 dark:border-none text-xl 
            max-sm:w-7 max-sm:h-7 flex items-center 
            justify-center max-sm:bg-slate-200
            max-md:bg-slate-2er 
            max-md:rounded-full`}/>
            <input className='outline-none w-4/5 h-7 hidden sm:flex rounded-lg dark:bg-gray-700' type="text" placeholder='Search ...' />
          </div>
        </form>
    </div>
  )
}

export default LeftItem