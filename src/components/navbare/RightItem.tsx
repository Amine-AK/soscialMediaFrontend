import React from 'react'
import { Link } from 'react-router-dom'
import {RiAccountCircleFill} from 'react-icons/ri'
import {AiOutlineAlert, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'
import ProfileBtn from '../global/ProfileBtn'

const RightItem = () => {
  const fontSize = {
    icons : 'sm:text-xl hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer',
    inputs: '',
    text :'',
    logo:'sm:text-2xl',
    h1:'sm:text-2xl',
    h2:'',
    m_small_no:'hidden sm:flex',
    m_small_yes:'sm:flex hidden',
  }
  return (
    <div className='flex gap-2 justify-between items-center w-3/10 '>
        <ul className='flex justify-between w-1/5 gap-2 max-h-max' >
            <li className={`${fontSize.m_small_yes}`}>
              <FaUserFriends className={`${fontSize.icons}`}/>
            </li>
            <li className={`${fontSize.m_small_yes}`}>
                <AiOutlineMail className={`${fontSize.icons}`}/>
            </li>
            <li className={`${fontSize.m_small_yes}`}>
                <AiOutlineAlert className={`${fontSize.icons}`}/>
            </li>
            <li className='text-xl w-7 h-7 sm:hidden flex items-center justify-center bg-slate-200 rounded-full'>
            <AiOutlineMenu className={`${fontSize.icons}`}/>
          </li>
        </ul>
        <ProfileBtn img='http://localhost:5173/images/man.jpg'/>
    </div>
  )
}

export default RightItem