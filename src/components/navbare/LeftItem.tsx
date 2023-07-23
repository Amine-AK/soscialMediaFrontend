import React, { ReactNode, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {HiMoon, HiOutlineHome, HiOutlineMoon} from 'react-icons/hi'
import {AiOutlineAppstore, AiOutlineSearch,AiOutlineMenu} from 'react-icons/ai'
import {BsSun} from 'react-icons/bs'
import { bodyStyle } from '../../styling'


const LeftItem = () => {
  const fontSize = {
    icons : 'sm:text-xl hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer',
    inputs: '',
    text :'',
    logo:'sm:text-2xl',
    h1:'sm:text-2xl',
    h2:'',
    m_small_no:'hidden md:flex'
    
  
  }
  //const [m_small_yes, setM_small_yes]=useState('md:flex hidden')
  const [menuStyle, setMenuStyle]=useState({
    li:'flex justify-between w-full max-h-max max-md:hidden',
    ul:'flex gap-3',
    subLi:'',
    span:'hidden'})
  const [themeName,setThemeName] = useState('light')
  const [menuStat,setMenuStat] = useState('open')
  let themIconDark=themeName == 'light'?'hidden':"block"
  let themIconLight=themeName == 'light'?'block':"hidden"
 

  const changeTheme = (e:React.MouseEvent<HTMLLIElement>) =>{
    setThemeName(themeName == 'light'?"dark":'light')
    document.body.className = themeName
    themIconDark=themeName == 'light'?"block":'hidden'
    themIconLight=themeName == 'light'?"hidden":'block'
    bodyStyle()
    

  }
  const handlMenu = (e:React.MouseEvent<HTMLLIElement>) =>{
    setMenuStat(menuStat == 'open'?"close":'open')
    //document.body.className = themeName
    //console.log(themeName)
    
    switch (menuStat) {
      case 'open':
        setMenuStyle(
         { li:'flex absolute flex-col py-4 px-2 w-full min-h-max ',
          ul:'flex flex-col gap-2 absolute w-[160px] h-[200px] dark:bg-blue-950 bg-white  z-10 ',
          subLi:'group hover:border-r border-white hover:delay-500',
          span:'ml-2'}
        )
        break;
      case 'close':
        setMenuStyle({
          li:'flex justify-between w-full max-h-max max-md:hidden',
          ul:'flex gap-3',
          subLi:'',
          span:'hidden'})

         //setM_small_yes('md:flex hidden ')
         break;
      default:
        //setMenuStyle('flex justify-between w-full max-h-max')
        break;
    }
  } 
  const menuContainer = useRef<HTMLDivElement>()
  const active = () => {
   
    menuContainer.current?.classList.toggle("active");
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
          <li className={`${menuStyle.li}`}>
            <ul className={`${menuStyle.ul}`}>
              <li className={`${menuStyle.subLi}`} >
                <Link className='cursor-pointer group' to='/'>
                <label className='flex cursor-pointer'>
                  <HiOutlineHome className={`${fontSize.icons} `} />
                  <span className={`${menuStyle.span}`}>Home</span>
                  </label>
                <hr className='duration-500 group-hover:w-full w-0'/> 
                </Link>
              </li>
              <li className={`${menuStyle.subLi}`} key={themeName} onClick={changeTheme}>
              <label className='flex cursor-pointer'>
                <HiOutlineMoon className={`${fontSize.icons} ${themIconDark}`}/>
                <BsSun className={`${fontSize.icons} ${themIconLight}`}/>
                <span className={`${menuStyle.span}`}>Theme</span>
                </label>
                <hr className='duration-500 group-hover:w-full w-0'/>
              </li>
              <li className={`${menuStyle.subLi}`}> 
                <label className='flex cursor-pointer'>
                  <AiOutlineAppstore className={`${fontSize.icons}`}/>
                <span className={`${menuStyle.span}`}>Tools</span>
                </label>
                <hr className='duration-500 group-hover:w-full w-0'/>
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